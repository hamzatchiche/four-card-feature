let tl=gsap.timeline({
    defaults:{duration:1.3, ease:"power3.out",opacity:0},
});
tl.from(".mb-12 h1",{
    stagger:0.4,
    y:-100,
    delay:0.2,
    
})
tl.from(".mb-12 h2",{
    stagger:0.4,
    y:-100,
    delay:0.2,
    
})
tl.from(".mb-12 p",{
    stagger:0.4,
    y:-100,
    delay:0.2,
    
})
tl.from(".cont",{
    stagger:0.5,
    x:400,
    delay:0.5,
})