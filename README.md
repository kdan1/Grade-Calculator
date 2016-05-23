ADDITIONAL FEATURES/CREATIVITY/USABILITY:

1) Red buttons become blue when you hover over them. The cursor changes
from an arrow to a hand.

2) When you hover over the buttons, a message appears informing the user what function will be performed.
This is especially useful as some users may not understand the difference between "Average" and "Mean".

3) Users can change the names of the activities and short names. (Ex: user can
  change "Activity 1" to "Quiz 1") This helps users keep track of which grades are for what activities.

4) An additional button, "Reset", has been created. It erases all data in the input fields and
Percentage column. It also resets the activity names and short names back to their default names.

5) If a user types a value that is not a number, a pop-up message appears warning the user and saying
that they need to enter numbers.

6) If one or both grade input fields are empty for an activity, NaN won't be shown in the Percentage column.

7) If the user hovers over a row in the table, that row is highlighted in a light gray colour.
This is for aesthetic appeal and helps user know which row they're on.


___________________________________________________________________________________________________

# ruby-getting-started

A barebones Rails app, which can easily be deployed to Heroku.

This application support the [Getting Started with Ruby on Heroku](https://devcenter.heroku.com/articles/getting-started-with-ruby) article - check it out.

## Running Locally

Make sure you have Ruby installed.  Also, install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

```sh
$ git clone git@github.com:heroku/ruby-getting-started.git
$ cd ruby-getting-started
$ bundle install
$ bundle exec rake db:create db:migrate
$ heroku local
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master
$ heroku run rake db:migrate
$ heroku open
```

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Docker

The app can be run and tested using the [Heroku Docker CLI plugin](https://devcenter.heroku.com/articles/introduction-local-development-with-docker).

Make sure the plugin is installed:

    heroku plugins:install heroku-docker

Configure Docker and Docker Compose:

    heroku docker:init

And run the app locally:

    docker-compose up web

The app will now be available on the Docker daemon IP on port 8080.

To work with the local database and do migrations, you can open a shell:

    docker-compose run shell
    bundle exec rake db:migrate

You can also use Docker to release to Heroku:

    heroku create
    heroku docker:release
    heroku open

## Documentation

For more information about using Ruby on Heroku, see these Dev Center articles:

- [Ruby on Heroku](https://devcenter.heroku.com/categories/ruby)
