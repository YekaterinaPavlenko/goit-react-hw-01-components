import React from 'react';
import st from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={st.history}>
      <thead>
        <tr>
          <th className={st.th}>Type</th>
          <th className={st.th}>Amount</th>
          <th className={st.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td className={st.td}>{item.type}</td>
              <td className={st.td}>{item.amount}</td>
              <td className={st.td}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
