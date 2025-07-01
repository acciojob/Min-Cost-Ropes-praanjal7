function mincost(arr) {
  // Step 1: Sort the array in ascending order
  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    // Step 2: Take out the two smallest ropes
    let first = arr.shift();  // smallest rope
    let second = arr.shift(); // second smallest rope

    let newRope = first + second;
    cost += newRope;

    // Step 3: Push the new rope back and sort again
    arr.push(newRope);
    arr.sort((a, b) => a - b);
  }

  return cost;
}

module.exports = mincost;
