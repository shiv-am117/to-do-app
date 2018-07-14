var j_new=document.getElementById('new');
var j_main=document.getElementById('main');
var j_err=document.getElementById('error');
var j_add_event=document.getElementById('add_event');
var j_container=document.getElementById('container');
var count=0;
var arr=[];
function addup(){
	var text=j_new.value;
	if(text!=""){
	j_err.innerHTML=""
    arr[count] = "<br><div id='tasks'> <input type='checkbox' id='box+count'>"+(count+1)+".  "+text+
    "</div>"
    j_main.innerHTML+=arr[count];
    j_new.value="";
    count++;
	}
	
}



function finishup(){
	if(count==0) {
		j_err.innerHTML =" Do something today!!"
	}
	else{
		j_add_event.style.color="white";
		
		j_add_event.style.height="60px";
		j_add_event.style.top="15%";
		j_add_event.innerHTML="<h1>Things to do today</h1>"

	}

}


	





