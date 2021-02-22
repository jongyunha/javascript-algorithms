function solution(n, a, b) {
  let res = []
  for (let i = 0; i < n; i++) {
    if (a[i] - b[i] === -1 || a[i] - b[i] === 2) res.push('B');
    else if (a[i] === b[i]) res.push('D');
    else res.push('A');
  }
  return res;
}

const N = 5;
const A = [2, 3, 3, 1, 3];
const B = [1, 1, 2, 2, 3];

console.log(solution(N, A, B));