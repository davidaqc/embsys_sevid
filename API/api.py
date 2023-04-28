from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__, template_folder='/myapp')
CORS(app)

@app.route('/tomar_foto')
def api_tomar_foto():
    resultado = "Hola"
    return jsonify({'resultado': resultado})

if __name__ == '__main__':

    # Start the HTTPS server
    app.run(host='0.0.0.0', port=4443, ssl_context=('cert.pem', 'key.pem'))