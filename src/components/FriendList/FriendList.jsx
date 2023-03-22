// import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </>
  );
};

// FriendList.propTypes = {
//   id: PropTypes.number,
//   isOnline: PropTypes.bool.isRequired,
//   name: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
// };

export default FriendList;
