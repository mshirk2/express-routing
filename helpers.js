// Convert string to number values, return array of numbers
function convertNums(numString){
    let result = [];
    for (let i=0; i < numString.length; i++){
        let inputVal = Number(numString[i]);

        if (Number.isNaN(inputVal)){
            return new Error(
                `${inputVal} is not a valid number.`
            );
        }
        result.push(inputVal);
    }
    return result;
}


// Caluculate mean, return number value
function findMean(nums){
    if(nums.length === 0) return 0;

    return nums.reduce((acc, cur) => {
        return acc + cur;
    }) / nums.length
}

// Caluculate median, return number value
function findMedian(nums){
    nums.sort((a,b) => a-b);
    let middleIdx = Math.floor(nums.length / 2);

    let median;
    if (nums.length % 2 === 0) {
        median = (nums[middleIdx] + nums[middleIdx - 1]) / 2;
    } else median = nums[middleIdx];

    return median
}

// Caluculate mode, return number value
function findMode(nums){

}


module.exports = {
    findMean,
    findMedian,
    findMode,
    convertNums,
}