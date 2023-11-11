import { Link } from 'react-router-dom';
import { headersData } from '../../textData/textData';
import { flattenNestedLists } from '../../utils/flatten';
import { ResponseTask, Task } from '../../types/responseTask';
import {
  convertFioToFi,
  graidTable,
  priorityTable,
  statusColor,
} from '../../utils/taskManagerUtils';
interface TaskTableProps {
  data: ResponseTask[];
}

const TaskTable: React.FC<TaskTableProps> = ({ data }) => {
  const normalizedData: Task[] = flattenNestedLists(
    data.map((obj) => {
      const tasks = obj.tasks.map((task) => ({ ...task, worker: obj.worker }));

      return tasks;
    }),
  );
  const headers = headersData;

  return (
    <table width={'100%'}>
      <thead>
        <tr>
          {headers.map((header) => (
            <td
              key={header}
              className={` text-[#939393] max-w-[140px] text-sm ${
                header === 'статус'
                  ? 'min-w-[130px]'
                  : header === 'приоритет'
                  ? 'min-w-[120px]'
                  : header.includes('время')
                  ? 'min-w-[110px]'
                  : 'min-w-[100px]'
              }`}>
              {header}
            </td>
          ))}
        </tr>
      </thead>

      <tbody>
        {normalizedData.map((task) => (
          <tr
            key={task.id}
            className="text-sm cursor-pointer hover:text-[#6c6ad4] transition-all duration-75">
            <td className="pt-4">
              <Link to={{ pathname: `/task-manager/${task.id}` }} state={task}>
                {' '}
                <div className="w-[14rem] flex items-center py-3 ">
                  <img
                    className="w-12 h-12 rounded-full mr-3"
                    src="https://img.freepik.com/free-photo/a-heart-shaped-cloud-is-in-the-sky-with-the-word-love-on-it_1340-34492.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699574400&semt=sph"
                    alt="avatar"
                  />
                  <div>
                    <h1>{convertFioToFi(task.fio)}</h1>
                    <p className="text-sm text-[#939393]">
                      {graidTable[+task.worker.graid - 1]}
                    </p>
                  </div>
                </div>
              </Link>
            </td>
            <td className="max-w-[11rem]">
              <Link to={{ pathname: `/task-manager/${task.id}` }} state={task}>
                {task.name}
              </Link>
            </td>
            <td>
              <Link to={{ pathname: `/task-manager/${task.id}` }} state={task}>
                {' '}
                <div
                  className="px-2 py-1 w-fit rounded-[4px] text-black"
                  style={{ backgroundColor: statusColor('выполнена') }}>
                  выполнена
                </div>
              </Link>
            </td>

            <td className="mx-10">
              <Link to={{ pathname: `/task-manager/${task.id}` }} state={task}>
                {priorityTable[+task.priority - 1]}
              </Link>
            </td>
            <td className="mx-10">
              <Link to={{ pathname: `/task-manager/${task.id}` }} state={task}>
                {task.time_start.replace('.', ':')}
              </Link>
            </td>
            <td>
              <Link to={{ pathname: `/task-manager/${task.id}` }} state={task}>
                {task.time_finish.replace('.', ':')}
              </Link>
            </td>
            <td>
              <Link to={{ pathname: `/task-manager/${task.id}` }} state={task}>
                {task.address}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
