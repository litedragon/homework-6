function getSevenCol(a) {
  var col = 0;
  a.forEach(function(el) {
    var strEl = el.toString();
    var last;
    do {
    last = strEl.indexOf("7", last+1);
    if (last !== -1) {col++;}
    } while (last !== -1)
  });
  return col;
}

function arrToStr(a){
  var colOfReverse = 0;
  var str = '';
  if (a.length % 2 == 1) {colOfReverse = a.length / 2 - 0.5}
  else {colOfReverse = a.length / 2}
  for (var i = 0; i < colOfReverse; i++){
    str = str + a[i];
    a = a.reverse();
    str = str + a[i];
    a = a.reverse();
  }
  if (a.length % 2 == 1) {str = str + a[a.length / 2 - 0.5]}
  return str;
}

console.log(getSevenCol([1, 7, 4, 7, 73])); // 3
console.log(arrToStr(["a", "b", "c", "h", "d", "e", "f"])); // "afbecdh"
