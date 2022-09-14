var data = [
  {
    id: 0,
    firstName: 'siddharth',
    lastName: 'sohanlal',
    middleName: 'vaishnav',
    email: 'siddharth.vaishnav@propelius.com',
    address: ['b/24 asha nagar', 'udhna', 394210],
    mobile: 9409239563,
    dob: '17 / 08 / 2000',
    enrollmentNo: 32,
  },
  {
    id: 1,
    firstName: 'vikas',
    lastName: 'sohanlal',
    middleName: 'vaishnav',
    email: 'vikasvaishnav12@gmail.com',
    address: ['b/24 asha nagar', 'udhna', 394210],
    mobile: 8866307673,
    dob: '17/08/2000',
    enrollmentNo: 33,
  },
];
console.log(data);
var updateID = 1;
var updatedText = 'hello';
var update = (data[updateID].firstName = updatedText);
console.log('--------------------------------');
console.log(data);
