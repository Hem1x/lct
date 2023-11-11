import { Modal } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const ModalFile = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div
      onClick={handleClose}
      className="w-full h-screen flex justify-center items-center">
      <div
        onClick={(e) => e.stopPropagation()}
        className="px-20 py-14 bg-white max-w-[660px] drop-shadow-lg rounded-lg">
        <div className="cursor-pointer" onClick={handleClose}>
          <CloseIcon className="text-[#939393] absolute top-5 right-5" />
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-6">Загрузка файла</h1>
          <div className="bg-[#FFF1D9] py-3 px-4 text-sm rounded-lg mb-10">
            <p className="leading-4">
              Вы можете загрузить excel файл с банковскими отделениями и они
              добавятся в список и распределятся автоматически по задачам и
              сотрудникам
            </p>
          </div>
          <div>
            <h1 className="font-semibold mb-7">Инструкция по загрузке:</h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-10">
                <h2>1. Скачайте шаблон файла</h2>
                <a
                  referrerPolicy="no-referrer"
                  download
                  href={require('../../assets/exel_шаблон_файла_для_добавления_точки.xlsx')}
                  className="cursor-pointer text-[#06F]">
                  скачать
                </a>
              </div>
              <div>
                <h2>2. Заполните наш шаблон</h2>
              </div>
              <div className="flex gap-10">
                <h2>3. Загрузите заполненный файл</h2>
                <input type="file" />
                <span className="cursor-pointer text-[#06F]">загрузить</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16 gap-2">
            <div
              onClick={handleClose}
              className="cursor-pointer py-2 px-6 rounded-lg text-[#0066FF] hover:text-[#003791] mr-4 transition-all duration-150">
              <span className="text-md  font-semibold">отмена</span>
            </div>
            <div className="cursor-pointer py-2 px-6 rounded-lg border-2 text-white bg-[#0066FF] hover:bg-[#003791] disabled:bg-[#E5E5E5] disabled:text-[#BBBBBB] disabled:cursor-not-allowed transition-all duration-150">
              <span className="text-md font-semibold">сохранить</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddDepartment = () => {
  const [selectedTask, selectTask] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const array = [];
  for (let i = 10; i <= 300; i += 10) {
    array.push(i);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModalFile handleClose={handleClose} />
      </Modal>

      <div className="max-w-[50%]">
        <h1 className="text-3xl font-bold text-[#292929] mb-6">
          Добавить отделение
        </h1>
        <form>
          <label>
            <h1 className="mb-2 text-[#6F6F6F]">когда была подключена точка</h1>
            <div className="border border-[#AFAFAF] rounded py-2 px-5 mb-6">
              <select
                className="w-full"
                onChange={(e) => selectTask(+e.target.value)}
                value={selectedTask}>
                <option value={0} disabled selected>
                  выберите
                </option>
                <option value={1}>вчера</option>
                <option value={2}>давно</option>
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
            <h1 className="mb-2 text-[#6F6F6F]">кол-во одобренных заявок</h1>
            <div className="border border-[#AFAFAF] rounded py-2 px-5 mb-6">
              <input className="w-full" type="text" placeholder="введите кол-во" />
            </div>
          </label>

          <label>
            <h1 className="mb-2 text-[#6F6F6F]">
              колличество дней после выдачи последней карты
            </h1>
            <div className="border border-[#AFAFAF] rounded py-2 px-5 mb-6">
              <input
                className="w-full"
                type="text"
                placeholder="введите кол-во дней"
              />
            </div>
          </label>

          <label>
            <h1 className="mb-2 text-[#6F6F6F]">карты и материалы доставлены?</h1>
            <div className="border border-[#AFAFAF] rounded py-2 px-5 mb-6">
              <select
                className="w-full"
                onChange={(e) => selectTask(+e.target.value)}
                value={selectedTask}>
                <option value={0} disabled selected>
                  выберите
                </option>
                <option value={'true'}>да</option>
                <option value={'false'}>нет</option>
              </select>
            </div>
          </label>

          <div className="flex justify-between">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleOpen();
              }}
              className="my-5 py-2 px-6 rounded-lg border-2 text-[#0066FF] border-[#0066FF] hover:border-[#003791] hover:text-[#003791] mr-4 transition-all duration-150">
              <span className="text-md font-semibold">выгрузить из exel</span>
            </button>

            <div className="flex justify-end my-5">
              <Link
                to="/task-manager"
                className="py-2 px-6 rounded-lg border-2 text-[#0066FF] border-[#0066FF] hover:border-[#003791] hover:text-[#003791] mr-4 transition-all duration-150">
                <span className="text-md  font-semibold">отмена</span>
              </Link>
              <button className="py-2 px-6 rounded-lg border-2 text-white bg-[#0066FF] hover:bg-[#003791] disabled:bg-[#E5E5E5] disabled:text-[#BBBBBB] disabled:cursor-not-allowed transition-all duration-150">
                <span className="text-md font-semibold">добавить</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddDepartment;
