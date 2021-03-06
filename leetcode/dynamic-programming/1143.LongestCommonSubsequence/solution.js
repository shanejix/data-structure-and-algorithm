// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

//  

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
//  

// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.

// 方法一：暴力循环

// "psnw"
// "vozsh"
//  用例不通过

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    if (text1 === text2) return text1.length

    let max = 0;

    let text3 = text1;
    let text4 = text2;

    if (text3.length < text4.length) {
        [text3, text4] = [text4, text3];
    }

    let len1 = text3.length;
    let len2 = text4.length;

    console.log(text3, len1, text4, len2)

    let p1 = p2 = 0;

    while (p2 < len2) {

        let p = text3.indexOf(text4[p2], p1)
        if (p === -1) {
            p2++;
        } else {
            p1 = p;
            max++
        }
    }

    return max
};

// 方法二：动态规划

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length;
    let m = text2.length;

    if (n * m === 0) {
        return 0;
    }

    console.log(n, m);

    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

    console.log(dp)

    for (let i = 0; i < n + 1; i++) {
        dp[i][0] = 0;
    }

    for (let i = 0; i < m + 1; i++) {
        dp[0][i] = 0;
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {

            console.log(text1[i - 1], text2[j - 1]);

            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    console.log(dp)

    return dp[n][m];
};

// 25d 后再次碰到 默写了一遍加了注释

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let m = text1.length;
    let n = text2.length;

    if (n * m === 0) {
        return 0
    }

    // dp[i][j] text1以j结尾和text2以i结尾的最大公共子序列
    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

    // 预处理 第一行 
    for (let i = 0; i <= m; i++) {
        dp[0][i] = 0;
    }

    // 预处理 第一列
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }

    // text1[j-1] text2[i-1]
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text2[i - 1] === text1[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[n][m]
};