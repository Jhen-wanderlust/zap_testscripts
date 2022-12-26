Set WshShell = WScript.CreateObject("WScript.Shell")   
WshShell.AppActivate "OWASP ZAP - OWASP ZAP 2.11.1"
WScript.Sleep 500
WshShell.SendKeys "^n"
WScript.Sleep 500
WshShell.SendKeys "{ENTER}"
WScript.Sleep 500
