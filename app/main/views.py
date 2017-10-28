from flask import render_template, session, redirect, url_for, current_app, flash, request
from .. import db
from ..models import User, Organization
# from ..email import send_email
from . import main
from .forms import LoginForm, RegistrationForm
from datetime import datetime


@main.route('/', methods=['GET', 'POST'])
def index():
    # organizations = Organization.query.filter()
    # return render_template('test.html', orgos=organizations)

    """
        Renders the HTML page where users can register new accounts. If the RegistrationForm meets criteria, a new user is
        written into the database.

        :return: HTML page for registration.
        """
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(email=(form.email.data).lower(),
                    password=form.password.data,
                    first_name=form.first_name.data,
                    last_name=form.last_name.data)
        db.session.add(user)
        db.session.commit()
        flash('User successfully registered', category='success')
        # return redirect(url_for('auth.login'))
    return render_template('auth/register.html', form=form)


@main.route('/database', methods=['GET', 'POST'])
def database():
    cursor = User.query.all()

    # Prints all members in database
    # for item in cursor:
    #     print (item.id, item.first_name, item.last_name)

    return render_template('database.html', cursor=cursor, name=session.get('name'))
