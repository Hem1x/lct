import React from 'react';
import { YMaps, Map, Placemark, GeoObject } from '@pbe/react-yandex-maps';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Task } from '../../types/responseTask';
import {
  convertFioToFi,
  convertStringToCoord,
  graidTable,
  priorityTable,
} from '../../utils/taskManagerUtils';

const TaskPage = () => {
  const { state } = useLocation();
  const neededTask: Task = state;
  const route = {
    start: convertStringToCoord(neededTask.coordinates_start),
    finish: convertStringToCoord(neededTask.coordinates_finish),
  };
  const routeURL = `https://yandex.ru/maps/213/moscow/?from=api-maps&ll=${route.finish[1]}%2C${route.finish[0]}&mode=routes&origin=jsapi_2_1_79&routes%5BactiveComparisonMode%5D=auto&rtext=${route.start[0]}%2C${route.start[1]}~${route.finish[0]}%2C${route.finish[1]}&rtt=comparison&ruri=~&z=13`;
  const navigation = useNavigate();

  const openYandexRoute = () => {
    window.open(routeURL, '_blank');
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <ArrowBackIcon
            className="cursor-pointer mr-10"
            onClick={() => navigation(-1)}
          />
          <h1 className="text-3xl font-bold text-[#292929]">{neededTask.name}</h1>
        </div>

        <Link to={'edit'} className="flex items-center gap-2">
          <img src={require('../../assets/editTask.png')} alt="edit" />
          <h1 className="text-[#0066FF] cursor-pointer hover:text-[#2d2b97] transition-all duration-100">
            редактировать
          </h1>
        </Link>
      </header>

      <div className="flex justify-between items-center mb-10">
        <div className="flex flex-col flex-[0.9] gap-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-black font-bold ">адрес</h1>
              <p>{neededTask.address}</p>
            </div>
            <div>
              <h1 className="text-black font-bold">приоритет</h1>
              <p>{priorityTable[+neededTask.priority - 1]}</p>
            </div>
          </div>
          <hr />
          <div className="w-full flex justify-evenly items-center">
            <div>
              <h1 className="text-black text-lg font-bold  text-center">старт</h1>

              <p className="text-3xl text-center">
                {neededTask.time_start.replace('.', ':')}
              </p>
            </div>
            <AccessTimeIcon
              style={{
                fontSize: 40,
                color: '#0066FF',
              }}
            />
            <div>
              <h1 className="text-black text-lg font-bold  text-center">
                завершение
              </h1>
              <p className="text-3xl text-center">
                {neededTask.time_finish.replace('.', ':')}
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h1 className="text-black font-bold mb-4">исполнитель</h1>
            <div className="flex items-center pl-5">
              <img
                className="w-16 h-16 mr-7 rounded-full "
                src={require('../../assets/avatarTate.png')}
                alt=""
              />
              <div>
                <h1 className="font-semibold">
                  {convertFioToFi(neededTask.worker.fio)}
                </h1>
                <p className="text-sm text-[#6F6F6F]">
                  {graidTable[+neededTask.worker.graid - 1]}
                </p>
                <p className="text-sm text-[#6F6F6F]">{neededTask.worker.address}</p>
              </div>
            </div>
          </div>

          <button
            className="mt-5 w-full py-3 rounded-lg text-white font-semibold  bg-[#0066FF] hover:bg-[#003791] transition-all duration-150"
            onClick={openYandexRoute}>
            <span>Построить маршрут ~ {neededTask.route_time} мин</span>
          </button>
        </div>

        <YMaps>
          <Map
            width={'50%'}
            height={'77vh'}
            defaultState={{ center: route.finish, zoom: 15 }}>
            <div>
              <GeoObject
                geometry={{
                  type: 'Point',
                  coordinates: route.start,
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref:
                    'https://w7.pngwing.com/pngs/132/707/png-transparent-circle-human-behavior-point-circle-purple-violet-silhouette.png',
                  iconImageSize: [40, 40],
                  iconOffset: [0, 25],
                }}
              />
            </div>

            <Placemark
              onClick={openYandexRoute}
              geometry={route.finish}
              options={{ iconColor: 'red' }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default TaskPage;
