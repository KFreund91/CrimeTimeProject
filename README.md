# CrimeTimeProject

Our group was interested in examining information involving personal victimizations in the U.S. Over the course of two weeks, data was gathered, cleaned, and loaded in a SQL database. The data was then served using a flask app and a website was created using HTML and JavaScript.

Phase One: ETL

We gathered our data from the Bureau of Justice Statistics in csv format. The data was stored in two seperate files split by years. Data was cleaned using Python and Excel. Data was joined using a SQL union statement. Schema was built and data was loaded into Postgres as one cohesive unit.

Phase Two: Flask app

Our app.py file was built to serve up our data in JSON format so that it could be used in interactive visualizations. We initially wrote a path that rendered all of our data, but then wrote subsequent routes that filtered the data based on our desired visualizations.

Phase Three: Visualizations

We created three visualizations using JavaScript and Plotly. These visualizations included changes in crime rates over time, victim offender-relationships and weapons. All visualizations include an interative components either via a dropdown or legend.

Phase Four: Style Elements

The final look of our website was made possible through the use of Bootstrap elements. To keep consistent with the "crime tape" color scheme, containers were added in a black and yellow theme for a cohesive look.
