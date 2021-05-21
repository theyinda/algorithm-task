function engine(enginelimit, arr) {
  for (let i = 0; i <= enginelimit; i++) {
    arr.push(i);

    if (arr[i] % 2 == 0 && arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      arr.splice(i, 1, "yu-gi-oh");
    } else if (arr[i] % 2 == 0 && arr[i] % 5 == 0) {
      arr.splice(i, 1, "yu-oh");
    } else if (arr[i] % 2 == 0 && arr[i] % 3 == 0) {
      arr.splice(i, 1, "yu-gi");
    } else if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      arr.splice(i, 1, "gi-oh");
    } else if (arr[i] % 2 == 0) {
      arr.splice(i, 1, "yu");
    } else if (arr[i] % 3 == 0) {
      arr.splice(i, 1, "gi");
    } else if (arr[i] % 5 == 0) {
      arr.splice(i, 1, "oh");
    } else {
      console.log("");
    }
  }
  arr.shift();
}
const checkYuGiOh = (limit) => {
  //number validation
  if (typeof limit == "number") {
    let myArray = [];
    engine(limit, myArray);
    return myArray;
  }
  //string validation
  else if (typeof limit == "string") {
    let fNumber = Number(limit);

    if (isNaN(fNumber)) {
      let err = `invalid parameter: ${limit}`;
      return err;
    } else {
      let myArray = [];
      engine(fNumber, myArray);
      return myArray;
    }
  } else {
    let error = "invalid data type input";
    return error;
  }
};
