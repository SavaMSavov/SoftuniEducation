function solve(arr = []) {
  let result = arr
    .filter((number, i) => i % 2 == 1)
    .map((x) => x * 2)
    .reverse();

  console.log(result.join(` `));
}

solve([3, 0, 10, 4, 7, 3]);
