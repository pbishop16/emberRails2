import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
	authorize: function(jqXHR, requestOptions) {
		var accessToken = this.get('session.content.secure.token');
		var accessEmail = this.get('session.content.secure.current_user_email');
		if (this.get('session.isAuthenticated')) {
			jqXHR.setRequestHeader('Authorization', 'Token token=' + accessToken + ', email=' + accessEmail );
			console.log('Authorize request.');
		}
	}
});
