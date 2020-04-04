
// Imports
import p5 from 'p5'

// Simulator class
export class Simulator {

	// P5 Sketch
	private sketch: p5

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
		this.sketch.createCanvas(600, 600);
	}

	/**
	 * Draw loop function
	 */
	public draw(): void {
		this.sketch.background(0);
	}

}