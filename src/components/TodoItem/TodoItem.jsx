import React from 'react';
import PropTypes from 'prop-types';
import XIconSrc from '../../images/x.svg';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
  return (
    <li className={styles['todo-item']} id={todo.id}>
      <div className={styles['todo-item__wrapper']}>
        <input
          type='checkbox'
          checked={todo.done ? true : null}
          onChange={() => toggleTodo(todo.id)}
        />
        <p className={todo.done ? styles['todo-item-done'] : null}>
          {todo.text}
        </p>
      </div>
      <button
        className={styles['todo-item__delete']}
        onClick={() => removeTodo(todo.id)}
      >
        <img src={XIconSrc} alt='' />
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
};

export default TodoItem;
