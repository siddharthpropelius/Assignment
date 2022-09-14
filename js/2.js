var string = 's!ddharth1708';
function password(value) {
  let length = value.length;
  if (length < 7 || length > 14) {
    console.log(
      'Password must be of minimum of 6 letter and maximum of 14 letters'
    );
  } else if (value.search(/[a-z]/i) < 0) {
    console.log('Password must contain alphabets');
  } else if (value.search(/[0-9]/) < 0) {
    console.log('Password must contain Numeric values');
  } else if (value.search(/[!#$%&?]/) < 0) {
    console.log('Password must contain Special Characters');
  } else if (value[0].toUpperCase() != value[0]) {
    console.log('First Letter must be Capital Letter');
  } else {
    console.log('Great! Password matches the criteria');
  }
}

password(string);
