// Standalone script to demonstrate logging into ESS
// via the standard login form using chrome.
// You can change any of the variables to match your environment if needed.

var By = Java.type('org.openqa.selenium.By');
var Thread = Java.type('java.lang.Thread');
var URL = 'http://192.168.2.47/online_test/pentest/onedb/webapp/login_view.php';
var arr = 'http://192.168.2.47/online_test/pentest/onedb/webapp/payroll/main.php';
var comcode = 'payjhen';
var username = 'admin';
var password = 'admin12345';


var extSel = org.parosproxy.paros.control.Control.getSingleton().
				getExtensionLoader().getExtension(
					org.zaproxy.zap.extension.selenium.ExtensionSelenium.class) 

var wd = extSel.getWebDriverProxyingViaZAP(1,"chrome");
wd.get(URL);
Thread.sleep(1000);
wd.get(URL);
wd.findElement(By.id("gl_comcde")).sendKeys(comcode);
wd.findElement(By.id("txtusrcde")).sendKeys(username);
wd.findElement(By.id("txtusrpwd")).sendKeys(password);
wd.findElement(By.xpath("//*[@id="myform"]/div/div[2]/div[2]/div[2]/input")).click();
Thread.sleep(1000);
wd.findElement(By.xpath("/html/body/div[6]/div[2]/div/div[4]/div[2]/button")).click();
Thread.sleep(5000);
wd.findElement(By.xpath("//*[@id="myform"]/div[1]/div/table/tbody/tr[1]/td/table/tbody/tr[3]/td/div/div[2]/div[1]")).click();
Thread.sleep(5000);
wd.get(arr);
Thread.sleep(5000);
