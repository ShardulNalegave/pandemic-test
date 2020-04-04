
// Imports
import p5 from 'p5'
import { Simulator } from './Simulator'
import { Human } from './Human'

// Main function
function main(sketch: p5) {
	const sim: Simulator = new Simulator(sketch, {
		dayLength: 10,
		infectionProbability: 0.2,
		infectionRadius: 20
	})

	for (let i = 0; i < 95; i++) {
		const human: Human = new Human(
			sketch.createVector(
				sketch.random(0, 600),
				sketch.random(0, 600)
			)
		)
		sim.addHuman(human)
	}

	for (let i = 0; i < 5; i++) {
		const human: Human = new Human(
			sketch.createVector(
				sketch.random(0, 600),
				sketch.random(0, 600)
			),
			true
		)
		sim.addHuman(human)
	}
}

new p5(main)