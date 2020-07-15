cat mongo.log | grep -Eo "db version v\d+\.\d+\.\d+" | uniq
