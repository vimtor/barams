const updateParameters = (url, params) => {
	const args = params.map(({ name, value }) => `${name}=${value}`).join('&');

	if (url.includes('?')) {
		if (url.endsWith('?')) {
			return url + args;
		}

		return `${url}&${args}`;
	}

	return `${url}?${args}`;
};

export default params => {
	if (process.env.NODE_ENV === 'production') {
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			const { url, id } = tabs[0];
			chrome.tabs.update(id, { url: updateParameters(url, params) });
		});
	}
	else {
		window.location.href = updateParameters(window.location.href, params);
		window.location.reload();
	}
};