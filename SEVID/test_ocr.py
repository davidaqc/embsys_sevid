from OCR import OCR
from PIL import Image

def run_ocr():
    ocr = OCR()

    try:
        imgIn = Image.open("resources/imagen.jpg")
    except IOError:
        print("Error: No se pudo abrir la imagen")
        return 'Error'
    
    imgOut,text = ocr.recognizeText(imgIn)
    ocr.save_text(text,"text-out/text-out.txt")
    lista =ocr.save_text_list(text)
    print(lista)
    #imgOut.show()
    imgOut.save("img-out/out.jpg")

    return lista
