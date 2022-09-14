var str = 'ABCKWQDEPFGMHODIJKALYMNCQOPQRBSTLBUVLWXYZ';
var noRepeated = new Set(str);
var sort = Array.from(noRepeated).sort();
console.log(sort);