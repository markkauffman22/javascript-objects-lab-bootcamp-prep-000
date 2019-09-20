var recipes = {};
// or
// var recipes = new Object(); 
// both are valid, {} preferred

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value });
}

// Note below ... MUST USE bracket notation newObj[key] not newObj.key to get value to undefined
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key] ;
  return object;
}


