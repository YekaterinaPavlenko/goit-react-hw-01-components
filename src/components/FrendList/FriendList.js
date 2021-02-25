import React from 'react';
import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = function ({ friends }) {
  return (
    <ul className={s.friendList}>
      <h2 className={s.sectionTitle}>Task 3 - Friendlist</h2>
      {friends.map(friend => {
        // console.log(friend.id);
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default FriendList;
