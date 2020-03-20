grep -Eo 'principal ([a-z0-9\-]+) on admin from client (\d+\.\d+\.\d+\.\d+)' mongo.log | cut -f 2,7 -d ' ' | sort | uniq -c
