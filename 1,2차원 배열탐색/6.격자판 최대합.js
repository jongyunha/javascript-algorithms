function solution(q, nums) {
  let arr = nums.split(' ');
  arr = arr.map((v) => Number(v));
  let newArr = Array(q)
    .fill()
    .map(() => {
      return Array(q)
        .fill()
        .map(() => 0);
    });
  for (let i = 0; i < q; i++) {
    newArr[i] = arr.slice(i * q, i * q + q);
  }
  let max = Number.MIN_SAFE_INTEGER;
  let row = 0;
  let col = 0;
  for (let i = 0; i < q; i++) {
    row = 0;
    col = 0;
    for (let j = 0; j < q; j++) {
      col += newArr[i][j];
      row += newArr[j][i];
    }
    max = Math.max(max, col, row);
  }
  let diagonal1 = 0;
  let diagonal2 = 0;
  for (let i = 0; i < q; i++) {
    diagonal1 += newArr[i][i];
    diagonal2 += newArr[i][q - i - i];
  }

  // max = Math.max(max, diagonal1, diagonal2);
  return max;
}

const q = 5;
let nums =
  '10 13 10 12 15 12 39 30 23 11 11 25 50 53 15 19 27 29 37 27 19 13 30 13 19';

console.log(solution(q, nums));
