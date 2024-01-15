import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <ul className={styles['todo-list']}>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
};

export default TodoList;
