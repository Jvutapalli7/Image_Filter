var allinputs =document.querySelectorAll("input")
console.log(allinputs)
allinputs[0].addEventListener('input',()=>{
    var first=document.getElementById("blur").value
    document.getElementById("image").style.filter=`blur(${first}px)`
     
})
allinputs[1].addEventListener('input',()=>{
    var first=document.getElementById("bright").value
    document.getElementById("image").style.filter=`brightness(${first})`
})
allinputs[2].addEventListener('input',()=>{
    var first=document.getElementById("cons").value
    document.getElementById("image").style.filter=`contrast(${first})`
})
allinputs[3].addEventListener('input',()=>{
    var first=document.getElementById("grey").value
    document.getElementById("image").style.filter=`grayscale(${first})`
})
allinputs[4].addEventListener('input',()=>{
    var first=document.getElementById("hue").value
    document.getElementById("image").style.filter=`hue-rotate(${first}deg)`
})
allinputs[5].addEventListener('input',()=>{
    var first=document.getElementById("invert").value
    document.getElementById("image").style.filter=`invert(${first})`
})
allinputs[6].addEventListener('input',()=>{
    var first=document.getElementById("opacity").value
    document.getElementById("image").style.filter=`opacity(${first})`
})
allinputs[7].addEventListener('input',()=>{
    var first=document.getElementById("sat").value
    document.getElementById("image").style.filter=`saturate(${first})`
})
allinputs[8].addEventListener('input',()=>{
    var first=document.getElementById("sepia").value
    document.getElementById("image").style.filter=`saturate(${first})`
})
allinputs[9].addEventListener('input',()=>{
    var first=document.getElementById("xrot").value
    document.getElementById("image").style.transform=`rotateZ(${first}deg)`
})
allinputs[10].addEventListener('input',()=>{
    var first=document.getElementById("xrot").value
    document.getElementById("image").style.transform=`rotateX(${first}deg)`
})
allinputs[11].addEventListener('input',()=>{
    var first=document.getElementById("yrot").value
    document.getElementById("image").style.transform=`rotateY(${first}deg)`
})
allinputs[12].addEventListener('input',()=>{
    var first=document.getElementById("scale").value
    document.getElementById("image").style.transform=`scale(${first})`
})
allinputs[13].addEventListener('input',()=>{
    var first=document.getElementById("xsca").value
    document.getElementById("image").style.transform=`scalex(${first})`
})
allinputs[14].addEventListener('input',()=>{
    var first=document.getElementById("ysca").value
    document.getElementById("image").style.transform=`scaley(${first})`
})
allinputs[15].addEventListener('input',()=>{
    var first=document.getElementById("skew").value
    document.getElementById("image").style.transform=`skew(${first}deg)`
})
allinputs[16].addEventListener('input',()=>{
    var first=document.getElementById("xskew").value
    document.getElementById("image").style.transform=`skewx(${first}deg)`
})
allinputs[17].addEventListener('input',()=>{
    var first=document.getElementById("yskew").value
    document.getElementById("image").style.transform=`skewy(${first}deg)`
})
