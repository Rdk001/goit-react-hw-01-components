import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr>
          <th className={css.headItem}>Type</th>
          <th className={css.headItem}>Amount</th>
          <th className={css.headItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.bodyItem}>{type}</td>
            <td className={css.bodyItem}>{amount}</td>
            <td className={css.bodyItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
