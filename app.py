#import dependencies/libraries
from sqlalchemy import create_engine
import os
import pandas as pd
import json
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

app = Flask(__name__)

#Connect to local database
connection_string = "postgres:Ceilidh91!@localhost:5432/CrimeTime"
engine = create_engine(f'postgresql://{connection_string}')

#confirm data
#pd.read_sql_query('select * from FullCrimeTable', con=engine).head()

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

# create route that serves up data in json format
@app.route("/data")
def data():
    data = pd.read_sql("select * from FullCrimeTable;", con=engine).to_json(index=False,orient="table")
    crimedata = json.loads(data)
    
    return jsonify(crimedata['data'])

if __name__ == "__main__":
    app.run(debug=True)
