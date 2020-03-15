Cypress.Commands.add('label', label => cy.get(`[data-test=${label}]`));

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorageCache', () => {
	Object.keys(localStorage).forEach(key => {
		LOCAL_STORAGE_MEMORY[key] = localStorage[key];
	});
});

Cypress.Commands.add('restoreLocalStorageCache', () => {
	Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
		localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
	});
});