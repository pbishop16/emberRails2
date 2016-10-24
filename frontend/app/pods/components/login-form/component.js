import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	routing: Ember.inject.service('-routing'),
	notify: Ember.inject.service(),
	actions: {
		authenticate: function() {
			let credentials = this.getProperties('email', 'password');
			this.get('session').authenticate('authenticator:custom', credentials).then(() => {
				this.get('notify').success('Successfully logged in.');
				this.get('routing').transitionTo('users');
			}).catch((message) => {
				this.set('errorMessage', message.error || message);
			});

		}
	}
});
