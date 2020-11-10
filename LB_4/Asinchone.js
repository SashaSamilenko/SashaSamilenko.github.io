'use strict';
//First Lesson!)
let count=0;
let k=0;
function FirstLesson()
{
	let arr =["pageHeader","pageA","pageB","pageFooter","pageC"];
	let timer;
	if(count!=4)
	{
	timer=setInterval(function(){
		let elementF = document.getElementsByClassName(arr[count]);
    	let elementS = document.getElementsByClassName(arr[count+1]);
    	let elementF_2=elementF[0].innerHTML;
    	let elementS_2=elementS[0].innerHTML;
    	elementF[0].innerHTML = elementS_2;
    	elementS[0].innerHTML = elementF_2;
    	if(count==0)
    	{
    		let elementBox = document.getElementById("page1");
    		elementBox.style.margin="20"+"%"+" 0% 0% 0%";
    	}
    	if(count==1)
    	{
      let elementBox2 = document.getElementById("pageA");
      elementBox2.style.margin="-3"+"%"+" 0% 0% 0%";
      elementBox2.style.padding="0% 0% 10vh 0vh";
    	
      let elementBox1 = document.getElementById("page1");
    	elementBox1.style.margin="38"+"%"+" 0% 0% 0%";
    	}
    	if(count==3)
    	{
        let elementBox2 = document.getElementById("page3");
        elementBox2.style.margin="-8% 2% 0% 70%";
        let High1=document.getElementById("pageC");
        let High2=document.getElementById("pageFooter");
        let High3=document.getElementById("pageSpace");
       document.body.style.gridHeight="1000px";
       High1.style.height="222px";
       High2.style.height="222px";
       High3.style.height="222px";
    	}
		count+=1;
		clearInterval(timer);
		k+=5000;
		FirstLesson();
 		}, k);
	}
	else
	{
		count++;
		clearInterval(timer);
		k=0;
	}
}
//Second lesson!)
let count2=0;
let noumber=0;
let timer;
function EventMouseOver() {
	let space = document.getElementById('pageSpace');
	document.getElementById("pageSpace").style.padding="0px 0px 0px 0px";
	document.getElementById("pageSpace").style.font="8pt/8pt sans-serif";
	space.onmouseover = handler;
}
function handler(event) {
  	let type = event.type;
  	if(count2<54)
  	{
  		let value=document.getElementById('pageSpace');
  		value.innerHTML+=String(event.target.id)+"\n";
  		count2++;
  	}
  	else
  	{
  		count2=0;
  		let value=document.getElementById('pageSpace');
  		value.innerHTML=String(event.target.id)+"\n";
  	}
  	let Colors=["green","yellow","blue"];
  	clearInterval(timer);
  	timer= setInterval(function()
  	{
  		let FirstBlock=document.getElementById("pageA");
  		let SecondBlock=document.getElementById("pageC");
  		FirstBlock.style.backgroundColor=Colors[noumber];
  		SecondBlock.style.backgroundColor=Colors[noumber];
  		if(noumber<=1)
  		{
  			noumber+=1;
  		}
  		else
  		{
  			noumber=0;
  		}
  	},5000)
  	return false;
}
//Third excersise
async function Third(name,repo) {//Main method
    let commits = await fetch(`https://api.github.com/repos/${name}/${repo}/commits`).then(
      successResponse => {
        if (successResponse.status != 200) {
          alert(`Error: <error.status> `+successResponse.status);
          return null;
        } else {
          return successResponse.text();
        }
      },
      failResponse => {
        alert(`Error: <error.status> `+successResponse.status);
        return null;
      }
    );
  let names=[];
  let messages=[];
  let dates=[];
  for(let i=0;i<commits.length;i++)
  {
    if(i+3<commits.length)
    {
      if(commits[i]=="n" && commits[i+1]=="a" && commits[i+2]=="m" && commits[i+3]=="e" && commits[i-15]=="r" && commits[i-16]=="o" && commits[i-17]=="h")
      {
        let str='';
        for(let j=i+7;j<commits.length;j++)
        if(commits[j+1]!='\n')
        {
          str+=commits[j];
        }
        else
        {
          break;
        }
        names.push(str);
      }
      if(commits[i]=="m" && commits[i+1]=="e" && commits[i+2]=="s" && commits[i+3]=="s" && commits[i+4]=="a" && commits[i+5]=="g" && commits[i+6]=="e")
      {
        let str='';
        for(let j=i+10;j<commits.length;j++)
        if(commits[j+1]!='\n')
        {
          str+=commits[j];
        }
        else
        {
          break;
        }
        messages.push(str);
      }
      if(commits[i]=="d" && commits[i+1]=="a" && commits[i+2]=="t" && commits[i+3]=="e")
      {
        let str='';
        for(let j=i+7;j<commits.length;j++)
        if(commits[j+1]!='\n')
        {
          str+=commits[j];
        }
        else
        {
          break;
        }
        if(dates.length==names.length-1)
        {
          dates.push(str);
        }
      }
    }
  }
  let bigStr='';
  for(let i=0;i<names.length;i++)
  {
    bigStr+=names[i]+": "+messages[i]+"; date: "+dates[i].slice(0,11)+'\n';
  }
  alert(bigStr);
}
//Forth lesson
function Forth(str,callBack1,callBack2)
{
	let value1=document.getElementById("page1");
	value1.onmouseup=function(){page1.innerHTML="Hello"+callBack1();};
	value1.onmousedown=function(){page1.innerHTML="Hello"+callBack2();};
}
//Fifth lesson
function Fifth()
{
	Create(pageHeader);
	let form=document.forms.Form;
	let arrg;
	let arrg2=[];
	form.onsubmit = function(){
	let change = form.elements.text1;
	arrg=change.value.split(' ');
	for(let i=0;i<arrg.length;i++)
	{
		if(arrg[i].match(/\d/g)!=null)
		{
			if(arrg[i].match(/\d/g).length<arrg[i].length && arrg[i][0]!="-" && arrg[i].length-arrg[i].match(/\d/g).length!=1)
			{
				arrg.splice(i, 1);
				i=i-1;
			}
			else
			{
				arrg2.push(Number(arrg[i]));
			}
		}
		else
		{
			arrg.splice(i, 1);
			i=i-1;
		}
	}
	alert(quickSort(arrg2));


	//Second variant!)
	// for(let i=0;i<arrg.length;i++)
	// {
	// 	if(isNaN(arrg[i])==true)
	// 	{
	// 		arrg.splice(i, 1);
	// 		i=i-1;
	// 	}
	// 	else
	// 	{
	// 	    let val=Number(arrg[i]);
	// 		arrg2.push(val);
	// 	}
	// }
	// alert(quickSort(arrg2));
	}
}
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
    
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
function Create(to){
	let div = document.createElement('div');
	div.innerHTML="<form name='Form'>"
      +"Введите значения для сортировки: <br>"
      +"<input type='text' name='text1' value=''>"
      +"<input type='submit' name='tree' value='OK'>"
    +"</form>";
    to.append(div);
}
FirstLesson(); // 1th lesson
// EventMouseOver(); // 2th lesson
// Third("SashaSamilenko","SashaSamilenko.github.io");
// Forth("Hello",script => {
//     return ", friend!"},script => {return ", Earth!";}); // 4th lesson
// Fifth(); // 5th lesson