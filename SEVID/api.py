import os

from flask import Flask, jsonify, send_file, request
from flask_cors import CORS
from flask_cors import cross_origin
from test_ocr import run_ocr
from captureImage import takeImage
from validation import validar_datos

app = Flask(__name__, template_folder='/myapp')
CORS(app)

@app.route('/tomar_foto')
def api_tomar_foto():
    print("API: Tomar Foto")

    photo_taken = takeImage()
    return jsonify({'Imagen': photo_taken})

@app.route('/visualizar_foto')
def api_visualizar_foto():
    print("API: Visualizar Foto")

    photo_path = 'resources/imagen.jpg'
    if os.path.exists(photo_path):
        return send_file(photo_path, mimetype='image/jpg')
    else:
        return jsonify({'error': 'La imagen no existe'})

@app.route('/generar_datos')
def api_generar_datos():
    print("API: Generar Datos")

    data = run_ocr()
    return jsonify({'Datos': data})

@app.route('/enviar_imagen', methods=['POST'])
@cross_origin()
def api_enviar_imagen() -> str:
    print("API: Enviar")
    
    # Revisar si el archivo fue enviado como parte de la solicitud
    if 'image' not in request.files:
        return jsonify({'error': 'No se envió ninguna imagen.'}), 400

    # Obtener el archivo de la solicitud
    imagen = request.files['image']

    # Revisar si el archivo tiene un nombre
    if imagen.filename == '':
        return jsonify({'error': 'No se envió ningún archivo.'}), 400

    # Crear el directorio para almacenar las imágenes si no existe
    if not os.path.exists('resources'):
        os.makedirs('resources')

    # Guardar la imagen en la carpeta "resources"
    imagen.save(os.path.join('resources', imagen.filename))

    # Retornar una respuesta satisfactoria
    return jsonify({'mensaje': 'Imagen guardada exitosamente.'}), 200

@app.route('/solicitar_datos')
def api_solicitar_datos():
    print("API: Solicitar Datos")

    data = validar_datos()
    return jsonify({'Datos': data})

if __name__ == '__main__':

    # Start the HTTPS server
    app.run(host='192.168.1.155', port=4443, ssl_context=('cert.pem', 'key.pem'))