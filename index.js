// Code your solution in this file!
//first function
const returnFirstTwoDrivers= function(drivers){
    const newArray=drivers.slice(0,2);
    return newArray;
}
const drivers=['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers));

//second function
const returnLastTwoDrivers=function(twoDrivers){
    const newArray=drivers.slice (-2);
    return newArray;
}
const twoDrivers=['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnLastTwoDrivers(twoDrivers));

//third function..we can call a function using that array using its index

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

//fourth function
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};
const fareDoubler = createFareMultiplier(2); 
const fareTripler = createFareMultiplier(3); 

//fifth function
//const selectDifferentDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const selectDifferentDrivers = function (arrayOfDrivers, driverFunction) {
  return driverFunction(arrayOfDrivers);
};
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
