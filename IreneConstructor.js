/* 
  Declaring object cat and assigning it five properties
*/
function cat(name, gender, color, DoB, food){
    this.name = name;
    this.gender = gender;
    this.color = color;
    this.DoB = DoB;
    this.food = food;

    // this.feed = function(){
    //   console.log(" a cat feeds on milk")
    // }
    
  }
  
  // Instantiating 3 cat objects with constructors
  var cat1 = new cat("Kitty", "Female", "white", 2019, "milk");
  var cat2 = new cat("Tom", "male", "black", 2018, "meat" );
  var cat3 = new cat("Deb", "female", "chocolate-brown",2018, "rats");
  
  // Looping through the three cat objects properties and printing out the values  
  for (let key in cat1){
    console.log(cat1[key])
    console.log("The description of cat1: "+cat1[key])
  }
  for (let key in cat2){
    console.log(cat2[key])
    console.log("The description of cat2: "+cat2[key])
  }
  for (let key in cat3){
    console.log(cat3[key])
    console.log("The description of cat3: "+cat3[key])
  }

/* 
  Declaring object pen and assigning it five properties
*/
function pen(name, color, brand, DoM, shape){
    this.name = name;
    this.color = color;
    this.brand = brand;
    this.DoM = DoM;
    this.shape = shape;
}

    // Instantiating 3 pen objects with constructors
    var penA = new pen("silver wave", "blue", "smile", 2018, "pointed");
    var penB = new pen("Compo", "white", "compo", 2018, "pointed");
    var penC = new pen("Bic", "blue", "Bic", 2018, "round");

     // Looping through the three pen objects properties and printing out the values  
    for (let key in penA){
        console.log(penA[key])
        console.log("The description of penA: "+penA[key])
    }
    for (let key in penB){
      console.log(penB[key])
      console.log("The description of penB: "+penB[key])
    }
    for (let key in penC){
      console.log(penC[key])
      console.log("The description of penC: "+penC[key])
    }
    
/* 
  Declaring object puppy and assigning it five properties
*/
function puppy(name, gender, color, DoB, hobby){
    this.name = name;
    this.gender = gender;
    this.color = color;
    this.DoB = DoB;
    this.hobby = hobby;
}

   // Instantiating 3 puppy objects with constructors
    var puppyX = new puppy("Tommy", "male", "brown", 2019, "wagging its tail");
    var puppyY = new puppy("Mexie", "male", "black", 2019, "sitting on the couch");
    var puppyZ = new puppy("Tommy", "male", "brown", 2019, "jumping up and down");

 // Looping through the three puppy objects properties and printing out the values 
  for (let key in puppyX){
    console.log(puppyX[key])
    console.log("The description of puppyX: "+puppyX[key])
  }
  for (let key in puppyY){
    console.log(puppyY[key])
    console.log("The description of puppyY: "+puppyY[key])
  }
  for (let key in puppyZ){
    console.log(puppyZ[key])
    console.log("The description of puppyZ: "+puppyZ[key])
  }

/* 
  Declaring object donkey and assigning it five properties
*/
function donkey(name, gender, color, DoB, origin){
    this.name = name;
    this.gender = gender;
    this.color = color;
    this.DoB = DoB;
    this.origin = origin;
  }

   // Instantiating 3 donkey objects with constructors
    var donkeyOne = new donkey("Jayde", "female", "gray", 2017,"Kenya");
    var donkeyTwo = new donkey("Mello", "female", "Light-gray", 2018,"China");
    var donkeyThree = new donkey("Aspen", "Male", "gray", 2016,"Uganda");

  // Looping through the three donkey objects properties and printing out the values 
  for (let key in donkeyOne){
    console.log(donkeyOne[key])
    console.log("The description of donkeyOne: "+donkeyOne[key])
  }

  for (let key in donkeyTwo){
    console.log(donkeyTwo[key])
    console.log("The description of donkeyTwo: "+donkeyTwo[key])
  }

  for (let key in donkeyThree){
    console.log(donkeyThree[key])
    console.log("The description of donkeyThree: "+donkeyThree[key])
  }

/* 
  Declaring object builder and assigning it five properties
*/
function building(name, location, color, fashion, owner){
    this.name = name;
    this.location = location;
    this.color = color;
    this.fashion = fashion;
    this.owner = owner;
  }

  // Instantiating 3 building objects with constructors
    var buildingNorth = new building("Mapeera", "city square", "blue", "triangular", "Centenary bank");
    var buildingEast = new building("Mabirizi", "city square", "green", "rectangular", "Shopping mall");
    var buildingWest = new building("Namaganda", "Down town", "Brown", "rectangular", "Business mall");

   // Looping through the three building objects properties and printing out the values 
  for (let key in buildingNorth){
    console.log(buildingNorth[key])
    console.log("The description of buildingNorth: "+buildingNorth[key])
  }

  for (let key in buildingEast){
    console.log(buildingEast[key])
    console.log("The description of buildingEast: "+buildingEast[key])
  }

  for (let key in buildingWest){
    console.log(buildingWest[key])
    console.log("The description of buildingWest: "+buildingWest[key])
  }



