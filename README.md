# BestBuy-Monitor

Watches BestBuy products and notifies the user via Discord webhooks when the product is in stock!


### Get Started 

Make sure you're in the correct directory before trying to install this program. Many people have issues with directories. I recommend install this on your desktop for easy accessbility.

## Prerequisites

Make sure you have these currently installed on the machine you plan to run this application on. If you have any problems with installation or unfamiliar with this there are some resources below.

[Node (LTS)](https://nodejs.org/en/) 12.16.2

[Mongo DB](https://www.mongodb.com/)

[Git](https://git-scm.com/)

**Need help installing Nodejs or Mongo DB ?** 

[MongoDB](https://www.youtube.com/watch?v=FwMwO8pXfq0) 

[NodeJS](https://www.youtube.com/watch?v=gHuIKptS0Qg)


### Installing
```
git clone https://github.com/Neguhs/BestBuy-Monitor.git

npm install or npm i

node app.js
```

### Setup 

Make sure to add your server webhook within the `setting.json` file before starting the application or you will run into an error and the app will close.

Here is an example sku **"6364255"** , each sku should be seperated with a `,`.

`Webhook:` Destination of all notifications sent from the monitor.

`Skus:` A collection of all the items you want monitored.

`Interval:` Time in between each time the monitor will check on your list of products you've entered. This value is adjustable but be mindful of potential banning of your IP and or other anti-bot / rate-limiting measures.


```
{
    "Discord":{
        "Webhook": ""
    },
    "Skus":[],
    "Interval": 5000
}
```
