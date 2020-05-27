import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import { changeTaskFilter } from '../redux/actions';

const mapDispatchtoProps = {
  changeTaskFilter,
};
const mapStatetoProps = (state) => {
  return {
    loading: state.app.loading,
    tasks: state.tasks.tasks.sort((a, b) => b.created - a.created),
    filter: state.tasks.currentFilter,
  };
};

const filterValues = [
  {
    value: 'ALL',
    text: 'ALL TASKS',
    badgeClass: 'success',
    status: ['OPEN', 'IN_WORK', 'PAUSED', 'FINISHED'],
  },
  {
    value: 'OPEN',
    text: '- OPEN',
    badgeClass: 'danger',
    status: ['OPEN', 'IN_WORK', 'PAUSED'],
  },

  {
    value: 'IN_WORK',
    text: ' ---- in work',
    badgeClass: 'info',
    status: ['IN_WORK'],
  },
  {
    value: 'PAUSED',
    text: ' ---- paused',
    badgeClass: 'warning',
    status: ['PAUSED'],
  },
  {
    value: 'FINISHED',
    text: ' - FINISHED',
    badgeClass: 'secondary',
    status: ['FINISHED'],
  },
];

function TasksFilter({ loading, tasks, filter, changeTaskFilter }) {
  useEffect(() => {
    localStorage.setItem('tasksFilter', filter);
  }, [filter]);
  if (loading) {
    return <Loader />;
  }

  function showFilterValues() {
    return filterValues.map(({ value, text, badgeClass, status }) => {
      const count = status.reduce(
        (acc, filterName) =>
          acc + tasks.filter(({ STATUS }) => STATUS === filterName).length,
        0
      );
      return (
        <li
          onClick={() => {
            changeTaskFilter(value);
          }}
          key={value}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            filter === value ? 'active' : ''
          }`}
        >
          {text}
          <span className={`badge badge-${badgeClass} badge-pill`}>
            {count}
          </span>
        </li>
      );
    });
  }

  return (
    <ul className='list-group'>
      <li className='list-group-item d-flex justify-content-between align-items-center status'>
        Status
      </li>
      {showFilterValues()}
    </ul>
  );
}
export default connect(mapStatetoProps, mapDispatchtoProps)(TasksFilter);
