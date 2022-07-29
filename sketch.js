//declared vaiables:

//states: state 1(starting menu) -- state2(actual game) -- state3(end screen as fail)
let state = 1;



let speedX;
let speedY;

let myXPos = 250;
let myYPos = 250;

let currentDirection;

let turtleImage;


let myLeft, myRight, myTop, myBottom;
let wormLeft, wormRight, wormTop, wormBottom;

let randDecimal = Math.random();
let randNum = 499 * randDecimal
let randInt = Math.floor(randNum);

let randDecimal2 = Math.random();
let randNum2 = 499 * randDecimal2
let randInt2 = Math.floor(randNum2);

let speed = 2;








// Step 1. Create pond
function setup() {
    if (state == 1) {
        noStroke();

        //title square
        createCanvas(500, 500);
        background(52, 161, 235);
        fill(138, 98, 14)
        rect(100, 60, 300, 100);

        //title text
        fill(0, 255, 0)
        textSize(70);
        text("TURTLE", 115, 130)

        //play button square
        fill(138, 98, 14)
        rect(150, 300, 200, 100);

        fill(0, 255, 0)
        textSize(70);
        text("PLAY", 160, 370)
    }

    if (state == 2) {
        createCanvas(500, 500);
        background(52, 161, 235);
    }
    // Step 2. Create turtle artwork

    if (state == 3) {
        createCanvas(500, 500);
    }
    if (state == 3) {
        noStroke();
        background(52, 161, 235);

        //game over title square
        fill(138, 98, 14)
        rect(60, 60, 380, 100);

        //game over title text
        fill(0, 255, 0)
        textSize(60);
        text("GAME OVER", 67, 130)


        //play button square
        fill(138, 98, 14)
        rect(150, 300, 200, 100);

        fill(0, 255, 0)
        textSize(70);
        text("PLAY", 160, 370)

    }


}
// Step 3. Create user inputs for Turtle input






// rectMode(CENTER);


function draw() {


    if (state == 2) {
        background(52, 161, 235);
        fill(2, 105, 50);
        rect(myXPos, myYPos, 50, 50);

        fill(203, 169, 239);
        rect(randInt, randInt2, 20, 20)

        if (keyIsDown(LEFT_ARROW)) {
            currentDirection = "Left"
        }
        if (currentDirection == "Left" && myLeft >= 0) {
            myXPos -= speed;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            currentDirection = "Right"
        }
        if (currentDirection == "Right" && myRight <= 500) {
            myXPos += speed;
        }
        if (keyIsDown(UP_ARROW)) {
            currentDirection = "Up"
        }
        if (currentDirection == "Up" && myTop >= 0) {
            myYPos -= speed;
        }


        if (keyIsDown(DOWN_ARROW)) {
            currentDirection = "Down"
        }
        if (currentDirection == "Down" && myBottom <= 500) {
            myYPos += speed;
        }

        //turtle boundaries
        myLeft = myXPos;
        myRight = myXPos + 50;
        myTop = myYPos;
        myBottom = myYPos + 50;

        //worm boundaries
        wormLeft = randInt;
        wormRight = randInt + 20;
        wormTop = randInt2;
        wormBottom = randInt2 + 20;


        if (myLeft > wormRight || myRight < wormLeft
            || myTop > wormBottom || myBottom < wormTop) {

        }
        else {
            // colliding
            console.log("colliding");
            fill(random(255), random(255), random(255));
            textSize(22);
            text("YUMMY!!!", 140, 490);

            randInt = random(0, 490);
            randInt2 = random(0, 490);

            /*
            myXPos += 10
            myYPos -= 10
            */
            speed += 1;
        }

        if (myTop <= 1 || myBottom >= 499 || myLeft <= 1 || myRight >= 499) {
            myXPos = 250;
            myYPos = 250;
            speed = 2;
            state = 3;
            console.log(state)
        }

    }
    if (state == 3) {
        noStroke();
        background(52, 161, 235);

        //game over title square
        fill(138, 98, 14)
        rect(60, 60, 380, 100);

        //game over title text
        fill(0, 255, 0)
        textSize(60);
        text("GAME OVER", 67, 130)


        //play button square
        fill(138, 98, 14)
        rect(150, 300, 200, 100);

        fill(0, 255, 0)
        textSize(70);
        text("PLAY", 160, 370)

    }



}


// -------------------------------------------------------------------------



// -------------------------------------------------------------------------


function mouseClicked() {
    if (state == 1 || state == 3) {
        if (mouseY > 300 && mouseY < 400 && mouseX > 150 && mouseX < 350) {
            state = 2;
            }
        }
    






    // if (state == 3) {
    //     (mouseY > 300 && mouseY < 400 && mouseX > 150 && mouseX < 350) 
    //         state = 2;
    // } 
}




// Step 4. Make a system for random worm spawn points

// Step 5. Create collisions for worm and turtle
