REMEMBER TO NPM INSTALL!

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

TODO: Maybe change the db url and ALL urls/setups to env file? :D