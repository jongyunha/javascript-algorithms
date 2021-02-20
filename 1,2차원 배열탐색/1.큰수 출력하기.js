function solution(list) {
  let res = [];
  list.forEach((ele, idx) => {
    if (idx === 0) res.push(ele);
    else if (ele > list[idx - 1]) res.push(ele);
  });
  return res;
}

list = [7, 3, 9, 5, 6, 12];
console.log(solution(list));
