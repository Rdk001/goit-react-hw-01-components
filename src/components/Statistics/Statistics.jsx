import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  Item,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title ? <Title>{title}</Title> : ''}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <span>{label}</span>
            <Percentage>{percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
export default Statistics;
