//Given a list paths of directory info, including the directory path, and all the files with contents in this directory, 
//return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.
//Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
//Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]

var findDuplicate = function(paths) {
    let results = [];
    let contentPaths = {};
    for (let path of paths) {
        let pathFile = path.split(" ");
        let directory = pathFile.shift();
        for (let file of pathFile) {
            let match = file.match(/^(\S+)(\(\S+\))$/);
            let fileName = match[1];
            let content = match[2];
            if (!contentPaths[content]) {
                contentPaths[content] = [directory+"/"+fileName];
            }
            else {
                contentPaths[content].push(directory+"/"+fileName)
            }
        }
    }
    for (let content in contentPaths) {
        if (contentPaths[content].length>1) {
            results.push(contentPaths[content]);
        }
    }  
    return results;
};
