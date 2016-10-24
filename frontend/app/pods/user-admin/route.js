import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
  	return this.store.findAll('user');
  },
  actions: {
    deleteRecord(record) {
      let content = this.get('model');
      this.set('model', content.without(record));
    }
  }

});
