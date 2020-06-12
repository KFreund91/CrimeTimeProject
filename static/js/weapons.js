//make connection to flask app
const url = "/weapons";
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
  //console.log(group.midwest[0].weapon_category);
  function init() {
    data = [{
      x: [group.midwest[0].weapon_category, group.midwest[1].weapon_category, group.midwest[2].weapon_category,
      group.midwest[3].weapon_category, group.midwest[4].weapon_category, group.midwest[5].weapon_category],
      y: [group.midwest[0].count, group.midwest[1].count, group.midwest[2].count, group.midwest[3].count, group.midwest[4].count, group.midwest[5].count],
      type: 'bar',
      marker: {
        color: '#0a0a0a',
        opacity: 0.7,
      }
    }];
    var layout = {
        title: {
          text: "Occurrence of Weapon Types"
        },
        xaxis: {
          title: "Weapon Types"
        },
        yaxis: {
          title: "Number of Crimes Reported"
        }
      }
    Plotly.newPlot("plot", data,layout);
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
      x = [group.midwest[0].weapon_category, group.midwest[1].weapon_category, group.midwest[2].weapon_category,
      group.midwest[3].weapon_category, group.midwest[4].weapon_category, group.midwest[5].weapon_category];
      y = [group.midwest[0].count, group.midwest[1].count, group.midwest[2].count, group.midwest[3].count, group.midwest[4].count, group.midwest[5].count];
    }
    if (dataset === 'dataset2') {
      x = [group.northeast[0].weapon_category, group.northeast[1].weapon_category, group.northeast[2].weapon_category,
      group.northeast[3].weapon_category, group.northeast[4].weapon_category, group.northeast[5].weapon_category];
      y = [group.northeast[0].count, group.northeast[1].count, group.northeast[2].count, group.northeast[3].count, group.northeast[4].count, group.northeast[5].count];
    }
    if (dataset === 'dataset3') {
      x = [group.south[0].weapon_category, group.south[1].weapon_category, group.south[2].weapon_category,
      group.south[3].weapon_category, group.south[4].weapon_category, group.south[5].weapon_category];
      y = [group.south[0].count, group.south[1].count, group.south[2].count, group.south[3].count, group.south[4].count, group.south[5].count];
    }
    if (dataset === 'dataset4') {
      x = [group.west[0].weapon_category, group.west[1].weapon_category, group.west[2].weapon_category,
      group.west[3].weapon_category, group.west[4].weapon_category, group.west[5].weapon_category];
      y = [group.west[0].count, group.west[1].count, group.west[2].count, group.west[3].count, group.west[4].count, group.west[5].count];
    }
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  init();
});