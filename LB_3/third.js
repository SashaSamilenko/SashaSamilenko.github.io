'use strict';
function ExchangeTheText(first, second)//FirstTask
{
    let elementF = document.getElementsByClassName(first);
    let elementS = document.getElementsByClassName(second);
    let elementF_2=elementF[0].innerHTML;
    let elementS_2=elementS[0].innerHTML;
    elementF[0].innerHTML = elementS_2;
    elementS[0].innerHTML = elementF_2;
    let elementBox = document.getElementById("page1");
    elementBox.style.margin="20"+"%"+" 0% 0% 0%";
}
function Ploscha(a,b)//SecondTask
{
	let MyElement = document.getElementById("pageB");
	if(a>0 && b>0)
	{
		MyElement.innerHTML+=(a*b*Math.PI).toFixed(3);
	}
	else
	{
		MyElement.innerHTML+=undefined;
	}
}
//ThirdTask
function OutPutDividers()
{
	let form=document.forms.MyForm;
	let output=[];
	if(sessionStorage.getItem('getOnSubmit')=='false')
	{
		form.onsubmit = function(){
			sessionStorage.removeItem('ClickOnButton');
    		sessionStorage.setItem('ClickOnButton',1);
			let element = form.elements.two;
			if(element.value>0)
			{
				for(let i=element.value; i>0;i--)
				{
					if(element.value%i==0)
					{
						output.push(i);
					}
				}
				alert("Делители числа"+element.value+": "+output.reverse());
				let OutString="["+output.join("; ")+"]";
				deleteCookie("ArrgOfOutput");
				setCookie("ArrgOfOutput", OutString,{'max-age': 3600});
				alert("Cookies:\n"+decodeURIComponent(document.cookie));
				}
			else
			{
				deleteCookie("ArrgOfOutput");
				document.cookie="ArrgOfOutput=NULL;path=/";
				alert("Вы ввели не натуральное число!"+element.value);
				alert("Cookies:\n"+decodeURIComponent(document.cookie));
			}
		}
	}
}
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}
function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function CreateForm()
{
	let div = document.createElement('div');
	div.innerHTML="<form name='MyForm'>"
	+"Введите натуральное число: <input type='text' name='two'>"
	+"<input type='submit' name='one' value='OK'>"
    +"</form>";
    pageB.append(div);
}
function FormDelCookes() {
	if(sessionStorage.getItem('form')==null && sessionStorage.getItem('ClickOnButton')==null && sessionStorage.getItem('getOnSubmit')==null)
	{
		sessionStorage.setItem('form', 0);
		sessionStorage.setItem('ClickOnButton', 0);
		sessionStorage.setItem('getOnSubmit',false);
	}
	let number=sessionStorage.getItem('form');
	if(number==1 && sessionStorage.getItem('ClickOnButton')==1)
    	{
    		sessionStorage.removeItem('ClickOnButton');
    		sessionStorage.setItem('ClickOnButton',0);
			let isDel = confirm("Хотите удалить куки?"+"\n"+"Cookies: "+decodeURIComponent(document.cookie));
    		if(isDel)
    		{
    			deleteCookie("ArrgOfOutput");
    			sessionStorage.removeItem('form');
    			sessionStorage.setItem('form',0);
    			location.reload();
    		}
    		else
    		{
		    	if(document.cookie!=0)
		    	{
		    		alert("Куки есть на сайте. Нужно перезагрузить страницу!");
		    		sessionStorage.removeItem('form');
    				sessionStorage.setItem('form',2);
		    	}
		    	else
		    	{
		    		alert("Куки отсутствуют. Нужно перезагрузить страницу!");
		    		sessionStorage.removeItem('form');
    				sessionStorage.setItem('form',2);
		    	}
		    	sessionStorage.removeItem('getOnSubmit');
		    	sessionStorage.setItem('getOnSubmit',true);	
		    }
		}
	else
	{
		if(number==1 && sessionStorage.getItem('ClickOnButton')==0)
		{
			CreateForm();
			sessionStorage.removeItem('form');
    		sessionStorage.setItem('form',1);
		}
		if(number==0)
		{
			CreateForm();
			sessionStorage.removeItem('form');
    		sessionStorage.setItem('form',1);
    		sessionStorage.removeItem('ClickOnButton');
    		sessionStorage.setItem('ClickOnButton',0);
		}
	}
}
//Exersise 5
let count=0;
function EventMouseOver() {
	let space = document.getElementById('pageSpace');
	document.getElementById("pageSpace").style.padding="0px 0px 0px 0px";
	document.getElementById("pageSpace").style.font="8pt/8pt sans-serif";
	space.onmouseover = handler;
}
function handler(event) {
  	let type = event.type;
  	if(count<54)
  	{
  		let value=document.getElementById('pageSpace');
  		value.innerHTML+=String(event.target.id)+"\n";
  		count++;
  	}
  	else
  	{
  		count=0;
  		let value=document.getElementById('pageSpace');
  		value.innerHTML=String(event.target.id)+"\n";
  	}
  	return false;
}
//Exersise 4
function CreateCheckBoxForm() {
	let div = document.createElement('div');
	div.innerHTML="<form name='FormWithRadio'>"
      +"Выберите нужные вам действия, отметив их галочками:<br>"
      +"Выравнивание текста в блоке 1 по правому краю: <input type='checkbox' name='next1'><br>"
      +"Выравнивание текста в блоке '2' по правому краю: <input type='checkbox' name='next2'><br>"
      +"<input type='submit' name='tree' value='OK'>"
    +"</form>";
    pageHeader.append(div);
}
function changeTextAlign() {
	let flag=CheckSessionStrage();
	if(flag)
	{
		let form=document.forms.FormWithRadio;
		let output=[];
		form.onsubmit = function(){
			if(sessionStorage.getItem('checkBox2')==null && sessionStorage.getItem('checkBox1')==null)
			{
				sessionStorage.setItem('checkBox1',0);
				sessionStorage.setItem('checkBox2',0);
			}
			if(form.elements.next1.checked)
			{
				document.getElementById("pageHeader").style.textAlign="right";
				sessionStorage.removeItem('checkBox1');
				sessionStorage.setItem('checkBox1',1);
			}
			if(form.elements.next2.checked)
			{	
				document.getElementById("pageA").style.textAlign="right";
				sessionStorage.removeItem('checkBox2');
				sessionStorage.setItem('checkBox2',1);
			}	
		}
	}
}
function CheckSessionStrage() {
	if(sessionStorage.getItem('checkBox1')!=null)
	{
		switch(sessionStorage.getItem('checkBox1'))
		{
			case '0': break;
			case '1': document.getElementById("pageHeader").style.textAlign="right"; break;
		}
	}
	else
	{
		CreateCheckBoxForm();
	}
	if(sessionStorage.getItem('checkBox2')!=null)
	{
		switch(sessionStorage.getItem('checkBox2'))
		{
			case '0': break;
			case '1': document.getElementById("pageA").style.textAlign="right"; break;
		}
		return false;
	}
	else
	{
		return true;
	}
}
//Exersise fifth
function CreateFormChange(str,to,number){
	let div = document.createElement('div');
	div.innerHTML="<form name='Form"+number+"'>"
      +"Измените содержимое блока: <br>"
      +"<input type='text' name='text1' value='"+str+"'>"
      +"<input type='submit' name='tree' value='OK'>"
    +"</form>";
    to.append(div);
}
function CreateButton(number,to){
	let div = document.createElement('div');
	div.innerHTML="<input id='button"+String(number)+"' type='button' value='Удалить изменения!'>";// onclick='OnClick("+to+")'>";
    to.append(div);
}
function ChangeAllBlocks()
{
	ChangeTheBlock('pageHeader',"0% 0% 0% 0%","0% 0% 0% 0%");
	ChangeTheBlock('pageA',"37% 0% 0% -5%","40% 0% 0% 0%");
	ChangeTheBlock('pageC',"40% 0% 0% 0%","45% 0% 0% 0%");
	ChangeTheBlock('pageB',"0% 0% 0% 0%","0% 0% 0% 0%");
	ChangeTheBlock('pageFooter',"0% 0% 0% 0%","0% 0% 0% 0%");
}
function ChangeTheBlock(to,MarginForm,MarginButton) {
	let value1=document.getElementById(to);
	if(sessionStorage.getItem(to)==null)
	{
		switch(to)
		{
			case 'pageHeader':CreateFormChange(String(value1.innerHTML),pageHeader,1);break;
			case 'pageA':CreateFormChange(String(value1.innerHTML),pageA,2);break;
			case 'pageC':CreateFormChange(String(value1.innerHTML),pageC,3);break;
			case 'pageB':CreateFormChange(String(value1.innerHTML),pageB,4);break;
			case 'pageFooter':CreateFormChange(String(value1.innerHTML),pageFooter,5);break;
		}
		let form;
		switch(to)
		{
			case 'pageHeader':form=document.forms.Form1; Form1.style.margin=MarginForm; Form1.style.textAlign='left';break;
			case 'pageA':form=document.forms.Form2; Form2.style.margin=MarginForm; Form2.style.textAlign='left';break;
			case 'pageC':form=document.forms.Form3; Form3.style.margin=MarginForm; Form3.style.textAlign='left';break;
			case 'pageB':form=document.forms.Form4; Form4.style.margin=MarginForm; Form4.style.textAlign='left';break;
			case 'pageFooter':form=document.forms.Form5; Form5.style.margin=MarginForm; Form5.style.textAlign='left';break;
		}
		form.onsubmit = function(){
			let code=form.elements.text1;
			value1.innerHTML=code.value;
			sessionStorage.setItem(to,value1.innerHTML);
			location.reload();
		}
	}
	else
	{
		if(sessionStorage.getItem(to)!='NULL')
		{	
			value1.innerHTML=sessionStorage.getItem(to);
			let numberOfButton;
			switch(to)
			{
				case 'pageHeader':CreateButton(1,pageHeader);numberOfButton=button1; button1.style.margin=MarginButton;break;
				case 'pageA':CreateButton(2,pageA);numberOfButton=button2; button2.style.margin=MarginButton;break;
				case 'pageC':CreateButton(3,pageC);numberOfButton=button3; button3.style.margin=MarginButton;break;
				case 'pageB':CreateButton(4,pageB);numberOfButton=button4; button4.style.margin=MarginButton;break;
				case 'pageFooter':CreateButton(5,pageFooter);numberOfButton=button5; button5.style.margin=MarginButton;break;
			}
			numberOfButton.onclick=function(){
				sessionStorage.removeItem(to);
				sessionStorage.setItem(to,'NULL');
				location.reload();
			}
		}
	}
}

//ExchangeTheText('firstText','secondText');//First exersise
//Ploscha(10,5)//Second exersise
//FormDelCookes();//third exersise
//OutPutDividers();
//changeTextAlign();//4th exersise
EventMouseOver();//Fifth exersise
ChangeAllBlocks();//Sixth exersise


//Another exaple for fifth exersise:
/*function ChangeAllBlocks()
{
	ChangeTheBlock1();
	ChangeTheBlock2();
	ChangeTheBlock3();
	ChangeTheBlock4();
	ChangeTheBlock5();
}
function ChangeTheBlock1() {
	let value1=document.getElementById('pageHeader');
	if(sessionStorage.getItem('pageHeader')==null)
	{
		CreateFormChange(String(value1.innerHTML),pageHeader,1);
		let form=document.forms.Form1;
		form.onsubmit = function(){
			let code=form.elements.text1;
			value1.innerHTML=code.value;
			sessionStorage.setItem('pageHeader',value1.innerHTML);
			location.reload();
		}
	}
	else
	{
		if(sessionStorage.getItem('pageHeader')!='NULL')
		{	
			value1.innerHTML=sessionStorage.getItem('pageHeader');
			CreateButton(1,pageHeader);
			button1.onclick=function(){
				sessionStorage.removeItem('pageHeader');
				sessionStorage.setItem('pageHeader','NULL');
				location.reload();
			}

		}
	}
}
function ChangeTheBlock2() {
	let value1=document.getElementById('pageA');
	if(sessionStorage.getItem('pageA')==null)
	{
		CreateFormChange(String(value1.innerHTML),pageA,2);
		let form=document.forms.Form2;
		Form2.style.margin="37% 0% 0% -5%";
		Form2.style.textAlign='left';
		form.onsubmit = function(){
			let code=form.elements.text1;
			value1.innerHTML=code.value;
			sessionStorage.setItem('pageA',value1.innerHTML);
			location.reload();
		}
	}
	else
	{
		if(sessionStorage.getItem('pageA')!='NULL')
		{	
			value1.innerHTML=sessionStorage.getItem('pageA');
			CreateButton(2,pageA);
			button2.style.padding="0%";
			button2.style.margin="40% 0% 0% 0%";
			button2.onclick=function(){
				sessionStorage.removeItem('pageA');
				sessionStorage.setItem('pageA','NULL');
				location.reload();
			}

		}
	}
}
function ChangeTheBlock3() {
	let value1=document.getElementById('pageC');
	if(sessionStorage.getItem('pageC')==null)
	{
		CreateFormChange(String(value1.innerHTML),pageC,3);
		let form=document.forms.Form3;
		Form3.style.padding="0%";
		Form3.style.margin="40% 0% 0% 0%";
		Form3.style.textAlign='left';
		form.onsubmit = function(){
			let code=form.elements.text1;
			value1.innerHTML=code.value;
			sessionStorage.setItem('pageC',value1.innerHTML);
			location.reload();
		}
	}
	else
	{
		if(sessionStorage.getItem('pageC')!='NULL')
		{	
			value1.innerHTML=sessionStorage.getItem('pageC');
			CreateButton(3,pageC);
			button3.style.padding="0%";
			button3.style.margin="45% 0% 0% 0%";
			button3.style.textAlign='left';
			button3.onclick=function(){
				sessionStorage.removeItem('pageC');
				sessionStorage.setItem('pageC','NULL');
				location.reload();
			}
		}
	}
}
function ChangeTheBlock4() {
	let value1=document.getElementById('pageB');
	if(sessionStorage.getItem('pageB')==null)
	{
		CreateFormChange(String(value1.innerHTML),pageB,4);
		let form=document.forms.Form4;
		form.onsubmit = function(){
			let code=form.elements.text1;
			value1.innerHTML=code.value;
			sessionStorage.setItem('pageB',value1.innerHTML);
			location.reload();
		}
	}
	else
	{
		if(sessionStorage.getItem('pageB')!='NULL')
		{	
			value1.innerHTML=sessionStorage.getItem('pageB');
			CreateButton(4,pageB);
			button4.onclick=function(){
				sessionStorage.removeItem('pageB');
				sessionStorage.setItem('pageB','NULL');
				location.reload();
			}

		}
	}
}
function ChangeTheBlock5() {
	let value1=document.getElementById('pageFooter');
	if(sessionStorage.getItem('pageFooter')==null)
	{
		CreateFormChange(String(value1.innerHTML),pageFooter,5);
		let form=document.forms.Form5;
		form.onsubmit = function(){
			let code=form.elements.text1;
			value1.innerHTML=code.value;
			sessionStorage.setItem('pageFooter',value1.innerHTML);
			location.reload();
		}
	}
	else
	{
		if(sessionStorage.getItem('pageFooter')!='NULL')
		{	
			value1.innerHTML=sessionStorage.getItem('pageFooter');
			CreateButton(5,pageFooter);
			button5.onclick=function(){
				sessionStorage.removeItem('pageFooter');
				sessionStorage.setItem('pageFooter','NULL');
				location.reload();
			}

		}
	}
}
Друга версія створення копки(за допомогою форми)
function CreateButton(to){
let div = document.createElement('div');
div.innerHTML="<br><form name='Button1'>"
+"<input type='submit' name='tree' value='Удалить изменения'><br>"
 +"</form>";
to.append(div);
}
*/