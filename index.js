function getFirstSelector(selector) {
  var sel = document.querySelector(selector)
  return sel
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n) {
  var item = document.getElementById('app').querySelectorAll('main ul.ranked-list li').innerHTML
  parseInt(item)+n
}