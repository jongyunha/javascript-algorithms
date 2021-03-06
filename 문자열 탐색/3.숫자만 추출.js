function solution(str) {
  str = str.replace(/[^0-9]/g, '');
  return parseInt(str);
}

const str = 'g0en2T0s8eSoft';
console.log(solution(str));
