class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState")
            gameStateRef.on("value", function(data){
                gameState = data.val();
            })
            
        }
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
    


     start(){
         if (gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
         }

    } 
        play(){
            player1 = createSprite(50, windowHeight/2, 50, 100);
            player2 = createSprite(windowWidth- 50, windowHeight/2, 50, 100 );
            ball = createSprite(windowWidth/2, windowHeight/2, 50,50);
            wall1 = createSprite(0,0, 0.1, windowWidth);
            wall2 = createSprite(0,0, 0.1, windowHeight);
            wall3 = createSprite(windowHeight,0, 0.1, windowWidth);
            wall4 = createSprite(windowHeight,windowWidth, 0.1, windowHeight);
            if (keyDown = "UPARROW"){
                player1.y += 10
            }
            if (keyDown = "DOWNARROW"){
                player1.y -= 10
            }
            if (keyDown = "W"){
                player2.y += 10
            }
            if (keyDown = "S"){
                player2.y -= 10
            }
            ball.velocity.x = rand(1,3);
            ball.velocity.y = rand(1,3);

            ball.bounceOff(wall1);
            ball.bounceOff(wall3);
        }
}