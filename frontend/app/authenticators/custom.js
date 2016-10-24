import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from './../config/environment';

export default Base.extend({
	tokenEndpoint: config.tokenEndpointSet,
	restore: function(data) {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			if (!Ember.isEmpty(data.token)) {
				resolve(data);
			} else {
				reject();
			}
		});
	},

	authenticate: function(options) {
		return new Ember.RSVP.Promise((resolve, reject) => {
			Ember.$.ajax({
				url: this.tokenEndpoint,
				type: 'POST',
				data: JSON.stringify({ user: {
					email: options.email,
					password: options.password }
				}),
				contentType: 'application/json;charest=utf-8',
				dataType: 'json'
			}).then(function(response) {
				Ember.run(function(){
					resolve({
						token: response.token,
						current_user_email: response.email,
						current_user_id: response.id,
						current_user_name: response.name
					});
				});
			},

			function(xhr, status, error) {
				var response = xhr.responseText;
				Ember.run(function() {
					reject(response);
				});
			});
		});
	},

	invalidate: function() {
		console.log('invalidate...');
		return Ember.RSVP.resolve();
	}
});
