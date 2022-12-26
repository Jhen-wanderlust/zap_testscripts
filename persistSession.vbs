Set WshShell = WScript.CreateObject("WScript.Shell")   
WshShell.AppActivate "OWASP ZAP - OWASP ZAP 2.11.1"
WScript.Sleep 500
WshShell.SendKeys "%f"
WScript.Sleep 500
WshShell.SendKeys "{DOWN}"
WScript.Sleep 500
WshShell.SendKeys "{DOWN}"
WScript.Sleep 500
WshShell.SendKeys "{ENTER}"
WScript.Sleep 500
Randomize
WshShell.SendKeys  "ZAP_02_22_session_"  & Int((999999 - 100000 + 1) * Rnd + 100000)
WScript.Sleep 500
WshShell.SendKeys "{ENTER}"






