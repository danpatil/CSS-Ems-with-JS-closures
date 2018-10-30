function calculateEms (pixels) {
    let baseValue = 16;
    function doMath () {
        return pixels/baseValue;
    }
    return doMath;
}

let smallSize = calculateEms(12);
let mediumSize = calculateEms(18);

console.log ('Small size: ', smallSize() );
console.log ('Medium size: ', mediumSize() );