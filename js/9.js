var data = [
  {
    id: 1,
    firstName: 'siddharth',
    lastName: 'sohanlal',
    middleName: 'vaishnav',
    email: 'siddharth.vaishnav@propelius.com',
    address: ['b/24 asha nagar', 'udhna', 394210],
    salary: 10000,
    mobile: 9409239563,
    dob: "17 / 08 / 2000",
    enrollmentNo: 32,
    photo: 'photo.jpg',
  },
  {
    id: 2,
    firstName: 'vikas',
    lastName: 'sohanlal',
    middleName: 'vaishnav',
    email: 'vikasvaishnav12@gmail.com',
    address: ['b/24 asha nagar', 'udhna', 394210],
    salary: 20000,
    mobile: 8866307673,
    dob: "17 / 08 / 2000",
    enrollmentNo: 33,
    photo: 'photo.jpg',
  },
];
var updateId = 1;
const updatedData = data.map((p) =>
  p.id === updateId ? { ...p, firstName: 'updatedText' } : p
);

var removeID = 1;
var newArray = data.filter((item) => item.id !== removeID);

console.log(data);
console.log('---------------------------------------------');
console.log(updatedData);
console.log('---------------------------------------------');
console.log(newArray);
