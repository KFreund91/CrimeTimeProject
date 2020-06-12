//make connection to flask app
const url = "/datarelationship";
//Fetch the JSON data and console log it
d3.json(url).then(function (crime) {
  console.log(crime)
  //group data by region
  let group = crime.reduce((r, a) => {
    //console.log("a", a);
    //console.log('r', r);
    r[a.region] = [...r[a.region] || [], a];
    return r;
  }, {});
  console.log("group", group)
  //console.log(group);
  //console.log(group.midwest[0].victim_offender_relationship);

  function init() {
    data = [{
      x: [group.midwest[0].victim_offender_relationship, group.midwest[1].victim_offender_relationship, group.midwest[2].victim_offender_relationship,
      group.midwest[3].victim_offender_relationship, group.midwest[4].victim_offender_relationship, group.midwest[5].victim_offender_relationship],
      y: [group.midwest[0].count, group.midwest[1].count, group.midwest[2].count, group.midwest[3].count, group.midwest[4].count, group.midwest[5].count],
      type: 'bar',
      marker: {
        color: '#0a0a0a',
        opacity: 0.7,
      }
    }];
    var layout = {
      title: {
        text: "Victim-Offender Relationships by Region"
      },
      xaxis: {
        title: "Victim-Offender Relationship"
      },
      yaxis: {
        title: "Number of Crimes Reported"
      }
      
    }

    Plotly.newPlot("plot", data, layout);
  };

  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);

  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");

    // Initialize x and y arrays
    var x = [];
    var y = [];

    if (dataset === 'dataset1') {
      x = [group.midwest[0].victim_offender_relationship, group.midwest[1].victim_offender_relationship, group.midwest[2].victim_offender_relationship,
      group.midwest[3].victim_offender_relationship, group.midwest[4].victim_offender_relationship, group.midwest[5].victim_offender_relationship];
      y = [group.midwest[0].count, group.midwest[1].count, group.midwest[2].count, group.midwest[3].count, group.midwest[4].count, group.midwest[5].count];
    }

    if (dataset === 'dataset2') {
      x = [group.northeast[0].victim_offender_relationship, group.northeast[1].victim_offender_relationship, group.northeast[2].victim_offender_relationship,
      group.northeast[3].victim_offender_relationship, group.northeast[4].victim_offender_relationship, group.northeast[5].victim_offender_relationship];
      y = [group.northeast[0].count, group.northeast[1].count, group.northeast[2].count, group.northeast[3].count, group.northeast[4].count, group.northeast[5].count];
    }

    if (dataset === 'dataset3') {
      x = [group.south[0].victim_offender_relationship, group.south[1].victim_offender_relationship, group.south[2].victim_offender_relationship,
      group.south[3].victim_offender_relationship, group.south[4].victim_offender_relationship, group.south[5].victim_offender_relationship];
      y = [group.south[0].count, group.south[1].count, group.south[2].count, group.south[3].count, group.south[4].count, group.south[5].count];
    }
    
    if (dataset === 'dataset4') {
      x = [group.west[0].victim_offender_relationship, group.west[1].victim_offender_relationship, group.west[2].victim_offender_relationship,
      group.west[3].victim_offender_relationship, group.west[4].victim_offender_relationship, group.west[5].victim_offender_relationship];
      y = [group.west[0].count, group.west[1].count, group.west[2].count, group.west[3].count, group.west[4].count, group.west[5].count];
    }

    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }

  init();


})











