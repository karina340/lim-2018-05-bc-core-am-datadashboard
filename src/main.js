import { deflateRaw } from "zlib";

const c = document.getElementById('myContent')
const b = document.getElementById('botonJSON')
const l = document.getElementById('carga')
l.style.display = 'none'

b.addEventListener('click',evt => {
  l.style.display = 'block'

  //Debeos de jalar la data desde acá? src/data.js o de un archivo .json
  /*const xhr = new XMLHttpRequest()
  xhr.open('GET','/json',true)*/

  //Qué hacemos con la data?
  xhr.addEventListener('load', e => {
    const data = JSON.parse(e.target.respoondeText)
    draw(data)

    l.style.display = 'none'
  })

  //Realizar peticiones
  xhr.send()
})

const draw = data => {
  data.forEach(n => {
    const container = document.createElement('div')
    const title = document.createElement('h2') 
    const content = document.createElement('p')
    const datenew = document.createElement('span')

    title.textContent = n.Titulo
    content.textContent = n.contenido
    datenew.textContent = n.fecha

    container.appendChild(title)
    container.appendChild(content)
    container.appendChild(datenew)
  });
}

var xhttp = newXMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();