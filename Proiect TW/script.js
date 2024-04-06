var n = prompt("gimme some number!");
        alert('suma este ' + suma(parseInt(n))); 
        
       function suma() {
          var s = 0;
          for(var i=0; i<arguments.length; i++)
              s+=arguments[i];
          return s;