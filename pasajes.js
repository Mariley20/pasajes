reservas = document.getElementById('reserva');
reservas.onclick = function(){
   reserva();
};

function mostrar(asientos){
   var s1 = "", s2 = "";
   for (var i = 0; i < asientos.length; i++) {
      var e =  (asientos[i] != undefined)  ?  '*' : '';
      if ( i % 2 == 0)
         s1 += (i+1) + "[" + e + "] ";
      else
         s2 += (i+1) + "[" + e + "] ";
   }
   return "\n" + s1 + "\n" + s2 + "\n";
} 

function reserva () {
   var N = 10; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
   }
   var mensaje = "0: Salir\n" +
                 "1: Reservar  asiento\n" +
                 "2: Liberar asiento \n" + 
                 "3: Buscar \n";
   
   var option = 0;
   while (true){
      var str = mostrar(asientos) + mensaje + " >> ingrese opcion:" ;
      option = parseInt( prompt( str )  );
      if (option == 0) {
         break;
      }else if (option == 1) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >= 0 && nro < N) {
            var name =  prompt( "nombre del pasajero" )  ;
            var id = parseInt( prompt( "dni del pasajero"  ) );
            asientos[nro - 1] = {
               nombre : name,
               dni: id,
               asiento: nro
            };
         }
      }else if (option == 2) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >= 0 && nro < N) {
            asientos[nro - 1] = undefined;
         }
       }else if (option == 3) {
         var mensajeBuscar = "Buscar por: \n" +
                 "1: DNI\n" +
                 "2: Nombre \n" + 
                 "3: N° Asiento \n";
                 
         str = mensajeBuscar ;
         var nro = parseInt( prompt( str )  );
         var filtrado = buscar(nro, asientos);
         console.log(filtrado);
         //alert(filtrado);
   
            str = mostrar(asientos) +
                     "DNI del pasajero: " + filtrado.dni + "\n"+
                     "Nombre del pasajero: " + filtrado.nombre + "\n"+
                     "Asiento del pasajero: " + filtrado.asiento;
                
            alert (str);
      }
      
   } 
   imprimir(asientos);
}

function buscar(option, asientos){
console.log(asientos);
var filtrar;
   if(option == 1){
      str = "ingrese N° de DNI";
      var dni = parseInt( prompt( str ) );
      for(var i = 0; i < asientos.length; i++){
         if(asientos[i] != undefined){
            if(asientos[i].dni == dni){
               filtrar = asientos[i];
            }
         }
      }
   }else if(option == 2){
      str = "ingrese nombre";
      var nombre = prompt( str );
      for(var i = 0; i < asientos.length; i++){
         if(asientos[i] != undefined){
            if(asientos[i].nombre == nombre){
               filtrar = asientos[i];
            }
         }
      }
   }else if(option == 3){
      str = "ingrese N° de Asiento";
      var asiento = parseInt( prompt( str ) );
      for(var i = 0; i < asientos.length; i++){
         if(asientos[i] != undefined){
            if(asientos[i].asiento == asiento){
            filtrar = asientos[i];
            }
         }
      }
   }
   return filtrar
}

//reserva();
