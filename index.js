// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => (n) => n * int


const fareDoubler = (int) => createFareMultiplier(2)(int)

const fareTripler = (int) => createFareMultiplier(3)(int)


const selectDifferentDrivers = (drivers, func) => func(drivers)
