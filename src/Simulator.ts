
// Imports
import p5 from 'p5'
import { Human } from './Human'

/**
 * Interface for SimulatorOptions
 */
export interface SimulatorOptions {
	// Number of frames for a single day
	dayLength: number
	// Infected person infection radius
	infectionRadius?: number
}

// Simulator class
export class Simulator {

	// P5 Sketch
	private sketch: p5
	// Humans for simulator
	private humans: Human[] = []
	// Config for simulator
	private config: SimulatorOptions
	// No of days passed
	private _days: number = 0
	// Frame counter to determine frame length
	private _dayFinished: number = 0

	/**
	 * Constructs a Simulator instance
	 * @param sketch P5 sketch instance
	 */
	constructor(sketch: p5, options: SimulatorOptions) {
		this.sketch = sketch
		this.config = options

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
		this.sketch.createCanvas(600, 600)
	}

	/**
	 * Draw loop function
	 */
	public draw(): void {
		this.sketch.background(0);
		if (this._dayFinished == this.config.dayLength) {
			this._days += 1
			this._dayFinished = 0
			for (let i = 0; i < this.humans.length; i++) {
				const human: Human = this.humans[i];
				human.move(this.sketch)
				human.draw(this.sketch)
			}
		} else {
			this._dayFinished += 1
			for (let i = 0; i < this.humans.length; i++) {
				const human: Human = this.humans[i];
				human.draw(this.sketch)
			}
		}
	}

	/**
	 * Adds a Human to the Simulator
	 * @param human The Human to add
	 */
	public addHuman(human: Human): void {
		if (this.config.infectionRadius) human.radius = this.config.infectionRadius
		this.humans.push(human)
	}

}