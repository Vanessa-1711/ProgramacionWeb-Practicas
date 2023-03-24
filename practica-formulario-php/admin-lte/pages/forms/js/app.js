function subir(){
    console.log("Entre")
    var formulario="";
    var usuario=document.form1.usuario.value;
    var nombre=document.form1.nombre.value;
    var appellido=document.form1.appellido.value;
    var email=document.form1.email.value;
    var contrasena1=document.form1.contrasena1.value;
    var contrasena2=document.form1.contrasena2.value;
    var hobbies="";
    var b=document.form1.hobby.length;


    for(a=0; a<b; a++){
        if (document.form1.hobby[a].checked){
            hobbies+=document.form1.hobby[a].value + ", ";
        }
        if(usuario=="" || nombre == "" || appellido ==""){
            alert("Los campos con asteriscos son obligatorios")
            return false;
        }
        if((contrasena1!=contrasena2)|| contrasena1==""){
            alert("Las claves deven ser igual y no pueden estar en blanco")
        }
        if(email=="") email="Email onvalido"

        formulario = "Usuario: " + usuario + "\n Nombre: " + nombre + "\nApellido" + appellido + "\nemail" + email + "\ncontraseña " + contrasena1 + "\nHobbys" + b
    }
    alert(formulario)

}