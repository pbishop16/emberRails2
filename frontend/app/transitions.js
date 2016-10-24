export default function() {

	this.setDefault({'duration': 500});

	this.transition(
		this.hasClass('user-transition1'),
		this.toRoute('users'),
		this.use('toRight')
		// ,this.debug()
	);

	this.transition(
		this.hasClass('user-transition1'),
		this.toRoute('users.user'),
		this.use('toRight')
		// ,this.debug()
	);

	this.transition(
		this.hasClass('user-transition1'),
		this.fromRoute('users.user'),
		this.use('toRight')
		// ,this.debug()
	);

	// this.transition(
	// 	this.hasClass('user-transition1'),
	// 	this.fromRoute('users.user.edit'),
	// 	this.use('toRight'),
	// 	this.debug()
	// );

	this.transition(
		this.hasClass('user-transition1'),
		this.toRoute('users.new'),
		this.use('toRight'),
		this.debug()
	);

	this.transition(
		this.hasClass('user-transition2'),
		this.hasClass('user-transition1'),
    this.fromRoute('users.user.edit'),
    this.toRoute('users.new'),
    this.use('toRight'),
    this.debug()
  );

	this.transition(
		this.hasClass('user-transition2'),
		this.toRoute('users.user.edit'),
		this.use('toDown'),
		this.debug()
	);

	this.transition(
		this.hasClass('user-transition2'),
		this.fromRoute('users.user.edit'),
		this.use('toUp'),
		this.debug()
	);

	this.transition(
		this.hasClass('user-transition2'),
		this.toRoute('users.new'),
		this.use('toUp'),
		this.debug()
	);

}