import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Redux reducers must be pure functions. A pure function is a function that always returns the same result given the same
// arguments and has no side effects. Redux reducers must always return the next state and should not mutate anything other
// than the state that they are responsible for. This is a fundamental principle of Redux and is what allows Redux to have
// predictable behavior. It does not mutate its arguments, perform I/O operations, or affect global variables or
// states. In Redux, the reducer function takes the previous state and an action, and returns the next state, making it
// predictable and easy to test. The reducer function should remain pure for Redux to work correctly.

// In this example, the fetchData reducer is not a pure function because it performs an asynchronous fetch operation. This is a
// side effect, which is not allowed in a Redux reducer. Therefore, the fetchData function should not be defined in the
// reducers field of createSlice.

// Redux Toolkit provides the createAsyncThunk function to handle asynchronous operations.This function returns a Redux Thunk
// action creator, which can be dispatched like a regular action, but can also perform asynchronous operations and dispatch
// other actions.

// In normal circumstances, an action creator returns a plain object that is then dispatched to the reducer. This action object
// typically includes a type property and optionally a payload property. However, with Redux Thunk, an action creator instead
// returns a function (the thunk) which can perform asynchronous operations and dispatch multiple actions.

// Redux Thunk is a middleware that enhances the dispatch function of the Redux store. It does this by intercepting every
// action that is dispatched, and if the action is a function (i.e., a thunk), it calls this function by sending dispatch
// function and getState function as arguments to the thunk. Like that:

const thunk = store => next => action => {
    // If the action is a function, call it with dispatch and getState
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }

    // Otherwise, continue processing this action as usual
    return next(action);
};

// If the dispatched action is a plain object, the middleware doesn't interfere and the action is sent to the reducer as usual.

// A Redux Thunk action creator is a function that returns another function, often referred to as a "thunk". The thunk is a
// function that can perform side effects, such as asynchronous API calls, and it can dispatch actions to the Redux store.

// This fetchData function will return a thunk action when it's called. This thunk action is a function that dispatches actions
// to your Redux store. Here's a rough approximation of what fetchData might look like if you were to implement it manually:

function fetchData() {
    // This is the Redux Thunk action creator
    return async function (dispatch) {
        // This is the thunk itself
        dispatch({ type: 'data/fetch/pending' });
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            dispatch({ type: 'data/fetch/fulfilled', payload: data });
        } catch (error) {
            dispatch({ type: 'data/fetch/rejected', error });
        }
    };
}

// When you call fetchData() in your code, it doesn't immediately make the API call. Instead, it returns the thunk action - the 
// inner function that takes dispatch as an argument. It's this thunk action that gets dispatched to the Redux store.

// Action to fetch data
const fetchData = createAsyncThunk('data/fetch', async () => {
    const response = await fetch('https://api.example.com/data')
    const data = await response.json()
    return data
})


// builder is an object that lets you define case reducers for actions. It's received as an argument by the extraReducers
// function. It has an addCase method that lets you define a case reducer for a specific action.A case reducer is a function
// that handles a specific action type in the Redux reducer. When you use the createAsyncThunk function from Redux Toolkit, it
// automatically dispatches actions with these types:

// 1. A pending action when the async operation starts: { type: 'data/fetch/pending' }
// 2. A fulfilled action when the async operation succeeds: { type: 'data/fetch/fulfilled', payload: data }
// 3. A rejected action when the async operation fails: { type: 'data/fetch/rejected', error: error }

// These action types are also automatically generated based on the action type prefix you pass to createAsyncThunk. The 
// builder.addCase methods in the extraReducers field of createSlice are used to handle these actions in the reducer. If you 
// don't provide these addCase methods, the actions will still be dispatched, but they won't have any effect on the state 
// because the reducer won't handle them.

// Slice
const dataSlice = createSlice({
    name: 'data',
    initialState: { items: [], status: 'idle', error: null },
    reducers: { },
    extraReducers: builder => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched data to the array
                state.items = state.items.concat(action.payload)
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const { reducer } = dataSlice
export { fetchData }
