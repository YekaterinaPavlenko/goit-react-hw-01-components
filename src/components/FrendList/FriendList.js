import React from 'react';
import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';

// console.log(s);

const FriendList = function ({ avatar, name, isOnline }) {
  console.log(isOnline);
  return (
    <ul className={s.friendList}>
      <li className={s.item}>
        <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
      </li>
    </ul>
  );
};
// FriendList.defaultProps = {
//     avatar = defaultImage,
// };
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendList;
