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
  str = str.toUpperCase()
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))) {
      return str.charAt(i)
    }
  }
  return ''
}

console.log(findDoubleFirst('ABBA'));
console.log(findDoubleFirst('ABBC'));

let arr1 = [1, 3, 13, 12, 2, 5]
let arr2 = [1, 3, 7, 8, 2, 9]

function sortArr(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  array.unshift(array[array.length-1])
  array.pop()
  return array
}

console.log(sortArr(arr1))
console.log(sortArr(arr2))