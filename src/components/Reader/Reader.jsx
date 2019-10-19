import React from 'react';
import PropTypes from 'prop-types';
import style from './Reader.module.css';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

const Reader = ({ items, count, changeCount }) => (
  <div className={style.reader}>
    <Publication item={items[count]} />
    <Counter items={items} count={count} changeCount={changeCount} />
  </div>
);

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  count: PropTypes.number.isRequired,
  changeCount: PropTypes.func.isRequired,
};

export default Reader;
