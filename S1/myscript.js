//object literal

const salon = {
    name: "The Fashion Pets",
    phone: "(555)569-0443",
    address: {
        street: "Av. University",
        number:"251-6"
    },
    workingHours:{
        days: "Mon-Fri",
        open: "9:00 am",
        close: "5:00 pm"
    },
    pets:[],
    count: function(){
        alert("We have " + salon.pets.length + " pets in our facility.")
    }
   
}


// object destructuring

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;



//document.getElementById("info").innerHTML=`<h2 class="h2"> ${name} </h2> <p class="lead"> Phone Number: ${phone} </p> <h2 class="h2"> Address Information </h2> <p class=lead"> ${number} ${street} </p> <p class="lead"> We are open from ${days} ${open} to ${close}.`;

document.querySelector(".info").innerHTML=`<p> ${name} <br> Phone Number: ${phone} <br> Address Information <br> ${number} ${street} <br> We are open from ${days} ${open} to ${close}`

document.querySelector("footer .info").innerHTML=`<p> ${name} <br> Phone Number: ${phone} <br> Address Information <br> ${number} ${street} <br> We are open from ${days} ${open} to ${close}`


// object constructor
var petc=0;
class Pet{
    constructor(petName,age,breed,gender,service,ownerName,phoneContact)
    {
       
        // these are parameters

        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;
        this.id="pet"+petc;
        petc+=1;
        // default information, not a parameter
        
        this.hunger=10;
        this.happiness=5;

    }
    ownerInfo = function(){
        console.log("Owner name: " + this.ownerName + "\n" + "Contact " + this.phoneContact)
    }
    feed = function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding ... ");

    }
    status = function(){
        console.log("Hunger " + this.hunger + "\n" + "Happiness: " + this.happiness);
    }

    
}

const pet1 = new Pet("Shaggy",2,"Boxer","Male","Bath","Samantha","073-3443");
const pet2 = new Pet("Kit",2,"Shiba Inu","Female","Brush","Josh","853-7451");
const pet3 = new Pet("Marley",10,"Pitbull","Male","Nail Trim","Aaron","222-2533"); 

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

var textname = document.getElementById('petName');
var textage = document.getElementById('petAge');
var textbreed = document.getElementById('petBreed');
var textgender = document.getElementById('petGender');
var textservice = document.getElementById('petService');
var textowner = document.getElementById('ownerName');
var textcontact = document.getElementById('contactPhone');


function register(){
    const thePet = new Pet(textname.value,textage.value,textbreed.value,textgender.value,textservice.value,textowner.value,textcontact.value);
    salon.pets.push(thePet);
    alert(textname.value + ' has been registered')
    clean();
    displayPet(thePet);
}

function clean(){
    textname.value="";
    textage.value="";
    textbreed.value="";
    textgender.value="";
    textservice.value="";
    textowner.value="";
    textcontact.value="";

}

function displayPet(aPet){
    var tBody = document.getElementById("rowPet");
    var row = `<tr id="${aPet.id}"> 
                <td> ${aPet.petName} </td>
                <td> ${aPet.age} </td>
                <td> ${aPet.breed} </td>
                <td> ${aPet.gender} </td>
                <td> ${aPet.service} </td>
                <td> ${aPet.ownerName} </td>
                <td> ${aPet.phoneContact} </td>
                <td>
                    <button onclick='remove("${aPet.id}");'> Delete </button></td>`;
   
    tBody.innerHTML+=row;
}

function remove(petId){
    var tr = document.getElementById(petId);
    var indexDelete;

// searching the pet using the id
    for(var i=0;i<salon.pets.length;i++){
        var selectedPet = salon.pets[i];
        if(selectedPet.id==petId)
        {
            indexDelete=i;
        }
    }

    // delete in the array
    salon.pets.splice(indexDelete,1);

    // delete on the HTML
    tr.remove();
}

function Search() {
//     //delete search css with this loop
    
//     /*for (var j = 0; j < salon.pets.length; j++) {
//             //document.getElementById('pet'+j).setAttribute('class','x');
//             //${'#pet'+j}.show();
//         }*/ 
    
         var searchString = document.getElementById('petSearch').value;
         //var searchString = ss.toLowerCase();
    
//         //searching for the pet
//         var flag = false;

         for (var i = 0; i < salon.pets.length; i++) {
             var theFoundedPet = salon.pets[i];
             if((theFoundedPet.id == searchString) || 
             (theFoundedPet.name == searchString)) {
//                 //flag = true;
                 index=i;
                 console.log("I found it");
//                 // document.getElementById('pet'+index).setAttribute('class','found');
//                 //document.getElementById("result").innerHTML="I found the pet " + salon.pets[i].name;
//                 //salon.pets[i].name; 
                $('#pet'+i).show();
             }
             else{
                 $('#pet'+i ).hide();
             }
       }
         //other condition for not existing pet
//         if (flag == false) {
//             document.getElementById("result").innerHTML = "It does not exist";
//         }
//         document.getElementById("petSearch").value = "";
}
/* /*function Search(){
    for(var j=0;j<salon.pets.length;j++){
        document.getElementById('pet'+j)
    }
    
    var ss=document.getElementById('petSearch').value;
    var searchString = ss.toLowerCase();

    var flag=false;
    for(var i=0;i<salon.pets.length;i++){
        var theFoundPet = salon.pets[i];
        if((theFoundPet.id.toLowerCase() == searchString) || 
        (theFoundPet.name.toLowerCase() == searchString))
        {
            flag = true;
            index=i;
            document.getElementById('pet'+index).setAttribute('class','found');
            
            /*console.log("I found the pet" + salon.pets[i]);
            document.getElementById("result").innerHTML="<h3> I found the pet </h3>";*/
        //}
        
    //}

    //if(flag==false){
//        document.getElementById("result").innerHTML="<h3> Not found </h3>";
//    }

   // document.getElementById("petSearch").value="";
///}*/
// */


/* console.table(salon.pets);

console.log(salon);
 */
// display in an alert message the number of pets (length)

//salon.count();

// print in a division the pet information (use a for loop)
/* var text = "";
for(var i=0;i<salon.pets.length;i++)
{
    text += `<p> Name:   ${salon.pets[i].name} <br> Age: ${salon.pets[i].age} <br> Gender: ${salon.pets[i].gender} <br> Breed: ${salon.pets[i].breed}<br> Service: ${salon.pets[i].service} <br> Owner's Name: ${salon.pets[i].ownerName} <br> Contact Information: ${salon.pets[i].phoneContact}<br> ---------------  </p>`;
    
}

//document.getElementById("col4").innerHTML=text;





/* pet1.feed();
pet1.status();
pet1.feed();
pet1.status(); */

/*const ex = document.getElementsByTagName('p');

for(var i=0;i<ex.length;i++){
    ex[i].setAttribute('class','example');
}

var heading3 = document.createElement('h3');
console.log(heading3);
var text = document.createTextNode("My first script using the DOM");

console.log(text);
heading3.appendChild(text);

console.log(heading3);*/

//document.getElementById('example').appendChild(heading3);
 