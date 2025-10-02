function controlmenu(id) {
el = document.getElementById(id);

   if(el.classList.contains("show")) {
    el.classList.add("hide");
    el.classList.remove("show"); 
   }
   else {
    el.classList.add("show");
    el.classList.remove("hide");        
   }

body = document.getElementsByTagName('body')[0];

   if(body.classList.contains("move")) {
    body.classList.remove("move"); 
    body.classList.add("moveback");    
   }
   else {
    body.classList.add("move");
    body.classList.remove("moveback");        
   }
}
