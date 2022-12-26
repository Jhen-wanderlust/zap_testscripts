from optparse import Option
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.proxy import *
from selenium.webdriver.chrome.service import Service
 # firing up a proxy server
proxy_url = "localhost:8080"
proxy = Proxy({
    'proxyType': ProxyType.MANUAL,
    'httpProxy': proxy_url,
    'sslProxy': proxy_url,
    'noProxy': ''})

capabilities = webdriver.DesiredCapabilities.CHROME.copy()
proxy.add_to_capabilities(capabilities)

 # Configure chrome options

chrome_options = Options()
chrome_options.add_argument("--ignore-certificate-errors")
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--allow-running-insecure-content')
chrome_options.add_argument('--disable-web-security')
chrome_options.add_argument('--ignore-ssl-errors=yes')
chrome_options.add_argument('--allow-insecure-localhost')
chrome_options.add_argument('--ignore-untrusted-certificate')
#chrome_options.add_argument('--user-data-dir=c:/temp-chrome')
#--user-data-dir=c:\temp-chrome
#chrome_options.add_experimental_option("debuggerAddress", "localhost:9222")



driver = webdriver.Chrome('C:/Users/Me/Downloads/chromedriver_win32/chromedriver.exe',desired_capabilities=capabilities,options=chrome_options)
#chrome_options.set_headless()
driver.maximize_window()

# 1.navigating to the URL and performing the reqiured steps
driver.get("http://192.168.2.47/webprog_generic_login/acc_onedb/webapp/login.php")

# 2. Pause for '10000'ms
time.sleep(10)
# 3. Type 'acc1db_auto1' in 'dsply_gl_comcde'
dsply_gl_comcde = driver.find_element(By.CSS_SELECTOR, "#dsply_gl_comcde")
dsply_gl_comcde.send_keys("acc1db_auto1")
time.sleep(4)
# 4. Type 'admin' in 'txtusrcde1'
txtusrcde1 = driver.find_element(By.CSS_SELECTOR,"#txtusrcde")
txtusrcde1.send_keys("admin")
time.sleep(4)
# 5. Type 'admin12345' in 'txtusrpwd1'
txtusrpwd1 = driver.find_element(By.CSS_SELECTOR,"#txtusrpwd")
txtusrpwd1.send_keys("admin12345")
time.sleep(4)
# 6. Click 'INPUT'
input = driver.find_element(By.XPATH,"//div[2]/div/input")
input.click()
time.sleep(10)
# 7. Click 'applist_gradient'
applist_gradient = driver.find_element(By.XPATH, "//div/div[2]/div[1]")
applist_gradient.click()
time.sleep(40)


#driver.execute("")


# quitting the driver
driver.quit()







