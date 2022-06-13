function chamar_api(){
	fetch('https://forza-api.tk')
	  .then(response => response.json())
	  .then(data => exibir_imagem(data));
}

function exibir_imagem(data){
	document.getElementById("img").src = data.image;
}

function consultar_todos_os_carros_api(){
	fetch('https://forza-api.tk')
	  .then(response => response.json())
	  .then(data =>  consultar_todas_os_carros_api(data));
}

function consultar_todos_os_carros_api(data){
	const div = document.getElementById("lista");
	div.innerHTML = "";
	Object.keys(data.image).forEach(key => {
	  console.log(key, data[key]);
	  var div = document.getElementById("lista");
	  const paragrafo = document.createElement("p");
	  const texto = document.createTextNode(key);
	  paragrafo.appendChild(texto);
	  div.appendChild(paragrafo);
	});
}