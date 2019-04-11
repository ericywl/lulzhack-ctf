from flask import Flask, render_template
application = Flask(__name__)


@application.route('/')
def welcome():
    return render_template('index.html')
    
@application.route('/signin')
def signin():
    return render_template('signin.html')
    
@application.errorhandler(404)
def page_not_found(err):
    return render_template('error.html'), 404


if __name__ == "__main__":
    application.run(host='127.0.0.1', port='8080')
