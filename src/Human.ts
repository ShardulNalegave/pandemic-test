
// Imports
import p5 from 'p5'

// Interface for Human class
export interface IHuman {
	position: p5.Vector
	draw(sketch: p5): void
	move(sketch: p5): void
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
		this.move(sketch)
		sketch.stroke(0)
		sketch.fill(255)
		sketch.ellipse(this.position.x, this.position.y, 10, 10)
	}

	/**
	 * Move the human
	 */
	public move(sketch: p5): void {
		let x_change: number = sketch.random(-20, 20)
		let y_change: number = sketch.random(-20, 20)
		if (this.position.x + x_change < 0) {
			x_change = -x_change
		} else if (this.position.x + x_change > 600) {
			x_change = -x_change
		}

		if (this.position.y + y_change < 0) {
			y_change = -y_change
		} else if (this.position.y + y_change > 600) {
			y_change = -y_change
		}

		this.position.add(sketch.createVector(x_change, y_change))
	}

}