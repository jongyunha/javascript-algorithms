function solution(str) {
  if (str.length % 2 !== 0) {
    const middle = Math.floor(str.length / 2);
    return str[middle];
  } else {
    return str
      .split('')
      .splice(str.length / 2 - 1, 2)
      .join('');
  }
}

const str = 'cak';
console.log(solution(str));
