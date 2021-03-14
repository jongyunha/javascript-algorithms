// 나의 풀이
// function solution(nums: number[]): number {
//   let res: object = {};
//   for (let i: number = 0; i < nums.length; i++) {
//     let temp: number = nums[i];
//     let sum: number = 0;
//     while (temp > 0) {
//       sum += temp % 10;
//       temp = Math.floor(temp / 10);
//     }
//     if (!res['origin']) {
//       res['origin'] = nums[i];
//       res['sum'] = sum;
//     } else if (res['sum'] < sum) {
//       res['origin'] = nums[i];
//       res['sum'] = sum;
//     } else if (res['sum'] === sum && res['origin'] < nums[i]) {
//       res['origin'] = nums[i];
//       res['sum'] = sum;
//     }
//   }
//   return res['origin'];
// }
//
// const nums: number[] = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(nums));

// 선생님의 풀이
function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    // let sum = 0,
    //   tmp = x;
    // while (tmp) {
    //   sum += tmp % 10;
    //   tmp = Math.floor(tmp / 10);
    // }
    let sum = x
      .toString()
      .split('')
      .reduce((a, b) => a + parseInt(b), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max && answer < x) answer = x;
  }
  return answer;
}

const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
