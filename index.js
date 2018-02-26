function getFirstSelector(selector) {
  var sel = document.querySelector(selector)
  return sel
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n) {
  var item = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i=0;i<item.length;i++) {
    item[i].innerHTML = parseInt(item[i].innerHTML)+n
  }
}

function deepestChild() {
  var element = document.getElementById('grand-node').querySelectorAll('div')
  return element[element.length-1]
}