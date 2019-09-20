
var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value });
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete O
}


