function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      break
    }
    array[i] = console.log(array[i] = array[i] - array[i] + changeValue)
  }
  return array
}
