"use strict";
function findFirstOccurrence(numbers, target) {
    let low = 0;
    let high = numbers.length - 1;
    let result = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (numbers[mid] == target) {
            result = mid;
            high = mid - 1;
        }
        else if (numbers[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return result;
}
let data = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let target = 5;
let index = findFirstOccurrence(data, target);
if (index !== -1) {
    console.log(`Phần tử ${target} xuất hiện đầu tiên tại vị trí ${index}`);
}
else {
    console.log(`Phần tử ${target} không tồn tại trong mảng`);
}
