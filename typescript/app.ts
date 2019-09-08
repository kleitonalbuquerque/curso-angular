// Declaração de variáveis
let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
console.log('This is episode ' + 4)
episode = episode + 1
console.log('Next episode is ' + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log('My favorite droid is ' + favoriteDroid)

// Array
let films: Array<string>
films = ['Ameaça Fantasma', ' Ataque dos Clones', ' O Retorno de Jedi']
console.log('Trilogia Star Wars: ' + films)

// Functions TS
// parsecs: number é o tipo do parâmetro
// boolean é o tipo do retorno
let isEnoughToBeatMF = function (parsecs: number): boolean {
  return parsecs < 12
}

let distance = 11
// `` => template string
console.log(`Is ${distance} parsecs enhough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
// O parâmetro passado tem que ser uma string
call('R2')

function inc (speed: number, inc: number = 1): number {
  return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)

// Classes
console.log('############### Classes | Módulos ###############')

import { Spacecraft, Containership } from './base-ships'
import { MilleniumFalcon } from './starfighters'

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

console.log('####################################################################')

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperSpace()

console.log('############### Interface ###############')

let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob (falcon) ? 'YES' : 'NO' }`)