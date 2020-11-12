// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Step 1: Loop Through `data` and log each UFO report object
data.forEach(ufo => {
    console.log(ufo);
  
    // Step 2:  Use d3 to append one table row `tr` for each UFO report object
    var row = tbody.append("tr");
  
    // Step 3:  Use `Object.entries` to log each UFO report value
    Object.entries(ufo).forEach(([key, value]) => {
      console.log(key, value);
  
      // Step 4: Use d3 to append 1 cell per UFO report value 
      var cell = row.append("td");
  
      // Step 5: Use d3 to update each cell's text with
      // ufo report values
      cell.text(value);
    });
  });

  // Select the button
var button = d3.selectAll("#filter-btn");

button.on("click", function() {  
        
    // build a function, have it be called when clicking on the button
    
      var grabbedElement = d3.select(this).select("input");
    
      var inputValue = grabbedElement.property("value");
    
      var genericID = grabbedElement.attr("id");
    
      if (inputValue){
        filterDictionary[genericID] = inputValue;
      }
        
      else{
        delete filterDictionary[genericID]
      }
    
    });