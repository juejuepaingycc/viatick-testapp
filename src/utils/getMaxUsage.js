export default function getMaxUsage(arr) {
    var max;
    for (var i=0 ; i<arr.length ; i++) {
        if (max == null || parseInt(arr[i].value) > max.value)
            max = arr[i];
    }
    return max;
}