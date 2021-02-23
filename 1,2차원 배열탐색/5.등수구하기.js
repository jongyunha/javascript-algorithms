function solution(list) {
  let res = Array(list.length)
    .fill()
    .map((v) => 1);
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[i] < list[j]) {
        console.log(list[i], list[j]);
        res[i]++;
      }
    }
  }
  return res;
}

scores = [87, 89, 92, 100, 76];
console.log(solution(scores));
