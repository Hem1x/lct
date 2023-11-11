import React, { useEffect } from 'react';
import { headersData } from '../../textData/departments';
import { useGetPointsQuery } from '../../store/api/api';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TaskToolbar from '../../components/TaskToolbar/TaskToolbar';
import { Link } from 'react-router-dom';

const Deparments = () => {
  const headers = headersData;
  const { data, isLoading, isError } = useGetPointsQuery(null);

  return (
    <>
      <div>
        <div className="flex justify-between  mb-3">
          <h1 className="text-3xl font-bold text-[#292929] mb-6">Отделения</h1>
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
        {data && (
          <table width={'100%'}>
            <thead>
              <tr>
                {headers.map((header) => (
                  <td
                    key={header}
                    className={`px-2 align-top text-[#939393] max-w-[110px] text-sm ${
                      header === 'Адрес'
                        ? 'min-w-[144px]'
                        : header === 'приоритет'
                        ? 'min-w-[100px]'
                        : ''
                    }`}>
                    {header}
                  </td>
                ))}
              </tr>
            </thead>

            <tbody>
              {data &&
                data.map((department) => (
                  <tr
                    key={department.id}
                    className="h-16 text-sm cursor-pointer hover:text-[#6c6ad4] transition-all duration-75">
                    <td>
                      <Link
                        to={{ pathname: `/departments/${department.id}` }}
                        state={department}>
                        {department.id}
                      </Link>
                    </td>

                    <td className="max-w-[9rem] pr-10">
                      <Link
                        to={{ pathname: `/departments/${department.id}` }}
                        state={department}>
                        {department.address}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={{ pathname: `/departments/${department.id}` }}
                        state={department}>
                        {department.date_connected}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={{ pathname: `/departments/${department.id}` }}
                        state={department}>
                        {department.all_received ? 'да' : 'нет'}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={{ pathname: `/departments/${department.id}` }}
                        state={department}>
                        {department.days_from_last_card}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={{ pathname: `/departments/${department.id}` }}
                        state={department}>
                        {department.approved_cards}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={{ pathname: `/departments/${department.id}` }}
                        state={department}>
                        {department.quantity_cards}
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Deparments;
