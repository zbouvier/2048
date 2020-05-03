class numberNode
{

  constructor(x, y, value)
  {
    this.x = x;
    this.y = y;
    this.d = 25;
    this.value = value;
  }
  
  update()
  {
    if(this.value !== 0)
    {
        circle(this.x, this.y, 30 + this.value);
        textAlign(CENTER);
        text(str(this.value), this.x, this.y+4);
    }

  }
  
  clear()
  {
      this.value = 0;
      this.update();
  }

  updateValue()
  {
    this.value*=2;
  }
  getValue()
  {
      return this.value;
  }
}


