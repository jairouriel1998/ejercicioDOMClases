class Comida {
  constructor(img_url, plato, precio){
    this.img_url = img_url;
    this.plato = plato;
    this.precio = precio;
  }

  setImg(img_url){
    this.img_url = img_url;
  }

  setPlato(plato){
    this.plato = plato;
  }

  setPrecio(precio){
    this.precio = precio;
  }

  getImg(){
    return this.img_url;
  }

  getPlato(){
    return this.plato;
  }

  getPrecio(){
    return this.precio;
  }

  generarElemento(){
    var element = "";
    element += "<div class=\"elemento\"><figure><img src=\""+this.img_url+"\" width=\"120px\"><br><figcaption align=\"center\">"+this.plato+" <br> $ "+this.precio+"</figcaption></figure></div>";
    return element;
  }
}

var banner = [];
banner.push(new Comida("images/ban1.png","",0));
banner.push(new Comida("images/ban2.png","",0));
banner.push(new Comida("images/ban3.png","",0));
banner.push(new Comida("images/ban4.png","",0));
console.log(banner);

var contador = 2;

//onload = cambioBanner(contador);

//function cambioBanner(contador){
  document.getElementById('banner').style.backgroundImage = "url('"+banner[contador].getImg()+"')"
//  if (contador === 3) {
//    contador = 0;
//  }else{
//    contador++;
//  }
//  setInterval(function(){cambioBanner(contador)}, 10000);
//}


var platillos = [];
platillos.push(new Comida("images/plat1.png","Tacos", 12.5));
platillos.push(new Comida("images/plat2.jpg","Hamburgesa", 120));
platillos.push(new Comida("images/plat3.jpg","Ramen", 125.5));
platillos.push(new Comida("images/plat4.jpg","Ramen Japones", 99.5));
platillos.push(new Comida("images/plat5.jpg","Tofu", 28.5));
console.log(platillos);

function llenarContenido(){
  var content  = "";
  for (var i = 0; i < platillos.length; i++) {
    content += platillos[i].generarElemento();
  }
  document.getElementById("componentes").innerHTML = content;
}

onload = llenarContenido();
