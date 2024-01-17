let error = "";
let errorCode = "";
const validate = (name, code, retail, wholesale) => {
  if (name === "") {
    error = "Please fill the medicine name";
    errorCode = "name";
  } else if (code === "") {
    error = "Please fill the medicine code";
    errorCode = "code";
  } else if (retail === "") {
    error = "Please fill the medicine လက်လီ";
    errorCode = "retail";
  } else if (wholesale === "") {
    error = "Please fill the medicine လက်ကား";
    errorCode = "wholesale";
  } else {
    error = "";
    errorCode = "";
  }

  return [error, errorCode];
};

export default validate;
