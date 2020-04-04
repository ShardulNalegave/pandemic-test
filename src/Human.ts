
// Imports
import p5 from 'p5'

// Interface for Human class
export interface IHuman {
	position: p5.Vector
	draw(sketch: p5): void
}

// Human class
export class Human implements IHuman {

	public position: p5.Vector

	/**
	 * Constructs a Human instance
	 * @param pos The position of the human
	 */
	constructor(pos: p5.Vector) {
		this.position = pos
	}

	/**
	 * Draws the Human
	 * @param sketch The sketch to draw on
	 */
	public draw(sketch: p5): void {
		sketch.stroke(0)
		sketch.fill(255)
		sketch.ellipse(this.position.x, this.position.y, 10, 10)
	}

}