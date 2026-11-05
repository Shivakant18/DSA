function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    return arr1.filter(x => arr2.every(y => Math.abs(x - y) > d)).length;
}