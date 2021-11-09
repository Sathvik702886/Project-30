const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var poly, slingShot;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    poly = new Poly(100, 100)
    ground = new Ground(600,height,1200,20);
    //x y width height
    platform1 = new Ground(450, 355, 300, 10);
    

    block1 = new BoxC1(335, 330, 30,40)
    block2 = new BoxC2(367, 330, 30,40)
    block3 = new BoxC1(399, 330, 30,40)
    block4 = new BoxC2(431, 330, 30,40)
    block5 = new BoxC1(463, 330, 30,40)
    block6 = new BoxC2(495, 330, 30,40)
    block7 = new BoxC1(517, 330, 30,40)
    block8 = new BoxC2(549, 330, 30,40)
    block9 = new BoxC1(581, 330, 30,40)
    block10 = new BoxC2(314, 330, 30,40)
    block11 = new BoxC3(367, 290, 30,40)
    block12 = new BoxC2(399, 290, 30,40)
    block13 = new BoxC3(431, 290, 30,40)
    block14 = new BoxC2(463, 290, 30,40)
    block15 = new BoxC3(495, 290, 30,40)
    block16 = new BoxC2(517, 290, 30,40)
    block17 = new BoxC3(399, 250, 30,40)
    block18 = new BoxC1(431, 250, 30,40)
    block19 = new BoxC3(463, 250, 30,40)
    block20 = new BoxC1(495, 250, 30,40)
    block21 = new BoxC3(431, 210, 30,40)
    block22 = new BoxC1(463, 210, 30,40)
    block23 = new BoxC2(447, 170, 30, 40)

    slingshot = new SlingShot(poly.body,{x:200, y:100});

}

function draw(){
    Engine.update(engine);
    background(120)
    ground.display()
    platform1.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    block22.display()
    block23.display()
    poly.display()
    slingshot.display()



}


function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(poly.body)
    }
}