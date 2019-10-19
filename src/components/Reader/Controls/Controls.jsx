import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';

const Controls = ({ changeCount, count, items }) => (
  <section className={style.controls}>
    <button
      type="button"
      name="decrement"
      className={style.button}
      disabled={count === 0}
      onClick={changeCount}
    >
      Назад
    </button>
    <button
      type="button"
      name="increment"
      className={style.button}
      disabled={count === items.length - 1}
      onClick={changeCount}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
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

export default Controls;
