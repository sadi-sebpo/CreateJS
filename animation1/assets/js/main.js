/**
 * Created by Sadi on 30/12/2015
 */


window.onload = function( event ){

    var stage;

    function init(){
        stage = new createjs.Stage("my-art");
        myShape = new createjs.Shape();
        myShape.graphics.beginFill("#f00");
        myShape.graphics.drawCircle(0,0,25);
        myShape.graphics.endFill();
        myShape.x = 25;
        myShape.y = 25;
        stage.addChild(myShape);

        createjs.Tween.get(myShape, { loop: true})
            .to({ x: 650, y: 700}, 2000);
        createjs.Ticker.addEventListener("tick", tickHandler)
        //stage.update();
        console.log(myShape);
    }

    function tickHandler(e){
        stage.update();
    }

    init();
}


	

