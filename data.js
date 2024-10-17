const manuales = [
  {
      "tipo": "SFTP", 
      "nombre": "Envío de Centralización por SFTP", 
      "fecha": "01-12-2023", 
      "descripcion": "Verificar la configuración del SFTP para el envío del archivo centralización", 
      "url": "manual.html?option=centralizacion_sftp", 
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
      "descripcion": "Verificar la configuración del SFTP para el envío del archivo banco", 
      "url": "manual.html?id=banco_sftp", 
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
      "descripcion": "Veremos el paso a paso para probar el envío del archivo banco o centralización al SFTP de BUK", 
      "url": "manual.html?id=probar_sftp", 
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
      "descripcion": "Veremos como configurar el token (llave) desde BUK para poder conectarnos en apidocs", 
      "url": "manual.html?id=token_api", 
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
      "descripcion": "Veremos como realizar la misma consulta de apidocs en una herramienta externa de BUK (Postman)", 
      "url": "manual.html?id=api_postman", 
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
      "descripcion": "Veremos la configuración del webhook y realizaremos una prueba con un servidor externo", 
      "url": "manual.html?id=webhook_config_pruebas", 
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
      "descripcion": "Veremos como configurar el SSO - Protocolo OAUTH", 
      "url": "manual.html?id=sso_oauth", 
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
      "fecha": "05-12-2023", 
      "descripcion": "Veremos como configurar el SSO - Protocolo SAML", 
      "url": "manual.html?id=sso_saml", 
      "imagenes": ["imagenes/api_postman/utilizar_api_postman_1.png", "imagenes/api_postman/utilizar_api_postman_2.png"],
      "highlightDetails": [
            { x: 955, y: 5, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1010, y: 63, width: 270, height: 40 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
            "Instrucción 1: Aquí es donde configuramos el SFTP.",
            "Instrucción 2: Asegúrate de verificar los detalles de la configuración."
        ]
  }
];
