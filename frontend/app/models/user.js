import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';
import Ember from 'ember';

var Validations = buildValidations({
  name: validator('presence', true),
  password: [
    validator('presence', true),
    validator('length', {
      min: 8,
      max: 12
    })
  ],
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
});

console.log('Model fired');
export default DS.Model.extend(Validations, {
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
  updated_at: DS.attr('date'),
  amount: Ember.computed('revenue', function() {
    var total = this.get('revenue') * 100;
    return total;
  })
});
