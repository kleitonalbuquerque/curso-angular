import { Spacecraft } from './base-ships'
import { Containership } from './base-container'

export class MilleniumFalcon extends Spacecraft implements Containership {

  cargoContainers: number

  constructor(){
    super('hyperdrive')
    this.cargoContainers = 4
  }

  jumpIntoHyperSpace(){
    var lucky = Math.random()
    if(lucky >= 0.5){
      console.log(lucky)
      super.jumpIntoHyperSpace()
    }else { 
      console.log(lucky)
      console.log('Failed to jump into hyperspace') 
    }
  }
}