import moment from 'moment';

export const getDaysArr = (create: string, update: string, endDay?: any) => {
  if (!endDay) endDay = new Date();
  const createdDate = new Date(create);
  const updateDate = new Date(update);
  let arr = 0;
  let dt = new Date(updateDate ? updateDate : createdDate);
  for (dt; dt <= endDay; dt.setDate(dt.getDate() + 1)) {
    arr += 1;
  }
  return arr;
};

export const convertDateToString = (createAt?: string) => {
  return createAt
    ? moment.utc(createAt).local().format('DD/MM/YYYY')
    : new Date().toLocaleString('vi', {
        year: 'numeric',
        month: 'numeric',
      });
};

export const convertDateToStringWithTime = (createAt: string) => {
  return createAt
    ? new Date(createAt).toLocaleString('vi', {
        hour: 'numeric',
        minute: 'numeric',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })
    : new Date().toLocaleString();
};

export const numberDays = (createDate: string, updateDate?: string) => {
  const presentDay = moment();
  const previousDate = moment(createDate, 'YYYYMMDD HH:mm:ss');
  const difDays = presentDay.diff(previousDate, 'days');
  const defineDay = [
    'date.second',
    'date.minute',
    'date.hour',
    'date.day',
    'date.month',
    'date.year',
    'date.new',
  ];
  let total = 0;
  let defineIndex = 0;

  if (difDays <= 0) {
    const difHour = presentDay.diff(previousDate, 'hours'); // Convert day -> hour
    if (difHour > 0) {
      // Hours
      total = difHour;
      defineIndex = 2;
    } else {
      total = null;
      defineIndex = 6;
    }
  } else if (difDays <= 30) {
    // Days
    total = difDays;
    defineIndex = 3;
  } else if (difDays > 30 && difDays <= 365) {
    // Months
    total = difDays / 30;
    defineIndex = 4;
  } else if (difDays > 365) {
    // years
    total = difDays / (30 * 12);
    defineIndex = 5;
  }

  return {
    total: Math.round(total),
    defineName: defineDay[defineIndex],
  };
};
