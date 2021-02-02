function solution(arr) {
  let result = 0;
  let min = null;
  arr.forEach((ele) => {
    if (min) {
      if (ele % 2 !== 0) {
        result += ele;
        min = min > ele ? ele : min;
      }
    } else {
      if (ele % 2 !== 0) {
        min = ele;
        result += ele;
      }
    }
  });
  console.log(result);
  console.log(min);
}

let arr = [5, 7, 1, 3, 9, 11, 14];
solution(arr);
