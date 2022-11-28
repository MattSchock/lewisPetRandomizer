let jesse = "sir fuck face von Jesse"
let zach = "zach"
let matt = "matt"
let dogFeeder = ""

results = Math.random()

if (results <= 0.33) {
    dogFeeder = "Matt"
    console.log(`${dogFeeder} will take care of the dogs tomorrow morning`)
} else if(results > 0.33) {
    console.log(`${dogFeeder} will take care of the dogs tomorrow morning`)
} else {
    console.log(`${dogFeeder} will take care of the dogs tomorrow but might drink your booze about it`)
}