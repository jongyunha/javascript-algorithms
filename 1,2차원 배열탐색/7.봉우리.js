function solution(arr) {
  let cnt = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
          flag--;
          break;
        }
      }
      flag ? cnt++ : cnt;
    }
  }
  return cnt;
}

const n = 5;
let arr = '5372337161725344364187352'.split('');
arr = Array(n)
  .fill()
  .map((ele, idx) => {
    return arr.slice(idx * n, idx * n + n);
  });

console.log(solution(arr));
