
// Takes an array of coordinates and finds the center
export const calculateCentroid = (arr) => {
    let x = arr.map (xy => xy[0]);
    let y = arr.map (xy => xy[1]);
    let cx = (Math.min (...x) + Math.max (...x)) / 2;
    let cy = (Math.min (...y) + Math.max (...y)) / 2;

    return [cx, cy]
}