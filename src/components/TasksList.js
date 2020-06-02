import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Timer from './Timer';

const mapDispatchtoProps = {};
function mapStatetoProps(state) {
  return {
    loading: state.app.loading,
    tasks: state.tasks.tasks.sort((a, b) => b.created - a.created),
    filter: state.tasks.currentFilter,
  };
}

function TasksList({ loading, tasks, filter }) {
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
          <th scope='row'>
            <Link to={`/tasks/${task.objectId}`}>{task.TITLE}</Link>
          </th>
          <td>
            {task.PROJECT_ID ? (
              <Link to={`/projects/${task.PROJECT_ID}`}>
                {task.PROJECT_NAME}
              </Link>
            ) : (
              '--------------'
            )}
          </td>

          <td>
            <Timer
              status={task.STATUS}
              spentTime={task.SPENT_TIME}
              start={task.START_TIME}
              getTime={false}
            />
          </td>
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
