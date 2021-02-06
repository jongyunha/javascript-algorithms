function solution(input) {
  return input
    .split('')
    .map((ele) => {
      if (ele === 'A') return '#';
      else return ele;
    })
    .join('');
}

const input = 'BANANA';
console.log(solution(input));
