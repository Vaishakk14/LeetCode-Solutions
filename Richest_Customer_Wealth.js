
var maximumWealth = function(accounts) {
    let maxWealth=Number.MIN_SAFE_INTEGER
    let sum=0
    for(let i in accounts){
        for(let j in accounts[i]){
           sum+=accounts[i][j]
        }
        
        maxWealth=Math.max(sum, maxWealth)
        sum=0
    }
    return maxWealth
};
    
    