function showdiv(targetid,objN,closeid){
   
      var target=document.getElementById(targetid);
      var clicktext=document.getElementById(objN);
      var closediv=document.getElementById(closeid);

            if (target.style.display=="block"){
                target.style.display="none";
                clicktext.innerText="快速联系";
  

            } else {
                target.style.display="block";
                clicktext.innerText='隐藏';
                clicktext.style.display="none";
                closediv.style.display="none";
            }
   
}

function emailCheck(){
	var email=document.getElementById("email");
	var reg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;	
       
	
	if(reg.test(email.value)==false||email.value=="")
        
          {
	   
            email.style.borderColor="red";
            email.value="请输入您的常用邮箱";
           
	    return false;
	}
        else
       { 
          email.style.borderColor="#778899";
}
	return true;
}
function nameCheck(){
	var name=document.getElementById("name");
		
       
	if(name.value==""){
	       name.style.borderColor="red";
         name.value="请输入您的姓名";
	    return false;
	}
	 else
       { 
          name.style.borderColor="#778899";
}
	return true;
}
function phoneCheck(){
	var phone=document.getElementById("phone");
	var reg=/1[3|5|7|8|][0-9]{9}/;	
        
	if(reg.test(phone.value)==false||phone.value==""){
	     phone.style.borderColor="red";
      phone.value="请输入您的电话号码";
	    return false;

	}
	 else
       { 
          phone.style.borderColor="#778899";
}
	return true;
}
function contentCheck(){
        var content=document.getElementById("problem-content");
        if(content.value==""){
	    content.style.borderColor="red";
       content.value="请输入您想要咨询的问题";
	    return false;
        }
	
	
	return true;
}
function checkAll(){
    if(!nameCheck())
      return false;
    if(!emailCheck())
      return false;
    if(!phoneCheck())
      return false;
    if(!contentCheck())
      return false;
    
    return true;
}