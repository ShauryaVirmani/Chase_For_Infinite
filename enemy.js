class Enemy{constructor(x,y,width,height,angle){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    
}

createEnemy(){
    
for (i=displayWidth;i<=displayWidth*5;i=i+displayWidth){
    this.body = createSprite(i,this.y,this.width,this.height);
    this.body.addImage("enemyImg",enemyImage);
    this.body.scale=0.5;
    this.body.debug= true;
    this.body.setCollider("rectangle",0,0,390,410);
  
}}
    }
