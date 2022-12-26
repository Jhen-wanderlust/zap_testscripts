import os
result = os.popen("curl http://localhost:8080/JSON/ascan/view/status/?zapapiformat=JSON&formMethod=GET&scanID=").read()
print (result)