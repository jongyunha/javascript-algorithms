// function solution(stus) {
//   stus = stus.reverse();
//   let cnt = 1;
//   for (let i = 0; i < stus.length; i++) {
//     for (let j = i + 1; j < stus.length; j++) {
//       if (stus[i] > stus[j] && j === stus.length - 1) {
//         console.log(stus[i], stus[j]);
//         cnt++;
//       } else if (stus[i] <= stus[j]) break;
//     }
//   }
//   return cnt;
// }

// stus = [130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(stus));

function solution(stus) {
  let max = stus[0];
  let cnt = 1;
  for (let i = 1; i < stus.length; i++) {
    if (max < stus[i]) {
      max = stus[i];
      cnt++;
    }
  }
  return cnt;
}

stus = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(stus));
