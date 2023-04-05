describe('Users', () => {
	beforeEach(() => {
		cy.visit('/users');
	});

	it('should have h2 tag', () => {
		cy.get('.app-users')
			.find('app-user')
			.first()
			.find('h2')
			.should('exist');
	});

	it('should have label "User:"', () => {
		cy.get('.app-users')
			.find('app-user')
			.first()
			.find('p')
			.first()
			.contains('User:');
	});

	it('should have label "Email:"', () => {
		cy.get('.app-users')
			.find('app-user')
			.first()
			.find('p')
			.eq(1)
			.contains('Email:');
	});

	it('should have label "Contact:"', () => {
		cy.get('.app-users')
			.find('app-user')
			.first()
			.find('p')
			.eq(2)
			.contains('Contact:');
	});

	it('should have p tag inside company element', () => {
		cy.get('.app-users')
			.find('app-user')
			.first()
			.find('.app-company')
			.within(() => {
				cy.get('span').should('exist');
			});
	});

	it('should have button with Label "Show Details"', () => {
		cy.get('.app-users')
			.find('app-user')
			.first()
			.find('button')
			.contains('Show Details');
	});

	it('should take to user detail page by clicking on "Show Details" button', () => {
		cy.get('.app-users')
			.find('app-user')
			.first()
			.find('button')
			.contains('Show Details');
	});
});
