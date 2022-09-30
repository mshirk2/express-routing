const {findMean, findMedian, findMode} = require("./helpers");

describe("#findMean", () => {
    it("finds the mean of an array of numbers", () => {
        expect(findMean([4, 8, -2, 16])).toEqual(6.5)
    })
    it("finds the mean of empty array", () => {
        expect(findMean([])).toEqual(0)
    })
})

describe("#findMedian", () => {
    it("finds the median of an even set", () => {
        expect(findMedian([4, 8, -2, 16])).toEqual(6)
    })
    it("finds the median of odd set", () => {
        expect(findMedian([4, 8, -2])).toEqual(4)
    })
    it("finds the median of empty array", () => {
        expect(findMedian([])).toEqual(0)
    })
})

describe("#findMode", () => {
    it("finds the mode of an array of numbers", () => {
        expect(findMode([4, 8, -2, 16, 8])).toEqual(8)
    })
    it("finds the mode of empty array", () => {
        expect(findMode([])).toEqual(0)
    })
})