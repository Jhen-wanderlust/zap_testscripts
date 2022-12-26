' Read an Excel Spreadsheet
Set objExcel = CreateObject("Excel.Application")
Set objWorkbook = objExcel.Workbooks.Open _
    ("C:\Users\Me\Desktop\payrollURLS.xlsx")

intRow = 1

 Url_value = objExcel.Cells(intRow, 2).Value
 Wscript.Echo Url_value
objExcel.Quit