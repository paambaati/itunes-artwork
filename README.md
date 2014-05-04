iTunes Artwork API
==================

A barebones API for searching the iTunes Artwork library for music album covers (or any other type of medium you want), built using Node.JS and [Restify](mcavage.me/node-restify/).

Inspired by [Ben Dodson's iTunes Artwork Finder](http://bendodson.com/projects/itunes-artwork-finder/ "Ben Dodson: iTunes Artwork Finder; TV Shows, Music Albums, Movies, Apps, and iBooks"), I decided to roll out my own open source API wrapper for the [iTunes Search API](http://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html "iTunes, App Store, iBooks, and Mac App Store Affiliate Resources - Search API").

###Usage

1. Clone this reposity using the command -
```
git clone git@github.com:paambaati/itunes-artwork.git
```
2. Install required modules using -
```
npm install
```
3. Send a `GET` request to the server (assuming it is running on the default `127.0.0.1` on port `3000`) of this form -
```
http://127.0.0.1:3000/find/ajskdhas?term=<ALBUM NAME>&country=<COUNTRY CODE>
```

For example, to fetch all results for the Rise Against album *"Long Forgotten Songs: B-Sides & Covers"*, the URL will be `127.0.0.1:3000/find/ajskdhas?term=long forgotten songs&country=us`

###Notes

1. Allowed country codes are one of these - `"us", "gb", "ca", "de", "se", "nl", "it", "ch", "ru", "au", "jp", "br", "fr", "gr", "es", "dk"`.
2. The API wrapper searches only for music album covers by default. For searching other media (like book covers, app store icons, etc.), refer the Search API documentation [here](http://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html  "iTunes, App Store, iBooks, and Mac App Store Affiliate Resources - Search API").