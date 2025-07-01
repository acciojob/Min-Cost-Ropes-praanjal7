function mincost(arr) {
  arr.sort((a, b) => a - b); // Pehle chhoti se badi sort kar lein
  let cost = 0;

  while (arr.length > 1) {
    let first = arr.shift();  // sabse chhoti rope
    let second = arr.shift(); // doosri chhoti rope

    let newRope = first + second;
    cost += newRope;

    arr.push(newRope);        // jodi hui rope daal do
    arr.sort((a, b) => a - b); // wapas chhoti se badi sort karo
  }

  return cost;
}