one time:

1. nodemon globally install
2. mongodb atlas user, access
3. Network access (ip address allow)
   Every projects:
4. install mongodb, express, cors, dotenv
5. import (require), mongodb
6. copy uri (connection string)
7. create the client (copy code from atlas)
8. Create or get database access credentials (username, password)
9. create .env file and add DB_USER and DB_PASS as environment variable
10. Make sure you require (import) dotenv
11. Convert URI string to a template string.
12. Add DB_USER and DB_PASS in the connection URI string.
13. Check URI string by using console.log
14. Create async function run and call it by using run().catch(console.dir)
15. add try and finally inside the run function.
16. comment out await client.close() to keep the connection alive
17. add await client.connect(); inside the try block
18. use a console.log after the client.connect to ensure database is connected
