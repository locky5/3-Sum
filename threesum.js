var threeSum = function(nums) {
    let result = []

    nums.sort((a,b) => {
        return a-b
    })

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])

                while (nums[j] === nums[j + 1]) {
                    j++
                }

                while (nums[k] === nums[k - 1]) {
                    k--
                }

                j++
                k--
            }

            if (sum < 0) {
                j++
            }
            if (sum > 0) {
                k--
            }
        }
    }

    return result
};
