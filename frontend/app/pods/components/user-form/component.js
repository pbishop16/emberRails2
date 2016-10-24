import Ember from 'ember';

export default Ember.Component.extend({
	
	actions: {
		createUser: function() {
			var user = this.get('model');
			this.sendAction('createUser', user);
		},

		cancelCreate: function() {
			this.get('model').deleteRecord();
			this.sendAction('cancelCreate');
		},

		saveChanges: function(){
			var user = this.get('model');
			this.sendAction('saveChanges', user);
		},

		cancelEdit: function() {
			this.get('model').rollbackAttributes();
			this.sendAction('cancelEdit');
		}
	}

});
