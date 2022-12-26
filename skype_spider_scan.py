import login
import os
from skpy import Skype
sk = Skype(login.username, login.password) # connect to Skype

#to view the active scan statuses
result = os.popen("curl http://localhost:8080/JSON/spider/view/status/?zapapiformat=JSON&formMethod=GET&scanID=").read()
print (result)

#for contact
#contact = sk.contacts['annpinkmajorenos']
#contact.chat.sendMsg('test')

#for group chat
chats = sk.chats
chats = sk.chats['19:cbec0e9712df455da1c69f23a1c97e27@thread.skype']
chats.sendMsg("Reviewing ZAP 🕸︎ Spider status scan: "+ result)




