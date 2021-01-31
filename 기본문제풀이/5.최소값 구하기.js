function solution(arr) {
  let answer = null;
  arr.forEach((ele) => {
    if (answer) {
      answer = answer > ele ? ele : answer;
    } else {
      answer = ele;
    }
  });
  return answer;
}

let arr = [5, 7, 1, 3, 9, 11, 14];
console.log(solution(arr));
