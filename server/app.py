import os
import uuid
import sqlite3

from flask import Flask, request, url_for, redirect
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)
current_dir = os.path.dirname(os.path.abspath(__file__))


@app.route('/members')
def index():
    members = {'members': ['Member1', 'Member2', 'Member3']}
    return members


@app.route('/register', methods=['POST'])
def register():
    connection = sqlite3.connect(current_dir + '\\rain.db')
    cur = connection.cursor()
    data = request.json
    # print(data)
    
    email = data['email']
    print('email: ' + str(email))
    
    # TODO email checks
    
    hash = generate_password_hash(data['password'])
    print('hash: ' + hash)
    # TODO push password through many checks to make sure it meets the requirements
    
    myuuid = uuid.uuid4()
    print('uuid: ' + str(myuuid))
    
    # Updating database information
    #cur.execute('INSERT INTO users (id, email, hash) VALUES(?, ?, ?)', (int(uuid), str(email), str(hash)))
    
    connection.commit()
    connection.close()
    return 'register'


def error_return(error):
    return ('An error has occured: ' + str(error))


if __name__ == '__main__':
    app.run(debug=True)