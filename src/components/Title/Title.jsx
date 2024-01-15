import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

export default class Title extends React.Component {
  render() {
    return <h1 className={styles.title}>{this.props.text}</h1>;
  }
}

Title.propTypes = {
  text: PropTypes.string,
};
