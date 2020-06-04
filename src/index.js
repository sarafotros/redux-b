// import configureStore from "./store/configureStore";
// import { loadBugs, assignBugToUser } from "./store/bugs";

// const store = configureStore();

// UI Layer
// store.dispatch(loadBugs());

// setTimeout(() => store.dispatch(assignBugToUser(1, 5)), 2000);

import store from './store';
import { bugAdded } from './actions';

const unsubscribe = store.subscribe(() => {
	console.log('store changed', store.getState());
});

store.dispatch( bugAdded('Bug1'))

unsubscribe();

store.dispatch({
	type: actions.BUG_REMOVED,
	payload: {
		id: 1,
	},
});

console.log('store changed', store.getState());
