#!/usr/bin/env python

import re
import sys

filename = './mongo.log'
reDbVersion = re.compile(r'db version (?P<version>v\d+\.\d+\.\d+)')
reDriverVersion = re.compile(r'received client metadata from (?:\d+\.){3}\d+:\d+ conn\d+: { driver: { name: "(?P<driver>[^"]+)", version: "(?P<version>[^"]+)" }')

logFile = open(filename, 'r')
lines = logFile.readlines()

versionCombos = set()
lastDbVersion = "UNKNOWN"
for line in lines:
    dbVersionMatch = reDbVersion.search(line)
    if dbVersionMatch:
        lastDbVersion = dbVersionMatch.group("version")

    driverVersionMatch = reDriverVersion.search(line)
    if driverVersionMatch:
        driver = driverVersionMatch.group("driver")
        driverVersion = driverVersionMatch.group("version")
        versionCombos.add(( driver, driverVersion, lastDbVersion ))

for combo in sorted(versionCombos):
    print("Detected %s %s running against MongoDB %s" % combo)

