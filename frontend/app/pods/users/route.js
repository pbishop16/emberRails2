import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";


export default Ember.Route.extend(InfinityRoute, {
	// perPageParam: "per",
	// pageParam: 'pg',
	totalPagesParam: 'meta.total_pages',

 	model: function() {
    /* Load pages of the Product Model, starting from page 1, in groups of 12. */
    return this.infinityModel("user", { perPage: 12, startingPage: 1 });
    // return this.store.findAll('user');

  }
  
});


