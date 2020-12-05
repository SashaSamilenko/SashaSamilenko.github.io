'use strict';
function DoubleToching()
{
	let yellow_x=Number(document.getElementById('yellow_circle').style.left.slice(0,-2))+19.99;
	let yellow_y=Number(document.getElementById('yellow_circle').style.top.slice(0,-2))+19.9;
	let red_x=Number(document.getElementById('red_circle').style.left.slice(0,-2))+19.9;
	let red_y=Number(document.getElementById('red_circle').style.top.slice(0,-2))+84.17;
	let l=Math.sqrt(Math.pow(yellow_x-red_x,2)+Math.pow(yellow_y-red_y,2));
	if(l<=64)
	{
		clearInterval(timer);
		mailBlock.innerHTML="Balls have met!";
		localStorage.setItem(new Date(),"Balls have met!");
		let first='<input type="button" id="startB" value="Start" style="margin: -20% 0% 0%;" disabled="">';
		let second='<input type="button" id="reloadB" value="Reload" style="margin: -20% 0% 0%;">';
		let text=String(document.getElementById('pageB').innerHTML);
		document.getElementById('pageB').innerHTML=ExchangeTheText(text,first,second);
		let reload=document.getElementById('reloadB');
		reload.onclick=function()
		{
			mailBlock.innerHTML="Click 'reload' button!";
			localStorage.setItem(new Date(),"Click 'reload' button!");
			document.getElementById('pageB').innerHTML=sessionStorage.getItem('savedText');
			playB.onclick();
			yellow_circle.style.left=random(-19.99,Number(anim.style.width.slice(0,-2))-41.2)+'px';
			yellow_circle.style.top=random(-19.9,Number(anim.style.height.slice(0,-2))-43)+'px';
			red_circle.style.left=random(-19.8,Number(anim.style.width.slice(0,-2))-42)+'px';
			red_circle.style.top=random(-82.6,Number(anim.style.height.slice(0,-2))-104)+'px';
		}
		//closeB.onclick();
	}
}
function StartGame()
{
	localStorage.clear();
	CreateButtonPlay();
	playB.onclick = function(){
		let block= document.getElementById("pageB");		
		sessionStorage.setItem('savedText',block.innerHTML);			
		block.innerHTML=null;
		CreateButtonClose();
		CreateButtonStart();
		CreateDivMailBlock();
		mailBlock.innerHTML="Click 'play' button!";
		localStorage.setItem(new Date(),"Click 'play' button!");
		CreateAnim();
		sessionStorage.setItem('pageB_BeforeCrash',document.getElementById('pageB').innerHTML);
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
			sessionStorage.removeItem('savedText');
			clearInterval(timer);
			pageHeader.font='font: 8pt/6pt'
			pageHeader.innerHTML+= "<br><textarea id='scrollBlock'  overflow='auto'>";
			for(let i=0;i<localStorage.length;i++)
			{
				scrollBlock.innerHTML+=String(localStorage.key(i).slice(7,24))+' '+String(localStorage.getItem(localStorage.key(i)))+'\n';
			}
		}
	}
}
function ExchangeTheText(where,first,second)
{
	let i=where.indexOf(first);
	return where.slice(0,i)+second+where.slice(i+first.length);
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
	document.getElementById('closeB').style.margin='-20% 0% 0% -2%';//85%';
}
function CreateButtonStart() {
	document.getElementById('pageB').innerHTML+="<input type='button' id='startB' value='Start'>";
	document.getElementById('startB').style.margin='-20% 0% 0% 0%';
}
function CreateButtonReload() {
	document.getElementById('pageB').innerHTML+="<input type='button' id='reloadB' value='Reload'>";
	document.getElementById('reloadB').style.margin='-20% 0% 0% 0%';
}
function CreateAnim() {
	document.getElementById('pageB').innerHTML+="<div id='anim'></div>";
	let anim_height=Number(document.getElementById('pageSpace').style.height.slice(0,-2))*0.54-90;
	let anim_width=(window.innerWidth-80)*0.7-19;//746
	document.getElementById('anim').style.margin='0.5% 0% 0% -2.5%';
	document.getElementById('anim').style.height=String(anim_height)+'px';
	document.getElementById('anim').style.width=String(anim_width)+'px';
	anim.style.border='5px solid green';
	document.getElementById('anim').style.backgroundImage='url(texture.png)';
	CreateCircles();
}
function CreateCircles() {
	//Yellow circle
	document.getElementById('anim').innerHTML+="<div id='yellow_circle'></div>";
	document.getElementById('yellow_circle').style.height='20px';
	document.getElementById('yellow_circle').style.width='20px';
	document.getElementById('yellow_circle').style.borderRadius='50%';
	//document.getElementById('yellow_circle').style.padding="0% 0% 0% 0%";
	document.getElementById('yellow_circle').style.backgroundColor='yellow';
	yellow_circle.style.position='relative';

	//Red circle
	document.getElementById('anim').innerHTML+="<div id='red_circle'></div>";
	document.getElementById('red_circle').style.height='20px';
	document.getElementById('red_circle').style.width='20px';
	document.getElementById('red_circle').style.borderRadius='50%';
	//document.getElementById('red_circle').style.padding="0% 0% 0% 0%";
	document.getElementById('red_circle').style.backgroundColor='red';
	red_circle.style.position='relative';

	//true
	yellow_circle.style.left=random(-19.99,Number(anim.style.width.slice(0,-2))-41.2)+'px';
	yellow_circle.style.top=random(-19.9,Number(anim.style.height.slice(0,-2))-43)+'px';
	red_circle.style.left=random(-19.8,Number(anim.style.width.slice(0,-2))-42)+'px';
	red_circle.style.top=random(-82.6,Number(anim.style.height.slice(0,-2))-104)+'px';

	// yellow_circle.style.left=String(Number(anim.style.width.slice(0,-2))-41.2)+'px';
	// yellow_circle.style.top=String(Number(anim.style.height.slice(0,-2))-43)+'px';
	// red_circle.style.left=String(-19.8)+'px';
	// red_circle.style.top=String(Number(anim.style.height.slice(0,-2))-104)+'px';
	//++++++
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
let timer;
let flag2=true;
let k4=1;
let check2=false;
let counterPixel2=1;
let yellow_pos;
function MovingCircles()
{
	let flag=true;
	let k2=1;
	let check=false;
	let counterPixel=1;
	let red_pos;
	clearInterval(timer);
	counterPixel2=1;
	k4=1;
	flag2=true;
	timer= setInterval(function(){
		let red_pos;
		if(k2==1 && check==false)
		{
			check=true;
			if(Number(red_circle.style.left.slice(0,-2))+22+counterPixel<Number(anim.style.width.slice(0,-2))-42)//Number(document.getElementById('anim').style.width.slice(0,-2)))
			{
				red_pos=Number(document.getElementById('red_circle').style.left.slice(0,-2))+counterPixel;
				document.getElementById('red_circle').style.left=String(red_pos)+'px';
				counterPixel++;
			}
			else
			{
				document.getElementById('red_circle').style.left=String(Number(anim.style.width.slice(0,-2))-42)+'px';
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
				mailBlock.innerHTML="Red ball has touched right wall!";
				localStorage.setItem(new Date(),"Red ball has touched right wall!");
			}
		}
		if(k2==2 && check==false)
		{
			check=true;
			if(Number(red_circle.style.top.slice(0,-2))+20+counterPixel<Number(anim.style.height.slice(0,-2))-104)//Number(document.getElementById('anim').style.height.slice(0,-2)))
			{
				red_pos=Number(document.getElementById('red_circle').style.top.slice(0,-2))+counterPixel;
				document.getElementById('red_circle').style.top=String(red_pos)+'px';
				counterPixel++;
			}
			else
			{
				document.getElementById('red_circle').style.top=String(Number(anim.style.height.slice(0,-2))-104)+'px';
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
			if(Number(red_circle.style.left.slice(0,-2))-counterPixel>=-19.8)
			{
			red_pos=Number(document.getElementById('red_circle').style.left.slice(0,-2))-counterPixel;
			document.getElementById('red_circle').style.left=String(red_pos)+'px';
			counterPixel++;
			}
			else
			{
				document.getElementById('red_circle').style.left=String(-19.8)+'px';
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
			if(Number(red_circle.style.top.slice(0,-2))-counterPixel>=-82.6)
			{
				red_pos=Number(document.getElementById('red_circle').style.top.slice(0,-2))-counterPixel;
				document.getElementById('red_circle').style.top=String(red_pos)+'px';
				counterPixel++;
			}
			else
			{
				document.getElementById('red_circle').style.top=String(-82.6)+'px';
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
		YellowToMove();
		DoubleToching();
	},100);
}
function YellowToMove()
{
		if(k4==1 && check2==false)
		{
			check2=true;
			if(Number(yellow_circle.style.left.slice(0,-2))+22+counterPixel2<Number(anim.style.width.slice(0,-2))-41.2)//Number(document.getElementById('anim').style.width.slice(0,-2)))
			{
				yellow_pos=Number(document.getElementById('yellow_circle').style.left.slice(0,-2))+counterPixel2;
				document.getElementById('yellow_circle').style.left=String(yellow_pos)+'px';
				counterPixel2++;
			}
			else
			{
				document.getElementById('yellow_circle').style.left=String(Number(anim.style.width.slice(0,-2))-41.2)+'px';
				if(flag2)
				{
					k4+=3;
				}
				else
				{
					k4+=1;
				}
				flag2=!flag2;
				counterPixel2++;
				mailBlock.innerHTML="Yellow ball has touched right wall!";
				localStorage.setItem(new Date(),"Yellow ball has touched right wall!");
			}
		}
		if(k4==2 && check2==false)
		{
			check2=true;
			if(Number(yellow_circle.style.top.slice(0,-2))+20+counterPixel2<String(Number(anim.style.height.slice(0,-2))-43))//Number(document.getElementById('anim').style.height.slice(0,-2)))
			{
				yellow_pos=Number(document.getElementById('yellow_circle').style.top.slice(0,-2))+counterPixel2;
				document.getElementById('yellow_circle').style.top=String(yellow_pos)+'px';
				counterPixel2++;
			}
			else
			{
				document.getElementById('yellow_circle').style.top=String((Number(anim.style.height.slice(0,-2))-43))+'px';
				if(flag2)
				{
					k4+=3;
				}
				else
				{
					k4+=1;
				}
				flag2=!flag2;
				counterPixel2++;
				mailBlock.innerHTML="Yellow ball has touched down wall!";
				localStorage.setItem(new Date(),"Yellow ball has touched down wall!");
			}
		}
		if(k4==3 && check2==false)
		{
			check2=true;
			if(Number(yellow_circle.style.left.slice(0,-2))-counterPixel2>=-19.9)
			{
			yellow_pos=Number(document.getElementById('yellow_circle').style.left.slice(0,-2))-counterPixel2;
			document.getElementById('yellow_circle').style.left=String(yellow_pos)+'px';
			counterPixel2++;
			}
			else
			{
				document.getElementById('yellow_circle').style.left=String(-19.9)+'px';
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
				//k4-=1;
				mailBlock.innerHTML="Yellow ball has touched left wall!";
				localStorage.setItem(new Date(),"Yellow ball has touched left wall!");
			}
		}
		if(k4==4 && check2==false)
		{
			check2=true;
			if(Number(yellow_circle.style.top.slice(0,-2))-counterPixel2>-20)
			{
				yellow_pos=Number(document.getElementById('yellow_circle').style.top.slice(0,-2))-counterPixel2;
				document.getElementById('yellow_circle').style.top=String(yellow_pos)+'px';
				counterPixel2++;
			}
			else
			{
				document.getElementById('yellow_circle').style.top=String(-19.99)+'px';
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
function random(min,max){
  const num=Math.floor(Math.random()*(max-min+1))+min;
  return num;
}
StartGame();