import styled from '@emotion/styled';

const Table = styled.table`
  margin: 60px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const HeadItem = styled.th`
  width: 150px;
  background-color: blueviolet;
  font-size: 24px;
  padding: 12px;
`;
const BodyItem = styled.td`
  width: 150px;
  background: #fdf4f4;
  text-align: center;
  font-size: 18px;
  padding: 12px;
`;
export { Table, HeadItem, BodyItem };
