import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticTitle,
  StatisticList,
  StatListItem,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from './randomHexcolor';

export function Statistics({ title, stats }) {
  return (
    <StatisticBox className="statistics">
      {title && <StatisticTitle className="title">{title}</StatisticTitle>}

      <StatisticList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatListItem
            className="item"
                key={id}
                style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className="label">{label}</span>
            <Percentage className="percentage">{percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatisticList>
    </StatisticBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};