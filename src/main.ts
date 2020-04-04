
// Imports
import p5 from 'p5'
import { Simulator } from './Simulator'
import { Human } from './Human'

// Main function
function main(sketch: p5) {
	const sim: Simulator = new Simulator(sketch)

	for (let i = 0; i < 10; i++) {
		const human: Human = new Human(
			sketch.createVector(
				sketch.random(0, 600),
				sketch.random(0, 600)
			)
		)

		sim.addHuman(human)
	}
}

new p5(main)