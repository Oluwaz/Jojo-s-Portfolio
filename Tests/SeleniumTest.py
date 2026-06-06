import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By




driver = webdriver.Chrome()
driver.get("http://127.0.0.1:5500/index.html")

element = driver.find_element(By.ID, "myButton")





