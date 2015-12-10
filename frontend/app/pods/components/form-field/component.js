import Ember from 'ember';

export default Ember.Component.extend({
	labelLabel: (function(){
		return this.get('label').capitalize()
	}).property('label'),

	inputId: (function(){
		return `input${this.get('label').capitalize()}`
	}).property('label'),
	
	inputType: (function(){
		if (this.get('label')=='password'){
			return 'password'
		} else {
			return 'text'
		}
	}).property('label')

});
