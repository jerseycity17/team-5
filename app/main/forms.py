from flask_wtf import FlaskForm
# from wtforms import StringField, SubmitField
from wtforms.fields import (
    StringField,
    IntegerField,
    SelectField,
    SubmitField,
    DateTimeField,
    BooleanField,
)
from wtforms.validators import Required, DataRequired, Optional


class Form(FlaskForm):
    class Meta:
        def bind_field(self, form, unbound_field, options):
            """
            Strip field values of whitespace.
            http://stackoverflow.com/questions/26232165/automatically-strip-all-values-in-wtforms
            """
            filters = unbound_field.kwargs.get('filters', [])
            filters.append(_strip_filter)
            return unbound_field.bind(form=form, filters=filters, **options)


def _strip_filter(value):
    """
    Call strip() on given value if possible.
    :return: stripped or unaltered value
    """
    if value is not None and hasattr(value, 'strip'):
        return value.strip()
    return value


# class NameForm(FlaskForm):
#     name = StringField('What is your name?', validators=[Required()])
#     submit = SubmitField('Submit')


class Form(Form):
    # General Form
    first_name = StringField('First Name*', validators=[DataRequired()])
    last_name = StringField("Last Name*", validators=[DataRequired()])
    email = StringField("Email", validators=[Optional()])
    phone = IntegerField("Phone", validators=[Optional()])
    address = StringField("Address", validators=[Optional()])
    city = StringField("City", validators=[Optional()])
    state = SelectField(
        "State",
        choices=[
            ('New York', 'NY'),
            ('New Jersey', 'NJ'),
            ('Florida', 'FL')
        ], validators=[Optional()])
    zipcode = IntegerField("Zipcode", validators=[Optional()])
    # affiliation = SelectField(
    #     "Affiliation",
    #     choices=[
    #         ('1', '1'),
    #         ('2', '2'),
    #         ('3', '3')
    #     ], validators=[Optional()])
    library = BooleanField("Library", validators=[Optional()])
    archives = BooleanField("Archives", validators=[Optional()])
    genealogy = BooleanField("Genealogy", validators=[Optional()])

    # Library Form
    research_purpose = SelectField(
        "Research Purpose",
        choices=[
            ('', '\<Select a choice\>'),
            ('City Agency', 'City Agency'),
            ('Genealogy', 'Genealogy'),
            ('Academic', 'Academic'),
            ('Film/Media', 'Film/Media'),
            ('Publication Book/Article', 'Publication Book/Article'),
            ('Legal', 'Legal'),
            ('Other', 'Other')
        ], validators=[Optional()])
    affiliation = SelectField(
        "Affiliation",
        choices=[
            ('1', '1'),
            ('2', '2'),
            ('3', '3')
        ], validators=[Optional()])

    # Archives Form
    research_subject = SelectField(
        "Research Subject",
        choices=[
            ('Administration', 'Administration'),
            ('Birth/Marriage/Death', 'Birth/Marriage/Death'),
            ('Buildings/Property Records', 'Buildings/Property Records'),
            ('City Ordinances/Laws', 'City Ordinances/Laws'),
            ('Civil Rights', 'Civil Rights'),
            ('Courts/Criminal History', 'Courts/Criminal History'),
            ('Famous Persons', 'Famous Persons'),
            ('Ethnic Groups/Population Studies', 'Ethnic Groups/Population Studies'),
            ('International', 'International'),
            ('Health', 'Health'),
            ('Landmarks', 'Landmarks'),
            ('Mayoral Records', 'Mayoral Records'),
            ('Old Town/Pre-consolidation', 'Old Town/Pre-consolidation'),
            ('Transit/Transportation', 'Transit/Transportation'),
            ('Wartime History', 'Wartime History'),
            ('Welfare', 'Welfare'),
            ('WPA', 'WPA')
        ], validators=[Optional()])
    collection = SelectField(
        "Collection",
        choices=[
            ('1', '1'),
            ('2', '2'),
            ('3', '3')
        ], validators=[Optional()])

    submit = SubmitField()
