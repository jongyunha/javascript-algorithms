// 내가 푼 정답
// function solution(str) {
//   str = str.toLowerCase();
//   const temp = str
//     .split('')
//     .filter(
//       (v, idx) => str.charCodeAt(idx) >= 97 && str.charCodeAt(idx) <= 122,
//     );
//   console.log(temp);
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] !== temp[temp.length - 1 - i]) return 'NO';
//   }
//   return 'YES';
// }

// 선생님 정답
function solution(str) {
  let answer = 'YES';
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  if (str.split('').reverse().join('') !== str) return 'NO';
  return 'YES';
}

const str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
