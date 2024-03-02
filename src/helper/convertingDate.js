export const convertingDateAndTime = (data) => {
  let date = data?.split('T')[0];
  let Time = data?.split('T')[1];
  let properDate = new Date(
    date?.split('-')[0],
    date?.split('-')[1] - 1,
    date?.split('-')[2],
    Time?.split(':')[0],
    Time?.split(':')[1],
  );
  return properDate;
};
