

var btn = document.querySelector(".rr")
var btn1 = document.querySelector(".ll")
// var lll = document.querySelector("#left")
// var rrr = document.querySelector("#right")

// btn.addEventListener("click",function(){

//      lll.style.left = "100%";
//      rrr.style.left = "-100%";
     







gsap.from("#p",{
    // repeat:true,
   

    
      onStart: function(){
          $('#btn ').textillate({ in: { effect: 'flip' } });
      },
      
  });

  
  
 gsap.from(".nav>a",{
    opactiy:0,
    x:20,
    duration:2,


 });  


 
 gsap.from("#page2 #cen, #in #z",{
   y:"100",
   duration:"2",
   opacity:0,
     
  scrollTrigger:{
    trigger:"#page2 #cen #in #z",
    scroller:"body",
    // markers:"ture,",
    // start:"top ", 
    // top:"90%",
    // end:"120%",


  }



 })

  // var tl = DocumentTimeline()
  
    gsap.from("#page1 h1",{
      y:60,
      duration:2,
      opacity:0,

    })
    gsap.from("#page1 h2",{
      y:60,
      delay:1,
      opacity:0,
      duration:1,

    })
 

  gsap.from(".in1",{
    x:2000,
    duration:20,
    autoplay:true,
  })


gsap.from("#page3 h1, #oclass  ",{
  
  y:100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:" #page3 h1, #oclass",
    scroller:"body",
    // markers:"ture",
    // start:"top 90%",

  }


})
    

  gsap.from("#page4  h1 ,h2 ,.one ",{
    y:100,
    duration:2,
    opacity:0,
    scrollTrigger:{
       trigger:"page4 h1 ,.one h2",
       scroller:"body",
      //  markers:"true",
      //  strat: "100%",
    }

  })


gsap.from("#page5 h1 ,p, #imn ",{

  y: 100,
  opacity:0,
  rottote:"230deg",
  scrollTigger:{
    trigger:"#page5 h1 ,p, h2",
    scroller:"body",
    markers:"true",
       strat: "100%",
  
  }
})
