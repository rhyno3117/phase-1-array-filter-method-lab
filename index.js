// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter
        (possibleMatch => possibleMatch.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(
        (possibleMatch) =>
            possibleMatch.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
}

function matchName(drivers, name) {
    return drivers.filter((record) => record.name === name)
}