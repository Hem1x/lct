import { Link } from 'react-router-dom';
import { toolbarData } from '../../textData/textData';

const TaskToolbar = () => {
  const toolbar = toolbarData;

  return (
    <div className="flex gap-7">
      {toolbar.map((el) => (
        <div className="flex items-center" key={el.text}>
          <img
            src={require('../../assets/' + el.img)}
            alt={el.text}
            className="mr-2"
          />
          {el.text === 'добавить отделение' ? (
            <Link
              to="/add-deparment"
              className="text-[#0066FF] cursor-pointer hover:text-black transition-all duration-100">
              {el.text}
            </Link>
          ) : (
            <h1 className="text-[#0066FF] cursor-pointer hover:text-black transition-all duration-100">
              {el.text}
            </h1>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskToolbar;
