// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$ ('#btncomenzar') .on ('tap' , function () { 
  navigator .vibrate (1000);
 });//  tap a btnvibrar
   $ ('#btninicio') .on ('tap' , function () { 
  navigator .vibrate (1000);
 });//  tap a btnvibrar
	
}); 
//});

$(document).ready(function(e) {
	
	
	$('#resultado').click(function(e){
		
		var diac;
		diac=$('#dia').val();
		var mesc;
		mesc=$('#mes').val();
		var anioc;
		anioc=$('#anio').val();
		
		var fecha_actual = new Date ();
		//alert (fecha_actual);
		var fecha_proximo = new Date (fecha_actual.getFullYear(),mesc -1 ,diac);
		//alert (fecha_proximo);
		var fecha_actual = new Date (fecha_actual.getFullYear(), fecha_actual.getMonth(), fecha_actual.getDate());
		//alert (fecha_actual);
		var fecha_nacimiento = new Date (anioc,mesc-1,diac);
		//alert (fecha_nacimiento);
		var edad=fecha_actual.getFullYear()-anioc;
		
		if (fecha_proximo <= fecha_actual)
		{
			fecha_proximo = new Date (fecha_proximo.getFullYear()+1,fecha_proximo.getMonth(),fecha_proximo.getDate());
			
		}
		else
		{
			edad=edad-1
		}
		var dias_faltantes = (fecha_proximo - fecha_actual)/1000/60/60/24;
		
		dias_faltantes = Math.round(dias_faltantes);
		
		
		$('#divdias')..text( $('#txnombre').val() + ' faltan ' + dias_faltantes + ' dias para tu cumple '); 
		
		 $('#divedad').text(' tienes '+ edad  +  ' años ');
		 
		if (dias_faltantes <7)
		{
				
	       $('#divfelicidades').show();
		}
		else
		{
			
		    $('#divfelicidades').hide();
		}
		
});
      
	 
	 $('#btninicio').click(function(e){
		$('#txtnombre').val('')
		$('#diacumple').val('')
		$('#mescumple').val('')
		$('#yearcumple').val('')
		
		
	});



	});//ready