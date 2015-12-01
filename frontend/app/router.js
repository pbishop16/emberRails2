import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('users', function() {
  	this.route('user', {path: '/:id' }, function(){
			this.route('edit');
		});
  	this.route('new');
  });
  this.route('login');
  this.route('user-admin');
});

export default Router;
