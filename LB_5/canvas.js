'use strict';
function ExchangeTheText(where,first,second)
{
	let i=where.indexOf(first);
	return where.slice(0,i)+second+where.slice(i+first.length);
}
function degToRad(degrees) {
 return degrees * Math.PI / 180;
}
function random(min,max){
  const num=Math.floor(Math.random()*(max-min+1))+min;
  return num;
}
function CreateGameUsingCanvas()
{	
	document.getElementById('pageB').innerHTML+='<canvas id="myCanvas">Hello</canvas>';
	const canvas=document.getElementById('myCanvas');
	canvas.style.margin='0.5% 0% 0% -2.4%';
	const width = canvas.width =(window.innerWidth-80)*0.7+21;
	const height = canvas.height = Number(document.getElementById('pageSpace').style.height.slice(0,-2))*0.54-50;
	const ctx = canvas.getContext('2d');
	canvas.style.border='5px solid green';
	document.getElementById('myCanvas').style.backgroundImage='url(texture.png)';
	let image = new Image();
	image.src = 'texture.png';
	image.onload=function(){
	for(let i=0;i<height/10;i++)
	{
		for(let j=0;j<width/10;j++)
		{
			ctx.drawImage(image, 32*j, 32*i);
		}
	}
	CreateCircles();
	}
}
let yellow_x,yellow_y,
	red_x,red_y;
function CreateCircles()
{	
	let ctx = document.getElementById('myCanvas').getContext('2d');
	ctx.fillStyle = 'yellow';
	yellow_x=random(31,Number(myCanvas.width)-31);
	yellow_y=random(31,Number(myCanvas.height)-31);
	ctx.beginPath();
	ctx.arc(yellow_x,yellow_y, 31, degToRad(0), degToRad(360), false);
	ctx.fill();
	ctx.fillStyle = 'red';
	red_x=random(31,Number(myCanvas.width)-31);
	red_y=random(31,Number(myCanvas.height)-31);
	ctx.beginPath();
	ctx.arc(red_x,red_y, 31, degToRad(0), degToRad(360), false);
	ctx.fill();
}
function CreateButtonPlay() {
	pageFooter.innerHTML+= "<br><input id='playB' type='button' value='PLAY'>";
	document.body.style.gridHeight='660px';
	let High1=document.getElementById("pageC");
    let High2=document.getElementById("pageFooter");
    let High3=document.getElementById("pageSpace");
    High1.style.height="125px";
    High2.style.height="125px";
    High3.style.height="580px";
}
function CreateButtonClose() {
	document.getElementById('pageB').innerHTML+="<input type='button' id='closeB' value='CLOSE'>";
	pageB.style.textAlign='left';
	document.getElementById('closeB').style.margin='-20% 0% 0% -2%';
}
function CreateButtonStart() {
	document.getElementById('pageB').innerHTML+="<input type='button' id='startB' value='Start'>";
	document.getElementById('startB').style.margin='-20% 0% 0% 0%';
}
function CreateButtonReload() {
	document.getElementById('pageB').innerHTML+="<input type='button' id='reloadB' value='Reload'>";
	document.getElementById('reloadB').style.margin='-20% 0% 0% 0%';
}
function CreateDivMailBlock() {
	document.getElementById('pageB').innerHTML+="<div id='mailBlock'></div>";
	document.getElementById('mailBlock').style.margin='-2.7% 0% 0% 70%';
	document.getElementById('mailBlock').style.border='1px solid orange';
	document.getElementById('mailBlock').style.width='250px';
	document.getElementById('mailBlock').style.height='22px';
	document.getElementById('mailBlock').style.padding='0px';
}
function CreateScrollBlock() {
	pageHeader.innerHTML+= "<br><textarea id='scrollBlock' overflow='auto'>";
}
function DoubleToching()
{
	let l=Math.sqrt(Math.pow(yellow_x-red_x,2)+Math.pow(yellow_y-red_y,2));
	if(l<=62)
	{
		clearInterval(timer);
		mailBlock.innerHTML="Balls have met!";
		localStorage.setItem(new Date(),"Balls have met!");
		let first='<input type="button" id="startB" value="Start" style="margin: -20% 0% 0%;" disabled="">';
		let second='<input type="button" id="reloadB" value="Reload" style="margin: -20% 0% 0%;">';
		let text=String(document.getElementById('pageB').innerHTML);
		document.getElementById('pageB').innerHTML=ExchangeTheText(text,first,second);
		let reload=document.getElementById('reloadB');
		let ctx = document.getElementById('myCanvas').getContext('2d');
		ctx.fillStyle='yellow';
		ctx.beginPath();
		ctx.arc(yellow_x,yellow_y, 31, degToRad(0), degToRad(360), false);
		ctx.fill();
		ctx.fillStyle='red';
		ctx.beginPath();
		ctx.arc(red_x,red_y, 31, degToRad(0), degToRad(360), false);
		ctx.fill();
		reload.onclick=function()
		{
			mailBlock.innerHTML="Click 'reload' button!";
			localStorage.setItem(new Date(),"Click 'reload' button!");
			document.getElementById('pageB').innerHTML=sessionStorage.getItem('savedText');
			playB.onclick();
		}
	}
}
let timer;
function MovingCircles()
{
	let ctx = document.getElementById('myCanvas').getContext('2d');
	clearInterval(timer);
	flag=true;
	flag2=true;
    counterPixel=1;
	counterPixel2=1;
	k2=1;
	k4=1;
	timer= setInterval(function(){
		let image = new Image();
		image.src = 'texture.png';
		image.onload=function(){
			for(let i=0;i<myCanvas.height/10;i++)
			{
				for(let j=0;j<myCanvas.width/10;j++)
				{
					ctx.drawImage(image, 32*j, 32*i);
				}
			}
			RedToMove();
			YellowToMove();
			DoubleToching();
		}
	},200);
}
let flag=true;
let k2=1;
let check=false;
let counterPixel=1;
function RedToMove()
{
	let ctx = document.getElementById('myCanvas').getContext('2d');
	ctx.fillStyle = 'red';
	if(k2==1 && check==false)
	{
		check=true;
		if(red_x+counterPixel<Number(myCanvas.width)-31)
		{
			ctx.beginPath();
			ctx.arc(red_x+counterPixel,red_y, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			red_x+=counterPixel;
			counterPixel++;
		}
		else
		{
			ctx.beginPath();
			ctx.arc(Number(myCanvas.width)-31.1,red_y, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			red_x=Number(myCanvas.width)-31.1;
			if(flag)k2+=3;
			else k2+=1;
			flag=!flag;
			counterPixel++;
			mailBlock.innerHTML="Red ball has touched right wall!";
			localStorage.setItem(new Date(),"Red ball has touched right wall!");
		}
	}
	if(k2==2 && check==false)
	{
		check=true;
		if(red_y+counterPixel<Number(myCanvas.height)-31)
		{
			ctx.beginPath();
			ctx.arc(red_x,red_y+counterPixel, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			red_y+=counterPixel;
			counterPixel++;
		}
		else
		{
			ctx.beginPath();
			ctx.arc(red_x,Number(myCanvas.height)-31.1, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			red_y=Number(myCanvas.height)-31.1;
			if(flag)
			{
				k2+=3;
			}
			else
			{
				k2+=1;
			}
			flag=!flag;
			counterPixel++;
			mailBlock.innerHTML="Red ball has touched down wall!";
			localStorage.setItem(new Date(),"Red ball has touched down wall!");
		}
	}
	if(k2==3 && check==false)
	{
		check=true;
		if(red_x-counterPixel>31)
		{
			ctx.beginPath();
			ctx.arc(red_x-counterPixel,red_y, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			red_x-=counterPixel;
			counterPixel++;
		}
		else
		{
			red_x=31.1;
			ctx.beginPath();
			ctx.arc(31.1,red_y, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			if(flag)
			{
				k2-=1;
			}
			else
			{
				k2-=3;
			}
			flag=!flag;
			counterPixel++;
			mailBlock.innerHTML="Red ball has touched left wall!";
			localStorage.setItem(new Date(),"Red ball has touched left wall!");
		}
	}
	if(k2==4 && check==false)
	{
		check=true;
		if(red_y-counterPixel>31)
		{
			ctx.beginPath();
			ctx.arc(red_x,red_y-counterPixel, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			red_y-=counterPixel;
			counterPixel++;
		}
		else
		{
			red_y=31.1;
			ctx.beginPath();
			ctx.arc(red_x,31.1, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			if(flag)
			{
				k2-=-1;
			}
			else
			{
				k2-=3;
			}
			flag=!flag;
			counterPixel++;
			mailBlock.innerHTML="Red ball has touched up wall!";
			localStorage.setItem(new Date(),"Red ball has touched up wall!");
		}
	}
	if(flag)
	{
		if(k2+1>4)
		{
			k2=1;
		}
		else
		{
			k2++;
		}		
	}
	else
	{
		if(k2-1<1)
		{
			k2=4;
		}
		else
		{	
			k2--;
		}
	}
	check=false;
}
let flag2=true;
let k4=1;
let check2=false;
let counterPixel2=1;
function YellowToMove()
{
	let ctx = document.getElementById('myCanvas').getContext('2d');
	ctx.fillStyle = 'yellow';
	if(k4==1 && check2==false)
	{
		check2=true;
		if(yellow_x+counterPixel2<Number(myCanvas.width)-31)
		{
			ctx.beginPath();
			ctx.arc(yellow_x+counterPixel2,yellow_y, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			yellow_x+=counterPixel2;
			counterPixel2++;
		}
		else
		{
			ctx.beginPath();
			ctx.arc(Number(myCanvas.width)-31.1,yellow_y, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			yellow_x=Number(myCanvas.width)-31.1;
			if(flag2)k4+=3;
			else k4+=1;
			flag2=!flag2;
			counterPixel2++;
			mailBlock.innerHTML="Yellow ball has touched right wall!";
			localStorage.setItem(new Date(),"Yellow ball has touched right wall!");
		}
	}
	if(k4==2 && check2==false)
	{
		check2=true;
		if(yellow_y+counterPixel2<Number(myCanvas.height)-31)
		{
			ctx.beginPath();
			ctx.arc(yellow_x,yellow_y+counterPixel2, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			yellow_y+=counterPixel2;
			counterPixel2++;
		}
		else
		{
			yellow_y=Number(myCanvas.height)-31.1;
			ctx.beginPath();
			ctx.arc(yellow_x,Number(myCanvas.height)-31.1, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			if(flag2) k4+=3;
			else k4+=1;
			flag2=!flag2;
			counterPixel2++;
			mailBlock.innerHTML="Yellow ball has touched down wall!";
			localStorage.setItem(new Date(),"Yellow ball has touched down wall!");
		}
	}
	if(k4==3 && check2==false)
	{
		check2=true;
		if(yellow_x-counterPixel2>31)
		{
			ctx.beginPath();
			ctx.arc(yellow_x-counterPixel2,yellow_y, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			yellow_x-=counterPixel2;
			counterPixel2++;
		}
		else
		{
			yellow_x=31.1;
			ctx.beginPath();
			ctx.arc(31.1,yellow_y, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			if(flag2)
			{
				k4-=1;
			}
			else
			{
				k4-=3;
			}
			flag2=!flag2;
			counterPixel2++;
			mailBlock.innerHTML="Yellow ball has touched left wall!";
			localStorage.setItem(new Date(),"Yellow ball has touched left wall!");
		}
	}
	if(k4==4 && check2==false)
	{
		check2=true;
		if(yellow_y-counterPixel2>31)
		{
			ctx.beginPath();
			ctx.arc(yellow_x,yellow_y-counterPixel, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			yellow_y-=counterPixel2;
			counterPixel2++;
		}
		else
		{
			yellow_y=31.1;
			ctx.beginPath();
			ctx.arc(yellow_x,31.1, 31, degToRad(0), degToRad(360), false);
			ctx.fill();
			if(flag2)
			{
				k4-=-1;
			}
			else
			{
				k4-=3;
			}
			flag2=!flag2;
			counterPixel2++;
			mailBlock.innerHTML="Yellow ball has touched up wall!";
			localStorage.setItem(new Date(),"Yellow ball has touched up wall!");
		}
	}
	if(flag2)
	{
		if(k4+1>4)
		{
			k4=1;
		}
		else
		{
			k4++;
		}		
	}
	else
	{
		if(k4-1<1)
		{
			k4=4;
		}
		else
		{	
			k4--;
		}
	}
	check2=false;
}
let first_click_close=false;
function StartGame()
{
	let block= document.getElementById("pageB");		
	sessionStorage.setItem('savedText',block.innerHTML);
	localStorage.clear();
	CreateButtonPlay();
	playB.onclick = function(){
		block.innerHTML=null;			
		CreateButtonClose();
		CreateButtonStart();
		CreateDivMailBlock();
		mailBlock.innerHTML="Click 'play' button!";
		localStorage.setItem(new Date(),"Click 'play' button!");
		CreateGameUsingCanvas();
		startB.onclick=function(){
			mailBlock.innerHTML="Click 'start' button!";
			localStorage.setItem(new Date(),"Click 'start' button!");
			MovingCircles();
			document.getElementById("startB").disabled = true; 
		}
		closeB.onclick=function(){
			mailBlock.innerHTML="Click 'close' button!";
			localStorage.setItem(new Date(),"Click 'close' button!");
			document.getElementById('pageB').innerHTML=sessionStorage.getItem('savedText');
			clearInterval(timer);
			pageHeader.font='font: 8pt/6pt'
			if(!first_click_close){pageHeader.innerHTML+= "<br><textarea id='scrollBlock' overflow='auto'>"; first_click_close=true;}
			scrollBlock.innerHTML=null;
			for(let i=0;i<localStorage.length;i++)
			{
				scrollBlock.innerHTML+=String(localStorage.key(i).slice(7,24))+' '+String(localStorage.getItem(localStorage.key(i)))+'\n';
			}
		}
	}
}
StartGame();