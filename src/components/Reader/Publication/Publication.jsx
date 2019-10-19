import React from 'react';
import PropTypes from 'prop-types';
import style from './Publication.module.css';

const Publication = ({ item }) => (
  <article className={style.publication} data-id={item.id}>
    <h2 className={style.title}>{item.title}</h2>
    <p className={style.text}>{item.text}</p>
  </article>
);

Publication.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
