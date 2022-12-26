Set WshShell = WScript.CreateObject("WScript.Shell")
siteA ="https://app.testproject.io/"
WScript.Sleep 5000
WshShell.Run "cmd /K cd C:\Program Files (x86)\Google\Chrome\Application" 
WScript.Sleep 500
WshShell.SendKeys "chrome -incognito -url "&siteA
WScript.Sleep 500
WshShell.SendKeys "{ENTER}"
WScript.Sleep 40000 'Wait until page has loaded  
WshShell.SendKeys "jhenyangbutawan"
WScript.Sleep 500
WshShell.SendKeys "+2"
WScript.Sleep 500
WshShell.SendKeys "gmail.com"
WScript.Sleep 500
WshShell.SendKeys "{TAB}"
WScript.Sleep 5000
WshShell.SendKeys "jm554512345"
WScript.Sleep 5000
WshShell.SendKeys "{TAB 3}", True
WScript.Sleep 5000
WshShell.SendKeys "{ENTER}"
WScript.Sleep 5000




