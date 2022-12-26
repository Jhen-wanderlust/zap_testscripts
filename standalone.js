// Standalone script to demonstrate logging into ESS
// via the standard login form using chrome.
// You can change any of the variables to match your environment if needed.

var By = Java.type('org.openqa.selenium.By');
var Thread = Java.type('java.lang.Thread');
var URL = 'http://192.168.2.47/webprog_generic_login/onedb/ess/login.php';
var SystemParameters = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/trn_parameters.php';
var BaselineSecuritySetup = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/mf_baseline.php';
var UserActivityLog = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/view_useractivity_log.php';
var UserNotification = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/vw_user_notif.php';
var UploadTemplate = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/template_uploader.php';
var UpdateESSUserCode = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/template_uploader.php';
var EmployeeNotifyStatus = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/view_employee_status.php';
var SetPassword = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/trn_userpassword.php';
var SetSignature = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/trn_setsignature.php';
var DefaultUserAccess = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/trn_default_usr_access.php';
var UpdateStructure = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/view_update_struct.php';
var UserAccess = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/v_user_access.php';
var UserControl = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/v_usractive.php';
var Exportmenus = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/v_xpt_menus.php';
var TimeClockUserAccess = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/v_xpt_menus.php';
var Fixes = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/view_fixes.php';
var ApproverListReport = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/app_policy_report.php';
var UserActivityReport = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/view_actrep.php';
var UsersAccessReport = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/util_viewaccrep.php';
var News = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/news_mobile.php';
var MessageBoard = 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/msgboard_mobile.php';


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
wd.get(SystemParameters);
Thread.sleep(5000);
wd.get(BaselineSecuritySetup);
Thread.sleep(5000);
wd.get(UserActivityLog);
Thread.sleep(5000);
wd.get(UserNotification);
Thread.sleep(5000);
wd.get(UploadTemplate);
Thread.sleep(5000);
wd.get(UpdateESSUserCode);
Thread.sleep(5000);
wd.get(EmployeeNotifyStatus);
Thread.sleep(5000);
wd.get(SetPassword);
Thread.sleep(5000);
wd.get(SetSignature);
Thread.sleep(5000);
wd.get(DefaultUserAccess);
Thread.sleep(5000);
wd.get(UpdateStructure);
Thread.sleep(5000);
wd.get(UserAccess);
Thread.sleep(5000);
wd.get(UserControl);
Thread.sleep(5000);
wd.get(Exportmenus);
Thread.sleep(5000);
wd.get(TimeClockUserAccess);
Thread.sleep(5000);
wd.get(Fixes);
Thread.sleep(5000);
wd.get(ApproverListReport);
Thread.sleep(5000);
wd.get(UserActivityReport);
Thread.sleep(5000);
wd.get(UsersAccessReport);
Thread.sleep(5000);
wd.get(News);
Thread.sleep(5000);
wd.get(MessageBoard);
Thread.sleep(8000);

wd.quit();