function getFirstSelector(selector) {
  var sel = document.querySelector(selector)
  return sel
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}