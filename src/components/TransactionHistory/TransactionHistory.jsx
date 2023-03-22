import PropTypes from 'prop-types';
import { Table, HeadItem, BodyItem } from './TransactionHistory.styled';
const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <BodyItem>{type}</BodyItem>
            <BodyItem>{amount}</BodyItem>
            <BodyItem>{currency}</BodyItem>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
export default TransactionHistory;
