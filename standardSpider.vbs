Set WshShell = WScript.CreateObject("WScript.Shell")
Set objExcel = CreateObject("Excel.Application")
Set objWorkbook = objExcel.Workbooks.Open _
    ("C:\Users\Me\Desktop\payrollURLS.xlsx")

intRow = 1

 Url_value = objExcel.Cells(intRow, 2).Value
 Wscript.Echo Url_value

'url = "http://192.168.2.47/online_test/web_standard_onedb/webapp/payroll/mf_company.php"
spider = "http://localhost:8080/JSON/spider/action/scan/?zapapiformat=JSON&formMethod=GET&url="
sumpay = "&maxChildren=&recurse=contextName=&subtreeOnly="
Const Quote = """"
WshShell.Run "cmd /K cd C:\Users\Me" 
WScript.Sleep 800
WshShell.SendKeys "curl "
WScript.Sleep 900
WshShell.SendKeys  Quote&spider&Url_value&sumpay
WScript.Sleep 900
WshShell.SendKeys  Quote
WScript.Sleep 900
WshShell.SendKeys "{ENTER}"
WScript.Sleep 5000


objExcel.Quit