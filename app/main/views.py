from flask import render_template, session, redirect, url_for, current_app, flash, request, Flask, jsonify, json
from flask_login import login_required, login_user, logout_user, current_user
from .. import db
from ..models import User, Organization
# from ..email import send_email
from . import main
from .forms import LoginForm, RegistrationForm
from datetime import datetime


@main.route('/', methods=['GET', 'POST'])
def index():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(email=(form.email.data).lower(),
                    password=form.password.data,
                    first_name=form.first_name.data,
                    last_name=form.last_name.data)
        db.session.add(user)
        db.session.commit()
        flash('User successfully registered', category='success')
        return redirect(url_for('main.login'))
    return render_template('auth/register.html', form=form)


@main.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        user = User(email=request.form['email'],
                    password=request.form['password'],
                    first_name=request.form['first_name'],
                    last_name=request.form['last_name'])
        db.session.add(user)
        db.session.commit()
        return "success"
    return "failed to register"
    # return render_template('auth/register.html', form=form)


@main.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(email=request.form['email']).first()

        if user is not None and user.verify_password(request.form['password']):
            # Credentials successfully submitted
            # result = ['1', str(user.id)]
            # response = {'is_loggedin': True, 'user_id': user.id}
            # jsonstr = json.dumps(response)
            # return ','.join(result)
            return jsonify({'login': True, 'user_id': user.id})
    return jsonify({'login': False, 'user_id': None})


@main.route('/database', methods=['GET', 'POST'])
def database():
    cursor = User.query.all()

    # Prints all members in database
    # for item in cursor:
    #     print (item.id, item.first_name, item.last_name)

    return render_template('database.html', cursor=cursor, name=session.get('name'))
