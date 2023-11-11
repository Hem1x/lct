export const convertToHours = (time?: number) => {
  if (typeof time !== 'number') {
    return { hours: 0, minutes: 0 };
  }

  return {
    hours: Math.floor(time / 60),
    minutes: time - Math.floor(time / 60) * 60,
  };
};

export const printValidMessage = (obj?: { hours: number; minutes: number }) => {
  if (!obj) {
    return 'Неизвестно';
  }

  let hours = '';
  let minutes = '';

  if (obj?.hours === 1 || obj?.hours % 10 === 1) {
    hours = `${obj.hours} час`;
  } else if ([2, 3, 4].includes(obj?.hours) || [2, 3, 4].includes(obj?.hours % 10)) {
    hours = `${obj.hours} часа`;
  } else {
    hours = `${obj.hours} часов`;
  }

  if (obj?.minutes === 0) {
    minutes = '';
  } else if (obj?.minutes === 1 || obj?.minutes % 10 === 1) {
    minutes = `${obj.minutes} минута`;
  } else if (
    [2, 3, 4].includes(obj?.minutes) ||
    [2, 3, 4].includes(obj?.minutes % 10)
  ) {
    minutes = `${obj.minutes} минуты`;
  } else {
    minutes = `${obj.minutes} минут`;
  }

  const message = +hours === 0 ? `${hours} ${minutes}` : ` ${minutes}`;

  return message;
};
