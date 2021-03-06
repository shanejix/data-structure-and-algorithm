// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

// For example, the below binary watch reads "4:51".


// Given an integer turnedOn which represents the number of LEDs that are currently on, return all possible times the watch could represent. You may return the answer in any order.

// The hour must not contain a leading zero.

// For example, "01:00" is not valid. It should be "1:00".
// The minute must be consist of two digits and may contain a leading zero.

// For example, "10:2" is not valid. It should be "10:02".
//  

// Example 1:

// Input: turnedOn = 1
// Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
// Example 2:

// Input: turnedOn = 9
// Output: []
//  

// Constraints:

// 0 <= turnedOn <= 10

// 方法一：枚举

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {

    const ans = []

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {

            if (h.toString(2).split('0').join('').length + m.toString(2).split('0').join('').length === turnedOn) {
                ans.push(h + ':' + (m < 10 ? '0' : '') + m)
            }
        }
    }

    return ans
};

// 方法二：二进制枚举

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {

    const ans = []

    for (let i = 0; i < 1024; i++) {
        // 取出高四位
        let h = i >> 6;
        // 取出低6位
        let m = i & 63;

        if (h < 12 && m < 60 && i.toString(2).split('0').join('').length === turnedOn) {
            ans.push(h + ':' + (m < 10 ? '0' : '') + m)
        }
    }

    return ans
};