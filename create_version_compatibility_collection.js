db = db.getSiblingDB('DriverVersionCompatibility');

db.compatibility.drop();
db.compatibility.insertMany([
  { driver: "mongo-go-driver", driverVersions: [ "1.0" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "mongo-go-driver", driverVersions: [ "1.1", "1.2", "1.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },

  { driver: "mongo-csharp-driver", driverVersions: [ "1.10", "2.0" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "mongo-csharp-driver", driverVersions: [ "1.11", "2.2", "2.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "mongo-csharp-driver", driverVersions: [ "2.4" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "mongo-csharp-driver", driverVersions: [ "2.5", "2.6" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "mongo-csharp-driver", driverVersions: [ "2.7", "2.8" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "mongo-csharp-driver", driverVersions: [ "2.9", "2.10" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },

  { driver: "mongo-java-driver", driverVersions: [ "2.12" ], compatibleDbVersions: [ "2.6" ] },
  { driver: "mongo-java-driver", driverVersions: [ "2.13", "3.0", "3.1" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "mongo-java-driver", driverVersions: [ "2.14", "3.2", "3.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "mongo-java-driver", driverVersions: [ "3.4", "3.5" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "mongo-java-driver", driverVersions: [ "3.6", "3.7" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "mongo-java-driver", driverVersions: [ "3.8", "3.9", "3.10" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "mongo-java-driver", driverVersions: [ "3.11", "3.12" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },

  { driver: "nodejs", driverVersions: [ "1.4", "2.0" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "nodejs", driverVersions: [ "2.2" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "nodejs", driverVersions: [ "3.0" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "nodejs", driverVersions: [ "3.1", "3.2" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "nodejs", driverVersions: [ "3.3", "3.4", "3.5" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },

  { driver: "nodejs-core", driverVersions: [ "1.4", "2.0" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "nodejs-core", driverVersions: [ "2.2" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "nodejs-core", driverVersions: [ "3.0" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "nodejs-core", driverVersions: [ "3.1", "3.2" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },

  { driver: "PyMongo", driverVersions: [ "2.7" ], compatibleDbVersions: [ "2.6" ] },
  { driver: "PyMongo", driverVersions: [ "2.8", "2.9", "3.0", "3.1" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "PyMongo", driverVersions: [ "3.2", "3.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "PyMongo", driverVersions: [ "3.4", "3.5" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "PyMongo", driverVersions: [ "3.6" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "PyMongo", driverVersions: [ "3.7", "3.8" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "PyMongo", driverVersions: [ "3.9", "3.10" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
]);

