import Ember from 'ember';

export default Ember.Controller.extend({
  userCount: Ember.computed('model', function() {
    return this.get('model.meta.total_count');
  }),
});
