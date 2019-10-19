import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.module.css';
import Controls from '../Controls/Controls';

const Counter = ({ count, items, changeCount }) => (
  <div>
    <p className={style.counter}>
      {count + 1}/{items.length}
    </p>
    <Controls changeCount={changeCount} count={count} items={items} />
  </div>
);

Counter.propTypes = {
  changeCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Counter;
