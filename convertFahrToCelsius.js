function convertFahrToCelsius(parameter) {
  if (isNaN(parameter) && Array.isArray(parameter) == false) {
    console.log(
      `${parameter} is not a valid number but a/an ${typeof parameter}.`
    );
  } else if (Array.isArray(parameter) == true) {
    console.log(`${parameter} is not a valid number but a/an array.`);
  } else {
    const celsuis = (parameter - 32) * (5 / 9);
    console.log(celsuis);
  }
}
convertFahrToCelsius(68);
