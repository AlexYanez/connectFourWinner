function ConnectFourWinner(strArr) {
  let player = strArr[0];
  let array = [];
  let columns = [];
  let rows = [];
  let xy = "none";

  try {
    for (let i = 1; i < strArr.length; i++) {
      array.push(strArr[i].replace(/[{()}]/g, "").split(","));
    }

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] === player) {
          columns.push(j);
          rows.push(i);
        }
      }
    }

    // Searching in rows
    for (let i = 0; i < rows.length; i++) {
      if (rows[i + 1] && rows[i + 2])
        if (rows[i] === rows[i + 1] && rows[i] === rows[i + 2]) {
          if (
            columns[i] === columns[i + 1] - 1 &&
            columns[i + 1] - 1 === columns[i + 2] - 2
          ) {
            if (array[rows[i]][columns[i] - 1] === "x")
              xy = `(${rows[i] + 1}x${columns[i]})`;
            if (array[rows[i]][columns[i + 2] + 1] === "x")
              xy = `(${rows[i] + 1}x${columns[i + 2] + 2})`;
          }
        }
    }

    // Searching in colums
    for (let i = 0; i < columns.length; i++) {
      let pivot = array[rows[i]][columns[i]];

      if (rows[i] > 2) {
        if (
          pivot === array[rows[i] - 1][columns[i]] &&
          pivot === array[rows[i] - 2][columns[i]] &&
          array[rows[i] - 3][columns[i]] === "x"
        )
          xy = `(${rows[i] - 2}x${columns[i] + 1})`;
      }
    }

    // Searching in diagonals
    for (let i = 0; i < rows.length; i++) {
      let pivot = array[rows[i]][columns[i]];

      if (columns[i] > 2 && rows[i] > 2) {
        if (
          pivot === array[rows[i] - 1][columns[i] - 1] &&
          pivot === array[rows[i] - 2][columns[i] - 2] &&
          array[rows[i] - 3][columns[i] - 3] === "x"
        )
          xy = `(${rows[i] - 2}x${columns[i] - 2})`;
      }

      if (columns[i] < 4 && rows[i] > 2) {
        if (
          pivot === array[rows[i] - 1][columns[i] + 1] &&
          pivot === array[rows[i] - 2][columns[i] + 2] &&
          array[rows[i] - 3][columns[i] + 3] === "x"
        )
          xy = `(${rows[i] - 2}x${columns[i] + 2})`;
      }
    }
  } catch (e) {
    console.log(e);
  }

  return xy;
}

// keep this function call here
console.log(
  ConnectFourWinner([
    "R",
    "(x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x)",
    "(x,x,R,R,x,x,x)",
    "(x,R,R,R,Y,Y,Y)",
  ])
);