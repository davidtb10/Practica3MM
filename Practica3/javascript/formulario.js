//Array para almacenar los inputs con errores
var camposErrores = new Array();

$(document).ready(function (e) {
	$('form').submit(function () {
		//Crear variable para controlar si hay errores
		var errors = false;

		//Reiniciar mensajes de error
		$('#errors').html('');

		//Limpiar campos
		limpiarCampos();

		//Validar nombre
		if ($('#inputNombre').val() === '') {
			errors = true;
			camposErrores.push('#inputNombre');
			$('#errors').append('<p><strong>El campo nombre es obligatorio.</strong></p>');
		} else {
			var pattern = /^[a-zA-ZñÑ\s\W]+$/;
			if (!$("#inputNombre").val().match(pattern)) {
				errors = true;
				camposErrores.push('#inputNombre');
				$('#errors').append('<p><strong>El nombre únicamente puede contener caracteres no numéricos.</strong></p>');
			}
		}

		//Validar apellidos
		if ($('#inputApellidos').val() === '') {
			errors = true;
			camposErrores.push('#inputApellidos');
			$('#errors').append('<p><strong>El campo apellidos es obligatorio.</strong></p>');
		} else {
			var pattern = /^[a-zA-ZñÑ\s\W]+$/;
			if (!$("#inputApellidos").val().match(pattern)) {
				errors = true;
				camposErrores.push('#inputApellidos');
				$('#errors').append('<p><strong>Los apellidos únicamente pueden contener caracteres no numéricos.</strong></p>');
			}
		}

		//Validar fecha
		var dia = $('#inputDia').val();
		var mes = $('#inputMes').val();
		var anio = $('#inputAnio').val();
		if (dia === '' || mes === '' || anio === '') {
			errors = true;
			camposErrores.push('#inputDia');
			camposErrores.push('#inputMes');
			camposErrores.push('#inputAnio');
			$('#errors').append('<p><strong>El campo fecha de nacimiento es obligatorio.</strong></p>');
		} else {
			var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
			var fecha = dia + '/' + mes + '/' + anio;
			if (!fecha.match(pattern)) {
				errors = true;
				camposErrores.push('#inputDia');
				camposErrores.push('#inputMes');
				camposErrores.push('#inputAnio');
				$('#errors').append('<p><strong>La fecha de nacimiento es incorrecta, debe seguir el formato (dd/mm/aaaa).</strong></p>');
			}
		}

		//Validar email
		if ($('#inputEmail').val() === '') {
			errors = true;
			camposErrores.push('#inputEmail');
			$('#errors').append('<p><strong>El campo email es obligatorio.</strong></p>');
		}

		//Validar teléfono
		var pattern = /^([0-9]{9})$/;
		var telefono = $('#inputTelefono').val();
		if (telefono.length != 0) {
			if (!telefono.match(pattern)) {
				errors = true;
				camposErrores.push('#inputTelefono');
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
				camposErrores.push('#inputPais');
				$('#errors').append('<p><strong>El país es incorrecto, únicamente puede incluir caracteres no numéricos.</strong></p>');
			}
		}

		//Validar código postal
		var pattern = /^([0-9]{5})$/;
		var codigo = $('#inputcodigo').val();
		if (codigo.length != 0) {
			if (!codigo.match(pattern)) {
				errors = true;
				camposErrores.push('#inputcodigo');
				$('#errors').append('<p><strong>El código postal es incorrecto, debe estar formado por 5 dígitos.</strong></p>');
			}
		}
		
		if(errors){
			marcarCamposConErrores();
			$(window).scrollTop(0);
		}else{
			window.location.href = "index.html";
		}

		return false;
	});
});

//Se marcan visualmente los campos con errores
function marcarCamposConErrores(){
	camposErrores.forEach(function(campo, index) {
		$(campo).addClass("is-invalid");
	});
}

//Se limpian los campos marcados anteriormente con errores
function limpiarCampos(){
	camposErrores.forEach(function(campo, index) {
		$(campo).removeClass("is-invalid");
	});

	camposErrores = [];
}

const annotate3 = RoughNotation.annotate;
const annotationGroup = RoughNotation.annotationGroup;

const i = document.querySelector('.content-table');
const annotation4 = annotate3(i, { type: 'box', color: 'crimson'});
annotation4.show();