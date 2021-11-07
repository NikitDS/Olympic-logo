
    var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var colour="red";
var colour1="blue";
var colour2="black";
var colour3="green";
var colour4="yellow";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.rect(150,143,430,200)
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=colour1;
ctx.lineWidth=2;
ctx.arc(270,200,44,0,2*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=colour2;
ctx.lineWidth=2;
ctx.arc(370,200,44,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(470,200,44,0,2*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=colour3;
ctx.lineWidth=2;
ctx.arc(430,250,44,0,2*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=colour4;
ctx.lineWidth=2;
ctx.arc(320,250,44,0,2*Math.PI)
ctx.stroke();




