$.ajax({
	url: 'http://www.mindicador.cl/api',
	method: 'GET'
}).then(function(data){
		console.log(data);
		//Valor hoy
		var un_dolar = data.dolar.valor;
		var un_euro = data.euro.valor;
		$('#dolar').text('$'+un_dolar)
		$('#euro').text('$'+un_euro)
		$('#uf').text('$'+data.uf.valor)
		$('#utm').text('$'+data.utm.valor)


		$('.form-group').on('submit', function(e){
			e.preventDefault();
			var pesos_ingresa3 = $('#pesos').val()
			// 1$US ----> $$Pesos (un_dolar)
			// X -------> pesos_ingresa3
			var conversion_dolar = (pesos_ingresa3/un_dolar).toFixed(2);
			var conversion_euro = (pesos_ingresa3/un_euro).toFixed(2);

			$('#pesos_ingresados').text('CL $'+pesos_ingresa3)
			$('#conver_dolar').text('US $'+conversion_dolar)
			$('#conver_euro').text('EU €'+conversion_euro)
		})
		//Convertidors

		$('.form-group_dolar').on('submit', function(e){
			e.preventDefault();
			var dolares_ingresa3 = $('#input_dolar').val()
	
			$('#dolares_ingresados').text('US $'+dolares_ingresa3)
			$('#conver_pesos').text('CL $'+Math.round(dolares_ingresa3*un_dolar))
		})



});
