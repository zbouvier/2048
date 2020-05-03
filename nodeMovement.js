function gravityUp()
{
  for(var i = 0 ; i < numberNodes.length; i++)
  {
    for(var j = 1; j < numberNodes.length; j++)
    {
      if(numberNodes[i][j-1].getValue() === 0)
      {
        
        numberNodes[i][j - 1].value = numberNodes[i][j].value;
        numberNodes[i][j].clear();
        
        console.log(i + ", " + j +"->" + i + ", "+ (j-1))
        //numberNodes[i][j].update();

      }
      numberNodes[i][j].update();
      numberNodes[i][j - 1].update();
    }
  }
}

function moveUp()
{
  for(var qq = 0; qq < LINE_NUMBER; qq++){
    gravityUp()
  }
  for(var i = 0 ; i < numberNodes.length; i++)
  {
    for(var j = 1; j < numberNodes.length; j++)
    {
      if(numberNodes[i][j].getValue() == numberNodes[i][j-1].getValue())
      {
        numberNodes[i][j].clear();
        numberNodes[i][j-1].updateValue();
        console.log(i + ", " + j + " Value: "+ numberNodes[i][j].value +" -> " + i + ", "+ (j-1) + " Value: " +numberNodes[i][j-1].value);
        
      }
      numberNodes[i][j].update();
      numberNodes[i][j-1].update();
    }
    
  }
  for(var qq = 0; qq < LINE_NUMBER; qq++){
    gravityUp()
  }
  newNode()
}

function gravityDown()
{

  for(var i = numberNodes.length-1; i >= 0; i--)
  {
    for(var j = numberNodes.length - 2; j >= 0 ; j--)
    {
      if(numberNodes[i][j+1].getValue() === 0)
      {
        
        numberNodes[i][j+1].value = numberNodes[i][j].value;
        numberNodes[i][j].clear();
        
        console.log(i + ", " + j +"->" + i + ", "+ (j+1))
        //numberNodes[i][j].update();

      }
      numberNodes[i][j].update();
      numberNodes[i][j+1].update();
    }
  }
}

function moveDown()
{
for(var qq = 0; qq < LINE_NUMBER; qq++){
    gravityDown()
}
  for(var i = numberNodes.length - 1; i >= 0; i--)
  {
    for(var j = numberNodes.length - 2; j >= 0 ; j--)
    {
      if(numberNodes[i][j].getValue() == numberNodes[i][j+1].getValue())
      {
        numberNodes[i][j].clear();
        numberNodes[i][j+1].updateValue();
        console.log(i + ", " + j + " Value: "+ numberNodes[i][j].value +" -> " + i + ", "+ (j+1) + " Value: " +numberNodes[i][j+1].value);
        
      }
      numberNodes[i][j].update();
      numberNodes[i][j+1].update();
    }
    
  }
  for(var qq = 0; qq < LINE_NUMBER; qq++){
    gravityDown()
  }
  newNode()
  
}
function gravityLeft()
{
  for(var i = 1; i < numberNodes.length; i++)
  {
    for(var j = 0; j < numberNodes.length ; j++)
    {
      if(numberNodes[i-1][j].value === 0)
      {
        
        numberNodes[i-1][j].value = numberNodes[i][j].value;
        numberNodes[i][j].clear();
        
        console.log(i + ", " + j +"->" + i + ", "+ (j+1))
        //numberNodes[i][j].update();

      }
      numberNodes[i][j].update();
      numberNodes[i-1][j].update();
    }
    
  }
}
function moveLeft()
{
  
for(var qq = 0; qq < LINE_NUMBER; qq++){
    gravityLeft()
}
  for(var i = 1; i < numberNodes.length; i++)
  {
    for(var j = 0; j < numberNodes.length ; j++)
    {
      if(numberNodes[i][j].getValue() == numberNodes[i-1][j].getValue())
      {
        numberNodes[i][j].clear();
        numberNodes[i-1][j].updateValue();
        console.log(i + ", " + j + " Value: "+ numberNodes[i][j].value +" -> " + i + ", "+ (j+1) + " Value: " +numberNodes[i-1][j].value);
        
      }
      numberNodes[i][j].update();
      numberNodes[i-1][j].update();
    }
    
  }
  for(var qq = 0; qq < LINE_NUMBER; qq++){
    gravityLeft()
  }
  newNode()
}

function gravityRight()
{
  for(var i = numberNodes.length - 2; i >= 0 ; i--)
  {
    for(var j = numberNodes.length - 1; j >= 0 ; j--)
    {
      if(numberNodes[i+1][j].value === 0)
      {
        
        numberNodes[i+1][j].value = numberNodes[i][j].value;
        numberNodes[i][j].clear();
        
        console.log(i + ", " + j +"->" + i + ", "+ (j+1))
        //numberNodes[i][j].update();

      }
      numberNodes[i][j].update();
      numberNodes[i+1][j].update();
    }
    
  }
}

function moveRight()
{
  
for(var qq = 0; qq < LINE_NUMBER; qq++){
    gravityRight()
}

  for(var i = numberNodes.length - 2; i >= 0 ; i--)
  {
    for(var j = numberNodes.length - 1; j >= 0 ; j--)
    {
      if(numberNodes[i][j].getValue() == numberNodes[i+1][j].getValue())
      {
        numberNodes[i][j].clear();
        numberNodes[i+1][j].updateValue();
        console.log(i + ", " + j + " Value: "+ numberNodes[i][j].value +" -> " + i + ", "+ (j+1) + " Value: " +numberNodes[i+1][j].value);
      }
      numberNodes[i][j].update();
      numberNodes[i+1][j].update();
    }
  }

  for(var qq = 0; qq < LINE_NUMBER; qq++){
    gravityRight()
  }
  newNode()
  
}