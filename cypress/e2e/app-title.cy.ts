describe('App', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should have app title "Users Center"', () => {
		cy.contains('Users Center');
	});
});
