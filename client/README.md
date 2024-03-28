REMEMBER TO NPM INSTALL!

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
