# WebPurple Provider
[![Build Status](https://travis-ci.org/WebPurple/provider.svg?branch=master)](https://travis-ci.org/WebPurple/provider)
[![License MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/WebPurple/provider/blob/master/LICENSE)


## Установка
### Клонирование и установка модулей
```sh
git clone https://github.com/WebPurple/provider.git
npm install
```
### develop
```sh
npm run dev
```
### production
```sh
npm run build
npm start
```

## Методы
### Albums
Возвращает информацию о фотографиях в альбоме ВКонтакте
```
GET /albums/:owner_id/:album_id/
```
### Contributors
Возвращает список "contributors" для репозитория GitHub
```
GET /contributors/:owner/:repo/
```
