/// <reference types="Cypress" />
import { updateParameters } from '../../src/utils/set-params';

describe('updateParameters', () => {
	it('appends parameters correctly', () => {
		const url = 'https://github.com/';
		const parameters = [{ name: 'user', value: 'papeloto' }, { name: 'repo', value: 'barams' }];
    
		const result = updateParameters(url, parameters);
		expect(result).to.eq(url + '?user=papeloto&repo=barams');
	});

	it('appends parameters when another ones exist', () => {
		const url = 'https://github.com/?user=papeloto';
		const parameters = [{ name: 'repo', value: 'barams' }];
    
		const result = updateParameters(url, parameters);
		expect(result).to.eq(url + '&repo=barams');
	});
  
	it('overrides parameters if append is false', () => {
		const baseUrl = 'https://github.com/';
		const url = baseUrl + '?user=papeloto';
		const parameters = [{ name: 'repo', value: 'barams' }];
    
		const result = updateParameters(url, parameters, false);
		expect(result).to.eq(baseUrl + '?repo=barams');
	});
});