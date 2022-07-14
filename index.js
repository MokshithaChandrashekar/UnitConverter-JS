const convertBtn = document.getElementById("convert-btn")
const inputNumber = document.getElementById("input-number")
const coverisonLength = document.getElementById("coverison-length")
const coverisonVolume = document.getElementById("coverison-volume")
const coverisonMass = document.getElementById("coverison-mass")

convertBtn.addEventListener("click", function(){
    console.log("converting!")
    let inum= inputNumber.value
    
    //Length
    let lenFeet = (inum * 3.281).toFixed(2)
    let lenMeters = (inum / 3.281).toFixed(2)
    console.log(lenFeet)
    let lenString = `${inum} meters = ${lenFeet} feet | ${inum} feet = ${lenMeters} meters` 
    coverisonLength.innerHTML = lenString

    //Volume
    let volLiters = (inum * 0.264).toFixed(2)
    let volGallons = (inum / 0.264).toFixed(2)
    console.log(volLiters)
    let volString = `${inum} liters = ${volLiters} gallons | ${inum} gallons = ${volGallons} liters` 
    coverisonVolume.innerHTML = volString

    //Mass
    let massKilos = (inum * 2.204).toFixed(2)
    let massPounds = (inum / 2.204).toFixed(2)
    console.log(massKilos)
    let massString = `${inum} kilos = ${massKilos} pounds | ${inum} pounds = ${massPounds} kilos` 
    coverisonMass.innerHTML = massString
})