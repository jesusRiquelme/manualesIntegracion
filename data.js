const manuales = [
  {
      "tipo": "SFTP", 
      "nombre": "Envío de Centralización por SFTP", 
      "fecha": "01-12-2023",
      "importante":"",
      "descripcion": "Verificar la configuración del SFTP para el envío del archivo centralización", 
      "url": "manual.html?option=centralizacion_sftp",
      "activo": false, 
      "imagenes": ["imagenes/api_postman/utilizar_api_postman_1.png", "imagenes/api_postman/utilizar_api_postman_2.png"],
      "highlightDetails": [
            { x: 955, y: 5, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1010, y: 63, width: 270, height: 40 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
            "Instrucción 1: Aquí es donde configuramos el SFTP.",
            "Instrucción 2: Asegúrate de verificar los detalles de la configuración."
        ]
  },
  {
      "tipo": "SFTP", 
      "nombre": "Envío de Banco por SFTP", 
      "fecha": "01-12-2023",
      "importante":"",
      "descripcion": "Verificar la configuración del SFTP para el envío del archivo banco", 
      "url": "manual.html?id=banco_sftp",
      "activo": false, 
      "imagenes": ["imagenes/api_postman/utilizar_api_postman_1.png", "imagenes/api_postman/utilizar_api_postman_2.png"],
      "highlightDetails": [
            { x: 955, y: 5, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1010, y: 63, width: 270, height: 40 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
            "Instrucción 1: Aquí es donde configuramos el SFTP.",
            "Instrucción 2: Asegúrate de verificar los detalles de la configuración."
        ]
  },
  {
      "tipo": "SFTP", 
      "nombre": "Validar el envío a SFTP", 
      "fecha": "05-12-2023",
      "importante":"",
      "descripcion": "Veremos el paso a paso para probar el envío del archivo banco o centralización al SFTP de BUK", 
      "url": "manual.html?id=probar_sftp",
      "activo": false,
      "imagenes": ["imagenes/api_postman/utilizar_api_postman_1.png", "imagenes/api_postman/utilizar_api_postman_2.png"],
      "highlightDetails": [
            { x: 955, y: 5, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1010, y: 63, width: 270, height: 40 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
            "Instrucción 1: Aquí es donde configuramos el SFTP.",
            "Instrucción 2: Asegúrate de verificar los detalles de la configuración."
        ]
  },
  {
      "tipo": "API", 
      "nombre": "Creación de token y conexión API", 
      "fecha": "01-12-2023",
      "importante":"",
      "descripcion": "Veremos como configurar el token (llave) desde BUK para poder conectarnos en apidocs", 
      "url": "manual.html?id=token_api",
      "activo": false, 
      "imagenes": ["imagenes/api_postman/utilizar_api_postman_1.png", "imagenes/api_postman/utilizar_api_postman_2.png"],
      "highlightDetails": [
            { x: 955, y: 5, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1010, y: 63, width: 270, height: 40 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
            "Instrucción 1: Aquí es donde configuramos el SFTP.",
            "Instrucción 2: Asegúrate de verificar los detalles de la configuración."
        ]
  },
  {
      "tipo": "API", 
      "nombre": "Utilizar API desde Postman", 
      "fecha": "07-12-2023",
      "importante":"",
      "descripcion": "Veremos como realizar la misma consulta de apidocs en una herramienta externa de BUK (Postman)", 
      "url": "manual.html?id=api_postman",
      "activo": false,
      "imagenes": ["imagenes/api_postman/utilizar_api_postman_1.png", "imagenes/api_postman/utilizar_api_postman_2.png"],
      "highlightDetails": [
            { x: 955, y: 5, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1010, y: 63, width: 270, height: 40 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
            "Instrucción 1: Aquí es donde configuramos el SFTP.",
            "Instrucción 2: Asegúrate de verificar los detalles de la configuración."
        ]
  },
  {
      "tipo": "API", 
      "nombre": "Configuración de Webhook y pruebas", 
      "fecha": "15-12-2023",
      "importante":"",
      "descripcion": "Veremos la configuración del webhook y realizaremos una prueba con un servidor externo", 
      "url": "manual.html?id=webhook_config_pruebas",
      "activo": false,
      "imagenes": ["imagenes/api_postman/utilizar_api_postman_1.png", "imagenes/api_postman/utilizar_api_postman_2.png"],
      "highlightDetails": [
            { x: 955, y: 5, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1010, y: 63, width: 270, height: 40 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
            "Instrucción 1: Aquí es donde configuramos el SFTP.",
            "Instrucción 2: Asegúrate de verificar los detalles de la configuración."
        ]
  },
  {
      "tipo": "SSO", 
      "nombre": "Configurar SSO OAUTH", 
      "fecha": "01-12-2023",
      "importante":"",
      "descripcion": "Veremos como configurar el SSO - Protocolo OAUTH", 
      "url": "manual.html?id=sso_oauth",
      "activo": false,
      "imagenes": ["imagenes/api_postman/utilizar_api_postman_1.png", "imagenes/api_postman/utilizar_api_postman_2.png"],
      "highlightDetails": [
            { x: 955, y: 5, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1010, y: 63, width: 270, height: 40 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
            "Instrucción 1: Aquí es donde configuramos el SFTP.",
            "Instrucción 2: Asegúrate de verificar los detalles de la configuración."
        ]
  },
  {
      "tipo": "SSO", 
      "nombre": "Configurar SSO SAML", 
      "fecha": "17-10-2024",
      "importante":" Si has llegado a esta sección, debiste haber enviado al cliente el <strong>Identifier</strong> y el <strong>ACS</strong> para generar el XML que necesitaremos para realizar la configuración.<br><br>\
       <strong>ACS:</strong> https://demo.buk.cl/users/saml/auth </br></br> \
       <strong>Identifier:</strong> https://demo.buk.cl/users/saml/metadata </br></br> \
       Estos dos parámetros son fundamentales, ya que el cliente debe ingresarlos en su proveedor de identidad al momento de crear la aplicación.\
       Una vez creada la aplicación, el cliente podrá descargar un archivo XML desde su proveedor.<br><br>\
       Es importante que el colaborador con el cual se realizará la prueba exista tanto en <strong>BUK</strong> como en la aplicación creada en el proveedor de identidad.",
      "descripcion": "Este manual te guía en la configuración del inicio de sesión único (SSO) mediante SAML, permitiendo a los usuarios autenticarse a través de su Proveedor de Identidad (IdP) para acceder a la plataforma de manera segura y sin credenciales adicionales.", 
      "url": "manual.html?id=sso_saml",
      "activo": true, 
      "imagenes": ["imagenes/sso_saml/sso_saml_1.png",
                  "imagenes/sso_saml/sso_saml_2.png",
                  "imagenes/sso_saml/sso_saml_3.png",
                  "imagenes/sso_saml/sso_saml_4.png",
                  "imagenes/sso_saml/sso_saml_5.png",
                  "imagenes/sso_saml/sso_saml_6.png"],
      "highlightDetails": [
            { x: 1030, y: 3, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1050, y: 100, width: 240, height: 40 },  // Rectángulo para la segunda imagen
            { x: 1100, y: 53, width: 185, height: 35 },  // Rectángulo para la segunda imagen
            { x: 300, y: 160, width: 50, height: 35 },  // Rectángulo para la segunda imagen
            { x: 1210, y: 493, width: 88, height: 35 },  // Rectángulo para la segunda imagen
            { x: 210, y: 53, width: 175, height: 35 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
    "<p class='text-center'>Debes hacer clic para acceder a los ajustes de la plataforma.</p>",
    "<p class='text-center'>Aquí encontraremos todas las configuraciones que nos entrega la plataforma.</p>",

    "<p class='text-center'>Debes ingresar la palabra <strong>SAML</strong> para encontrar la configuración.</p>",

    "<table class='table table-striped table-bordered'> \
        <thead class='table-dark'> \
            <tr> \
                <th>Parámetro</th> \
                <th>Descripción</th> \
            </tr> \
        </thead> \
        <tbody> \
            <tr> \
                <td><strong>Habilitar SAML</strong></td> \
                <td>Activa el servicio de autenticación SAML.</td> \
            </tr> \
            <tr> \
                <td><strong>Dominios a autenticar vía SAML</strong></td> \
                <td>Debemos ingresar los dominios que el cliente necesita autenticar ejemplo: buk.cl. Destacar que puede ser más de 1 y debe ir separado con puntoy coma.</td> \
            </tr> \
            <tr> \
                <td><strong>Issuer/Audience URL (opcional)</strong></td> \
                <td>Es un campo de texto libre personalizado. Suelen ser similares a contraseñas o URL’s.</td> \
            </tr> \
            <tr> \
                <td><strong>Authentication Context (opcional)</strong></td> \
                <td>Método extra de autenticación de SAML.</td> \
            </tr> \
            <tr> \
                <td><strong>URL del IdP para SSO</strong></td> \
                <td>Se encuentra dentro del XML y es la URL que BUK utilizará para ir a consultar al proveedor de autenticación sobre la existencia del usuario.</td> \
            </tr> \
            <tr> \
                <td><strong>URL del IdP para SLO</strong></td> \
                <td>Se encuentra dentro del XML y se utiliza para cerrar sesión en el proveedor SAML cuando se cierre sesión en BUK.</td> \
            </tr> \
            <tr> \
                <td><strong>Certificado de IdP</strong></td> \
                <td>Se encuentra dentro del XML y corresponde al certificado que garantizar las transacciones entre el Proveedor de Identidad y el Proveedor de Servicios (SP). Generalmente comienza con MIIC8 y se encuentra cerrado por las etiquetas </X509Certificate> .</td> \
            </tr> \
            <tr> \
                <td><strong>Hash del certificado de IdP</strong></td> \
                <td>Huella digital del certificado del proveedor de identidad. No es necesario si se tiene el certificado IdP.</td> \
            </tr> \
            <tr> \
                <td><strong>URL IdP Logout forzada</strong></td> \
                <td>URL de destino para el SIngle Log Out. Dejar vacío solo cierra la sesión en BUK.</td> \
            </tr> \
            <tr> \
                <td><strong>Algoritmo del hash del certificado</strong></td> \
                <td>Algoritmo para el hash de certificado, generalmente es utilizado el sha256.</td> \
            </tr> \
        </tbody> \
    </table>",

    "<p class='text-center'>Luego de configurar cada uno de los campos solicitados, daremos clic en el botón <strong>Guardar</strong>.</p>",

    "<p class='text-center'>Ya podemos ver en la parte superior el mensaje de éxito. Ahora es momento de hacer pruebas ingresando con algún colaborador que exista en BUK y dentro de la aplicación creada en el proveedor.</p>"
],
    "enlacesDocumentacion": [
        {
            "nombre": "Integración SAML",
            "url": "https://docs.google.com/document/d/1SxbkmYYhMHrbSN3sJg1ldQmgL94PCEPm/edit?usp=sharing&ouid=114187329860437263985&rtpof=true&sd=true"
        },
        {
            "nombre": "SAML Integration English Version",
            "url": "https://docs.google.com/document/d/1uA8rPuCZrQkfMsKsBe451NL0jAZMmsy4/edit?usp=sharing&ouid=114187329860437263985&rtpof=true&sd=true"
        }
    ]
  }
  
];
