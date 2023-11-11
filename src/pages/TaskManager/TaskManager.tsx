import TaskTable from '../../components/TaskTable/TaskTable';
import TaskToolbar from '../../components/TaskToolbar/TaskToolbar';
import { useGetUsersQuery } from '../../store/api/api';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const TaskManager = () => {
  const { data, isLoading, isError } = useGetUsersQuery(null);

  return (
    <div>
      <div className="flex justify-between mb-3">
        <h1 className="text-3xl font-bold text-[#292929] mb-6">Задачи команды</h1>
        <TaskToolbar />
      </div>

      {isLoading && (
        <div className="flex justify-center items-center p-12">
          <CircularProgress />
        </div>
      )}
      {isError && (
        <div className="flex justify-center items-center p-12">
          <div className="text-center">
            <ErrorOutlineIcon fontSize="large" className="text-red-500" />
            <h1 className="text-red-500 mt-4">Произошла ошибка загрузки данных</h1>
          </div>
        </div>
      )}

      {data && <TaskTable data={data} />}
    </div>
  );
};

export default TaskManager;
