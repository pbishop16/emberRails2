import Ember from 'ember';

// import {
//   validator, buildValidations
// }
// from 'ember-cp-validations';

// var Validations = buildValidations(Validations, {
//   name: validator('presence', true),
//   password: [
//     validator('presence', true),
//     validator('length', {
//       min: 8,
//       max: 12
//     })
//   ],
//   email: [
//     validator('presence', true),
//     validator('format', { type: 'email' })
//   ],
// });


export default Ember.Component.extend({
	
	actions: {
		createUser: function(model) {
			var user = this.get('model');
			this.sendAction('createUser', user);
		},

		cancelCreate: function(model) {
			this.get('model').rollbackAttributes();
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
