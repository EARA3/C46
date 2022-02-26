class Form {
    constructor() {
      
    }
  
    display() {
      var title = createElement("h2");
      title.html("Mulitplayer Ping Pong");
      title.position(windowWidth/2 - 50, 0);

      var input = createInput("Name");
      input.position(windowWidth/2 - 40, windowHeight/2 -80);

      var button = createButton("Play!");
      button.position(windowWidth/2 + 30, windowHeight/2);

      button.mousePressed(function(){
        input.hide();
        button.hide();
        name = input.value();
        playerCount += 1;
        player.update(input.value);
        player.updateCount(playerCount);
        
        var greeting = createElement("h3");
        var message = `
        Hello ${input.value()}
        </br>wait for another player to join...`;
        this.greeting.html(message);
        greeting.position(windowWidth/2 - 70, windowHeight/2);
      })
    }
  }