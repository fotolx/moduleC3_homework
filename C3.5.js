// Задание 5
// Переписать консольное приложение из предыдущего юнита на классы.

// main class for electric appliances
class ElectricAppliance{
    constructor(name, current){
    this.voltage = 220,
    this.current = current,
    this.plugged = false,
    this.name = name
    }
    plugIn() {
        this.plugged = true
        console.log(`Aplliance ${this.name} is plugged in.`)
    }
    
    plugOut() {
        this.plugged = false
        console.log(`Aplliance ${this.name} is unplugged.`)
    }
    
    calcPower() {
        console.log(`Power consumption of ${this.name} is ${(this.voltage*this.current).toFixed(1)} Watt.`)
    }

}


// class for electric lamps
class Lamp extends ElectricAppliance{
    constructor(name, lampType, current){
        super(name, current)
        this.lampType = lampType
        this.lampOn = false
        this.current = current
    }
    switchLamp(){
        if (this.plugged) {
            this.lampOn = ! this.lampOn
            console.log(`${this.name} is ${this.lampOn?'On':'Off'}.`)
        } else {
            console.log(`Plugin ${this.name} before.`)
        }
    }
}


// class for vacuum cleaners
class hoover extends ElectricAppliance{
    constructor(name, current){
        super(name, current)
        this.switchedOn = false
    }
    turnOnOff(){
        if (this.plugged) {
            this.switchedOn = ! this.switchedOn
            console.log(`${this.name} is ${this.switchedOn?'On':'Off'}.`)
        } else {
            console.log(`Plugin ${this.name} before.`)
        }
    }
    plugOut(){
        this.turnOnOff()
        this.plugged = false
        console.log(`Aplliance ${this.name} is plugged out.`)
    }
}


// class for fridges
class fridge extends hoover{
    constructor(name, current){
        super(name, current)
        this.fridgeTemp
        this.freezerTemp
    }
    setFridgeTemp(temp){
        if (this.plugged) {
            this.fridgeTemp = temp
            console.log(`${this.name} fridge temperature is set to ${this.fridgeTemp}.`)
        } else {
            console.log(`Plugin ${this.name} before.`)
        }
    }
    
    getFridgeTemp(){
        console.log(`Temperature in fridge is ${this.fridgeTemp}.`)
    }

    setFreezerTemp(temp){
        if (this.plugged) {
            this.freezerTemp = temp
            console.log(`${this.name} freezer temperature is set to ${this.freezerTemp}.`)
        } else {
            console.log(`Plugin ${this.name} before.`)
        }
    }

    getFreezerTemp() {
        console.log(`Temperature in freezer is ${this.freezerTemp}.`)
    }

    plugOut(){
        this.plugged = false
        this.switchedOn = false
        this.freezerTemp = undefined
        this.fridgeTemp = undefined
        console.log(`Aplliance ${this.name} is plugged out.`)
    }
    plugIn(){
        this.plugged = true
        console.log(`Aplliance ${this.name} is plugged in.`)
        this.turnOnOff()
    }
}


// Creating instance of Table lamp
const tableLamp = new  Lamp('Table lamp', 'diode', 0.032)
tableLamp.switchLamp()
tableLamp.plugIn()
tableLamp.switchLamp()
tableLamp.calcPower()
tableLamp.switchLamp()
tableLamp.plugOut()
console.log(tableLamp)

// Creating instance of Chandelier
const chandelier = new Lamp('Chandelier', 'incadescent', 0.2725)
chandelier.plugIn()
chandelier.switchLamp()
chandelier.calcPower()
console.log(chandelier)

// Creating instance of vacuum cleaner
const greenBosch = new hoover('Green Bosch vacuum cleaner', 8)
greenBosch.plugIn()
greenBosch.turnOnOff()
greenBosch.calcPower()
greenBosch.plugOut()
console.log(greenBosch)

// Creating instance of freezer
const myFreezer = new fridge('LG freezer', 1.2)
myFreezer.plugIn()
myFreezer.setFreezerTemp(3)
myFreezer.setFridgeTemp(-18)
myFreezer.getFreezerTemp()
myFreezer.getFridgeTemp()
myFreezer.calcPower()
myFreezer.plugOut()
console.log(myFreezer)
