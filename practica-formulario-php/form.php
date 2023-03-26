<?php
if (isset($_POST['nombre'], $_POST['email'],$_POST['direccion'], $_POST['telefono'],$_POST['edad'],$_POST['sexo'],$_POST['matricula'] )){
    $name=$_POST['nombre'];
    $email =$_POST['email'];
    $direccion =$_POST['direccion'];
    $telefono =$_POST['telefono'];
    $edad =$_POST['edad'];
    $sexo =$_POST['sexo'];
    $matricula =$_POST['matricula'];

}else{

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Usuarios</title>

 
  <!-- Theme style -->
  <link rel="stylesheet" href="admin-lte/dist/css/adminlte.min.css">
    <!-- ICONOS -->
  <script src="https://kit.fontawesome.com/a8a964cfb5.js" crossorigin="anonymous"></script>
  <!-- Librerias boostrap -->
  <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" >
  <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- hoja de estilos -->
  <link href="estilos.css" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini layout-fixed">
  <!-- apartado de formulario  -->
  <div class="wrapper">
      <!-- Main content -->
        <div class="container-fluid">
          <div class="row">
            <!-- left column -->
            <div class="col-md-6" >
              <div class="bg-1">
                <h1 class="t-stroke t-shadow">DATOS INGRESADOS</h1>
              </div>
              <br>
              <!-- general form elements -->
              <div class="card card-primary">
                <!-- /.card-header -->
                <table class="table">
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Edad</th>
                        <th>Sexo</th>
                        <th>Matrícula</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><?php echo $name ?></td>
                        <td><?php echo $email ?></td>
                        <td><?php echo $direccion ?></td>
                        <td><?php echo $telefono ?></td>
                        <td><?php echo $edad ?></td>
                        <td><?php echo $sexo ?></td>
                        <td><?php echo $matricula ?></td>
                        </tr>
                        <!-- Agrega más filas aquí -->
                    </tbody>
                    </table>

              <!-- /.card -->
              </div>
            </div>
          </div>
        </div>
  </div>
  <!-- ./wrapper -->

</body>
</html>








