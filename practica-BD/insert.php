<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INSERTAR DATOS EN LA BD</title>
</head>
<body>
    <?php
        //conexion a ala base de datos 
        //nombre del servidor + nombre de usuario+contraseña + nombre de la base de datos
        $con=mysqli_connect("localhost", "root", "","staff");

        // revisar conexion
        if($con==false){
            die("Error no existe una conexion a la base de datos".mysqli_connect_error());
        }
        //tomar los 5 valores del formulario a traves de los datos de los campos
        $first_name= $_REQUEST['first_Name'];
        $last_name = $_REQUEST['last_Name'];
        $gener = $_REQUEST['gener'];
        $address = $_REQUEST['address'];
        $email = $_REQUEST['email'];

        //ejecutar el Query de insercion de datos
        $sql = "INSERT INTO college VALUES('$first_name', '$last_name', '$gener', '$address', '$email')";

        //mandar mensaje de datos guardados
        $resultado = mysqli_query($con, $sql);
        if (!$resultado) {
            echo "ERROR! $sql".mysqli_error($con);
        } else {
            echo "<h3>Datos almacenados correctamente. Revisar MYSQL para cotejar registros. y actualizar de ser necesario</h3>";
            //nl2br -inserta saltos de linea html antes de todos los numeros STRING
            echo nl2br ("\n$first_name\n $last_name\n $gener\n $address\n $email"); 
        }
        //cerrar conexion
        mysqli_close($con)
    ?>

    
</body>
</html>