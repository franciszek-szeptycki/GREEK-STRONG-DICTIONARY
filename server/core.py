from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS

import database

app = Flask(__name__)
CORS(app)


@app.route('/api/suggestions', methods=['GET'])
def suggestions():
    value = request.args.get('value')

    data, count = database.suggestions(value)

    return jsonify(data=data, count=count[0])


if __name__ == '__main__':
    app.run(port=5000)
