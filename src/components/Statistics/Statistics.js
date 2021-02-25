import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';
const colors = [
  '#00ffff',
  '#f2a1f5',
  '#9cf578',
  '#b44fee',
  '#f1bb7c',
  '#473bf3',
  '#3bd7f3',
  '#f54141',
  '#41f59b',
];

const randomColor = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Task 3 - Friendlist</h2>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(el => {
          // console.log(el.id);
          const style = {
            background: `${colors[randomColor(0, colors.length - 1)]}`,
          };
          const { label, percentage, id } = el;
          return (
            <li key={id} className={s.item} style={style}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
// Statistics.defaultProps = {
//   title: '',
// };
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
