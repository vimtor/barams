import { h, createContext } from 'preact';
import { useContext, useEffect, useReducer } from 'preact/hooks';

const GroupsContext = createContext();

function groupsReducer(state, action) {
	switch (action.type) {
		case 'ADD': {
			const groups = [
				...state,
				action.payload,
			];

			if (process.env.NODE_ENV === 'production') {
				chrome.storage.sync.set({ groups });
			}
			else {
				localStorage.setItem('groups', JSON.stringify(groups));
			}

			return groups;
		}
		case 'SET': {
			return action.payload;
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

const GroupsProvider = ({ children }) => {
	const [groups, dispatch] = useReducer(groupsReducer, []);

	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			chrome.storage.sync.get(['groups'], payload => {
				if (payload.groups) {
					dispatch({ type: 'SET', payload: payload.groups });
				}
			});
		}
		else {
			const payload = JSON.parse(localStorage.getItem('groups'));

			if (payload) {
				dispatch({ type: 'SET', payload });
			}
		}
	}, [dispatch]);

	return (
		<GroupsContext.Provider value={{ groups, dispatch }}>
			{children}
		</GroupsContext.Provider>
	);
};

export const useGroups = () => {
	const context = useContext(GroupsContext);

	if (!context) {
		throw new Error('useGroups must be used within GroupsProvider');
	}

	return context;
};

export default GroupsProvider;