export const convertFioToFi = (str: string) => str.split(' ').slice(0, 2).join(' ');

export const graidTable = ['junior', 'middle', 'senior'];

export const priorityTable = ['низкий', 'средний', 'высокий'];

export const convertStringToCoord = (str: string): number[] => {
  return str.split(',').map((el) => +el);
};

export const statusColor = (status: string) => {
  switch (status) {
    case 'выполнена':
      return 'rgba(133, 221, 155, 0.33)';
    case 'в работе':
      return 'rgba(254, 247, 230, 1)';
    case 'не начата':
      return 'rgba(186, 186, 186, 0.16)';
    default:
      break;
  }
};
