import Ember from 'ember';

export default Ember.Controller.extend({

	columns: [
    {
      'propertyName': "id",
      'title': "ID"
    },
    {
      'propertyName': "name",
      'title': "First Name"
    },
    {
      'propertyName': "company",
      'title': "Last Name"
    },
    {
      'propertyName': "sector",
      'title': "Sector"
    }
    ,
    {
      "title": "Delete",
      "template": "custom/delete"
    }
  ]
  
});
