class Player {
  constructor(){
    this.name= null
    this.distance= 0
    this.index= null
    this.rank= null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name, distance: this.distance
    });
  }

static information(){
  var infoRef= database.ref('players');
  infoRef.on("value",function(data){
    allplayers=data.val();
  })
}

static getRank(){
  var rank = database.ref('varango');
  rank.on("value",function(data){
   this.rank = data.val()
  });
}
//error aqui?
static updateRank(number){
  database.ref('/').update({
    varango: number
  });
}

}
