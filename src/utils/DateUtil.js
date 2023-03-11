import moment from "moment";

export const formatStringToDate = (string) => {
  let dateObj = "";
  if (string !== "") {
    dateObj = moment(string).format("DD-MM-yyyy");
  } else {
  }
  return dateObj;
};

export const formatStringToTime = (string) => {
  let dateObj = "";
  if (string !== "") {
    dateObj = moment(string).format("HH:mm:ss");
  }
  return dateObj;
};
