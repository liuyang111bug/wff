// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("转街 ");
	   }else if(Dianji==2){
		   		alert("喝抹茶味奶茶");
		   		
	   }else if(Dianji==3){
		   		alert("超市买你喜欢的小零食");
		   		
	   }else if(Dianji==4){
		   		alert("做你想做的事");
		   		
	  }else if(Dianji==5){
		   		alert("好不好");
	  }else if(Dianji==6){
		   		alert("好不好");
	  }else if(Dianji==7){
		   		alert("好不好");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("我去找你，等着吖");
	}
	

}