import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { msToTime } from '../utils/time';

const mapDispatchtoProps = {};
function mapStatetoProps(state) {
  console.log(state.tasks.tasks.length);
  return {
    loading: state.app.loading,
    tasks: state.tasks.tasks.sort((a, b) => b.created - a.created),
    filter: state.tasks.currentFilter,
  };
}

function TasksList({ loading, tasks, filter }) {
  //.filter(({ STATUS }) => STATUS === this.filter),

  if (loading) {
    return <Loader />;
  }

  const status = {
    ALL: {
      class: '',
      text: 'All tasks',
      included: ['OPEN', 'IN_WORK', 'PAUSED', 'FINISHED'],
    },
    OPEN: {
      class: 'danger',
      text: 'Open',
      included: ['OPEN', 'IN_WORK', 'PAUSED'],
    },
    IN_WORK: {
      class: 'info',
      text: 'In work',
      included: ['IN_WORK'],
    },
    PAUSED: {
      class: 'warning',
      text: 'Paused',
      included: ['PAUSED'],
    },
    FINISHED: {
      class: 'secondary',
      text: 'Finished',
      included: ['FINISHED'],
    },
  };

  function showTableRow() {
    const filteredTasks = status[filter].included.reduce(
      (acc, filterName) => [
        ...acc,
        ...tasks.filter(({ STATUS }) => STATUS === filterName),
      ],
      []
    );

    return filteredTasks.map((task) => {
      return (
        <tr
          key={task.objectId}
          className={`table-active ${
            task.STATUS === 'FINISHED' ? 'finished' : ''
          }`}
        >
          <th scope='row'>{task.TITLE}</th>
          <td>
            {task.PROJECT ? (
              <Link to={`/projects/${task.PROJECT.objectId}`}>
                {task.PROJECT.NAME}
              </Link>
            ) : (
              '--------------'
            )}
          </td>

          <td>{msToTime(task.SPENT_TIME)}</td>
          <td>
            <span className={`badge badge-${status[task.STATUS].class}`}>
              {status[task.STATUS].text}
            </span>
          </td>
        </tr>
      );
    });
  }

  return tasks.length > 0 ? (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Project</th>
          <th scope='col'>Spent time</th>
          <th scope='col'>Status</th>
        </tr>
      </thead>
      <tbody>{showTableRow()}</tbody>
    </table>
  ) : (
    'No tasks '
  );
}

export default connect(mapStatetoProps, mapDispatchtoProps)(TasksList);
