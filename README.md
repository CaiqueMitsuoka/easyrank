# EasyRank

This is a crap Rails + React app to manage football teams and games. This is temporary repo to use in a class, an to prove a point. You should not consider that app as an example.

## Setup

1. Install Ruby, use a version manager like asdf, rvm or rubenv.
2. Install Node, use a version manager like asdf or nvm.
3. Install postgresql, look on the web for the best way to install it in your system.
4. Run `$ gem install bundler` to install the bundler.
5. Run `$ npm install yarn` to install the bundler.
6. Run `$ bundler install` to install all the ruby dependencies.
7. Run `$ yarn install` to install all the javascript dependencies.
8. Run `$ rake db:setup` to create, migrate and seed the database.
9. Open two terminal instances.
10. Run `$ bin/webpack-dev-server` this will be watcher of the react files, and will compile them as you save.
11. Run `$ rails server` to run the server at `localhost:3000`.

## Api

The API is at  `localhost:3000/api`.
There are 2 resources `teams` and `games`.
