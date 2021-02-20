// function solution(list) {
//   return new Set(list);
// }

// list = [5, 'good', 'time', 'good', 'time', 'student'];
// res = solution(list);
// res.forEach((ele) => {
//   console.log(ele);
// });

function solution(list) {
  return list.filter((ele, idx) => {
    if (list.indexOf(ele) === idx) return ele;
  });
}

list = [5, 'good', 'time', 'good', 'time', 'student'];
console.log(solution(list));
