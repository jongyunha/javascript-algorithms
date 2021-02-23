function solution(list) {
  let check = 1;
  let res = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i]) {
      res.push(check);
      check++;
    } else {
      check = 1;
      res.push(0);
    }
  }
  return res.reduce((acc, cur) => acc + cur);
}

const scores = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(scores));
