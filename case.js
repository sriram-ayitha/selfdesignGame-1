class Case{
 constructor(x,y){
    this.box = createSprite(x,y);
    this.box.addImage("caseclosed",caseclosed) ;
    this.box.scale = 0.2;
    this.touched = 0;

}
casechange(caseSprite){

  if(this.touched === 0){
    this.touched = 1;
    var r = Math.round(random(1,2))
    console.log(r);
    switch (r){
      case 1 : caseSprite.addImage("caseopen",caseopened);
               caseSprite.changeImage("caseopen",caseopened);
               score = score+1;
            break;
      case 2 : caseSprite.addImage("caseempty",caseempty);
               caseSprite.changeImage("caseempty",caseempty);
              break;
      default : break;               
  
    } 
  }
   
  }

}
