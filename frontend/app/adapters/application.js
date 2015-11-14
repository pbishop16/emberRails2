import DS from 'ember-data';
import config from './../config/environment';
console.log('Adapter Fired');

export default DS.RESTAdapter.extend({
	host: config.hostSet,
	namespace: 'api/v1'
});
