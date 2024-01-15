import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { VISIBILITY_TYPES } from '../../utils/visibilityTypes';
import styles from './VisibilityToolbar.module.css';

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

const VisibilityToolbar = ({ visibility, handleSetVisibility }) => {
  const getButtonStyle = (visibilityValue, value) => {
    if (visibilityValue === value) return styles['activeButton'];
    else return null;
  };

  return (
    <ToggleButtonGroup
      type='radio'
      name='visibilityOptions'
      defaultValue={ALL}
      className={styles['toggle-button-group']}
    >
      <ToggleButton
        value={ALL}
        size='sm'
        className={`toggle-button ${getButtonStyle(visibility, ALL)}`}
        onClick={() => {
          handleSetVisibility(ALL);
        }}
      >
        All
      </ToggleButton>
      <ToggleButton
        value={ACTIVE}
        size='sm'
        className={`toggle-button ${getButtonStyle(visibility, ACTIVE)}`}
        onClick={() => {
          handleSetVisibility(ACTIVE);
        }}
      >
        Active
      </ToggleButton>
      <ToggleButton
        value={COMPLETED}
        size='sm'
        className={`toggle-button ${getButtonStyle(visibility, COMPLETED)}`}
        onClick={() => {
          handleSetVisibility(COMPLETED);
        }}
      >
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

VisibilityToolbar.propTypes = {
  visibility: PropTypes.string,
  handleSetVisibility: PropTypes.func,
};

export default VisibilityToolbar;
