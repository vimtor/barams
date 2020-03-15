/// <reference types="Cypress" />

describe('create group', () => {
	beforeEach(() => {
		cy.restoreLocalStorageCache();
	});

	afterEach(() => {
		cy.saveLocalStorageCache();
	});

	before(() => {
		cy.clearLocalStorage();
	});

	it('loads the page', () => {
		cy.visit('/');
	});

	it('no group exist by default', () => {
		cy.label('group-grid').children().should('have.length', 0);
	});

	it('navigates towards creation page', () => {
		cy.label('create-button').click();
		cy.url().should('include', 'create');
	});

	it('cannot submit with empty fields', () => {
		cy.label('confirm-button').click();
		cy.url().should('include', 'create');
	});
	
	it('name can be written', () => cy.fixture('group').then(({ name }) => {
		cy.label('name-input').type(name);
	}));

	it('multiple params can be written', () => cy.fixture('group').then(({ parameters }) => {
		parameters.forEach(({ name, value }, idx) => {
			cy.label(`param-name-input-${idx}`).type(name);
			cy.label(`param-value-input-${idx}`).type(value);
		});
	}));
	
	it('creates the group on submit', () => {
		cy.label('confirm-button').click();

		return cy.fixture('group').then(({ name }) => {
			cy.contains(name);
		});
	});

	it('canceling does not create any new group', () => {
		cy.label('create-button').click();
		cy.label('cancel-button').click();

		cy.label('group-grid').children().should('have.length', 1);
	});

	it('populates the url with the supplied parameters', () => cy.fixture('group').then(({ name, url }) => {
		cy.contains(name).click();
		cy.url().should('include', url);
	}));

	it('does not erase created groups when reloading', () => cy.fixture('group').then(({ name }) => {
		cy.contains(name);
	}));
});