$(document).ready(function (e) {
	$('form').submit(function () {
		//Crear variable para controlar si hay errores
		var errors = false;

		//Reiniciar mensajes de error
		$('#errors').html('');

		//Validar nombre
		if ($('#inputNombre').val() === '') {
			errors = true;
			$('#errors').append('<p><strong>El campo nombre es obligatorio.</strong></p>');
		} else {
			var pattern = /^[a-zA-ZñÑ\s\W]+$/;
			if (!$("#inputNombre").val().match(pattern)) {
				errors = true;
				$('#errors').append('<p><strong>El nombre únicamente puede contener caracteres no numéricos.</strong></p>');
			}
		}

		//Validar apellidos
		if ($('#inputApellidos').val() === '') {
			errors = true;
			$('#errors').append('<p><strong>El campo apellidos es obligatorio.</strong></p>');
		} else {
			var pattern = /^[a-zA-ZñÑ\s\W]+$/;
			if (!$("#inputApellidos").val().match(pattern)) {
				errors = true;
				$('#errors').append('<p><strong>Los apellidos únicamente pueden contener caracteres no numéricos.</strong></p>');
			}
		}

		//Validar fecha
		var dia = $('#inputDia').val();
		var mes = $('#inputMes').val();
		var anio = $('#inputAnio').val();
		if (dia === '' || mes === '' || anio === '') {
			errors = true;
			$('#errors').append('<p><strong>El campo fecha de nacimiento es obligatorio.</strong></p>');
		} else {
			var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
			var fecha = dia + '/' + mes + '/' + anio;
			if (!fecha.match(pattern)) {
				errors = true;
				$('#errors').append('<p><strong>La fecha de nacimiento es incorrecta, debe seguir el formato (dd/mm/aaaa).</strong></p>');
			}
		}

		//Validar email
		if ($('#inputEmail').val() === '') {
			errors = true;
			$('#errors').append('<p><strong>El campo email es obligatorio.</strong></p>');
		}

		//Validar teléfono
		var pattern = /^([0-9]{9})$/;
		var telefono = $('#inputTelefono').val();
		if (telefono.length != 0) {
			if (!telefono.match(pattern)) {
				errors = true;
				$('#errors').append('<p><strong>El formato del teléfono es incorrecto, únicamente puede contener dígitos.</strong></p>');
			}
		}


		//Validar localidad
		var pattern = /^[a-zA-ZñÑ\s\-\W]+$/;
		var localidad = $('#inputLocalidad').val();
		if (localidad.length != 0) {
			if (!localidad.match(pattern)) {
				errors = true;
				$('#errors').append('<p><strong>La localidad es incorrecta, únicamente puede incluir caracteres no numéricos.</strong></p>');
			}
		}

		//Validar país
		var pattern = /^[a-zA-ZñÑ\s\-\W]+$/;
		var pais = $('#inputPais').val();
		if (pais.length != 0) {
			if (!pais.match(pattern)) {
				errors = true;
				$('#errors').append('<p><strong>El país es incorrecto, únicamente puede incluir caracteres no numéricos.</strong></p>');
			}
		}

		//Validar código postal
		var pattern = /^([0-9]{5})$/;
		var codigo = $('#inputcodigo').val();
		if (codigo.length != 0) {
			if (!codigo.match(pattern)) {
				errors = true;
				$('#errors').append('<p><strong>El código postal es incorrecto, debe estar formado por 5 dígitos.</strong></p>');
			}
		}

		if(!errors){
			window.location.href = "index.html";
		}

		return false;
	});
});








/*function validate() {
	// Inicializar mensaje de error
	var msg = "";

	//Validar nombre y apellidos
	var pattern = /^[a-zA-ZñÑ\s\W]+$/;
	var nombre = document.getElementById("inputNombre");
	var apellidos = document.getElementById("inputApellidos");
	if (!pattern.test(nombre.value)) msg += "El nombre únicamente puede contener caracteres no numéricos.\n";
	if (!pattern.test(apellidos.value)) msg += "Los apellidos únicamente pueden contener letras y espacios.\n";

	//Validar fecha
	var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	var dia = document.getElementById("inputDia").value;
	var mes = document.getElementById("inputMes").value;
	var anio = document.getElementById("inputAnio").value;
	var fecha = dia + '/' + mes + '/' + anio;
	if (!pattern.test(fecha)) msg += "La fecha de nacimiento es incorrecta, debe seguir el formato (dd/mm/aaaa).\n";

	//Validar teléfono
	var pattern = /^([0-9]{9})$/;
	var telefono = document.getElementById("inputTelefono");
	if (!pattern.test(telefono.value)) msg += "El teléfono es incorrecto, debe estar formado por 9 dígitos.\n ";

	//Validar localidad y país
	var pattern = /^[a-zA-ZñÑ\s\-\W]+$/;
	var localidad = document.getElementById("inputLocalidad");
	var pais = document.getElementById("inputPais");
	if (!pattern.test(localidad.value)) msg += "La localidad es incorrecta, únicamente puede incluir caracteres no numéricos.\n ";
	if (!pattern.test(pais.value)) msg += "El país es incorrecto, únicamente puede incluir caracteres no numéricos.\n ";

	//Validar código postal
	var pattern = /^([0-9]{5})$/;
	var codigo = document.getElementById("inputcodigo");
	if (!pattern.test(codigo.value)) msg += "El código postal es incorrecto, debe estar formado por 5 dígitos.\n ";

	if (msg != "") {
		alert(msg);
		return false;
	} else return true;
}*/