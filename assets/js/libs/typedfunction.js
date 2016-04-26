$(function(){
    $("#firstType").typed({
      strings: ["\tHola, soy Omar ","\tBienvenido a mi", "\tPortafolio Web"],
      typeSpeed: 100,
      backDelay: 700,
      loop: true, // loop on or off (true or false)
      loopCount: false, // number of loops, false = infinite
      callback: function(){ } // call function after typing is done
    });
});
