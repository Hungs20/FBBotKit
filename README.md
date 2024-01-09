<h1 align="center">Welcome to FBBotKit 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> FBBotKit rewrites the API requests and response models for Facebook Page, aiding developers in the seamless implementation of applications related to the Facebook Page API.

### 🏠 [Homepage](https://github.com/Hungs20/FBBotKit)

## Install

```sh
npm install fbbotkit
```

## Usage

### Create bot
```js
const bot = new FBBotKit({
            pageAccessToken: "",
            pageId: "",
            pageName: "",
            apiVersion: "18.0"
        });
```
### Create menu
```js
bot.setMessengerProfile(request: MessengerProfile)
```
### Create personal
```js
bot.setPersonal(request: PersonalProfile)
```

### Delete personal
```js
bot.deletePersonal(id: string)
```

### Send message
```js
bot.sendMessage(request: SendRequest)
```
### Send text message
```js
bot.sendTextMessage(recipientId: string, text: string)
```
### Send attachment message
```js
bot.sendAttachmentMessage(recipientId: string, type: 'image' | 'video' | 'audio' | 'file', url: string)
```
### Send attachment message
```js
bot.sendTemplateGeneric(recipientId: string, elements: ElementPayload[])
```
### Send quick reply
```js
bot.sendQuickReplies(recipientId: string, text: string, elements: SendQuickReply[])
```



## Author

👤 **Chu Hung**

* Website: https://chuhung.net
* Github: [@Hungs20](https://github.com/Hungs20)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Hungs20/FBBotKit/issues). 

## Show your support

Give a ⭐️ if this project helped you!
