import React from "react";

const Test1 = () => {
  return <div>Test1</div>;
};

export default Test1;

function find_max(nums: number[]) {
  // let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  let max_num = 0;
  for (let num of nums) {
    if (num > max_num) {
      // (Fill in the missing line here)
      max_num = num;
    }
  }
  return max_num;
}

// console.log(find_max([2, 15, 10, 45, 3, 55, 16]));

function mySort(nums: number[], x: number[] = []): any {
  if (nums.length < 1) return x;

  x.push(find_max(nums));
  if (nums.includes(x[x.length - 1])) {
    nums.splice(nums.indexOf(x[x.length - 1]), 1);
    console.log(nums);
  }
  return mySort(nums, x);
}

// console.log(mySort([2, 15, 10, 45, 3, 55, 16]));
// console.log(x[x.length - 1])
{
  let x = [2, 15, 10, 45, 3, 55, 16];
  let xx = x.filter((elem, ind, arr) => {});
}
