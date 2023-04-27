from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/tomar_foto')
def api_tomar_foto():
    resultado = "Hola"
    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run()
