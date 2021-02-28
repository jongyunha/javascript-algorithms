function solution(str) {
  const temp = str.split('');
  const n = temp.length / 2 - 1;
  let flag = 1;
  for (let i = 0; i < n; i++) {
    if (temp[i].toLowerCase() !== temp.reverse()[i].toLowerCase()) flag = 0;
  }
  return flag ? 'YES' : 'NO';
}

const str = 'AOOXOOA';
console.log(solution(str));
