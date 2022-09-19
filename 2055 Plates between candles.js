//There is a long table with a line of plates and candles arranged on top of it. You are given a 0-indexed string s consisting of characters '*' and '|' only, where a '*' represents a plate and a '|' represents a candle.

//You are also given a 0-indexed 2D integer array queries where queries[i] = [lefti, righti] denotes the substring s[lefti...righti] (inclusive). For each query, you need to find the number of plates between candles that are in the substring. A plate is considered between candles if there is at least one candle to its left and at least one candle to its right in the substring.

//For example, s = "||**||**|*", and a query [3, 8] denotes the substring "*||**|". The number of plates between candles in this substring is 2, as each of the two plates has at least one candle in the substring to its left and right.
//Input: s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
//Output: [9,0,0,0,0]

function platesBetweenCandles(s, queries) {
  let res = [];
  let count = 0;
  let candleSteps = [];
  // mark the candle position of start and end
  let candleCountInterval = new Map();
  candleCountInterval.set(0, [0, 0]);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|") {
      count++;
    }
    if (candleCountInterval.has(count)) {
      let arr = candleCountInterval.get(count);
      arr[1] = i;
      candleCountInterval.set(count, arr);
    } else {
      candleCountInterval.set(count, [i, i]);
    }
    candleSteps.push(count);
  }
  // input = "***|**|*****|**||**|*"
  // candleSteps = [0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6]
  // candleCountInterval = Map(7) {
  //   0 => [ 0, 2 ],
  //   1 => [ 3, 5 ],
  //   2 => [ 6, 11 ],
  //   3 => [ 12, 14 ],
  //   4 => [ 15, 15 ],
  //   5 => [ 16, 18 ],
  //   6 => [ 19, 20 ]
  // }

  for (let i = 0; i < queries.length; i++) {
    let l = queries[i][0];
    let r = queries[i][1];

    let c = candleSteps[r] - candleSteps[l] + 1;
    if (c >= 2) {
      let indexL = l;
      let indexR = r;
      if (s[l] === "*") {
        let a = candleCountInterval.get(candleSteps[l] + 1);
        indexL = a[0];
      }
      if (s[r] === "*") {
        let a = candleCountInterval.get(candleSteps[r] - 1);
        indexR = a[1];
      }

      res.push(
        indexR - indexL + 1 - (candleSteps[indexR] - candleSteps[indexL] + 1)
      );
    } else {
      res.push(0);
    }
  }

  return res;
}
