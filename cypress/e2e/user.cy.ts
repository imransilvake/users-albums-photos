describe('User', () => {
	beforeEach(() => {
		cy.visit('/users/1');
	});

	it('should have title "Albums"', () => {
		cy.get('.app-albums').find('.app-head').find('h2').should('exist');
	});

	it('should have each album with title and description', () => {
		cy.get('.app-albums')
			.find('.app-album')
			.first()
			.within(() => {
				cy.get('h4').should('exist');
				cy.get('p').should('exist');
			});
	});

	it('should have each album with "Fetch Photos" button', () => {
		cy.get('.app-albums')
			.find('.app-album')
			.first()
			.within(() => {
				cy.get('button').contains('Fetch Photos');
				cy.get('button').should('exist');
			});
	});

	it('should have button "Fetch Photos" disabled after click', () => {
		cy.get('.app-albums').find('.app-album').eq(2).find('button').click();
		cy.get('.app-albums')
			.find('.app-album')
			.eq(2)
			.find('button')
			.should('be.disabled');
	});

	it('should contains photos after photos fetch', () => {
		cy.get('.app-albums').find('.app-album').eq(2).find('button').click();
		cy.get('.app-albums')
			.find('.app-album')
			.find('.app-photos')
			.find('.app-photo')
			.find('a')
			.find('img')
			.should('exist');
	});
});
