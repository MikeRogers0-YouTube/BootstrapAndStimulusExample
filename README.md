[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Bootstrap And Stimulus Example

Bootstrap uses jQuery's `trigger` method for proving callbacks for events, unfortunately this mean Stimulus can't listen for them using `data-action`.

This demos a solution that allows for the events to be listened to by a Stimulus controller.

## Key files

- [config/webpack/environment.js](https://github.com/MikeRogers0/BootstrapAndStimulusExample/blob/master/config/webpack/environment.js) - A tweak to the environment.js is required to make `$` available everywhere.
- [app/javascript/controllers/open_counter_controller.js](https://github.com/MikeRogers0/BootstrapAndStimulusExample/blob/master/app/javascript/controllers/open_counter_controller.js) - The Stimulus controller that has the counter for when the modal opens
- [app/views/welcome/index.html.erb](https://github.com/MikeRogers0/BootstrapAndStimulusExample/blob/master/app/views/welcome/index.html.erb) - The HTML sample

## Setting up locally

Pull down the repo & run:

```bash
./bin/setup
```

- [`bin/setup`](https://github.com/MikeRogers0/RealtimePartialUpdateApp/blob/master/bin/setup) - runs bundler & yarn, then sets up the database.

Next you should be able to run:

```bash
rails s
```

To turn on the server, your port may vary but if you visit [http://localhost:3000/](http://localhost:3000/) you should be able to see the modal with a counter that updates every time it's opened.
