
// Imports
import p5 from 'p5'
import { Simulator } from './Simulator'
import { Human } from './Human'

// Main function
function main(sketch: p5) {

	let p: HTMLParagraphElement = <HTMLParagraphElement> document.querySelector("p#daysCounter")

	const sim: Simulator = new Simulator(sketch, {
		dayLength: 60,
		infectionProbability: 0.4,
		infectionRadius: 25,
		deathProbability: 0.1,
		daysForRecovery: 15,
		humanMovementRadius: 50,

		events: {
			draw: (sim: Simulator) => {
				p.innerHTML = `${sim.daysPassed} days`
			}
		}
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