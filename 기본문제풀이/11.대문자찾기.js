function solution(str) {
  return str.split('').reduce((acc, cur) => {
    if (cur === cur.toUpperCase()) return acc + 1;
    else return acc;
  }, 0);
}

const str = 'HappyTimeGood';
console.log(solution(str));
