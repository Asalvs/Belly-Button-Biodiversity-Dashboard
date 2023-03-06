// Get the endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

function init(){
    //Reference to dropdown
    let dropDownMenu = d3.select("#selDataset");
    //Get the list of sample names for dropdown options
    d3.json(url).then((data) => {
        let sampleNames=data.names;
        sampleNames.forEach((sample) => {
            dropDownMenu.append("option")
            .text(sample).property('value' , sample);

        });
    //initial plot using the first sample
    let firstSample = sampleNames[0];
    Chart(firstSample);
    MediaMetadata(firstSample);
  });
}
// Initialize the dashboard
init()

