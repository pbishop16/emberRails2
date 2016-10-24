import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  notify: Ember.inject.service(),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
      this.transitionToRoute('index');
      this.get('notify').success('Successfully logged out.');
    }
  }
});
