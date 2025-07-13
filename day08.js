function mergeTwoSortArr(nums1, m, nums2, n) {
    let idx = m + n - 1;
    let i = m - 1;
    let j = n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[idx--] = nums1[i--];
        } else {
            nums1[idx--] = nums2[j--]
        }
    }
    while (j >= 0) {
        nums1[idx--] = nums2[j--]
    }
}

// Test using:
let nums1 = [1, 2, 3, 0, 0, 0], m = 3;
let nums2 = [2, 5, 6], n = 3;
mergeTwoSortArr(nums1, m, nums2, n);
console.log(nums1); // should output [1,2,2,3,5,6]


// 2nd problem (next permutation)
/* 
step1: pivot => A[i]   < A[i+1]
 find the pivot
step2: find the right most pivot element
 swap(RME,pivot);
step3: Reverse (pivot+1 to n-1)
 dec -> inc order
*/

function nextPermuteArr(nums) {
    const n = nums.length;
    let pivot = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivot = i;
            break;
        }
    }
    if (pivot === -1) {
        nums.reverse();
        return;
    }
    //step 2
    for (let i = n - 1; i > pivot; i--) {
        if (nums[i] > nums[pivot]) {
            // Swap pivot with this element
            [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
            break;
        }
    }

    // Step 3: Reverse the right half after the pivot
    let left = pivot + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}
let arr = [1, 3, 2];
nextPermuteArr(arr);
console.log(arr); // Output: [2, 1, 3]

