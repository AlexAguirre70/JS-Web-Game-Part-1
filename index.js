
/*Adds the green character to the page 
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

 Add the pine tree tot the page
let pineTree = document.createElement('img')
pineTree.src = './assets/pine-tree.png'
pineTree.style.position ='fixed'
pineTree.style.left = '450px'
pineTree.style.bottom ='200px'
document.body.append(pineTree)
*/


/*create a function that creates a character and adds it to the page*/

function newImage(u,l,b,n) {
   
    
    let imgC = document.createElement('img');
    imgC.src= u ;
    imgC.id = n;
    imgC.style.position ='fixed';
    imgC.style.left = l;
    imgC.style.bottom = b;
    document.body.append(imgC)
    
    imgC.addEventListener('dblclick', function(){
        imgC.remove()
    })   
}
/* create Sky*/
let skyW= screen.width/100
let skyH= Math.round(skyW*3)

for (x=2; x<skyH;x++){
    let sky = document.createElement('img');
    sky.src= './assets/sky.png' ;
    
    document.body.append(sky)
}/* create Sky*/
let grassW= screen.width/100
let grassH= Math.round(grassW*7)
for (x=6; x<grassH;x++){
    let sky = document.createElement('img');
    sky.src= './assets/grass.png' ;
    
    document.body.append(sky)
}

/*add green character*/
newImage('assets/green-character.gif','100px','100px','greencharacter')
/* add pine tree*/ 
newImage('assets/pine-tree.png','450px','200px','pinetree')
/* add tree*/ 
newImage('assets/tree.png','200px','300px','tree')
/* add pillar*/ 
newImage('assets/pillar.png','350px','100px','pillar')
/* add crate*/ 
newImage('assets/crate.png','150px','200px','crate')
/* add well*/ 
newImage('assets/well.png','500px','425px','well')
/*add sword*/
newImage('assets/sword.png','500px','405px','sword')
/*add shield*/
newImage('assets/sheild.png','165px','185px','shield')
/*add staff*/
newImage('assets/staff.png','600px','100px','staff')

