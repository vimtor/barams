/// <reference types="Cypress" />

describe('My First Test', () => {
	it('loads the page', () => {
		cy.visit('/');
	});
});