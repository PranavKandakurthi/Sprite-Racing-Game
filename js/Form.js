class Form{
constructor(){
    this.title = createElement("h2");
    this.input = createInput("name");
    this.button = createButton("Play");
    this.greeting = createElement("h3");
}

hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}
display(){
    
    this.title.html("Car-Race");
    this.title.position(width/2 - 50,0);

    this.input.position(width/2 - 40,height/2 - 80);

    
    this.button.position(width/2 - 20,height/2);



this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

    player.name = this.input.value();
    playerCount++
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Hello "+ player.name);
    this.greeting.position(width/2 - 20,height/2);

});
}



}