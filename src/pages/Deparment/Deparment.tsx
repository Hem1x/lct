import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Point } from '../../types/department';

const Deparment = () => {
  const { state } = useLocation();
  const navigation = useNavigate();
  const neededDepartment: Point = state;

  return (
    <div>
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <ArrowBackIcon
            className="cursor-pointer mr-10"
            onClick={() => navigation(-1)}
          />
          <h1 className="text-3xl font-bold text-[#292929]">Банковское отделение</h1>
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
          <div>
            <h1 className="text-[#6F6F6F] ">когда подключена точка?</h1>
            <p>{neededDepartment.date_connected}</p>
          </div>
          <div>
            <h1 className="text-[#6F6F6F]">карты и материалы доставлены?</h1>
            <p>{neededDepartment.all_received ? 'да' : 'нет'}</p>
          </div>
          <div>
            <h1 className="text-[#6F6F6F]">
              колличество дней после выдачи последней карты
            </h1>
            <p>{neededDepartment.days_from_last_card}</p>
          </div>
          <div>
            <h1 className="text-[#6F6F6F]">кол-во одобренных заявок</h1>
            <p>{neededDepartment.approved_cards}</p>
          </div>
          <div>
            <h1 className="text-[#6F6F6F]">адрес</h1>
            <p>{neededDepartment.address}</p>
          </div>
          <div>
            <h1 className="text-[#6F6F6F]">кол-во выданных карт</h1>
            <p>{neededDepartment.address}</p>
          </div>
        </div>

        <YMaps>
          <Map
            width={'50%'}
            height={'77vh'}
            defaultState={{ center: [45.054684, 39.003736], zoom: 15 }}>
            <Placemark
              geometry={[45.054684, 39.003736]}
              options={{ iconColor: 'red' }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default Deparment;
