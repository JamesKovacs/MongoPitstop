#!/usr/bin/env python

import re
import sys
from pymongo import MongoClient
import pprint

if len(sys.argv) != 2:
    print("Usage: %s <MONGODB_LOG>" % sys.argv[0])
    exit(-1)

filename = sys.argv[1]
reDbVersion = re.compile(r'db version (?P<version>v\d+\.\d+\.\d+)')
reDriverVersion = re.compile(r'received client metadata from (?:\d+\.){3}\d+:\d+ conn\d+: { driver: { name: "(?P<driver>[^"]+)", version: "(?P<version>[^"]+)" }')
reMajorMinor = re.compile(r'^v?(?P<majorMinor>\d+\.\d+)')

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

client = MongoClient("mongodb://localhost:27017")
db = client.DriverVersionCompatibility
#{'_id': ObjectId('5e820f4557e264e6f81d9acc'),
# 'compatibleDbVersions': ['2.6', '3.0', '3.2', '3.4', '3.6', '4.0', '4.2'],
# 'driver': 'PyMongo',
# 'driverVersions': ['3.9']}

for versionCombo in versionCombos:
    driverMajorMinorVersion = reMajorMinor.search(versionCombo[1]).group("majorMinor")
    dbMajorMinorVersion = reMajorMinor.search(versionCombo[2]).group("majorMinor")
    compatibility = db.compatibility.find_one({"driver": versionCombo[0], "driverVersions": driverMajorMinorVersion})
    if compatibility is not None and dbMajorMinorVersion not in compatibility["compatibleDbVersions"]:
        pprint.pprint("WARNING: %s %s is not compatible with MongoDB %s" % versionCombo)

