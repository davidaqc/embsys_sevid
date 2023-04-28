import cv2

# Inicializar la cámara
cap = cv2.VideoCapture(0)

# Revisar si la cámara está abierta correctamente
if not cap.isOpened():
    print("No se puede abrir la cámara")
    exit()

# Capturar una imagen
ret, frame = cap.read()

# Si la captura fue exitosa, guardar la imagen en un archivo
if ret:
    cv2.imwrite("resources/imagen.jpg", frame)
    print("Imagen guardada correctamente")
    
# Liberar los recursos utilizados por la cámara
cap.release()
