import os
import uuid
import sqlite3

from flask import Flask, request, url_for, redirect
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import *

app = Flask(__name__)
current_dir = os.path.dirname(os.path.abspath(__file__))


@app.route('/members')
def index():
    members = {'members': ['Member1', 'Member2', 'Member3']}
    return members


@app.route('/register', methods=['POST'])
def register():
    db = sqlite3.connect(current_dir + '\\rain.db')
    data = request.json
    
    row = db.execute('SELECT email FROM users WHERE email = ?', [data['email']])
    query = row.fetchone()
    
    if query is not None:
        return apology('email already in use')
    
    if not psw_can_be_processed(data['password']):
        return apology('password must include a number and be between 9 and 256 characers')
    hash = generate_password_hash(data['password'])
    
    myuuid = uuid.uuid4()
    
    # Updating database information
    db.execute('INSERT INTO users (uuid, email, hash) VALUES(?, ?, ?)', 
               (str(myuuid), str(data['email']), str(hash)))
    
    db.commit()
    db.close()
    return 'register'


@app.route('/login', methods=['POST'])
def login():
    print('in login')
    print(request.json)
    

if __name__ == '__main__':
    app.run(debug=True)