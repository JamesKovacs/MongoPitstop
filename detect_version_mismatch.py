#!/usr/bin/env python

import re
import sys
from pymongo import MongoClient

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

if len(versionCombos) > 0:
    print("WARNING: Potential driver compatibility problems detected.")
    print("         See [Driver Compatibility](https://docs.mongodb.com/ecosystem/drivers/driver-compatibility-reference/) for more information.")

for versionCombo in versionCombos:
    driverMajorMinorVersion = reMajorMinor.match(versionCombo[1]).group("majorMinor")
    dbMajorMinorVersion = reMajorMinor.match(versionCombo[2]).group("majorMinor")
    compatibility = db.compatibility.find_one({"driver": versionCombo[0], "driverVersions": driverMajorMinorVersion})
    if compatibility is not None and dbMajorMinorVersion not in compatibility["compatibleDbVersions"]:
        print("- %s %s: Driver has not been tested with MongoDB %s" % versionCombo)
    elif compatibility is None:
        print("- %s %s: Unknown, pre-release, or third-party driver" % (versionCombo[0], versionCombo[1]))

