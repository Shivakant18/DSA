/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {

    const daysBeforeMonth = [
        0, 31, 59, 90, 120, 151,
        181, 212, 243, 273, 304, 334
    ];

    const toDayOfYear = (date) => {
        const month = Number(date.slice(0, 2));
        const day = Number(date.slice(3, 5));

        return daysBeforeMonth[month - 1] + day;
    };

    const aliceStart = toDayOfYear(arriveAlice);
    const aliceEnd = toDayOfYear(leaveAlice);
    const bobStart = toDayOfYear(arriveBob);
    const bobEnd = toDayOfYear(leaveBob);

    const overlapStart = Math.max(aliceStart, bobStart);
    const overlapEnd = Math.min(aliceEnd, bobEnd);

    return Math.max(0, overlapEnd - overlapStart + 1);
};