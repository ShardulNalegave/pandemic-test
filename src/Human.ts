
// Imports
import p5 from 'p5'

// Interface for Human class
export interface IHuman {
	position: p5.Vector
	infected: boolean
	daysSinceInfection: number
	dead: boolean
	radius: number
	draw(sketch: p5, radius: number): void
	move(sketch: p5): void
	checkForInfection(humans: Human[], probability: number): void
	checkForRecoveryOrDeath(recoveryDays: number, deathPercentage: number): void
	newDay(sketch: p5, dayLength: number): void
}

// Human class
export class Human implements IHuman {

	public infected: boolean
	public daysSinceInfection: number = 0
	public dead: boolean = false
	public position: p5.Vector
	public radius: number = 50
	private _to: p5.Vector | null = null
	private _movementPerFrame: p5.Vector | null = null

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
		} else if (this.dead) {
			sketch.fill(50)
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
		// let x_change: number = sketch.random(-20, 20)
		// let y_change: number = sketch.random(-20, 20)
		// if (this.position.x + x_change < 0) {
		// 	x_change = -x_change
		// } else if (this.position.x + x_change > 600) {
		// 	x_change = -x_change
		// }

		// if (this.position.y + y_change < 0) {
		// 	y_change = -y_change
		// } else if (this.position.y + y_change > 600) {
		// 	y_change = -y_change
		// }

		// this.position.add(sketch.createVector(x_change, y_change))
		if (this._movementPerFrame) {
			this.position.add(this._movementPerFrame)
		}
	}

	/**
	 * Check for infection
	 * @param humans The humans in that area
	 */
	public checkForInfection(humans: Human[], probability: number): void {
		for (let i = 0; i < humans.length; i++) {
			const human = humans[i];
			if (human === this) continue
			if (!human.dead) if (human.infected) if (p5.Vector.sub(human.position, this.position).mag() <= this.radius) {
				if (Math.random() < probability) {
					this.infected = true
					break
				}
			}
		}
	}

	/**
	 * Checks if the person is recovered or is dead
	 */
	public checkForRecoveryOrDeath(recoveryDays: number, deathPercentage: number): void {
		let res: number = Math.random()
		if (res < deathPercentage) { this.infected = false; this.dead = true }
		else if (recoveryDays == this.daysSinceInfection) this.infected = false
	}

	public newDay(sketch: p5, dayLength: number): void {
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

		this._to = p5.Vector.add(this.position, sketch.createVector(x_change, y_change)).sub(this.position)
		this._movementPerFrame = this._to.normalize().mult(0.5)
		// console.log(this._to.mag())
		// console.log(this._movementPerFrame.mag())
		// console.log(this._to.mag() / dayLength)
		if (this.infected) {
			this.daysSinceInfection += 1
		}
	}

}