# from docx2pdf import convert


# convert("gs.docx").SaveAs("output.pdf").close()

import win32com
from win32com.client import Dispatch,constants

word = win32com.client.Dispatch('word.application')
word.displayalerts=0
word.visible=0
countdoc=word.Documents.Count
print(countdoc)
doc=word.Document.Open("gs.docx")
doc.SaveAs("gs.pdf")
