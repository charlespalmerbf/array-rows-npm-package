function arrayRows(array, num) {
    const res = [];
    const copy = [...array];
    let slice = [];
    while (copy.length) {
        slice.push(copy.shift());
        if (slice.length === num) {
            res.push(slice);
            slice = [];
        }
    }
    if (slice.length) {
        res.push(slice);
    }
    return res;
}

module.exports = arrayRows;
