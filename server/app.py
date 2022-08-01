from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    # Object Example of members
    member = {'members': ['Member1', 'Member2', 'Member3']}
    return member


if __name__ == '__main__':
    app.run(debug=True)
