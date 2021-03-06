// @ts-ignore
function solution(s: string): void {
  const standard: string = 'e';
  s = s.replace(' ', '');
  const div: string[] = s.split('');

  for (let i: number = 0; i < div.length; i++) {
    let temp: number[] = [];
    // 현재 위치
    const curIdx = i;
    for (let j: number = 0; j < div.length; j++) {
      if (standard === div[j]) temp.push(j);
    }
    let res = Number.MAX_SAFE_INTEGER;

    temp.forEach((ele) => {
      const diff: number = Math.abs(curIdx - ele);
      res = res > diff ? diff : res;
    });
    console.log(res);
  }
}
const s: string = 'teachermode';
solution(s);
