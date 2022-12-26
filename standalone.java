// Standalone script to demonstrate logging into ESS
// via the standard login form using chrome.
// You can change any of the variables to match your environment if needed.

var By = Java.type('org.openqa.selenium.By');
var Thread = Java.type('java.lang.Thread');
var URL = 'http://192.168.2.47/webprog_generic_login/onedb/ess/login.php';
var arr = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/view_reqrep.php';
var comcode = 'ATESTWEBTKM';
var username = 'admin';
var password = 'admin12345';


var extSel = org.parosproxy.paros.control.Control.getSingleton().
				getExtensionLoader().getExtension(
					org.zaproxy.zap.extension.selenium.ExtensionSelenium.class) 

var wd = extSel.getWebDriverProxyingViaZAP(1,"chrome");
wd.get(URL);
Thread.sleep(1000);
wd.get(URL);
wd.findElement(By.id("dsply_gl_comcde")).sendKeys(comcode);
wd.findElement(By.id("txtusrcde")).sendKeys(username);
wd.findElement(By.id("txtusrpwd")).sendKeys(password);
wd.findElement(By.id("loginBtn")).click();
Thread.sleep(5000);
wd.get(arr);
Thread.sleep(5000);
