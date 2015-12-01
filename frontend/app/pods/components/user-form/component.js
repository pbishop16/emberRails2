import Ember from 'ember';

export default Ember.Component.extend({
	
	actions: {
		createUser: function(model) {
			var user = this.get('model');
			this.sendAction('createUser', user);
		},

		cancelCreate: function(model) {
			this.get('model').deleteRecord();
			this.sendAction('cancelCreate');
		},

		saveChanges: function(model){
			var user = this.get('model');
			this.sendAction('saveChanges', user);
		},

		cancelEdit: function(model) {
			this.get('model').rollbackAttributes();
			this.sendAction('cancelEdit');
		}
	}

});
