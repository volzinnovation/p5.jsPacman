![Artwork](./src/img/stuff/art.png)

jsPacman
========

jsPacman is a HTML5 / JavaScript DOM based remake of the classic [Ms. Pac-Man](https://en.wikipedia.org/wiki/Ms._Pac-Man) game.

Play Game
-----------
[Ms. Pacman](https://pacman.raphaelvolz.de/)

Credits
-----------
* Game Implementation by [Alberto Masuelli (8tentaculos)](https://github.com/8tentaculos)
* Game algorithm is based on [The Pac-Man Dossier](https://pacman.holenet.info/).
* Sprites are from [spriters-resource](http://www.spriters-resource.com/game_boy_advance/namcomuseum/sheet/22732).
* Updated dependencies to 2023 settings in this repo, smaller cosmetics, e.g. use of let instead of var

Deployment
-----------
* Copy contents of docs folder to a web server of choice.  
* Running it locally only works through a web server NOT from disk (will throw Fetch API errors)

Development
-----------
Install local modules:
```
$ npm install
```
### NPM scripts ###
Run tests:
```
$ npm test
```
Run local dev server at `localhost:8080`
```
$ npm start
```
Build production bundle:
```
$ npm run build
```

Licence
-----------
Source code is under [MIT Licence](http://opensource.org/licenses/mit-license.php).
