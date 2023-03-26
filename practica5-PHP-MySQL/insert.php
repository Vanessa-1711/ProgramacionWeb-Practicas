<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INSERTAR DATOS EN LA BD</title>
    <!-- Theme style -->
</head>
<body>
    <?php
        //conexion a ala base de datos 
        //nombre del servidor + nombre de usuario+contraseña + nombre de la base de datos
        $conexion=mysqli_connect("167.172.159.60", "admin", "5b8fc2b6176a8d1939f4b08c5724480d374f9b1603c1d563","formularios");

        // revisar conexion
        if($conexion==false){
            die("Error no existe una conexion a la base de datos".mysqli_connect_error());
        }
        //tomar los 5 valores del formulario a traves de los datos de los campos
        $codigo= $_REQUEST['codigo'];
        $nombre = $_REQUEST['nombre'];
        $precioVenta = $_REQUEST['precioven'];
        $precioCompra = $_REQUEST['precioComp'];

        //ejecutar el Query de insercion de datos
        $sql = "INSERT INTO productos VALUES('$codigo', '$nombre', '$precioVenta', '$precioCompra')";

        //mandar mensaje de datos guardados
        $resultado = mysqli_query($conexion, $sql);
        if (!$resultado) {
            echo "ERROR! $sql".mysqli_error($conexion);
        } else {
            //echo "<h3>Datos almacenados correctamente. Revisar MYSQL para cotejar registros. y actualizar de ser necesario</h3>";
            include('verDatos.php');
        }
        //cerrar conexion
        mysqli_close($conexion)
    ?>    
</body>
</html>