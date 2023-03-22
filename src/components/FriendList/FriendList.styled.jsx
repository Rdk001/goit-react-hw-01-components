import styled from '@emotion/styled';
const List = styled.ul`
  margin-top: 60px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: whitesmoke;
  width: 200px;
`;
const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  color: red;
`;
const Online = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
  color: green;
`;
export { List, Item, Status, Online };
