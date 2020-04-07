
//Função para trabalhar data e Hora campo Data Hora do Agendamento
jQuery(document).ready(function () {
	'use strict';

	jQuery('#filter-date, #search-from-date, #search-to-date').datetimepicker({
		lang: 'pt',
		locale: 'pt',
		format:'d/m/Y H:i'

		}
	);
});



function manual() {
	if (document.getElementById("codCir").value.trim().length < 5 || document.getElementById("codCir").value.trim().length > 10) {
		alert('Por favor, insira corretamente o CODCIR.');
		
		return false;
	} else {
		document.forms['forminicial'].action = 'conecta/triagem/manual';
		document.forms['forminicial'].submit();
	}
}


function automatico() {

	if (document.getElementById("codCir").value.trim().length < 5 || document.getElementById("codCir").value.trim().length > 10) {
		alert('Por favor, insira corretamente o codcir.');
		

		return false;
	} else {
		$('#loading').modal('show')
		document.getElementById("action").value = "carimboAuto";
		/*document.forms['forminicial'].action = 'controller/SiteController.php';*/
		document.forms['forminicial'].action = 'conecta/triagem/auto';
		document.forms['forminicial'].submit();
	}
}

function carimboTriagem() {


	if (document.getElementById('selectTpAtv').value == "") {
		alert('Por favor, preencha o campo obrigatório.');
		return false;
	}

	if (document.getElementById('comboTpVoz').style.display != 'none') {
		if (document.getElementById('selectTpVoz').value == "") {
			alert('Por favor, preencha o campo obrigatório.');
			return false;
		}
	}

	if (document.getElementById('comboBldMpls').style.display != 'none') {
		if (document.getElementById('selectBldMpls').value == "") {
			alert('Por favor, preencha o campo obrigatório.');
			return false;
		}
	}
	/*
		  if(document.getElementById('comboAtvAlt').style.display != 'none'){
				if(document.getElementById('selectAtvAlt').value == ""){
					alert('Por favor, preencha o campo obrigatório.');
					return false;
			}  	
		  }
	*/
	if (document.getElementById('comboBroadPabx').style.display != 'none') {
		if (document.getElementById('selectBroadPabx').value == "") {
			alert('Por favor, preencha o campo obrigatório.');
			return false;
		}
	}


	document.forms['formManual'].action = 'conecta/triagem/manual';
	document.forms['formManual'].submit();



}

function copy_to_clipboard() {
	//   document.getElementById('carimboTriagemFim').select();
	//   document.execCommand('copy');
}




function mostraEnderecoDTC(campo, disp) {
	var campos = $('#' + campo + '').val();

	//alert(campos);
	if (campos == 'S') {
		document.getElementById(disp).style.display = 'block';
		//document.getElementById(cpend).style.display = 'block';
		//$('#EDCTXT').removeAttr('display');
		//$('#EDCTXT').attr('display:block');
	}
	else {
		document.getElementById(disp).style.display = 'none';
		//document.getElementById(cpend).style.display = 'none';
		//$('#EDCTXT').removeAttr('display');
		//$('#EDCTXT').attr('display:none');
	}

}



