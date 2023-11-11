import { Link, Route, Routes } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from './assets';

import TaskManager from './pages/TaskManager/TaskManager';
import Analytics from './pages/Analytics/Analytics';
import Login from './pages/Login/Login';

import Navigation from './components/Navigation/Navigation';
import TaskEditor from './pages/TaskEditor/TaskEditor';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { logout } from './store/features/authSlice';
import AddDepartment from './pages/AddTask/AddDepartment';
import Deparments from './pages/Deparments/Deparments';
import Deparment from './pages/Deparment/Deparment';
import DeparmentEdit from './pages/DeparmentEdit/DeparmentEdit';
import TaskPage from './pages/TaskPage/TaskPage';

function App() {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-[100vh]">
      {!isAuth ? (
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      ) : (
        <>
          <aside className="w-[20%]  bg-[#FAFAFA] p-6">
            <Link to={'/task-manager'}>
              <img src={logo} alt="совкомбанк логотип" />
            </Link>

            <div className="flex flex-col justify-center items-center mt-9 mb-7 cursor-default">
              <img
                className="rounded-full w-[70px]"
                src={require('./assets/avatar.jpg')}
                alt="совкомбанк лого"
              />
              <h1 className="font-semibold text-base mt-4">Андрей Бродский</h1>
              <p className="text-[#939393]">менеджер</p>
            </div>

            <Navigation />

            <div
              onClick={() => {
                dispatch(logout());
              }}
              className="absolute bottom-10 hover:scale-105 transition-all duration-150">
              <ExitToAppIcon className=" text-red-400 cursor-pointer hover:text-red-700" />
            </div>
          </aside>
          <div className="flex-1 px-11 pt-12 overflow-auto">
            <Routes>
              <Route path="/add-deparment" element={<AddDepartment />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/departments" element={<Deparments />} />
              <Route path="/departments/:id" element={<Deparment />} />
              <Route path="/departments/:id/edit" element={<DeparmentEdit />} />
              <Route path="/task-manager" element={<TaskManager />} />
              <Route path="/task-manager/:id" element={<TaskPage />} />
              <Route path="/task-manager/:id/edit" element={<TaskEditor />} />

              <Route path="/*" element={<TaskManager />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
