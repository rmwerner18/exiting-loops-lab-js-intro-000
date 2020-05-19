function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      break
    }
    array[i] = console.log(changeValue)
  }
  return array
}
