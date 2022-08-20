//You are given two string arrays username and website and an integer array timestamp. All the given arrays are of the same length and the tuple 
//[username[i], website[i], timestamp[i]] indicates that the user username[i] visited the website website[i] at time timestamp[i].
//A pattern is a list of three websites (not necessarily distinct).
//The score of a pattern is the number of users that visited all the websites in the pattern in the same order they appeared in the pattern.
//Return the pattern with the largest score. If there is more than one pattern with the same largest score, return the lexicographically smallest such pattern.
//Input: username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"], timestamp = [1,2,3,4,5,6,7,8,9,10], website = ["home","about","career","home","cart","maps","home","home","about","career"]
//Output: ["home","about","career"]
//Explanation: The tuples in this example are:
//["joe","home",1],["joe","about",2],["joe","career",3],["james","home",4],["james","cart",5],["james","maps",6],["james","home",7],["mary","home",8],["mary","about",9], and ["mary","career",10].
//The pattern ("home", "about", "career") has score 2 (joe and mary).
//The pattern ("home", "cart", "maps") has score 1 (james).
//The pattern ("home", "cart", "home") has score 1 (james).
//The pattern ("home", "maps", "home") has score 1 (james).
//The pattern ("cart", "maps", "home") has score 1 (james).
//The pattern ("home", "home", "home") has score 0 (no user visited home 3 times).

var mostVisitedPattern = function(username, timestamp, website) {
    // Create a map of entries and sort it based on timestamps
    // O(n log n)
    const entriesMap = timestamp.map((item, i) => [username[i], timestamp[i], website[i]])
        .sort((a, b) => a[1] - b[1]);
    
    // group websites by users
    // O(n)
    const entriesByUsers = {};
    entriesMap.forEach(entry => {
        if (!entriesByUsers[entry[0]]) entriesByUsers[entry[0]] = [];
        entriesByUsers[entry[0]].push(entry[2]);
    });
    const seq = {};
    let max = ['', 0];
    
    // get all possible 3-sequences for each user and increment the count of each sequence in seq
    // O(n ^ 3)
    Object.entries(entriesByUsers).forEach(([, websites]) => {
        const seqByUsers = {};
        
        for(let i = 0; i < websites.length - 2; i++) {
            for(let j = i + 1; j < websites.length - 1 ; j++) {
                for(let k = j + 1; k < websites.length ; k++) {
                    const key = `${websites[i]}|${ websites[j]}|${websites[k]}`;
                    if (!seqByUsers[key]) seqByUsers[key] = 1;
                }
            }
        }
        Object.keys(seqByUsers).forEach(seqByUser => {
            if (!seq[seqByUser]) seq[seqByUser] = 0;
            seq[seqByUser] += 1;  
            if (
                (
                    seq[seqByUser] === max[1] && 
                    seqByUser.split('|').join(' ') < max[0].split('|').join(' ')
                ) 
                ||
                seq[seqByUser] > max[1]
            ) {
                max[0] =  seqByUser;
                max[1] = seq[seqByUser];
            }
        });
    });
    return max[0].split('|');
};
