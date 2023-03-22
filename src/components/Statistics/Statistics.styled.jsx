import styled from '@emotion/styled';

const Section = styled.section`
  margin-top: 60px;
  text-align: center;
`;
const Title = styled.h2`
  color: aliceblue;
  background-color: gray;
  padding: 25px;
`;
const StatList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Item = styled.li`
  width: 100px;
  height: 50px;
  background-color: gainsboro;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;
const Percentage = styled.span`
  font-size: 24px;
  color: #0f0f0f;
`;
export { Section, Title, StatList, Item, Percentage };
