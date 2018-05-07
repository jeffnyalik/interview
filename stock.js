function getMaxProfit(arr) {
	var minIdx = 0;
    var maxIdx = 1;
    var currMin = 0;
    var maxProfit = 0;

    if(arr.length < 2) {
        throw new Error("should have atleast two time periods to be profitable!");
    }
    
    for(var i = 1; i < arr.length; i++) {

        // new current min.
        if(arr[i] < arr[currMin]) { 
        	currMin = i;
        }
        
        // new best profit
        if(arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMin]) {
                maxIdx = i;
            	minIdx = currMin;
        }

    }

    maxProfit  = arr[maxIdx] - arr[minIdx];
    return maxProfit;
}

var stockValue = [1,5,6,7,34,10];
var arr2 = [1];
console.log(getMaxProfit(stockValue));