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


@app.route("/VOrelationship")
def relationship_path():
    
    return render_template("relationships.html")

@app.route("/Time")
def time_path():
    
    return render_template("time.html")

@app.route("/weaponsgraph")
def weapon():
    return render_template("weapons.html")

# create route that serves up data in json format
@app.route("/data")
def data():
    data = pd.read_sql("select * from FullCrimeTable;", con=engine).to_json(index=False,orient="table")
    crimedata = json.loads(data)
    
    return jsonify(crimedata['data'])
    #return render_template("relationships.html")

# routes to narrow data
@app.route("/datarelationship")
def dataR():
    data = pd.read_sql("SELECT region, victim_offender_relationship, count(victim_offender_relationship) FROM FullCrimeTable GROUP BY region, victim_offender_relationship ORDER BY region, victim_offender_relationship;", con=engine).to_json(index=False,orient="table")
    Rdata = json.loads(data)
    
    return jsonify(Rdata['data'])

@app.route("/datatime")
def dataT():
    data = pd.read_sql("SELECT region, year_, count(year_) FROM FullCrimeTable GROUP BY region, year_ ORDER BY region, year_;", con=engine).to_json(index=False,orient="table")
    Tdata = json.loads(data)
    
    return jsonify(Tdata['data'])

@app.route("/weapons")
def weapons():
    data = pd.read_sql("SELECT region, weapon_category, count(weapon_category) FROM fullcrimetable GROUP BY region, weapon_category ORDER BY region, weapon_category", con=engine).to_json(index=False,orient="table")
    crimedata = json.loads(data)
    return jsonify(crimedata['data'])

if __name__ == "__main__":
    app.run(debug=True)


