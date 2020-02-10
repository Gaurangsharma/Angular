from docxtpl import DocxTemplate
from docx.shared import Inches

tpl=DocxTemplate('demo1.docx')

sd = tpl.new_subdoc()
sd.add_paragraph('A picture :')
sd.add_picture('img3.svg', width=Inches(1.25))

context = {
    'mysubdoc' : sd,
}

tpl.render(context)
tpl.save('demo3.docx')