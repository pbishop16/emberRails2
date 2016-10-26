import Ember from 'ember';

export default Ember.Route.extend({
	notify: Ember.inject.service('notify'),
	// toast: Ember.inject.service('toast'),
	actions: {

		saveChanges: function(user){
			user.save();
			// this.get('toast').success('User successfully updated.');
			// this.get('notify').success({html: '<div style="font-color: green;">User successfully updated.</div>'}, {closeAfter: 10});
			this.get('notify').success('User successfully updated.', {closeAfter: 2000});
			this.transitionTo('users.user');
		},

		cancelEdit: function() {
			// this.get('model').rollbackAttributes();
			this.transitionTo('users.user');
		}

	}
});
