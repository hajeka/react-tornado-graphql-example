react-tornado-graphql-example
=============================

An example app using React, Tornado, and GraphQL.

The server-side GraphQL implementation is still naive and fragile.

Setup
-----

Install NPM packages:

```sh
% npm install
```

Install pip packages and register `tornado-graphql-example` pacakge:

```sh
% cd tornado
% pip install -r requirements.in
% python setup.py develop
```

Usage
-----

Launch the GraphQL API server:

```sh
% tornado-graphql-example run -d
```

Launch the development web server which serves the static client-side app:

```sh
% npm start
```

Frameworks/Libraries
--------------------

### Client-side (JavaScript)

* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [react-router](https://github.com/ReactTraining/react-router) and
  [react-router-redux](https://github.com/reactjs/react-router-redux)
* [Apollo client](http://dev.apollodata.com/) (GraphQL integration)
* [Semantic-UI-React](http://react.semantic-ui.com/) (CSS framework)

The application code was generated by create-react-app.

See package.json for more information.

### Server-side (Python)

* [GraphQL-core](https://github.com/graphql-python/graphql-core)
* [Tornado](http://www.tornadoweb.org/)
* [Traitlets](http://traitlets.readthedocs.io/)

See tornado/requirements.in for more information.

Todo
----

* Create the independent `tornado-graphql` module same as `flask-graphql`
* Add missing GraphQL features and make the code robust
* GraphiQL integration
* Tests
* Background job processing using ZeroMQ (Tornado really shines with this!)
* Authentication
* GraphQL subscription

Related Work
------------

* [react-flask-graphql-example](https://github.com/yatsu/react-flask-graphql-example)
