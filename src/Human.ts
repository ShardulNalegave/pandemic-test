
// Imports
import p5 from 'p5'

// Interface for Human class
export interface IHuman {
	position: p5.Vector
	infected: boolean
	radius: number
	draw(sketch: p5, radius: number): void
	move(sketch: p5): void
	checkForInfection(humans: Human[]): void
}

// Human class
export class Human implements IHuman {

	public infected: boolean
	public position: p5.Vector
	public radius: number = 50

	/**
	 * Constructs a Human instance
	 * @param pos The position of the human
	 */
	constructor(pos: p5.Vector, infected?: boolean) {
		this.position = pos
		this.infected = infected || false
	}

	/**
	 * Draws the Human
	 * @param sketch The sketch to draw on
	 */
	public draw(sketch: p5): void {
		sketch.noStroke()
		if (this.infected) {
			sketch.fill(150, 25, 25)
		} else {
			sketch.fill(255)
		}
		sketch.ellipse(this.position.x, this.position.y, 10, 10)

		if (this.infected) {
			sketch.stroke(200, 50, 50)
			sketch.noFill()
			sketch.ellipse(this.position.x, this.position.y, this.radius)
		}
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

	/**
	 * Check for infection
	 * @param humans The humans in that area
	 */
	public checkForInfection(humans: Human[]): void {}

}