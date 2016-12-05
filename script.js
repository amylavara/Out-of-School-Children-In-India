var statecenter = [ 
    {
    "statecode": 01,
    "latitude": 33.7782,
    "longitude": -76.5762,
    "scale": 3000,
    },
    {
    "statecode": 02,
    "latitude": 31.1048,
    "longitude": -77.1734,
    "scale": 3000,
    },
    {
    "statecode": 03,
    "latitude": 31.1471,
    "longitude": -75.3412,
    "scale": 3000,
    },
    {
    "statecode": 04,
    "latitude": 30.7333,
    "longitude": -76.7794,
    "scale": 3000,
    },
    {
    "statecode": 05,
    "latitude": 30.0668,
    "longitude": -79.0193,
    "scale": 3000,
    },
    {
    "statecode": 06,
    "latitude": 29.0588,
    "longitude": -76.0856,
    "scale": 3000,
    },
    {
    "statecode": 07,
    "latitude": 28.7041,
    "longitude": -77.1025,
    "scale": 20000,
    },
    {
    "statecode": 08,
    "latitude": 27.0238,
    "longitude": -74.2179,
    "scale": 3000,
    },
    {
    "statecode": 09,
    "latitude": 26.8467,
    "longitude": -80.9462,
    "scale": 3000,
    },
    {
    "statecode": 10,
    "latitude": 25.0961,
    "longitude": -85.3131,
    "scale": 3000,
    },
    {
    "statecode": 11,
    "latitude": 27.5330,
    "longitude": -88.5122,
    "scale": 5000,
    },
    {
    "statecode": 12,
    "latitude": 28.2180,
    "longitude": -94.7278,
    "scale": 3000,
    },
    {
    "statecode": 13,
    "latitude": 26.1584,
    "longitude": -94.5624,
    "scale": 4000,
    },
    {
    "statecode": 14,
    "latitude": 24.6637,
    "longitude": -93.9063,
    "scale": 4000,
    },
    {
    "statecode": 15,
    "latitude": 23.1645,
    "longitude": -92.9376,
    "scale": 4000,
    },
    {
    "statecode": 16,
    "latitude": 23.9408,
    "longitude": -91.9882,
    "scale": 5000,
    },
    {
    "statecode": 17,
    "latitude": 25.4670,
    "longitude": -91.3662,
    "scale": 4000,
    },
    {
    "statecode": 18,
    "latitude": 26.2006,
    "longitude": -92.9376,
    "scale": 3000,
    },
    {
    "statecode": 19,
    "latitude": 22.9868,
    "longitude": -87.8550,
    "scale": 3000,
    },
    {
    "statecode": 20,
    "latitude": 23.6102,
    "longitude": -85.2799,
    "scale": 3000,
    },
    {
    "statecode": 21,
    "latitude": 20.9517,
    "longitude": -85.0985,
    "scale": 3000,
    },
    {
    "statecode": 22,
    "latitude": 21.2787,
    "longitude": -81.8661,
    "scale": 3000,
    },
    {
    "statecode": 23,
    "latitude": 22.9734,
    "longitude": -78.6569,
    "scale": 3000,
    },
    {
    "statecode": 24,
    "latitude": 22.2587,
    "longitude": -71.1924,
    "scale": 3000,
    },
    {
    "statecode": 25,
    "latitude": 20.4283,
    "longitude": -72.8397,
    "scale": 3000,
    },
    {
    "statecode": 26,
    "latitude": 20.1809,
    "longitude": -73.0169,
    "scale": 3000,
    },
    {
    "statecode": 27,
    "latitude": 19.7515,
    "longitude": -75.7139,
    "scale": 2500,
    },
    {
    "statecode": 28,
    "latitude": 15.9129,
    "longitude": -79.7400,
    "scale": 3000,
    },
    {
    "statecode": 29,
    "latitude": 15.3173,
    "longitude": -75.7139,
    "scale": 3000,
    },
    {
    "statecode": 30,
    "latitude": 15.2993,
    "longitude": -74.1240,
    "scale": 7000,
    },
    {
    "statecode": 31,
    "latitude": 10.0000,
    "longitude": -73.0000,
    "scale": 3000,
    },
    {
    "statecode": 32,
    "latitude": 10.8505,
    "longitude": -76.2711,
    "scale": 3000,
    },
    {
    "statecode": 33,
    "latitude": 11.1271,
    "longitude": -78.6569,
    "scale": 3000,
    },
    {
    "statecode": 34,
    "latitude": 11.9139,
    "longitude": -79.8145,
    "scale": 3000,
    },
    {
    "statecode": 35,
    "latitude": 11.7401,
    "longitude": -92.6586,
    "scale": 3000,
    }
];  

var state;
var width = 1100,
height = 550;
var formatNumber = d3.format(",d");
var projection = d3.geo.albers()
.center([0, 20.5937])   //center latitude of India
.rotate([-78.9629, 0])   //center longitude of India
.parallels([50, 60])
.scale(1000)
.translate([width / 2 - 300, height / 2 + 80 ]);

var path = d3.geo.path()
.projection(projection);

var color = d3.scale.threshold()
.domain([1, 3, 5, 10, 15, 20, 25])
.range([ "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"]);
    
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "#map");
    
// A position encoding for the key only.
var x = d3.scale.linear()
    .domain([0, 25])
    .range([0, 480]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickSize(13)
    .tickValues(color.domain())
    .tickFormat(function(d) { return d;});

    // Append Div for tooltip to SVG
var div = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

var g = svg.append("g")
    .attr("class", "key")
    .attr("transform", "translate(40,40)");
g.selectAll("rect")
    .data(color.range().map(function(d, i) {
                return {
x0: i ? x(color.domain()[i - 1]) : x.range()[0],
x1: i < color.domain().length ? x(color.domain()[i]) : x.range()[1],
z: d
};
}))
.enter().append("rect")
.attr("height", 8)
.attr("x", function(d) { return d.x0; })
.attr("width", function(d) { return d.x1 - d.x0; })
.style("fill", function(d) { return d.z; });
g.call(xAxis).append("text")
.attr("class", "caption")
.attr("y", -6)
.text("Out Of School Children in Millions");
    
function get_xyz(id) {
    var x=0;
    var y=0;
    var z=0;
    //console.log(id.id);
    statecenter.forEach(function(d) {
        //console.log(d.statecode+"|"+id.id+"|"+d.statecode == id.id);
        if(d.statecode == id.id){
            //console.log([d.latitude, d.longitude, d.scale]);
            x=d.latitude;
            y=d.longitude;
            z=d.scale;
        }
    });
    return [x, y, z];
}
    
function get_districtxyz(id) {
    var x=0;
    var y=0;
    var z=0;
    //console.log(id.properties.statecode);
    statecenter.forEach(function(d) {
        if(d.statecode == id.properties.statecode){
            //console.log([d.latitude, d.longitude, d.scale]);
            x=d.latitude;
            y=d.longitude;
            z=d.scale;
        }
    });
    return [x, y, z];
}

function rect_clicked(d) {
    
        var cur_districts = document.getElementsByClassName('#districts');

        // Now remove them
        var len = cur_districts.length;
        for (var i = 0; i < len; i++) {
            cur_districts[0].parentElement.removeChild(cur_districts[0]);
        }
        //console.log(document.getElementsByClassName('state-border'));
        for (var i = 0; i < document.getElementsByClassName('district-border').length; i++) {
           document.getElementsByClassName('district-border')[0].parentElement.removeChild(document.getElementsByClassName('district-border')[0]);
        }
        var sel_district = document.getElementsByClassName('seldist');

        // Now remove them
        var len = sel_district.length;
        for (var i = 0; i < len; i++) {
            sel_district[0].parentElement.removeChild(sel_district[0]);
        }
        
        create_bar({statecode:"00",districtcode:"000",name:"India"});
        d3.json("indiaST.json", function(error, ut) {
        if (error) throw error;
        var states = topojson.feature(ut, ut.objects.IND_STATE);

        // Group tracts by color for faster rendering.
        svg.append("g")
        .attr("class", "#states")
        .attr("clip-path", "url(#clip-land)")
        .selectAll("path")
        .datum(topojson.feature(ut, ut.objects.IND_STATE))
             .attr("class", "state-border")
             .attr("d", path);

        svg.append("g")
          .attr("class", "#states")
          .attr("clip-path", "url(#clip-land)")
        .selectAll("path")
        .data(topojson.feature(ut, ut.objects.IND_STATE).features)
        .enter().append("path")
          .style("fill", function(d) { return color(d.properties.outofschool * 0.000001); })
            .attr("d", path)
        .on("click", state_clicked)
        .on("mouseover", function(d) {
                        d3.select(this).attr("class", "highlight");
                        div.transition()
                            .duration(200)
                            .style("opacity", .9);
                        div.style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY - 28) + "px");
                        div.append("div").text(d.properties.statename);
                        div.append("div").text("Out of School Children: "+d.properties.outofschool);
                })
                // fade out tooltip on mouse out
                .on("mouseout", function(d) {
                    d3.select(this).classed("highlight", false);
                    div.selectAll("*").remove();
                    div.transition()
                        .duration(0)
                        .style("opacity", 0);
                });

        svg.append("path")
                .datum(topojson.mesh(ut, ut.objects.IND_STATE))
                .attr("class", "state-border")
                .attr("d", path);
            
    svg.append("text")
    .attr("class", "#states")
      .attr("x", 40)
      .attr("y", 80)
      .style("text-anchor", "middle")
      .text("Select a State to transition")
      .attr("style","font-weight: normal; font-size: 12px;");
    


    });
    
}

function district_clicked(d) {
    var sel_district = document.getElementsByClassName('seldist');

        // Now remove them
        var len = sel_district.length;
        for (var i = 0; i < len; i++) {
            sel_district[0].parentElement.removeChild(sel_district[0]);
        }
     var xyz = get_districtxyz(d);
            var districtprojection = d3.geo.albers()
                .center([0, xyz[0]])   //center latitude of India
                .rotate([xyz[1], 0])   //center longitude of India
                .parallels([50, 60])
                .scale(xyz[2])
                .translate([width / 2 - 200, height / 2 + 80 ]);

            var districtpath = d3.geo.path()
                .projection(districtprojection);
    var district_id = d.id;
    console.log(d);
    create_bar({statecode:d.properties.statecode,districtcode:d.id,name:d.properties.name});
    
    d3.json("indiaDST.json", function(error, districts) {
                svg.append("g")
                  .attr("class", "#district")
                  .attr("clip-path", "url(#clip-land)")
                .selectAll("path")
                .data(topojson.feature(districts, districts.objects.Dist).features.filter(function(d) { return d.id == district_id  ; }))
                .enter().append("path")
                  .attr("class", "seldist")
                    .attr("d", districtpath);
    
    });
}
    
function state_clicked(d) {
        //console.log(document.getElementsByClassName("#states"));
        var cur_states = document.getElementsByClassName('#states');

        // Now remove them
        var len = cur_states.length;
        for (var i = 0; i < len; i++) {
            cur_states[0].parentElement.removeChild(cur_states[0]);
        }
        //console.log(document.getElementsByClassName('state-border'));
        for (var i = 0; i < document.getElementsByClassName('state-border').length; i++) {
            document.getElementsByClassName('state-border')[0].parentElement.removeChild(document.getElementsByClassName('state-border')[0]);
     
        }
    
       
        if (d && state !== d) {
            var xyz = get_xyz(d);
            //console.log(xyz);
            state = d;
            var state_name = state.properties.statename;
            var stateprojection = d3.geo.albers()
                .center([0, xyz[0]])   //center latitude of India
                .rotate([xyz[1], 0])   //center longitude of India
                .parallels([50, 60])
                .scale(xyz[2])
                .translate([width / 2 - 200, height / 2 + 80 ]);

            var statepath = d3.geo.path()
                .projection(stateprojection);
            var state_id = state.id;
            //console.log("create_bar");
            create_bar({statecode:state.id,districtcode:"000",name:state.properties.statename});
            
            console.log(state);
            //console.log(state_name);
            d3.json("indiaDST.json", function(error, districts) {
                svg.append("g")
                  .attr("class", "#districts")
                  .attr("clip-path", "url(#clip-land)")
                .selectAll("path")
                .data(topojson.feature(districts, districts.objects.Dist).features.filter(function(d) { return d.properties.statecode == state_id  ; }))
                .enter().append("path")
                  .style("fill", function(d) { return color(d.properties.outofschool * 0.00001); })
                    .attr("d", statepath)
                .on("click", district_clicked)
                .on("mouseover", function(d) {
                                d3.select(this).attr("class", "highlight");
                                div.transition()
                                    .duration(200)
                                    .style("opacity", .9);
                                div.style("left", (d3.event.pageX) + "px")
                                    .style("top", (d3.event.pageY - 28) + "px");
                                div.append("div").text(d.properties.name);
                                div.append("div").text("Out of School Children: "+d.properties.outofschool);
                        })
                        // fade out tooltip on mouse out
                        .on("mouseout", function(d) {
                            d3.select(this).classed("highlight", false);
                            div.selectAll("*").remove();
                            div.transition()
                                .duration(0)
                                .style("opacity", 0);
                        });
                
                svg.append("path")
                .datum(topojson.mesh(districts, districts.objects.Dist, function(a, b){ return (a.properties.statecode== state_id || b.properties.statecode== state_id);}))
                .attr("class", "district-border")
                .attr("d", statepath);
                
                svg.append("text")
                .attr("class", "#districts")
                  .attr("x", 40)
                  .attr("y", 80)
                  .style("text-anchor", "middle")
                  .text("Select a District to transition")
                  .attr("style","font-weight: normal; font-size: 12px;");
            });
        }
        
    }



 svg.append("rect")
    .attr("class", "background")
    .attr("width", width-500)
    .attr("height", height)
    .style("opacity", 0)
    .on("click", rect_clicked);

rect_clicked();
    

    
function create_bar(a){
    //Margins give space around elements in the html
    
    for (var i = 0; i < document.getElementsByClassName('barchart').length; i++) {
            document.getElementsByClassName('barchart')[0].parentElement.removeChild(document.getElementsByClassName('barchart')[0]);
     
    }

var margin = {top: 10, right: 40, bottom: 150, left: 50},
    width = 420 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
    

// Define SVG. "g" means group SVG elements together.
// Confused about SVG still, see Chapter 3. 
// Add comments here in your own words to explain this segment of code (.25 point)

//SVG stands for Scalable Vector Graphics
//we add an SVG element to the body and provide the attribute values

/*var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", "translate(-1000,0)")*/
    svgn = svg.append("g")
    .attr("class", "barchart")
    .attr("transform", "translate(650,200)");

/* --------------------------------------------------------------------
SCALE and AXIS are two different methods of D3. See D3 API Refrence and 
look up SVG AXIS and SCALES. See D3 API Refrence to understand the 
difference between Ordinal vs Linear scale.
----------------------------------------------------------------------*/ 

// Define X and Y SCALE.
// Add comments in your own words to explain the code below (.25 point)

//scalling is used to resize the data to fit our SVG space
//we set the range bands to our spcefied SVG width and height
//linear scale is used to map continuous domain to  continuous range
//ordinal scale is used to map discrete domain to discrete range

var xScale = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.1);

var yScale = d3.scale.linear()
    .range([height, 0]);

// Define X and Y AXIS
// Define tick marks on the y-axis as shown on the output with an interval of 5 and $ sign(1 point)

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .tickSize(7,1)
    .ticks(15);
    
var yAxis = d3.svg.axis() 
    .scale(yScale)
    .orient("left")
    .ticks(3)
    .tickSize(7,1);

/* --------------------------------------------------------------------
To understand how to import data. See D3 API refrence on CSV. Understand
the difference between .csv, .tsv and .json files. To import a .tsv or
.json file use d3.tsv() or d3.json(), respectively.
----------------------------------------------------------------------*/ 



// data.csv contains the country name(key) and its GDP(value)
// 1 point for explaining the code for reading the data
console.log(a);
var csv;
//The csv file is read and value elements are typecasted to numbers
if(a.districtcode=="000"){
    csv = "statebar.csv";
}else{
    csv = "districtbar.csv";
}

d3.csv(csv,function(error, data1){
    var data=[];
    data1.forEach(function(d) {
        
        if(d.StateCode == a.statecode && d.DistrictCode == a.districtcode){
            
            data.push({
                key:   d.Age,
                value:  Math.round(+d.OutOfSchoolChildren/1000)/1000
            });
        }
    });
    //console.log(data1);
    //console.log(data);
    // Return X and Y SCALES (domain). See Chapter 7:Scales (Scott M.) 
    // .25 point for explaining the code below
    
    //As x scale is discrete, we map each d.key to the range of values of the domain
    //As y scale is continuous, we give the range from 0 to max d.value of the given data 
    
    xScale.domain(data.map(function(d){ 
        return d.key; 
    }));
    yScale.domain([0,d3.max(data, function(d) {return d.value; })]);
    
    // Creating rectangular bars to represent the data. 
    // Add comments to explain the code below (no points but there may be a quiz in future)
    
    //we append rectangle elements to the svg element to create our 
    //bar chart. we give the required attributes to each rectangle 
    //element using the input data and created scales.  
    
    svgn.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr("height", 0) 
        .attr("y", height)
        .attr({
            "x": function(d) { return xScale(d.key); },
            "y": function(d) { return yScale(d.value); },
            "width": xScale.rangeBand(),
            "height": function(d) { return  height - yScale(d.value); },
            // create increasing to decreasing shade of blue as shown on the output (2 points)
            "style": function(d,i) {
                return "fill: "+ color(d.value) ;
            },
        });
    
    // Label the data values(d.value) (3 points)
      svgn.selectAll("text")
         .data(data)
         .enter()
         .append("text")
         .text(function(d) {
             return d.value;
         })
         .attr("x", function(d, i) {
             //console.log(String(d.value).length);
             return (i * 21)+18;// + (String(d.value).length)/2*0.25 ;
         })
         .attr("y", function(d) {
             return yScale(d.value)+15;
         })
         .style("text-anchor", "middle")
         .attr("font-weight", "bold")
         .attr("font-family", "sans-serif")
         .attr("font-size", "6px")
         .attr("fill", "black");
    
    // Draw xAxis and position the label at -60 degrees as shown on the output (1 point)
    svgn.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .attr("dx", "-.0em")
        .attr("dy", ".5em")
        .style("text-anchor", "middle")
        .attr("font-size", "10px");
        
    
    // Draw yAxis and postion the label (2 points)
    var txt = "Million Children";
    svgn.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -((height/2)+(txt.length*2.5)))
      .attr("y", -40)
      .style("text-anchor", "end")
      .text(txt)
      .attr("style","font-weight: bold; font-size: 14px;");
    
    var nametxt;
    if(a.statecode != "00" && a.districtcode=="000"){
        nametxt = a.name + " State";
    }else if(a.districtcode!="000"){
        nametxt = a.name + " District";
    }else {
        nametxt = a.name;
    }
    
    svgn.append("text")
      .attr("x", width/2-(nametxt.length)*4)
      .attr("y", -25)
      .style("text-anchor", "middle")
      .text(nametxt)
      .attr("style","font-weight: bold; font-size: 14px;");
    
    svgn.append("text")
      .attr("x", 30)
      .attr("y", -10)
      .style("text-anchor", "middle")
      .text("Out of School Children Statistics per Age")
      .attr("style","font-weight: bold; font-size: 14px;");
      
});
}