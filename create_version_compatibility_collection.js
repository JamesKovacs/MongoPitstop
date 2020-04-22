db = db.getSiblingDB('DriverVersionCompatibility');

db.compatibility.drop();
var result = db.compatibility.insertMany([
  // C Driver
  { driver: "mongoc", driverVersions: [ "1.0", "1.1", "1.2" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "mongoc", driverVersions: [ "1.3", "1.4" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "mongoc", driverVersions: [ "1.5", "1.6", "1.7", "1.8" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "mongoc", driverVersions: [ "1.9" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "mongoc", driverVersions: [ "1.10" ], compatibleDbVersions: [ "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "mongoc", driverVersions: [ "1.11", "1.12", "1.13", "1.14" ], compatibleDbVersions: [ "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "mongoc", driverVersions: [ "1.15", "1.16" ], compatibleDbVersions: [ "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  // C++ Driver
  { driver: "mongocxx", driverVersions: [ "3.0" ], compatibleDbVersions: [ "2.4", "2.6", "3.0", "3.2" ] },
  { driver: "mongocxx", driverVersions: [ "3.1", "3.2" ], compatibleDbVersions: [ "2.4", "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "mongocxx", driverVersions: [ "3.3" ], compatibleDbVersions: [ "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "mongocxx", driverVersions: [ "3.4" ], compatibleDbVersions: [ "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "mongocxx", driverVersions: [ "3.5" ], compatibleDbVersions: [ "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  // C#/.NET Driver
  { driver: "mongo-csharp-driver", driverVersions: [ "1.10", "2.0" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "mongo-csharp-driver", driverVersions: [ "1.11", "2.2", "2.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "mongo-csharp-driver", driverVersions: [ "2.4" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "mongo-csharp-driver", driverVersions: [ "2.5", "2.6" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "mongo-csharp-driver", driverVersions: [ "2.7", "2.8" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "mongo-csharp-driver", driverVersions: [ "2.9", "2.10" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  // Go Driver
  { driver: "mongo-go-driver", driverVersions: [ "1.0" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "mongo-go-driver", driverVersions: [ "1.1", "1.2", "1.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  // Java Driver
  { driver: "mongo-java-driver", driverVersions: [ "2.12" ], compatibleDbVersions: [ "2.6" ] },
  { driver: "mongo-java-driver", driverVersions: [ "2.13", "3.0", "3.1" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "mongo-java-driver", driverVersions: [ "2.14", "3.2", "3.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "mongo-java-driver", driverVersions: [ "3.4", "3.5" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "mongo-java-driver", driverVersions: [ "3.6", "3.7" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "mongo-java-driver", driverVersions: [ "3.8", "3.9", "3.10" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "mongo-java-driver", driverVersions: [ "3.11", "3.12" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  // Node.js Driver
  { driver: "nodejs", driverVersions: [ "1.4", "2.0" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "nodejs", driverVersions: [ "2.2" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "nodejs", driverVersions: [ "3.0" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "nodejs", driverVersions: [ "3.1", "3.2" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "nodejs", driverVersions: [ "3.3", "3.4", "3.5" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  { driver: "nodejs-core", driverVersions: [ "1.4", "2.0" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "nodejs-core", driverVersions: [ "2.2" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "nodejs-core", driverVersions: [ "3.0" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "nodejs-core", driverVersions: [ "3.1", "3.2" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  // Perl Driver
  { driver: "MongoDB Perl Driver", driverVersions: [ "1.0" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "MongoDB Perl Driver", driverVersions: [ "1.2", "1.4" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "MongoDB Perl Driver", driverVersions: [ "1.6", "1.8" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "MongoDB Perl Driver", driverVersions: [ "2.0" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "MongoDB Perl Driver", driverVersions: [ "2.2" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  // PHP Driver
  { driver: "ext-mongodb:PHP", driverVersions: [ "1.0" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "ext-mongodb:PHP", driverVersions: [ "1.1" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "ext-mongodb:PHP", driverVersions: [ "1.2", "1.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "ext-mongodb:PHP", driverVersions: [ "1.4" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "ext-mongodb:PHP", driverVersions: [ "1.5" ], compatibleDbVersions: [ "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "ext-mongodb:PHP", driverVersions: [ "1.6" ], compatibleDbVersions: [ "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  // Python Driver
  { driver: "PyMongo", driverVersions: [ "2.7" ], compatibleDbVersions: [ "2.6" ] },
  { driver: "PyMongo", driverVersions: [ "2.8", "2.9", "3.0", "3.1" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "PyMongo", driverVersions: [ "3.2", "3.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "PyMongo", driverVersions: [ "3.4", "3.5" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "PyMongo", driverVersions: [ "3.6" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "PyMongo", driverVersions: [ "3.7", "3.8" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "PyMongo", driverVersions: [ "3.9", "3.10" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  // Motor Driver
  //
  // Ruby Driver
  { driver: "mongo-ruby-driver", driverVersions: [ "1.8", "1.9" ], compatibleDbVersions: [ "2.4" ] },
  { driver: "mongo-ruby-driver", driverVersions: [ "1.10", "1.11" ], compatibleDbVersions: [ "2.4", "2.6" ] },
  { driver: "mongo-ruby-driver", driverVersions: [ "1.12", "2.0" ], compatibleDbVersions: [ "2.4", "2.6", "3.0" ] },
  { driver: "mongo-ruby-driver", driverVersions: [ "2.2", "2.3" ], compatibleDbVersions: [ "2.4", "2.6", "3.0", "3.2" ] },
  { driver: "mongo-ruby-driver", driverVersions: [ "2.4" ], compatibleDbVersions: [ "2.4", "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "mongo-ruby-driver", driverVersions: [ "2.5" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "mongo-ruby-driver", driverVersions: [ "2.6", "2.7", "2.8", "2.9" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "mongo-ruby-driver", driverVersions: [ "2.10" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  // Rust Driver
  { driver: "mongo-rust-driver", driverVersions: [ "0.9" ], compatibleDbVersions: [ "3.6", "4.0", "4.2" ] },
  // Scala Driver
  { driver: "mongo-scala-driver", driverVersions: [ "1.0" ], compatibleDbVersions: [ "2.6", "3.0" ] },
  { driver: "mongo-scala-driver", driverVersions: [ "1.1" ], compatibleDbVersions: [ "2.6", "3.0", "3.2" ] },
  { driver: "mongo-scala-driver", driverVersions: [ "1.2", "2.0", "2.1" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4" ] },
  { driver: "mongo-scala-driver", driverVersions: [ "2.2", "2.3" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6" ] },
  { driver: "mongo-scala-driver", driverVersions: [ "2.4", "2.5", "2.6" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0" ] },
  { driver: "mongo-scala-driver", driverVersions: [ "2.7", "2.8" ], compatibleDbVersions: [ "2.6", "3.0", "3.2", "3.4", "3.6", "4.0", "4.2" ] },
  // Swift Driver
  { driver: "MongoSwift", driverVersions: [ "0.2" ], compatibleDbVersions: [ "3.6", "4.0", "4.2" ] },
]);
print(`${result.insertedIds.length} driver version documents inserted`);
