class Case{
 constructor(x,y){
    this.box = createSprite(x,y);
    this.box.addImage("caseclosed",caseclosed) ;
    this.box.scale = 0.3;
    this.touched = 0;

}
casechange(caseSprite){

    var r = Math.round(random(1,2))
    console.log(r);
    switch (r){
      case 1 : caseSprite.addImage("caseopen",caseopened);
               caseSprite.changeImage("caseopen",caseopened);
            break;
      case 2 : caseSprite.addImage("caseempty",caseempty);
               caseSprite.changeImage("caseempty",caseempty);
              break;
      default : break;               
  
    } 
  }
}
