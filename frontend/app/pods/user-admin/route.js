import Ember from 'ember';

export default Ember.Route.extend({
	
  model() {
  	return this.store.findAll('user');
  },

  actions: {
    deleteRecord: function(record) {
      var content = this.get('model');
      this.set('model', content.without(record));
    }
  }
  // ,

  // columns: [
  //   {
  //     'propertyName': "id",
  //     'title': "ID"
  //   },
  //   {
  //     'propertyName': "name",
  //     'title': "First Name"
  //   },
  //   {
  //     'propertyName': "company",
  //     'title': "Last Name"
  //   },
  //   {
  //     'propertyName': "sector",
  //     'title': "Sector"
  //   }
  //   // ,
  //   // {
  //   //   "title": "Delete",
  //   //   "template": "custom/delete"
  //   // }
  // ]

  
  
});
