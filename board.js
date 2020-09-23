class Board {
  constructor(){
    this.x = [" ","1","2","3","4","5"]
    this.a = ["1"," "," "," "," "," "]
    this.b = ["2"," "," "," "," "," "]
    this.c = ["3"," "," "," "," "," "]
    this.d = ["4"," "," "," "," "," "]
    this.e = ["5"," "," "," "," "," "]
    this.board = [this.x,this.a,this.b,this.c,this.d,this.e]

    this.boat1 = []
    this.boat2 = []
    this.boat3 = []
    this.hitPoint = []

    this.timesHit = 0
  }

  generateBoats(){
    let b1 = true
    let b2 = false
    let b3 = false
    this.boat1 = [Math.ceil(Math.random()*5),Math.ceil(Math.random()*5)]
    this.boat2 = [Math.ceil(Math.random()*5),Math.ceil(Math.random()*5)]
    this.boat3 = [Math.ceil(Math.random()*5),Math.ceil(Math.random()*5)]
    while(!b2){
      if (this.boat2[0] === this.boat1[0] && this.boat2[1] === this.boat1[1]){
        this.boat2 = [Math.ceil(Math.random()*5),Math.ceil(Math.random()*5)]
      }
      else{
        b2 = true
      }
    }
    while(!b3){
      if (this.boat3[0] === this.boat1[0] && this.boat3[1] === this.boat1[1]){
        this.boat3 = [Math.ceil(Math.random()*5),Math.ceil(Math.random()*5)]
      }
      else if (this.boat3[0] === this.boat2[0] && this.boat3[1] === this.boat2[1]){
        this.boat3 = [Math.ceil(Math.random()*5),Math.ceil(Math.random()*5)]
      }
      else{
        b3 = true
      }
    }
  }
  
  hit(x, y){
    this.hitPoint = [x,y]
    if ((this.hitPoint[0] == this.boat1[0] && this.hitPoint[1] == this.boat1[1]) || (this.hitPoint[0] == this.boat2[0] && this.hitPoint[1] == this.boat2[1]) || (this.hitPoint[0] == this.boat3[0] && this.hitPoint[1] == this.boat3[1])){
      this.board[y][x] = "X"
      this.timesHit++
    }
    else{
      this.board[y][x] = "-"
    }
    if(this.timesHit === 3){
      return true
    }
    else{
      return false
    }
  }

  getBoard(){
    let x = 0
    this.board.forEach(i =>{
      console.log(this.board[x])
      x++
    })
  }
}

module.exports = Board;