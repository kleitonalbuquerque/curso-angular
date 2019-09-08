class Spacecraft {

  constructor (public propulsor: string){}

  jumpIntoHyperSpace() {
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

// interface Containership {
  
//   cargoContainers: number

//   // cargoContainers?: number => opcional
// }

export { Spacecraft }