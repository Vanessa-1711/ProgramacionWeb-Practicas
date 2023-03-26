<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="admin-lte/dist/css/adminlte.min.css">
    <!-- ICONOS -->
    <script src="https://kit.fontawesome.com/a8a964cfb5.js" crossorigin="anonymous"></script>
    <!-- Librerias boostrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" >
    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- hoja de estilos -->
    <link href="estilos.css" rel="stylesheet">
</head>
<body>
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
                        <th>CODIGO</th>
                        <th>NOMBRE</th>
                        <th>Precio Vente</th>
                        <th>Precio Compra</th>
                    </thead>
                    <tbody>
                        <tr>
                        <td><?php echo $codigo ?></td>
                        <td><?php echo $nombre ?></td>
                        <td><?php echo $precioVenta ?></td>
                        <td><?php echo $precioCompra ?></td>
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
    
</body>
</html>