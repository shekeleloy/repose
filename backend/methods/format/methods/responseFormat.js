const date = new Date();

exports.Response = (status_message, payload, status = 200) => {
  data = {
    body: JSON.stringify({
      status: status_message,
      payload,
      date:
        date.getFullYear() +
        "/" +
        date.getMonth() +
        "/" +
        date.getDate() +
        " " +
        date.toTimeString(),
    }),
    status,
  };
  return data;
};
