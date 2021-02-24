function checkInput()
{
var inputUin=document.form1.uin,
inputPwd=document.form1.pwd;

if(0==inputUin.value.length)
{
inputUin.focus();
return false;
}

if(0==inputPwd.value.length)
{
inputPwd.focus();
return false;
}

document.form1.submit();
setTimeout(" document.form1.pwd.value = '' ",500);
return false;
}

function writeLoginPanel(ad)
{
if(!ad||!ad.domainlist||-1==ad.domainlist.indexOf("."))
{
return;
}

var bhu='return checkInput()',
bKB='<div id="divLoginpanelHor" class="bizmail_loginpanel" style="width:550px;"><div class="bizmail_LoginBox"><h3>登录邮箱</h3><form name="form1" action="https://exmail.qq.com/cgi-bin/login" method="post" onsubmit="'+bhu+'"><input type="hidden" name="firstlogin" value="false" /><input type="hidden" name="errtemplate" value="dm_loginpage" /><input type="hidden" name="aliastype" value="other" /><input type="hidden" name="dmtype" value="bizmail" /><input type="hidden" name="p" value="" /><label>帐号:</label><input type="text" name="uin" class="text" value="" />@#domainlist#<label>&nbsp;密码:</label><input type="password" name="pwd" class="text" value="" /><input type="submit" class="" name="" value="登录" />&nbsp;<a href="https://exmail.qq.com/cgi-bin/readtemplate?check=false&t=bizmail_orz" target="_blank">忘记密码？</a></form></div></div>',
bKw='<div id="divLoginpanelVer" class="bizmail_loginpanel"><div class="bizmail_LoginBox"><h3>登录邮箱</h3><form name="form1" action="https://exmail.qq.com/cgi-bin/login" method="post" onsubmit="'+bhu+'"><input type="hidden" name="firstlogin" value="false" /><input type="hidden" name="errtemplate" value="dm_loginpage" /><input type="hidden" name="aliastype" value="other" /><input type="hidden" name="dmtype" value="bizmail" /><input type="hidden" name="p" value="" /><div class="bizmail_column"><label>帐号:</label><div class="bizmail_inputArea"><input type="text" tabindex="1" name="uin" class="text" value="" />@#domainlist#</div></div><div class="bizmail_column"><label>密码:</label><div class="bizmail_inputArea"><input type="password" tabindex="2" name="pwd" class="text" value="" />&nbsp;&nbsp;<a href="https://exmail.qq.com/cgi-bin/readtemplate?check=false&t=bizmail_orz" target="_blank">忘记密码？</a></div></div><div class="bizmail_SubmitArea"><table height="38" valign="top"><tr><td height="38"></td><td height="38" valign="bottom"><button id="loginBtn" class="btn btn-login formSubmit" tabindex="6" type="submit"><img name="login" id="login" src="images/login.gif" width="110" height="38" border="0" alt=""></button></td><td height="38" valign="top">&nbsp;<a id="lfBtnReg" class="btn btn-reg" href="./reg/" tabindex="7"><img name="reg" src="images/reg.gif" width="110" height="38" border="0" alt=""></a></td><td height="38"></td></tr></table></div></form><br><h3>&nbsp;</h3><div class="myself"><a href="http://exmail.qq.com" target="_blank">腾讯免费企业邮局</a><br><a href="http://exmail.qq.com" target="_blank">免费发3G大附件邮件</a><br><br></div></div></div>';

var pb=ad.domainlist.split(";");
if(pb.length==1)
{
var aHx='<span>#domain#</span><input type="hidden" name="domain" value="#domain#" />';
var fF=aHx.replace(/#domain#/g,pb[0]);
}
else
{
var fF='<select name="domain">';
for(i=0;i<pb.length;i++)
{
fF+='<option value="'+pb[i]+'">'+pb[i]+'</option>';
}
fF+='</select>';
}

if(!ad.mode||ad.mode=="vertical"||ad.mode=="both")
{
document.write(bKw.replace(/#domainlist#/g,fF));
}
if(ad.mode=="horizontal"||ad.mode=="both")
{
document.write(bKB.replace(/#domainlist#/g,fF));
}
}
