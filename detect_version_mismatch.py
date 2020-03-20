#!/usr/bin/env python

import re
import sys

filename = './mongo.log'
reDbVersion = re.compile(r'db version (?P<version>v\d+\.\d+\.\d+)')
reDriverVersion = re.compile(r'received client metadata from (?:\d+\.){3}\d+:\d+ conn\d+: { driver: { name: "(?P<driver>[^"]+)", version: "(?P<version>[^"]+)" }')

logFile = open(filename, 'r')
lines = logFile.readlines()

lastDbVersion = "UNKNOWN"
for line in lines:
    dbVersionMatch = reDbVersion.search(line)
    if dbVersionMatch:
        lastDbVersion = dbVersionMatch.group("version")
        print("Database version detected: %s" % lastDbVersion)
    driverVersionMatch = reDriverVersion.search(line)
    if driverVersionMatch:
        print("Driver detected: %s %s" % (driverVersionMatch.group("driver"), driverVersionMatch.group("version")))

