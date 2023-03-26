<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Productos</title>

  <!-- Theme style -->
  <link rel="stylesheet" href="admin-lte/dist/css/adminlte.min.css">
  <!-- ICONOS -->
  <script src="https://kit.fontawesome.com/a8a964cfb5.js" crossorigin="anonymous"></script>

  <!-- Se agregan los archivos debootstrap -->
  <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" >
  <script src="bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- hoja de estilos -->
  <link href="estilos.css" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini layout-fixed">
<!-- formulario  -->
<div class="wrapper">
    <!-- Main content -->
      <div class="container-fluid">
        <div class="row" style="display: flex; justify-content: center; align-items: center;">
          <!-- col-md-6 -->
          <div class="col-md-6" >
            <!-- Titulo del formulario -->
            <div class="bg-1">
                <h1 class="t-stroke t-shadow">PRODUCTOS</h1>
              </div>
            <br>
            <!-- general form elements -->
            <div class="card card-primary">
              <!-- /.card-header -->
              
              <!-- form start -->
              <form name="form1" method="post" action="insert.php">
                <div class="card-body">
                  <!-- apartado de Ingresar codigo -->
                  <div class="form-group" id="codigodiv">
                    <label for="codigo" style="text-align: center;">Ingrese el codigo<span class="obligatorio">(*)</span></label>
                    <input type="text" class="form-control m-2 input" name="codigo"  id="codigo" placeholder="Ingrese el codigo" aria-describedby="datosw" required>
                    <!-- Mensaje de dato invalido -->
                    <div id="datosw" class="invalid-feedback">
                      Los datos son obligatorios
                    </div>
                  </div>

                  <!-- apartado de Ingresar nombre -->
                  <div class="form-group" id="nombrediv">
                    <label for="nombre ">Nombre del producto<span class="obligatorio">(*)</span></label>
                    <input type="text" class="form-control m-2 input" name="nombre"  id="nombre" placeholder="Ingrese el nombre" aria-describedby="datosw" required>
                    <!-- Mensaje de dato invalido -->
                    <div id="datosw" class="invalid-feedback">
                      Los datos son obligatorios
                      </div>
                  </div>

                <!-- apartado de Ingresar precio venta -->
                <div class="form-group" id="precioVediv">
                    <label for="precioven">Precio de venta<span class="obligatorio">(*)</span></label>
                    <input type="text" class="form-control m-2 input" name="precioven"  id="precioven" placeholder="Ingrese una contraeña" aria-describedby="datosw" required>
                    <!-- Mensaje de dato invalido -->
                    <div id="datosw" class="invalid-feedback">
                        Debe de ingresar el precio de venta
                    </div>
                </div>

                <!-- apartado de Ingresar precio compra -->
                <div class="form-group" id="precioCompradiv">
                    <label for="precioComp">Precio de compra<span class="obligatorio">(*)</span></label>
                    <input type="text" class="form-control m-2 input" name="precioComp"  id="precioComp" placeholder="Ingrese de nuevo la contraseña" aria-describedby="datosw" required>
                    <!-- Mensaje de dato invalido -->
                    <div id="datosw" class="invalid-feedback">
                      Debe de ingresar el precio de compra
                    </div>
                </div>
                <!-- apartado de botones -->
                <div style="display: flex; justify-content: center; "> 
                    <button type="submit" id="botonEnviar" class="btn btn-primary botonForm" >Enviar</button>
                    <button type="reset" class="btn btn-primary botonForm" >Limpiar</button>
                </div>
            </form>
            <!-- se acaba el formulario -->

            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </div>
<!-- ./wrapper -->
<!-- se llama al archivo js -->
<script src="appProductos.js"></script>


</body>
</html>
