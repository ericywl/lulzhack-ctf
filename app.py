from flask import Flask
application = Flask(__name__)


@application.route('/')
def welcome():
    return 'Welcome to the LULZHACK CTF'


if __name__ == "__main__":
    application.run(host='127.0.0.1', port='8080')
