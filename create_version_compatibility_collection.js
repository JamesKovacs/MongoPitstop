db = db.getSiblingDB('DriverVersionCompatibility');

db.compatibility.drop();
db.compatibility.insertMany([
  { driver: "PyMongo", driverVersions: [ "2.7" ], compatibleDbVersions: [ "2.6" ] },
  { driver: "PyMongo", driverVersions: [ "2.8", "2.9", "3.0", "3.1" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "PyMongo", driverVersions: [ "3.2", "3.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "PyMongo", driverVersions: [ "3.4", "3.5" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "PyMongo", driverVersions: [ "3.6" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "PyMongo", driverVersions: [ "3.7", "3.8" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "PyMongo", driverVersions: [ "3.9" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
]);
