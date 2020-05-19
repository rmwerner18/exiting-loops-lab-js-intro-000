function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      break
    }
    array.splice(array[0], array[stopValue], array[changeValue])
  }
  return array
}
