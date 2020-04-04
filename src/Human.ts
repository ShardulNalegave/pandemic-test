
// Imports
import p5 from 'p5'

// Interface for Human class
export interface IHuman {
	position: p5.Vector
	velocity: p5.Vector | null
	draw(sketch: p5): void
	move(sketch: p5): void
}

// Human class
export class Human implements IHuman {

	public position: p5.Vector
	public velocity: p5.Vector | null = null

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
		let to: p5.Vector = sketch.createVector(
			sketch.random(0, 600),
			sketch.random(0, 600)
		)
		this.velocity = p5.Vector.sub(to, this.position).normalize()
		this.position.add(this.velocity)
	}

}