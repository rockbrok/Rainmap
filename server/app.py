
import os
from flask import Flask, render_template, request, url_for, redirect, request
import sqlite3
from werkzeug.security import check_password_hash, generate_password_hash
from dotenv import load_dotenv

app = Flask(__name__)
current_dir = os.path.dirname(os.path.abspath(__file__))


@app.route('/members')
def index():
    members = {'members': ['Member1', 'Member2', 'Member3']}
    return members


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        cur = connection.cursor()
        connection = sqlite3.connect(current_dir + '\\rain.db')
        
        # TODO get name from form.get
        #name = "bob"
        # TODO name checks
        
        # TODO make password hash take data from form.get
        hash = generate_password_hash('password')
        # TODO push password through many checks to make sure it meets the requirements
        
        # TODO ID randomizer of length 19
        id = 8491037834009735514
        if len(str(id)) != 19:
            return error_return('irregular id length')
        
        # Updating database information
        #cur.execute('INSERT INTO users (id, username, hash) VALUES(?, ?, ?)', (int(id), str(name), hash))
        
        connection.commit()
        connection.close()
        return 'register'
    else:
        return 'register'


def error_return(error):
    return ('An error has occured: ' + str(error))


if __name__ == '__main__':
    app.run(debug=True)
