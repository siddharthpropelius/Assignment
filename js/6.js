var para =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var word = 'Ipsum';
var len = word.length;
var find = para.indexOf(word);
var slice = word.slice(-3);

if (find == -1) {
  console.log('word not found');
} else {
  console.log('Position:' + find);
  console.log('Length of Word :' + len);
  console.log('Last 3 Letters of Word :' + slice);
}
