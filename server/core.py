from flask import Flask
from flask import jsonify
from flask import request

import database

app = Flask(__name__, static_folder='web-greek', static_url_path="/client-vite/test")

@app.route('/api/suggestions', methods=['GET'])
def index():
    value = request.args.get('value')

    data, count = database.suggestions(value)

    return jsonify(data=data, count=count[0])


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
