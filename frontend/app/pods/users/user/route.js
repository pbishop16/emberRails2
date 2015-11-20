import Ember from 'ember';

var runLater;

export default Ember.Route.extend({
	notify: Ember.inject.service('notify'),

	model: function(params) {
		return this.store.findAll('user', params.id);
	},

	actions: {
		undoDelete: function(user) {
			Ember.run.cancel(runLater);
			user.rollbackAttributes();
			this.get('notify').info('User deletion cancelled.', {closeAfter: null});
			this.transitionTo('users.user');
		},

		deleteUser: function(user) {
			user.deleteRecord();
			runLater = Ember.run.later(this, function(){
				user.save();
				this.get('notify').alert('Deletion successful.', {closeAfter: null});
				this.transitionTo('users');
			}, 2000);
		}
	}
	
});
