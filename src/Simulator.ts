
// Imports
import p5 from 'p5'
import { Human } from './Human'

// Simulator class
export class Simulator {

	// P5 Sketch
	private sketch: p5
	private humans: Human[] = []

	/**
	 * Constructs a Simulator instance
	 * @param sketch P5 sketch instance
	 */
	constructor(sketch: p5) {
		this.sketch = sketch

		/**
		 * P5 sketch events
		 */

		// Setup event
		this.sketch.setup = () => this.setup()

		// Draw loop event
		this.sketch.draw = () => this.draw()
	}

	/**
	 * Sketch setup function
	 */
	public setup(): void {
		this.sketch.frameRate(5)
		this.sketch.createCanvas(600, 600);
	}

	/**
	 * Draw loop function
	 */
	public draw(): void {
		this.sketch.background(0);
		for (let i = 0; i < this.humans.length; i++) {
			const human: Human = this.humans[i];
			human.draw(this.sketch)
		}
	}

	/**
	 * Adds a Human to the Simulator
	 * @param human The Human to add
	 */
	public addHuman(human: Human): void {
		this.humans.push(human)
	}

}