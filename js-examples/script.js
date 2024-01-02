'use strict'

let lastName = "deepika"
let oldLastname = lastName
lastName = "vinith"

console.log(lastName,oldLastname)

const vinith = {
    firstName:"vinith",
    lastName: "R",
    age:27
}

const marriedVinith = vinith
marriedVinith.lastName = "deepika";
console.log("Before Marriage: ",vinith)
console.log("After Marriage: ",marriedVinith)

const vinith2 = {
    firstName:"vinith",
    lastName: "R",
    age:27,
    family:["boo","bee"]
}

const vinithCopy = Object.assign({},vinith2)
vinithCopy.lastName = "deepika"
vinith2.family.push("doo","dee")
console.log("Before Marriage: ",vinith2)
console.log("After Marriage: ",vinithCopy)