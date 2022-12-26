Set WshShell = WScript.CreateObject("WScript.Shell")

url = "http://192.168.2.47/online_test/web_standard_onedb/webapp/payroll/mf_employmenttype.php"
spider = "http://localhost:8080/JSON/ajaxSpider/action/scan/?zapapiformat=JSON&url="
sumpay = "&inScope="
Const Quote = """"
WshShell.Run "cmd /K cd C:\Users\Me" 
WScript.Sleep 800
WshShell.SendKeys "curl "
WScript.Sleep 900
WshShell.SendKeys  Quote&spider&url&sumpay
WScript.Sleep 900
WshShell.SendKeys  Quote
WScript.Sleep 900
WshShell.SendKeys "{ENTER}"
WScript.Sleep 5000


