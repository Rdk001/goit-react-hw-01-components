import styled from '@emotion/styled';

const Card = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const Description = styled.div`
  background: rgb(255, 245, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
`;
const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
`;
const Name = styled.p`
  color: rgb(15, 14, 14);
  font-size: 24px;
`;
const Tag = styled.p`
  color: rgb(187, 187, 187);
  font-size: 18px;
`;
const Location = styled.p`
  color: rgb(187, 187, 187);
  font-size: 18px;
`;
const Stats = styled.ul`
  background: rgb(214, 207, 207);
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
`;
const Label = styled.span`
  font-size: 20px;
`;
const Quantity = styled.span`
  color: rgb(5, 5, 41);
  font-weight: 500;
`;
export {
  Card,
  Description,
  Avatar,
  Name,
  Stats,
  Tag,
  Location,
  Item,
  Label,
  Quantity,
};
