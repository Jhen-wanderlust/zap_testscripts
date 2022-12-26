import time 
import xlwt
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


driver = webdriver.Chrome('C:/Users/Me/Downloads/chromedriver_win32/chromedriver.exe')
#chrome_options.set_headless()
driver.maximize_window()

 

def scraper(link,me):
 driver.get(link)
 time.sleep(2)
 workbook = xlwt.Workbook() # Creating a workbook
 sheet1 = workbook.add_sheet('URL') # Creating a sheet in workbook 
 for jhen in range(me):
  
  attribute = driver.execute_script('document.querySelectorAll(".mendiv ul li a");')



  print(attribute)

  

 
  time.sleep(2)
  sheet1.write(jhen,0,attribute)
  time.sleep(2)
  workbook.save('showwwppe.xls') 


def login():
 


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

 driver.get('http://192.168.2.47/online_test/web_standard_onedb/webapp/payroll/util_setgl_conversion.php')
 time.sleep(2)
 
 #driver.find_element_by_css_selector('#email').click()
 #driver.find_element_by_css_selector('#email').send_keys("")
 
 #driver.find_element_by_css_selector('#pass').click()
 #driver.find_element_by_css_selector('#pass').send_keys("")
 
 
 driver.find_element_by_class_name('_1RzplO').click()
 time.sleep(2)
 driver.find_element_by_css_selector('div.HhAy2u').click()
 time.sleep(2)
 scraper("http://192.168.2.47/online_test/web_standard_onedb/webapp/payroll/util_setgl_conversion.php",3)  # 32 because there are 28 images


login()
driver.close()
