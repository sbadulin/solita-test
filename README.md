# Whee-project

Minimalistic shopping cart demo project showcasing usage of styled-components, mobx, reach router and SVGR loader.
Initially created as test assignment for Solita Oy.

## Installation 

### Installing Homebrew (for MacOS users only)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
The another good way of doing this would be to install [nvm](https://github.com/creationix/nvm).


### Installing Node.js
```
brew install node
```
Or if you want to download the package with bash:
```
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```
(For Linux users: [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/))

1. Run `npm install` in the project root (i.e. folder where package.json file is)
2. `npm start` will start local node server that uses HMR to reload any changes

You can access JSON under [http://localhost:3000/api/products](http://localhost:3000/api/products).

Same information is found from `./products.js`.

## Webpack

Supported loaders are found from `webpack.config.common.js`:
- SVGR fro SVG (transforms SVG into React components, the one from create-react-app)
- ES2015+ via Babel

The index.html is generated with [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) and [html-webpack-template](https://github.com/jaketrent/html-webpack-template). Fonts are included in template

## React

React.js is in charge of rendering components with hot reloading enabled. CSS styles are initially normalized with [styled-normalize](https://github.com/sergeysova/styled-normalize)

### Reach router

A nice alternative Reach router from Ryan Florence was used in replacement of React router

## MobX

The data is managed by [MobX](https://github.com/mobxjs/mobx). There are two stores - for products and for cart. Products provided by an API are normalized with normalizr and stored in registry.
It uses Provider to provide stores and inject to add stores to props. Class components also needs an @observer decorator to subscribe to changes in store (functional component usually uses inject as function and it provides observer automatically)

## Styled components
This project is written entirely with [styled-components](https://www.styled-components.com

# Testing

There was some sample tests added (mostly Jest snapshots) - checking that components renders, agent request the data and store is actually storing data.
Test(s) can be run with `npm test` or `npm t`. Tests are located under `/test` -folder. Name your tests as `_nameOfTest_.test.js`.

# Changelog
20.01.2019 - Readme updated
18.01.2019 - Tests added
15.01.2019 - Stores for products and cart added
12.01.2019 - Layout for item list and cart created.
08.01.2019 - Dependencies updated (webpack 4 etc).
10.10.2017 - Updated the project for webpack and Jest. Added layouts to git.