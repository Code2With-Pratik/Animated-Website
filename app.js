// =================timeline animation started===============
function page1Animation(){
    var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button",{
    y:-40,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.15
})
tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.4,
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4,
})
tl.from(".center-part2 img",{
    x:200,
    opacity:0,
    duration:0.5
},"-=1") 
tl.from(".section1bottom img",{
    opacity:0,
    y:80,
    stagger:0.15,
    duration:0.6
})
}
// =================================NOTE=========================================
//    "-=1" so that you can give delay inside the timeline if you want to give delay 

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 0%",
            scrub:2
        }
    })
    tl2.from(".services",{
        y:30,
        opacity:0
    })
    
    tl2.from("#left1",{
        x:-350,
        opacity:0,
        delay:1,
        duration:3,
        stagger:0.15
    })
    tl2.from("#left2",{
        x:350,
        opacity:0,
        delay:1,
        duration:3,
        stagger:0.15
    })
}

page1Animation()
page2Animation()

// =====================timelinwe Animation Ends=============================