var crsr =document.querySelector("#cursor")
var cursorBlur =document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x -11 + "px";
    crsr.style.top = dets.y -11+ "px";
    cursorBlur.style.left = dets.x - 250 + "px";
    cursorBlur.style.top = dets.y - 250 + "px";
  });
 

gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }}
)
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"-75%",
        scrub:2,
    }
})