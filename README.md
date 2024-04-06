# Travel Together
REMEMBER TO NPM INSTALL!

### Server 
To run server use
node app.js

Im using 
node -v v20.11.1
npm -v 10.2.4

download mongodb and create a collection called db. https://www.mongodb.com/try/download/community
Download version 7.0.7

(you can call it whatever but just change the db_url in utils/db.js to be correct/according to your url and db name)
then change the const db_url = "mongodb://localhost:27017/db";
to your connection url.

---
### Client

To run client use
npx http-server -p 8080

Im using
node -v v20.11.1
npm -v 10.2.4

SOMETIMES THE BROWSER CACHES OLD STUFF!!
So if you want to make something new, fix bug etc remember to hard clear browsers cache.

IMPORTANT

To make firebase work, you need to be in local host and not in the ip adress
instead of http://IP:port#/...
Do http://localhost:port#/...

To get the uid for the current user, do this const uid = sessionStorage.getItem('uid');

---
### Color scheme
- #8D8741 - brown/green
- #659DBD - blue
- #DAAD86 - tan/pink
- #BC986A - Light brown
- #FBEEC1 - Sand color
