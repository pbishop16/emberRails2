import DS from 'ember-data';

console.log('Model fired');
export default DS.Model.extend({
  name: DS.attr('string'), 
  email: DS.attr('string'), 
  investor_funded: DS.attr('boolean'), 
  company: DS.attr('string'), 
  sector: DS.attr('string'), 
  customers: DS.attr('number'), 
  revenue: DS.attr('number'), 
  company_description: DS.attr('string'), 
  password: DS.attr('string'), 
  created_at: DS.attr('date'), 
  updated_at: DS.attr('date')
});