
var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  var newObj = object.assign({}, obj)
  delete newObj.key
  return newObj
}