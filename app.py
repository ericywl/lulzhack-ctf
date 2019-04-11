from flask import Flask, render_template
application = Flask(__name__)


@application.route('/')
def welcome():
    return render_template('index.html')


if __name__ == "__main__":
    application.run(host='127.0.0.1', port='8080')
