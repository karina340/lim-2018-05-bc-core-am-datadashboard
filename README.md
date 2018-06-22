# Data Dashboard

## ¿Cuál fue el requerimiento?

Las Training Manager de Laboratoria necesitan **ordenar, filtrar y agrupar** a las alumnas de acuerdo al cohort al que pertenecen, turno y squad, tambien hacer un mejor control sobre nuestro avance en las lecturas no obligatorias, para ello es necesario implementar una plataforma donde ellas reciban la data ya procesada.

## Detalles del proceso

**a. Recepción del pedido:**

Al analizar el contenido del pedido, rescatamos que debemos realizar lo siguiente:

- Extracción de la data json.
- Crear funciones para mostrar la data json de manera ordenada según el avance individual de cada alumna.

**b. Primeros pasos con el JavaScript:**

- Desarrollo del primer boceto de baja resolución.
- Nuestra primera fue tener tres páginas

1. Login

![login](https://image.prntscr.com/image/ionv83X1T024SLtUOFl6xA.png)

2. Resultados generales

![general](https://image.prntscr.com/image/MM_alWMBQqylolZzVR83HA.png)

3. Detalle alumnas

![alumnas](https://image.prntscr.com/image/PEweaOtMQYaBqPM8cDScSA.png)

Llevamos lo del papel a la computadora a través de [Invision](https://projects.invisionapp.com/freehand/document/nAiap4sh7) y nos enfocamos en el sector de alumnas.

![invision](https://image.prntscr.com/image/AsmJNIGcRX_trIwcAtHU3A.png)

Comenzamos a desarrollar el prototipo de alta calidad en [Figma](https://www.figma.com/file/YXvYSU7p3MNVIvjC3bMxIFPa/Dashboard-Lab-2K).

![figma](https://image.prntscr.com/image/s_-nFK6EQ1KsUR4Ijx2mow.png)

A pesar de tener tres páginas hemos decidido enfocarnos en desarrollar, en primer lugar, la página "Detalle alumnas" porque ese es el principal requemiento.

- Extracción de la data.

Al tener la data, debíamos investigar sobre cómo llamar la data y mostrarla. Para ello recurrimos a la información del LMS y de W3Schools sobre el [XML HttpRequest](https://www.w3schools.com/xml/xml_http.asp).

Usamos la fórmula:

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {

  if (this.readyState == 4 && this.status == 200)

}

Al reemplazar los valores, realizamos pruebas para poder llamar la data a la consola. Lo siguiente es presentar la data en el HTML.

**c. Primeros pasos con el HTML:**

Al tener la estructura definida pasamos a realizar un primer bosquejo del HTML que contiene las partes principales del producto.

![html](https://image.prntscr.com/image/qzFi5lEmReGTWL83zl5YNA.png)




==============================

### Quiénes son los principales usuarios de producto.

### Cuáles son los objetivos de estos usuarios en relación con el producto.

### Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué

### Cómo los descubriste.

### Cuándo revisan normalmente estos datos los usuarios.

### Cómo crees que el producto les está resolviendo sus problemas.

### Cómo fue tu proceso de diseño.

## Que necesitamos para este proyecto 

+ Uso de API DE LABORATORIA
+ Implementacion de graficos en la aplicacion web 
+ Desarrollo de prototipos en SIGMA