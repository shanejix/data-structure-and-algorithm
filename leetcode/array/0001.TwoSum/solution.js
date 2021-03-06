// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//solution1: brute force

function twoSum(nums, target) {
  let result = {};

  if (nums && nums.length) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i; j < nums.length; j++) {
        result[nums[i] + nums[j]] = [i, j];
      }
    }
  }

  return result[target];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {

  if (!nums) {
    return
  }

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    let minu = target - curr;
    let tIdx = nums.indexOf(minu, i + 1);

    if (tIdx !== -1) {
      return [i, tIdx];
    }
  }
};

//solution2: for-loop

function twoSum2(nums, target) {
  // to save nums array value-index
  let hash = {};

  if (nums && nums.length) {
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];

      if (diff in hash) {
        return [hash[diff], i];
      }

      hash[nums[i]] = i;
    }
  }
}

//solution3: for-in loop

function twoSum3(nums, target) {
  // to save nums array value-index
  let hash = {};

  if (nums) {
    for (let i in nums) {
      let diff = target - nums[i];

      if (diff in hash) {
        return [hash[diff], i];
      }

      hash[nums[i]] = i;
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum4 = function (nums, target) {

  if (!nums) {
    return
  }

  let map = {};

  for (let i = 0; i < nums.length; i++) {

    let curr = nums[i];
    let minu = target - curr;
    let tIdx = map[minu];

    if (tIdx !== undefined) {
      return [i, tIdx];
    }

    map[curr] = i;

  }
};
// console.log("brute-loop", twoSum([1, 7, 2, 8], 9));
// console.log("for-loop", twoSum2([1, 7, 2, 8], 9));
// console.log("for-in loop", twoSum2([1, 7, 2, 8], 9));
console.log("twoSum4", twoSum4([2, 7, 11, 15], 9));