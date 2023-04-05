describe('User', () => {
	beforeEach(() => {
		cy.visit('/users/1');
	});

	it('should have "Create Album" button', () => {
		cy.get('.app-albums').find('.app-head').find('button').should('exist');
	});

	it('should create new album and show it in the list at the top', () => {
		cy.get('.app-albums').find('.app-head').find('button').click();
		cy.get('.app-album-create')
			.find('form')
			.within(() => {
				cy.get('input[name="title"]').type('My new album');
				cy.root().submit();
			});
		cy.get('.app-albums')
			.find('.app-album')
			.first()
			.within(() => {
				cy.get('h4').should('exist');
				cy.get('p').should('exist');
				cy.get('p').contains('My new album');
			});
	});
});
