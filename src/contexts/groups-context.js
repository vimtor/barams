import { h, createContext } from 'preact';
import { useContext, useReducer } from 'preact/hooks';

const GroupsContext = createContext();

function groupsReducer(state, action) {
	switch (action.type) {
		case 'ADD': {
			return [
				...state,
				action.payload
			];
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

const GroupsProvider = ({ children }) => {
	const [groups, dispatch] = useReducer(groupsReducer, []);

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