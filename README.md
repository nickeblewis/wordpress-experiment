# Wordpress Graphql Relay

## Usage

Clone the repository to your local directory
```bash
$ git clone https://github.com/nickeblewis/wordpress-experiment.git
$ cd wordpress-experiment
```

Install all dependencies & Start developing
```bash
$ npm install
$ npm start
```

## Demo

`https://wgr.herokuapp.com` to see this app in action :-)

Launch your favorite web browser and go to `http://localhost:3000` for Relay application or `http://localhost:8000` for GraphiQL.

## Deployment

In order to deploy a project, it is a good practice to minify all JavaScript files, stop spawning the GraphiQL server, pull off some duplicate dependencies, and remove all unnecessary scripts, for example, Hot-reload. All of these can be done by executing the following command:

```bash
$ npm run deploy
```

Again, launch your favorite web browser and go to `http://localhost:3000`.

## Schema

Whenever you start a server, it will automatically execute `updateSchema.js` script in order to compile the schema definitions, defined in `schema.js`, to `schema.json` and `schema.graphql`. This is required by Relay framework. However, you could also run the script manually:

```bash
$ npm run update
```

## Project Structure


    ├── client                          - All of the client side code resides in this folder
    │   ├── assets                      - Images and fonts
    │   ├── components                  - Relay containers, React components, and SCSS files used in the components
    │   │   └── variables.scss          - Common SCSS variables
    │   ├── routes                      - React-router-relay
    │   │   ├── Route.js                - All route definitions
    │   │   └── ViewerQuery.js          - Entry node of a GraphQL query
    │   ├── index.html                  - HTML template file used by html-webpack-plugin
    │   └── index.js                    - Client entry point
    ├── server                          - All of the server side code resides in this folder
    │   ├── config                      - Configuration
    │   │   └── environment             - Separate configuration for each environment
    │   │       ├── development.js      - Development configuration
    │   │       ├── index.js            - Common configuration used in any environment
    │   │       ├── production.js       - Production configuration
    │   │       └── test.js             - Test configuration
    │   ├── data                        - Data and APIs
    │   │   ├── database.js             - Mock up database which should be replaced with your real database logic
    │   │   ├── schema.graphql          - Compiled schema in a readable form
    │   │   ├── schema.js               - Schema definitions
    │   │   └── schema.json             - Compiled schema to be used by Relay
    │   ├── utils                       - Utilities
    │   │   ├── babelRelayPlugin.js     - Babel-relay-plugin provided by Relay
    │   │   └── updateSchema.js         - Code for compiling the defined schema to schema.json and schema.graphql
    │   └── index.js                    - Server entry point
    ├── package.json                    - List of dependencies
    ├── webpack.config.js               - Webpack configuration for development environment
    └── webpack.production.config.js    - Webpack configuration for production environment

## Technologies

### Frameworks
[Relay](https://facebook.github.io/relay) - A JavaScript framework for building data-driven react applications. It is required to be used with React and GraphQL.

[React](https://facebook.github.io/react) - A JavaScript library for building user interfaces. It introduces many great concepts, such as, Virtual DOM, Data flow, etc.

[GraphQL](https://github.com/facebook/graphql) - GraphQL is a query language and execution engine tied to any backend service.

[Express](http://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Module bundler & Syntax transformers
[Webpack](https://webpack.github.io) - Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules.

[Babel](https://babeljs.io) - Babel is a JavaScript compiler which allows you to  use next generation, ES6/ES7, JavaScript, today.

### Languages
[ES6/ES7](https://github.com/lukehoban/es6features) - ECMAScript 6, also known as ECMAScript 2015, is the latest version of the ECMAScript standard. ES6 is a significant update to the language.

[JSX]( https://facebook.github.io/react/docs/jsx-in-depth.html) - JSX is a JavaScript syntax extension that looks similar to XML. You can use a simple JSX syntactic transform with React.

### Designs
[Material Design Lite](http://getmdl.io) - Material Design Lite lets you add a Material Design look and feel to your websites.

[PostCSS](http://postcss.org) - PostCSS is a tool for transforming CSS with JavaScript. It has roughly 200 plugins to help you write CSS easier.

### Additional Tools
[React transform HMR](https://github.com/gaearon/react-transform-hmr) - A React Transform that enables hot reloading React classes.

[React router relay](https://github.com/relay-tools/react-router-relay) - Relay integration for React Router.

[Eslint](http://eslint.org) - The pluggable linting utility for JavaScript and JSX.

[Autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules.

[Precss](https://github.com/jonathantneal/precss) - Use Sass-like markup in your CSS.

[Gaze](https://github.com/shama/gaze) - A globbing fs.watch wrapper used for watching files and live-reloading a back-end server.

## Credits
- Relay Fullstack is inspired by [relay-starter-kit](https://github.com/relayjs/relay-starter-kit). Please take a look at the original code to learn more.
- Thanks to Varayut Lerdkanlayanawat and the Relay Fullstack project that helped med get startd with this

## License

[The MIT License](http://opensource.org/licenses/MIT)
