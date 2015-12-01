import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(){
		// this.transitionTo('users');
		this.transitionTo('users.new');
	},
	notify: Ember.inject.service('notify'),
	model: function() {
		return this.store.createRecord('user');
	},

	actions: {
		createUser: function(user) {
			console.log(user);
			user.save().then( (user) => {
				this.transitionTo('users.user', user);
			});
			this.get('notify').success('User successfully created.', {closeAfter: null});
		},
		
		cancelCreate: function() {
			// this.get('model').rollback();
			this.transitionTo('users');
		}
		
	},

});