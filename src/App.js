import './App.css';

import ComponentA from './PureRedux/ComponentA';
import ComponentB from './PureRedux/ComponentB';

import { Provider } from 'react-redux';
// import store from './ReactRedux/store';
import TodoInput from './ReactRedux/TodoInput';
import TodoList from './ReactRedux/TodoList';

import AddTodo from './components/AddTodo';
import TodoItems from './redux-toolkit/TodoItems';
import store from './redux-toolkit';


function App() {
  return (
    <div className="App">
      {
        //#region pure-redux-example
      }

      {/* <ComponentA />
        <ComponentB /> */}

      {
        //#endregion
      }


      {
        //#region react-redux-example

        // In a pure Redux setup, you have to import the store into every component that needs to interact with it.
        // With react-redux, you use the Provider component at the root of your app to make the store available to all
        // components in the component tree.

        // Also 'react-redux' includes performance optimizations that can make your app run more efficiently. For example, it
        // ensures that components only re-render when necessary—that is, when the part of the state that they're interested in
        // changes. With a manual subscription, you would have to implement these optimizations yourself.

        // Under the hood, Provider uses the React context API to pass the Redux store through your component hierarchy.  
        // It uses the React.createContext API to create a new React context.
      }

      {/* <Provider store={store}>
        <TodoInput />
        <TodoList />
      </Provider> */}

      {
        //#endregion
      }


      {
        //#region redux-toolkit-example
      }

      <Provider store={store}>
        <AddTodo />
        <TodoItems />
      </Provider>

      {
        //#endregion
      }
    </div>
  );
}

export default App;
