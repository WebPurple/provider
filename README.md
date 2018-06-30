# WebPurple VK-Provider
[![Build Status](https://travis-ci.org/WebPurple/vk-provider.svg?branch=master)](https://travis-ci.org/WebPurple/vk-provider)
[![License MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/WebPurple/vk-provider/blob/master/LICENSE)


## Локальная работа
```sh
git clone https://github.com/WebPurple/vk-provider.git
npm install
npm run dev
```

## Методы
### Albums
Возвращает информацию о фотографиях в альбоме
```
GET /albums/:owner_id/:album_id/
```