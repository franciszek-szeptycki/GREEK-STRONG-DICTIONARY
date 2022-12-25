from flask import Flask
from flask import jsonify
from flask import request
import json

import sqlite3
import os

current_directory = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__)


@app.route('/', methods=['GET'])
def init():
    return "haha"


if __name__ == '__main__':
    app.run(port=5000)
