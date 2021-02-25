import React from 'react';
import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.svg';

const FriendListItem = function ({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={s.item}>
      <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
FriendListItem.defaultProps = {
  avatar: `${defaultImage}`,
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default FriendListItem;
