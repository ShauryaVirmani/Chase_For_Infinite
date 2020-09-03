class Ground {
    constructor(x,y,width,height){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.body = createSprite(this.x,this.y,this.width,this.height);
}
}

