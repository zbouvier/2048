
const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 600;
const GRID_COLOR = "purple"
const BACKGROUND_COLOR = 51;
const LINE_NUMBER = 4;
var numberNodes;



function gridDraw(lineNumber)
{
  const squareSize = CANVAS_HEIGHT/lineNumber

  stroke(GRID_COLOR)
  for(let i = 0; i < lineNumber; i++)
  {
    // x1, y1, x2, y2
    //Vertical line
    line(i*squareSize, 0, i*squareSize, CANVAS_HEIGHT);
    //Horizontal line
    line(0, i*squareSize, CANVAS_WIDTH, i*squareSize);
  }
  //Right side Vertical line
  line(CANVAS_WIDTH - 1, 0, CANVAS_WIDTH - 1, CANVAS_HEIGHT);
  //Bottom side Horizontal line
  line(0, CANVAS_HEIGHT-1, CANVAS_WIDTH, CANVAS_HEIGHT-1);
}
function createNodes()
{
  /*
  Method should create an array of numberNodes, center of each line
  var test = new numberNode(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 1);
  */
  node1 = floor(random(0, LINE_NUMBER**2 - 1))
  node2 = floor(random(0, LINE_NUMBER**2 - 1))
  while(node1 === node2){
    node2 = floor(random(0, LINE_NUMBER**2 - 1))
  }
  console.log(node1 + " 2:" + node2)


  numberNodes = new Array(LINE_NUMBER)
  for(var i = 0; i < LINE_NUMBER; i++ ){
      numberNodes[i] = new Array(LINE_NUMBER)
  }
  
  var centerIncrement = CANVAS_HEIGHT/(LINE_NUMBER * 2)

  for(var x = 0; x < LINE_NUMBER; x++ ){
    for(var y = 0; y < LINE_NUMBER; y++){
      //if index = 
      if(node1 === (x*LINE_NUMBER + y)) {
        numberNodes[x][y] = new numberNode((x * 2 + 1 ) * centerIncrement, (y * 2 + 1 ) * centerIncrement, 2)
      } else if (node2 === x*LINE_NUMBER + y){
        numberNodes[x][y] = new numberNode((x * 2 + 1 ) * centerIncrement, (y * 2 + 1 ) * centerIncrement, 2)
      } else{
        numberNodes[x][y] = new numberNode((x * 2 + 1 ) * centerIncrement, (y * 2 + 1 ) * centerIncrement, 0)
      }
    }
  }  
}

function newNode(){
  var counter = 0;
  for(var i = 0; i < numberNodes.length; i++)
  {
    for(var j = 0; j < numberNodes.length ; j++)
    {
      if(numberNodes[i][j].value === 0)
      {
        counter++
      }
    }
  }

  if(counter < LINE_NUMBER**2)
  {
    node = floor(random(0, LINE_NUMBER**2 - 1))
    while(numberNodes[floor(node/LINE_NUMBER)][node%LINE_NUMBER].value !== 0){
      node = floor(random(0, LINE_NUMBER**2))
    }
    numberNodes[floor(node/LINE_NUMBER)][node%LINE_NUMBER].value = 2
  }
  else{
    console.log("Haha Loser")
  }

}

function createNodesTest()
{
  /*
  Method should create an array of numberNodes, center of each line
  var test = new numberNode(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 1);
  */
  numberNodes = new Array(LINE_NUMBER)
  for(var i = 0; i < LINE_NUMBER; i++ ){
      numberNodes[i] = new Array(LINE_NUMBER)
  }
  
  var centerIncrement = CANVAS_HEIGHT/(LINE_NUMBER * 2)

  for(var x = 0; x < LINE_NUMBER; x++ ){
    for(var y = 0; y < LINE_NUMBER; y++){
      numberNodes[x][y] = new numberNode((x * 2 + 1 ) * centerIncrement, (y * 2 + 1 ) * centerIncrement, 2)
    }
  }  
}



function keyPressed() {
  console.log(keyCode)
  if(keyCode === LEFT_ARROW || keyCode === 65){//A
    moveLeft()
  } else if(keyCode === UP_ARROW || keyCode === 87 ){// W
    moveUp()
  } else if(keyCode === DOWN_ARROW || keyCode === 83){ //S
    moveDown()
  } else if(keyCode === RIGHT_ARROW || keyCode === 68){//D
    moveRight()
  }

}
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  createNodes();
}
function draw() {
  background(BACKGROUND_COLOR);

  gridDraw(LINE_NUMBER);
  for(var i = 0; i < LINE_NUMBER; i++ ){
    for(var j = 0; j < LINE_NUMBER; j++){
      numberNodes[i][j].update()
    }
  }
}