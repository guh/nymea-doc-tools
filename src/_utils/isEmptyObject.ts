export function isEmptyObject(obj: Object) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
