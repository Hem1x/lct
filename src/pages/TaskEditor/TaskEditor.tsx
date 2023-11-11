import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TaskEditor = () => {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const [selectedTask, selectTask] = useState(0);

  const array = [];
  for (let i = 10; i <= 300; i += 10) {
    array.push(i);
  }

  return (
    <div>
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <ArrowBackIcon
            className="cursor-pointer mr-10"
            onClick={() => navigation(-1)}
          />
          <h1 className="text-3xl font-bold text-[#292929]">
            Редактирование задачи
          </h1>
        </div>
      </header>

      <div className="max-w-[60%]">
        <form>
          <label>
            <h1 className="mb-2 text-[#6F6F6F]">задача</h1>
            <div className="border border-[#AFAFAF] rounded py-2 px-5 mb-6">
              <select
                className="w-full"
                onChange={(e) => selectTask(+e.target.value)}
                value={selectedTask}>
                <option value={0} disabled selected>
                  выберите задачу
                </option>
                <option value={1}>
                  Выезд на точку для стимулирования выдач
                </option>
                <option value={2}>Обучение агента</option>
                <option value={3}>Доставка карт и материалов</option>
              </select>
            </div>
          </label>

          <label>
            <h1 className="mb-2 text-[#6F6F6F]">адрес</h1>
            <div className="border border-[#AFAFAF] rounded py-2 px-5 mb-6">
              <input type="text" placeholder="введите адрес" />
            </div>
          </label>

          <label>
            <h1 className="mb-2 text-[#6F6F6F]">комментарий</h1>
            <div className="border border-[#AFAFAF] rounded py-2 px-5 mb-6">
              <input
                className="w-full"
                type="text"
                placeholder="введите комментарий"
              />
            </div>
          </label>

          <div className="flex justify-between items-center my-10">
            <div>
              <Link
                to={'/task-manager/' + pathname.split('/')[2]}
                className="py-2 px-6 rounded-lg border-2 text-[#0066FF] border-[#0066FF] hover:border-[#003791] hover:text-[#003791] mr-4 transition-all duration-150">
                <span className="text-md  font-semibold">отмена</span>
              </Link>

              <button className="py-2 px-6 rounded-lg border-2 text-white bg-[#0066FF] hover:bg-[#003791] disabled:bg-[#E5E5E5] disabled:text-[#BBBBBB] disabled:cursor-not-allowed transition-all duration-150">
                <span className="text-md font-semibold">сохранить</span>
              </button>
            </div>

            <DeleteIcon
              fontSize="large"
              className="cursor-pointer text-[#0066FF] hover:text-[#ff1100] transition-all duration-200"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEditor;
