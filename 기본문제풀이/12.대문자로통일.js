// function solution(str) {
//   return str.toUpperCase();
// }

// const str = 'littleMyBaby';
// console.log(solution(str));

function solution(str) {
  let answer = '';
  for (x of str) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

const str = 'aPple';
const res = solution(str);
console.log(res);
