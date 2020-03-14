export default () => {
	const get = () => {
		let url = window.location.href;

		if (process.env.NODE_ENV === 'production') {
			chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
				url = tabs[0].url;
			});
		}

		return url;
	};
  
	const set = url => {
		window.location.href = url;
	};
  
	const reload = () => {
		window.location.reload();
	};
  
	return { get, set, reload };
};