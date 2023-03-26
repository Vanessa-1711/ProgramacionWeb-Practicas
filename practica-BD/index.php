<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FORMULARIO CON BD</title>
</head>
<body>
    <center>
        <h1>Formulario con base de datos, favor de llenar los campor</h1>
        <form action="insert.php" method="post">
            <di>
                <label for="first_Name">Nombre:</label>
                <input type="text" name="first_Name" id="first_Name">
            </p>

            <p>
                <label for="last_Name">Apellido:</label>
                <input type="text" name="last_Name" id="last_Name">
            </p>

            <p>
                <label for="gener">Genero:</label>
                <input type="text" name="gener" id="gener">
            </p>

            <p>
                <label for="address">Direccion:</label>
                <input type="text" name="address" id="address">
            </p>

            <p>
                <label for="email">Correo:</label>
                <input type="email" name="email" id="email">
            </p>
            <input type="submit" value="Enviar">
        </form>
    </center>
    
</body>
</html>