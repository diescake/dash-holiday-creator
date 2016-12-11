# dash-holiday-creator

dash-holiday-creator provides you to greate holidays !!

## Usage

```
$ npm install
$ npm start
```

## configs


Please open the following config file and input the necessary data.


### config/config.json

```JavaScript
{
  "client": {
    "user": "xxxxxxxx@gmail.com", // your Gmail address
    "clientId": "xxxxxxxx.googleusercontent.com", // your Gmail clientId
    "clientSecret": "xxxxxxxxxxxxxxxxxx", // your Gmail client secret                               
    "refreshToken": "xxxxxxxxxxxxxxxxxx" // your Gmail refresh token
  },
  "buttons": [
    {
      "MACAddress": "xx:xx:xx:xx:xx:xx", // MAC address of Amazon Dash Button
      "to": "xxxxxxxx@xxxx.com", // destination of E-Mail
      "myName": "名無しさん＠休みたい", // your name in subject and message
      "request": "午前休", // your request
      "reason": "私用" // the reason for your request
    }   
  ]
}
```
