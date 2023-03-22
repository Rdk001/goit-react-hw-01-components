import { Item, Status, Online } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      {isOnline ? <Status>1</Status> : <Online>1</Online>}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};

export default FriendListItem;
