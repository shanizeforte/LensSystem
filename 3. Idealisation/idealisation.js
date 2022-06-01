function Changer(value){
    const docx = document.documentElement;
    docx.style.setProperty('--real',1-value);
    docx.style.setProperty('--ideal',value);
}
var buttonIds = ['ankle', 'length', 'boy', 'amp', 'vis'];
var visibilityState = ['visible', 'hidden','hidden','hidden','hidden'];
function setVisibility(){
    for(let i =0; i<5; i++){
        d3.select('#' + buttonIds[i]).style('visibility', visibilityState[i]);
        console.log('hey');
}
}
setVisibility();
// function to run when button 1 is pressed
d3.select('#' + buttonIds[0]).on('change', function(){
    console.log(d3.select(this).property('checked'));
    if(d3.select(this).property('checked'))
        visibilityState = ['visible','visible','hidden','hidden','hidden'];
    else
        visibilityState = ['visible', 'hidden','hidden','hidden','hidden'];
    setVisibility();
d3.select("#a1").style("visibility","visible")

});

d3.select('#' + buttonIds[1]).on('change', function(){
    console.log(d3.select(this).property('checked'));
    if(d3.select(this).property('checked'))
        visibilityState = ['visible','visible','visible','hidden','hidden'];
    else
        visibilityState = ['visible', 'visible','hidden','hidden','hidden'];
    setVisibility();
    d3.select("#a2").style("visibility","visible")
});

d3.select('#' + buttonIds[2]).on('change', function(){
    console.log(d3.select(this).property('checked'));
    if(d3.select(this).property('checked'))
        visibilityState = ['visible','visible','visible','visible','hidden'];
    else
        visibilityState = ['visible', 'visible','visible','hidden','hidden'];
    setVisibility();
    d3.select("#a3").style("visibility","visible")
});

d3.select('#' + buttonIds[3]).on('change', function(){
    console.log(d3.select(this).property('checked'));
    if(d3.select(this).property('checked'))
        visibilityState = ['visible','visible','visible','visible','visible'];
    else
        visibilityState = ['visible', 'visible','visible','visible','hidden'];
    setVisibility();
    d3.select("#a4").style("visibility","visible")
});

d3.select('#' + buttonIds[4]).on('change', function(){
    console.log(d3.select(this).property('checked'));
    if(d3.select(this).property('checked'))
        visibilityState = ['visible','visible','visible','visible','visible'];
    else
        visibilityState = ['visible', 'visible','visible','visible','visible'];
    setVisibility();
    d3.select("#a5").style("visibility","visible")
});

function toggleVisibility(id) {
    var el = document.getElementById(id);
 
    if (el.style.visibility=="visible") {
           el.style.visibility="hidden";
      }
      else {
           el.style.visibility="visible";
      }
  }