
// Imports
import p5 from 'p5'
import { Simulator } from './Simulator'
import { Human } from './Human'

// Main function
function main(sketch: p5) {
	const sim: Simulator = new Simulator(sketch, {
		dayLength: 10,
		infectionRadius: 50
	})

	for (let i = 0; i < 9; i++) {
		const human: Human = new Human(
			sketch.createVector(
				sketch.random(0, 600),
				sketch.random(0, 600)
			)
		)

		sim.addHuman(human)
	}

	const infectedHuman: Human = new Human(
		sketch.createVector(
			sketch.random(0, 600),
			sketch.random(0, 600)
		),
		true
	)
	sim.addHuman(infectedHuman)
}

new p5(main)