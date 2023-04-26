// ESPACIO PARA JAVASCRIPT CONTACTO------------------------------------------------------------- ESPACIO PARA JAVSCRIPT CONTACTO //////////////////////////////////////////
// funcion de validacion de contacto
function valida_envia()
{

    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    var validaNombre=document.getElementById("nombreContacto").value.length;
    if(validaNombre==0)
    {
        alert("Tiene que escribir su nombre");
       document.getElementById("nombreContacto").focus();
       return 0;
    }

    //Validamos un campo de texto como email
	if ((regexp.test(document.getElementById("emailContacto").value) == 0) || (document.getElementById("emailContacto").value.length = 0))
	{
		alert("Introduzca una direccion de email valida");
		document.getElementById("emailContacto").focus();
		return 0;
	} 
	else 
	{
		var c_email=true;
	}
    //Validamos un campo de texto como numérico, por ejemplo el campo teléfono de 9 dígitos
    valor = document.getElementById("telContacto").value;
	if( !(/^\d{8}$/.test(valor)) ) 
	{
		alert("Tiene que escribir un telefono de 8 digitos");
		document.getElementById("telContacto").focus();
		return 0;
	}

    if(document.getElementById("consultaContacto").value.length==0)
    {
        alert("Tiene que escribir su consulta");
        document.getElementById("consultaContacto").focus();
        return 0;
    }



    //Si todos los campos han validado correctamente, se envía el formulario
	document.form.submit();

}

function countChars()
{
    var maxLength = 1000;
    var strLength = document.getElementById("consultaContacto").value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("caracteresRestantes").innerHTML = '<span style="color: red;">Usted ha excedido el limite de '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("caracteresRestantes").innerHTML = charRemain+' caracteres restantes';
    }
}

// ESPACIO PARA JAVASCRIPT INDEX---------------------------------------------------------------- ESPACIO PARA JAVSCRIPT INDEX /////////////////////////////////////////////




// ESPACIO PARA JAVASCRIPT CURSO---------------------------------------------------------------- ESPACIO PARA JAVSCRIPT CURSO /////////////////////////////////////////////
$(document).ready(function() {

	//Botón de acción del acordeón
	$('.dropdownButton').click(function() {

		//Elimina la clase on de todos los botones
		$('.dropdownButton').removeClass('on');

		//Plegamos todo el contenido que esta abierto
	 	$('.dropdownContent').slideUp('slow');

		//Si el siguiente slide no esta abierto lo abrimos
		if($(this).next().is(':hidden') == true) {

			//Añade la clase on en el botón
			$(this).addClass('on');

			//Abre el slide
			$(this).next().slideDown('slow');
		 }

	 });

	// Cerramos todo el contenido al cargar la página
	$('.dropdownContent').hide();

});







// ESPACIO PARA JAVASCRIPT INSCRIPCION---------------------------------------------------------- ESPACIO PARA JAVSCRIPT INSCRIPCION ///////////////////////////////////////

function calcularSueldo(){
    var num = 0;

    $('.personaInscripta').each(function(){
        num++;
    });
    $(".precio").html("$ "+num*1000+".-");
}
$(document).ready(function(){

   calcularSueldo();
    $("#agregarOpcion").click(function(){
        var pivot= $(".personaInscripta").last();
        //clonamos
        var clon= $(".personaInscripta").first().clone();
        //limpiamos los inputs
        $(clon).children().val("");
        //insertamos
        $(clon).clone().insertAfter(pivot);
        calcularSueldo();      
    })               
});

$(document).on("click","#eliminar",function(){
    var padre =$(this).parent(); 
    var pivot= $(".personaInscripta").first();
    if(!padre.is(pivot)){
        padre.remove();
    }else{
        padre.children().val("");
    }
    calcularSueldo(); 

}) 

$(document).ready(function(){

//Modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Enviar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    var contenido = "";
    var tags = ["Nombre", "Apellido", "Dni"];
    var i = 0;
    var cantPer = 1;

    $('.personaInscripta').each(function(){
        contenido = contenido.concat("<ul>");
        contenido = contenido.concat("<li>PERSONA "+cantPer+"</li>");
        
       $(this).find("input").each(function(){
        contenido = contenido.concat("<li>");
        contenido = contenido.concat(tags[i]+": "+$(this).val()+" ")
        contenido = contenido.concat("</li>");
         i++;
         
      });
      contenido = contenido.concat("</ul>");
      i=0;
      cantPer +=1;
        
     });
     $("#ingresar_per").html(contenido);
  modal.style.display = "block";
  return false;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it  
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});

// ESPACIO PARA JAVASCRIPT GIFTCARD------------------------------------------------------------- ESPACIO PARA JAVSCRIPT GIFTCARD //////////////////////////////////////////
{
var receptor=document.getElementById("destinatarioGift"); //Se crea la variable RECEPTOR accediendo al ID correspondiente
    receptor.innerHTML="DESTINATARIO"; // danmdole a la variable la ubicacion con el ID usamos el innerHTML para agregarle el texto DESTINATARIO ya que lo sacamos del HTML 
}
function mostrarNombre(){
    var nombre=document.getElementById("inputDestinatario").value; // por ultimo accediendo al VALUE del ID el  cual es lo que vamosa  ESCRIBIR EN EL INPUT
    receptor.innerHTML=nombre;                                     // Lo guardamos en otra variable y la igualamos a la variable RECEPTOR para que iguale los textos
}

{
var receptorPrecio=document.getElementById("precioGift");
    receptorPrecio.innerHTML="0000";
}
function mostrarPrecio(){
    var precio=document.getElementById("montoGift").value;
    receptorPrecio.innerHTML=precio;
}
                // CAMBIO DE COLOR DEL FONDO DE LA GIFTCARD
function cambiarColorFondoRojo(){
    document.getElementById("giftCard").style.backgroundColor='red';
}
function cambiarColorFondoAzul(){
    document.getElementById("giftCard").style.backgroundColor='blue';
}
function cambiarColorFondoAmarillo(){
    document.getElementById("giftCard").style.backgroundColor='yellow';
}
function cambiarColorFondoVerde(){
    document.getElementById("giftCard").style.backgroundColor='green';
}
function cambiarColorFondoNaranja(){
    document.getElementById("giftCard").style.backgroundColor='orange';
}
                // CAMBIO DE COLOR DE LA FUENTE 

function cambiarColorFuenteRojo(){
    document.getElementById("giftCard").style.color='red'
}
function cambiarColorFuenteAzul(){
    document.getElementById("giftCard").style.color='blue'
}
function cambiarColorFuenteAmarillo(){
    document.getElementById("giftCard").style.color='yellow'
}
function cambiarColorFuenteVerde(){
    document.getElementById("giftCard").style.color='green'
}
function cambiarColorFuenteNaranja(){
    document.getElementById("giftCard").style.color='orange'
}
                // CAMBIO DE TAMAÑO DE LA FUENTE

function cambiarFuente20(){
    document.getElementById("destinatarioGift").style.fontSize='20px'

}
function cambiarFuente28(){
    document.getElementById("destinatarioGift").style.fontSize='28px'
}
function cambiarFuente32(){
    document.getElementById("destinatarioGift").style.fontSize='32px'
}
function cambiarFuente48(){
    document.getElementById("destinatarioGift").style.fontSize='48px'
}
function cambiarFuente60(){
    document.getElementById("destinatarioGift").style.fontSize='60px'
}
                // CAMBIO DE POSICION

function cambiarPosicionIzqA(){
    document.getElementById("tituloGift").style.paddingRight='150px'
    document.getElementById("tituloGift").style.paddingTop='200px'
    document.getElementById("tituloGift").style.paddingLeft='0px'
}
function cambiarPosicionDer(){
    document.getElementById("tituloGift").style.paddingLeft='150px'
    document.getElementById("tituloGift").style.paddingRight='0px'
    document.getElementById("tituloGift").style.paddingTop='200px'
}
function cambiarPosicionIzqB(){
    document.getElementById("tituloGift").style.paddingRight='150px'
    document.getElementById("tituloGift").style.paddingTop='0px'
    document.getElementById("tituloGift").style.paddingLeft='0px'
}
function posicionOriginal(){
    document.getElementById("tituloGift").style.paddingTop='80px'
    document.getElementById("tituloGift").style.paddingRight='0px'
    document.getElementById("tituloGift").style.paddingLeft='0px'
    document.getElementById("tituloGift").style.paddingBottom='0px'
}

// ESPACIO PARA JAVASCRIPT CALENDARIO----------------------------------------------------------- ESPACIO PARA JAVSCRIPT CALENDARIO ////////////////////////////////////////