function map(arr, func) {
    return arr.map(element => func(element))
}

function reduce(arr, func, start) {
    let val = (!!start) ? start : arr[0];
    let i = (!!start) ? 0 : 1;

    for (; i < arr.length; i++) {
        val = func(arr[i], val)
    }

    return val;
}