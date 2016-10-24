import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('user', { path: '/:user_id' }, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('user-admin');
  this.route('login');
});

export default Router;
