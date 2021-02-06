function solution(str, search) {
  return str
    .split('')
    .map((ele) => {
      if (ele === search) return 1;
      else return 0;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    });
}

const str = 'COMPUTERPROGRAMING';
const search = 'R';

console.log(solution(str, search));
