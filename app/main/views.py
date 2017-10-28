from flask import render_template, session, redirect, url_for, current_app
from .. import db
from ..models import User
# from ..email import send_email
from . import main
from .forms import Form
from datetime import datetime


@main.route('/', methods=['GET', 'POST'])
def index():
    # form = NameForm()
    # if form.validate_on_submit():
    #     user = User.query.filter_by(username=form.name.data).first()
    #     if user is None:
    #         user = User(username=form.name.data)
    #         db.session.add(user)
    #         session['known'] = False
    #         if current_app.config['FLASKY_ADMIN']:
    #             send_email(current_app.config['FLASKY_ADMIN'], 'New User',
    #                        'mail/new_user', user=user)
    #     else:
    #         session['known'] = True
    #     session['name'] = form.name.data
    #     return redirect(url_for('.index'))
    # return render_template('index.html',
    #                        form=form, name=session.get('name'),
    #                        known=session.get('known', False))

    form = Form()

    if form.validate_on_submit():
        first_name = form.first_name.data
        last_name = form.last_name.data
        email = form.email.data
        phone = form.phone.data
        address = form.address.data
        city = form.city.data
        state = form.state.data
        zipcode = form.zipcode.data
        library = form.library.data
        archives = form.archives.data
        genealogy = form.genealogy.data
        research_purpose = form.research_purpose.data
        affiliation = form.affiliation.data
        research_subject = form.research_subject.data
        collection = form.collection.data
        timedate = datetime.now()

        # Create a new user and add it to the database
        user = User(first_name=first_name, last_name=last_name)
        db.session.add(user)
        db.session.commit()

        return redirect(url_for('main.index'))

    return render_template('index.html', form=form, name=session.get('name'))


@main.route('/database', methods=['GET', 'POST'])
def database():
    cursor = User.query.all()

    # Prints all members in database
    # for item in cursor:
    #     print (item.id, item.first_name, item.last_name)

    return render_template('database.html', cursor=cursor, name=session.get('name'))
