
function findMean(nums){
    if(nums.length === 0) return 0;

    return nums.reduce((acc, cur) => {
        return acc + cur;
    }) / nums.length
}

function findMedian(nums){
    nums.sort((a,b) => a-b);
    let middleIdx = Math.floor(nums.length / 2);

    let median;
    if (nums.length % 2 === 0) {
        median = (nums[middleIdx] + nums[middleIdx - 1]) / 2;
    } else median = nums[middleIdx];

    return median
}

function findMode(nums){

}


module.exports = {
    findMean,
    findMedian,
    findMode,
}