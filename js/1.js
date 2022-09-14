var arr = [
  'siddharth',
  'vikas',
  'nidhi',
  'sarla',
  'pranshu',
  'parth',
  'rishi',
  'raghav',
  'sohan',
  'sarda',
  'piyush',
  'ratan',
  'amit',
  'jatin',
  'sunil',
];

var name = 'sohan';
var pos = arr.indexOf(name);
var find = arr.includes(name);

if (find) {
  console.log('name:' + name.search(arr));
  console.log('Username Position : ' + pos);
  for (let i = 0; i < pos; i++) {
    if (name == arr[i]) {
      console.log(arr[i]);
      break;
    } else {
      console.log(arr[i]);
    }
  }
} else {
  console.log('Name does not found in the data');
}
