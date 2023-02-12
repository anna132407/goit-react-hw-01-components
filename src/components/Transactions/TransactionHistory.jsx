import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableCaption,
  TableCaptionCeil,
  TableBodyCeil,
  TableBodyRow,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionTable className="transaction-history">
      <TableCaption>
        <tr>
          <TableCaptionCeil>Type</TableCaptionCeil>
          <TableCaptionCeil>Amount</TableCaptionCeil>
          <TableCaptionCeil>Currency</TableCaptionCeil>
        </tr>
      </TableCaption>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyRow key={id}>
            <TableBodyCeil>{type}</TableBodyCeil>
            <TableBodyCeil>{amount}</TableBodyCeil>
            <TableBodyCeil>{currency}</TableBodyCeil>
          </TableBodyRow>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
