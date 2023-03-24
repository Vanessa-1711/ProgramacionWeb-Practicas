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
  </style>
</head>
<body class="hold-transition sidebar-mini layout-fixed">
  <!-- apartado de formulario  -->
  <div class="wrapper">
      <!-- Main content -->
        <div class="container-fluid">
          <div class="row">
            <!-- left column -->
            <div class="col-md-6">
              <div class="bg-1">
                <h1 class="t-stroke t-shadow">USUARIO</h1>
              </div>
              <br>
              <!-- general form elements -->
              <div class="card card-primary">
                <!-- /.card-header -->
                
                <!-- form start -->
                <form name="form1" method="post" action="form.php">
                  <div class="card-body">
                    <!-- apartado de Ingresar nombre -->
                    <div class="form-group" id="nombrediv">
                      <label for="nombre ">Nombre<span class="obligatorio">(*)</span></label>
                      <input type="text" class="form-control m-2 input" name="nombre"  id="nombre" placeholder="Ingrese el nombre" aria-describedby="datosw" required>
                      <div id="datosw" class="invalid-feedback">
                        Los datos son obligatorios
                        </div>
                    </div>

                    <div class="form-group" id="emaildiv">
                      <label for="email">Email<span class="obligatorio">(*)</span></label>
                      <input type="email" class="form-control m-2 input" name="email"  id="email" placeholder="Ingrese el correo" aria-describedby="datosw" required>
                      <div id="datosw" class="invalid-feedback">
                        Los datos son obligatorios
                      </div>
                    </div>

					<!-- apartado de Ingresar direccion -->
                    <div class="form-group" id="direcdiv">
                      <label for="direccion ">Direccion<span class="obligatorio">(*)</span></label>
                      <input type="text" class="form-control m-2 input" name="direccion"  id="direccion" placeholder="Ingrese la direccion" aria-describedby="datosw" required>
                      <div id="datosw" class="invalid-feedback">
                        Los datos son obligatorios
                        </div>
                    </div>

					<!-- apartado de Ingresar telefono -->
                    <div class="form-group" id="telfdiv">
                      <label for="telefono ">Telefono<span class="obligatorio">(*)</span></label>
                      <input type="number" class="form-control m-2 input" name="telefono"  id="telefono" placeholder="Ingrese el telefono" aria-describedby="datosw" required>
                      <div id="datosw" class="invalid-feedback">
                        Los datos son obligatorios
                        </div>
                    </div>

					<!-- apartado de Ingresar edad -->
                    <div class="form-group" id="edaddiv">
                      <label for="edad ">Edad<span class="obligatorio">(*)</span></label>
                      <input type="number" class="form-control m-2 input" name="edad"  id="edad" placeholder="Ingrese su edad" aria-describedby="datosw" required>
                      <div id="datosw" class="invalid-feedback">
                        Los datos son obligatorios
                        </div>
                    </div>


					<div class="sexodiv">
						<label for="sexo">Sexo:</label>
						<select class="form-control" id="sexo" name="sexo" required>
							<option value="">Seleccione una opción</option>
							<option value="Masculino">Masculino</option>
							<option value="Femenino">Femenino</option>
							<option value="Otro">Otro</option>
						</select>
						<div id="datosw" class="invalid-feedback">
                        	Los datos son obligatorios
                    	</div>
					</div>
					<!-- apartado de Ingresar matricula -->
                    <div class="form-group" id="matriculadiv">
                      <label for="matricula ">Matricula<span class="obligatorio">(*)</span></label>
                      <input type="number" class="form-control m-2 input" name="matricula"  id="matricula" placeholder="Ingrese su matricula" aria-describedby="datosw" required>
                      	<div id="datosw" class="invalid-feedback">
                        	Los datos son obligatorios
                    	</div>
                    </div>



                    
                    
                  <!-- Apartado de botones de enviar y eliminar-->
                  <div style="display: flex; justify-content: center; " > 
                    <button type="submit" id="botonEnviar" class="btn btn-primary botonForm" >Enviar</button>
                    <button type="reset" class="btn btn-primary botonForm">Limpiar</button>
                  </div>
                  <!-- se cierra el formulario -->
                  </form>
              <!-- /.card -->
              </div>
            </div>
          </div>
        </div>
  </div>
  <!-- ./wrapper -->
  <!-- Modal -->  
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="myModal" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Datos Registrados</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- Se ingresan los atributos del modal -->
        <div class="modal-body">
          <p id="modal-content"></p>
          <p id="modalUser"></p>
          <p id="modalNombre"></p>
          <p id="modalApellido"></p>
          <p id="modalEmail"></p>
          <p id="modalContra"></p>
          <p id="modalHobbies"></p>
          <div class="modal-footer">
            <button type="button" class="btn boton" data-bs-dismiss="modal" id="aceptar">Aceptar</button>
          </div>
        </div>
    </div>
  </div>
  <!-- se agrega el archivo js -->
  <script src="appValidar.js"></script>

</body>
</html>
