function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      let sentence = "I am 1 strange loop"
      array.push(sentence)
    } else {
      let sentence = `I am ${i} strange loop`
      array.push(sentence)
    }
  }
  return array
}

// The function should take a number as an argument. Using a while loop, count down (using console.log)
// from the passed in number to 0. Then return the string 'done'.

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    // remove elements from the array until the array is empty or until maybeTrue() returns false.
    // slice along with the # of elements to remove
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue());
  return array
}
