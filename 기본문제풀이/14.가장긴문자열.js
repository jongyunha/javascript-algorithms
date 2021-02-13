function solution(list) {
  let long = null;
  let maxLen = 0;
  for (let ele of list) {
    if (ele.length > maxLen) {
      maxLen = ele.length;
      long = ele;
    }
  }
  return long;
}

const list = ['teacher', 'time', 'students', 'beautiful', 'good'];
console.log(solution(list));
