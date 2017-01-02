import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class PubSubTodoApp extends Component {
  render() {
    return (
      <div className="ui main text container main-content">
        <h1>Todo Example (GraphQL with Subscription)</h1>
        <AddTodo/>
        <Divider/>
        <TodoList/>
      </div>
    );
  }
}

export default PubSubTodoApp;
