<?php

if (isset($_POST['name'], $_POST['email'])){
    $name=$_POST['name'];
    $email =$_POST['email'];
    //show the $name and $email
    echo "gracias $name por tu suscripcion.<br> ";
    echo "porfavor confirme el correo enviado a $email. <br>";
    var_dump($_POST['email']);
}else{

}

?>