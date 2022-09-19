from datetime import datetime
from flask import Flask, jsonify, request, send_from_directory, redirect, url_for, flash, send_file
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import uuid
# from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
# from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app.config["DEBUG"] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'top secret key'
app.config['UPLOAD_FOLDER'] = 'static/files/'
ALLOWED_EXTENSIONS = {'mp3', 'mp4', 'wav', 'wma', 'aac', 'm4a'}
app.config['SQLALCHEMY_BINDS'] = {
  # 'users': 'sqlite:///users.db',
  'audio': 'sqlite:///audio.db'
}

db = SQLAlchemy(app)
ma = Marshmallow(app)

# login_manager = LoginManager()
# login_manager.init_app(app)
# login_manager.login_view = 'login'

# class User(db.Model, UserMixin):
#   __bind_key__ = 'users'
#   __tablename__ = 'User'

#   id = db.Column(db.Integer, primary_key=True)
#   email = db.Column(db.String, unique=True)
#   timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
#   password_hash = db.Column(db.String(128))

#   @property
#   def password(self):
#     raise AttributeError('password is not a readable attribute!')
  
#   @password.setter
#   def password(self, password):
#     self.password_hash = generate_password_hash(password)
  
#   def verify_password(self, password):
#     return check_password_hash(self.password_hash, password)

# class UserSchema(ma.SQLAlchemyAutoSchema):
#   class Meta:
#     model = User
#     load_instance = True

class Audio(db.Model):
  __bind_key__ = 'audio'
  __tablename__ = 'audio'

  id = db.Column(db.Integer, primary_key=True)
  timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
  filename = db.Column(db.String)
  latitude = db.Column(db.String)
  longitude = db.Column(db.String)
  type = db.Column(db.String)

class AudioSchema(ma.SQLAlchemyAutoSchema):
  class Meta:
    model = Audio
    load_instance = True

db.create_all(bind=['audio'])
# db.create_all(bind=['users'])

def allowed_file(filename):
  return '.' in filename and \
    filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# @app.route('/users', methods=['GET', 'POST'])
# def users():
#   if request.method == 'POST':
#     user = User.query.filter_by(email=request.json['email']).first()
#     if user:
#       return 'Email already taken'
#     else: 
#       email = request.json['email']
#       password_hash = request.json['password']
#       new_user = User(email=email, password=password_hash)
#       db.session.add(new_user)
#       db.session.commit()
#       return 'Success!'

#   if request.method == 'GET':
#     user_list = User.query.all()
#     user_schema = UserSchema(many=True)
#     output = user_schema.dump(user_list)
#     return jsonify({'users': output})

# @app.route('/login', methods=['GET', 'POST'])
# def login():
#   user = User.query.filter_by(email=request.json['email']).first()
#   if user:
#     if check_password_hash(user.password_hash, request.json['password']):
#       login_user(user)
#       return 'Login success!'
#     else:
#       return 'Wrong password - try again'
#   else:
#     return "User doesn't exist"

@app.route('/')
def home():
  return 'Hello World!'

@app.route('/audio', methods=['GET', 'POST'])
def audio():
  if request.method == 'POST':
    longitude = request.values['longitude']
    latitude = request.values['latitude']
    type = request.values['type']
    if 'file' not in request.files:
      flash('No file part')
      return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
      flash('No selected file')
      return redirect(request.url)
    if file and allowed_file(file.filename):
      filename = secure_filename(file.filename)
      filename_ext = filename[-4:]
      new_filename = str(uuid.uuid4()) + filename_ext
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], new_filename))
      new_audio = Audio(latitude=latitude, longitude=longitude, type=type, filename=new_filename)
      db.session.add(new_audio)
      db.session.commit()
      return 'Upload successful'
    return 'Error'

@app.route('/all', methods=['GET'])
def allaudio():
  audio_list = Audio.query.all()
  audio_schema = AudioSchema(many=True)
  output = audio_schema.dump(audio_list)
  return jsonify({'audio': output})

@app.route('/softrain', methods=['GET'])
def softrain():
  audio_list = Audio.query.filter_by(type = 'Soft rain')
  audio_schema = AudioSchema(many=True)
  output = audio_schema.dump(audio_list)
  return jsonify({'audio': output})

@app.route('/thunder', methods=['GET'])
def thunder():
  audio_list = Audio.query.filter_by(type = 'Thunder')
  audio_schema = AudioSchema(many=True)
  output = audio_schema.dump(audio_list)
  return jsonify({'audio': output})

@app.route('/hardrain', methods=['GET'])
def hardrain():
  audio_list = Audio.query.filter_by(type = 'Hard rain')
  audio_schema = AudioSchema(many=True)
  output = audio_schema.dump(audio_list)
  return jsonify({'audio': output})

@app.route('/hybrid', methods=['GET'])
def hybrid():
  audio_list = Audio.query.filter_by(type = 'Hybrid rain')
  audio_schema = AudioSchema(many=True)
  output = audio_schema.dump(audio_list)
  return jsonify({'audio': output})

@app.route('/audio/<path:filename>')
def play(filename):
  return send_from_directory(app.config['UPLOAD_FOLDER'], filename, conditional=True)

if __name__ == '__main__':
  app.run()