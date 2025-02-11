class Animal
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age
    }
    move(speed)
    {
        console.log(`The ${this.name} runs at a speed of ${speed} mph `)
    }
}
class Rabbit extends Animal
{
    constructor(name, age, runspeed)
    {
        super(name, age)
        this.runspeed = runspeed
    }
    run()
    {
        console.log(`This ${this.name} can run`)
        super.move(this.runspeed)
    }
}
class Fish extends Animal
{
    constructor(name, age, swimSpeed)
    {
        super(name, age)
        this.swimSpeed = swimSpeed
    }
    swim()
    {
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }
}
class Hawk extends Animal
{
    constructor(name, age, flySpeed)
    {
        super(name, age)
        this.flySpeed = flySpeed
        super.move(this.flySpeed)
    }
    fly()
    {
        console.log(`This ${this.name} can fly `)
    }
}
const rabbit = new Rabbit("rabbit", 5, 50)
const fish = new Fish("samaki", 1, 70)
const hawk = new Fish("ndege", 3, 30)
rabbit.run()