//inicializacion de variables globales
var elementCard = document.getElementsByClassName("my-card_prin");
var elementDrawer = document.getElementsByClassName("drawerlistthis");
var contentcontrolvar = document.getElementsByClassName("contentcontrol");
var elementcardid = [];
//asignacion de click
for (var i=0; i < elementCard.length; i++) {
    // Here we have the same onclick
    elementCard.item(i).onclick = prueba;
}
for (var i=0; i < elementDrawer.length; i++) {
    // Here we have the same onclick
    elementDrawer.item(i).onclick = drawerlistactive;
}
//funcuion para sombreado con click en tarjtas
function prueba(e){
    var cardid = [];
    console.log(e.path);
    for (var i=0; i < e.path.length; i++) {
    console.log(e.path[i].id);
    cardid[i] = e.path[i].id;
    }
    var cardid = arrayRemove(cardid, "");
    var cardid = arrayRemove(cardid, undefined);
    console.log(cardid);
    for(var i = 0; i < elementCard.length; i++){
        if(cardid[0] == elementCard[i].id){
            drawerlistactive(elementDrawer[i].id);
            contentchange((i+1));
        }
    }
}
//funcion sombreado con lcik en drawer
function drawerlistactive(e) {
    for (var i=0; i < elementDrawer.length; i++) {
    // Here we have the same onclick
    elementDrawer.item(i).classList.remove("mdc-list-item--activated");
    
    }
    var x = typeof e;
    console.log(x);
    if(x == "object"){
        for (var i=0; i < elementDrawer.length; i++) {
            if(e.target.id == elementDrawer[i].id){
                contentchange((i+1));
            }
         }
        el = document.getElementById(e.target.id);
        el.classList.add("mdc-list-item--activated");
    }else{
        el = document.getElementById(e);
        el.classList.add("mdc-list-item--activated");
        for (var i=0; i < elementDrawer.length; i++) {
            if(e == elementDrawer[i].id){
                contentchange((i+1));
            }
         }
    }
}

function contentchange(e){
    for (var i=0; i < contentcontrolvar.length; i++) {
    // Here we have the same onclick
    contentcontrolvar.item(i).classList.add("element-notshow");
    }
    contentcontrolvar.item(e).classList.remove("element-notshow");
    if(e == 0){
        for (var i=0; i < elementDrawer.length; i++) {
            elementDrawer.item(i).classList.remove("mdc-list-item--activated");
    
        }
    }
}
function arrayRemove(arr, value) {

       return arr.filter(function(ele){
       return ele != value;
   });
}