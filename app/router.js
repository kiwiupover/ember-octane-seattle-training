import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('teams', function() { // /teams*
    this.route('team', { path: ':teamId'}, function() { // /teams/outdoorsy
      this.route('channel', { path: ':channelId' }); // /teams/outdoorsy/frontenders
    });
  });
  this.route('login');
});

export default Router;
