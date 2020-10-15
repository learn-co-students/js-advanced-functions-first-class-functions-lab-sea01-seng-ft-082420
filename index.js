// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let t = []
    t.push(drivers[0])
    t.push(drivers[1])
    return t
}

const returnLastTwoDrivers = function(drivers){
    let t = []
    t.push(drivers[drivers.length-2])
    t.push(drivers[drivers.length-1])
    return t
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fare) { return fare * num}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fcn ) {
    
    return fcn(drivers)
}