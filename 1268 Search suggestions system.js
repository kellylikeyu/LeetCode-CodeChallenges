// You are given an array of strings products and a string searchWord.
// Design a system that suggests at most three product names from products after each character of searchWord is typed. 
// Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix, 
// return the three lexicographically minimums products.
// Return a list of lists of the suggested products after each character of searchWord is typed.
// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"]


var suggestedProducts = function(products, searchWord) {
    const sort = products.sort((a,b) => a > b ? 1: -1);
   // const sort = products.sort()
    const results = [];
    let search = "";
    for (let i=0; i<searchWord.length; i++) {
        let count = 0;
        results.push([])
        search += searchWord[i];
        for (let j=0; j<sort.length && count <3; j++) {
            if (sort[j].slice(0,i+1) === search) {
                results[i].push(sort[j]);
                count ++;
            }
        }
    }
    return results;
};
