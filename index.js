function print(numStart, numFinish) {
  for (let i = numStart; i < numFinish; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz')
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else if (i % 3 == 0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
  return ''
}

// console.log(print(1,20));

function findDoubleFirst(str) {
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))) {
      return str.charAt(i)
    }
  }
  return ''
}

console.log(findDoubleFirst('ABBA'));
console.log(findDoubleFirst('ABBC'));