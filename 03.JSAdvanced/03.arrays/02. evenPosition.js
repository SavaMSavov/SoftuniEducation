function solve(array = []) {
  let print = ``;

  for (let i = 0; i <= array.length - 1; i++) {
    if (i % 2 == 0) {
      print += array[i] + ` `;
    }
  }
  console.log(print);
}

solve(["20", "30", "40"]);
