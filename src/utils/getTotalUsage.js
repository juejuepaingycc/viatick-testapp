export default function getTotalUsage(arr) {
    var total = 0
    for (var i=0 ; i<arr.length ; i++) {
        total += arr[i].value
    }
    return total
}