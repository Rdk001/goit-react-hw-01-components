import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <>
      <List>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </List>
    </>
  );
};

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default FriendList;
