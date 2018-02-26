function getFirstSelector(selector) {
  var sel = document.querySelector(selector)
  return sel
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n) {
  var item = document.getElementById('app').querySelector('main ul.ranked-list').innerHTML
  parseInt(item)+n
}