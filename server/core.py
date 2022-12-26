from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory

import database

app = Flask(__name__, static_folder='web-greek/client-vite/build', static_url_path="")
CORS(app)


@app.route('/api/suggestions', methods=['GET'])
@cross_origin()
def index():
    value = request.args.get('value')

    data, count = database.suggestions(value)

    return jsonify(data=data, count=count[0])


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(port=5000)
