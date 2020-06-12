//make connection to flask app
const url = "/datatime";
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

 
        var trace1 = {
            x: [group.midwest[0].year_, group.midwest[1].year_, group.midwest[2].year_,
            group.midwest[3].year_, group.midwest[4].year_, group.midwest[5].year_, group.midwest[6].year_, group.midwest[7].year_, group.midwest[8].year_, group.midwest[9].year_],
            y: [group.midwest[0].count, group.midwest[1].count, group.midwest[2].count, group.midwest[3].count, group.midwest[4].count, group.midwest[5].count,
            group.midwest[6].count, group.midwest[7].count, group.midwest[8].count, group.midwest[9].count],
            name:"Midwest Region",
            type: 'scatter'
        };
        var trace2 = {
            x: [group.northeast[0].year_, group.northeast[1].year_, group.northeast[2].year_, group.northeast[3].year_, group.northeast[4].year_,
            group.northeast[5].year_, group.northeast[6].year_, group.northeast[7].year_, group.northeast[8].year_, group.northeast[9].year_],
            y: [group.northeast[0].count, group.northeast[1].count, group.northeast[2].count, group.northeast[3].count, group.northeast[4].count, group.northeast[5].count,
            group.northeast[6].count, group.northeast[7].count, group.northeast[8].count, group.northeast[9].count],
            name: "Northeast Region",
            type: 'scatter'
        };
        var trace3 = {
            x: [group.south[0].year_, group.south[1].year_, group.south[2].year_, group.south[3].year_, group.south[4].year_, group.south[5].year_,
            group.south[6].year_, group.south[7].year_, group.south[8].year_, group.south[9].year_],
            y: [group.south[0].count, group.south[1].count, group.south[2].count, group.south[3].count, group.south[4].count, group.south[5].count,
            group.south[6].count, group.south[7].count, group.south[8].count, group.south[9].count],
            name:"South Region",
            type: 'scatter'
        };
        var trace4 = {
            x: [group.west[0].year_, group.west[1].year_, group.west[2].year_, group.west[3].year_, group.west[4].year_, group.west[5].year_,
            group.west[6].year_, group.west[7].year_, group.west[8].year_, group.west[9].year_],
            y: [group.west[0].count, group.west[1].count, group.west[2].count, group.west[3].count, group.west[4].count, group.west[5].count,
            group.west[6].count, group.west[7].count, group.west[8].count, group.west[9].count],
            name: "West Region",
            type: 'scatter'
        };
        var data = [trace1, trace2, trace3, trace4];
        var layout = {
            title:{
                text: "Changes in Crime Rates Over Time"
            },
            xaxis: {
              dtick: 1,
              title: "Year"
            },
            yaxis: {
                title:"Number of Crimes Reported"
            }
            
          };
        Plotly.newPlot("myDiv", data, layout);






})







