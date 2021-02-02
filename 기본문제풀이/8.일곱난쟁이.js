function solution(arr) {
  const sum = arr.reduce((acc, cur) => {
    return acc + cur;
  });
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        console.log(sum - arr[i] - arr[j]);
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
	}
	return arr;
}

const array = [20, 7, 23, 19, 10, 15, 25, 8, 13];
const result = solution(array);
console.log(result.join(' '));
