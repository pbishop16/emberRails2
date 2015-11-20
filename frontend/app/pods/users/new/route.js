import Ember from 'ember';

export default Ember.Route.extend({
	notify: Ember.inject.service('notify'),
	model: function() {
		return this.store.createRecord('user');
	},

	actions: {
		createUser: function(user) {
			var self = this;
			console.log(user);
			user.save().then(function(user) {
				self.transitionTo('users.user', user);
			});
			this.get('notify').success('User successfully created.', {closeAfter: null});
		},
		
		cancelCreate: function() {
			// this.get('model').rollback();
			this.transitionTo('users');
		}
		
	},

});