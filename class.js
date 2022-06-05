class Grass {
    constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiply = 0;
    this.directions = [
          [this.x - 1, this.y - 1],
          [this.x, this.y - 1],
          [this.x + 1, this.y - 1],
          [this.x - 1, this.y],
          [this.x + 1, this.y],
          [this.x - 1, this.y + 1],
          [this.x, this.y + 1],
          [this.x + 1, this.y + 1]
      ]
    }
    
    chooseCell(character) {
        var found = []
      for (var i in this.directions) {
         var x = this.directions[i][0]
         var y = this.directions[i][1]
      if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
      if (matrix[y][x] == character) {
        found.push(this.directions[i])
      }
     }
    
    }
     return found;
    
    }
    
    mult() {
       var empty = random(this.chooseCell(0))
       this.multiply++
     if (empty && this.multiply > 3) {
       var newX = empty[0]
       var newY = empty[1]
        matrix[newY][newX] = 2
       var newGr = new Grass(newX, newY)
        grassArr.push(newGr)
      }
     }
    }


    class Xaxacox {
      constructor(x, y) {
          
          this.x = x;
          this.y = y;
          this.multiply = 0;
          this.energy = 3;
  
      }
  
      
      newDirections() {
          this.directions = [
              [this.x - 1, this.y - 1],
              [this.x, this.y - 1],
              [this.x + 1, this.y - 1],
              [this.x - 1, this.y],
              [this.x + 1, this.y],
              [this.x - 1, this.y + 1],
              [this.x, this.y + 1],
              [this.x + 1, this.y + 1]
          ];
      }
  
      
      getDirections(t) {
          this.newDirections();
          var found = [];
  
          for (let i = 0; i < this.directions.length; i++) {
              var x = this.directions[i][0];
              var y = this.directions[i][1];
              if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                  if (matrix[y][x] == t) {
                      found.push(this.directions[i]);
                  }
              }
          }
          return found;
      }
  
  
  
      
      move(){
           
          var empty = random(this.getDirections(2))
  
          if (empty) {
              var x = empty[0];
              var y = empty[1];
              matrix[y][x] = 3;
              matrix[this.y][this.x] = 2;
              this.x = x;
              this.y = y;
  
          }
      }
    }