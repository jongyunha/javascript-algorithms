function solution(str) {
  let check = '';
  const res = str
    .split('')
    .map((ele) => {
      if (check.indexOf(ele) === -1) {
        check += ele;
        return ele;
      }
    })
    .join('');
  return res;
}

const str = 'keettekt';
console.log(solution(str));
