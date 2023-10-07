function displayHTML() {
  // Get user input
  var hi = document.getElementById("hi").value;
  var name = document.getElementById("name").value;
  var subtitle=document.getElementById("subtitle").value;

  // Create a template for the resume
  var resumeTemplate = `
  <h1 align="center">${hi},${name}</h1>
  <h3 align="center">${subtitle}</h3>
  
  `;

  // Display the generated resume
  document.getElementById("displaycode").innerHTML = resumeTemplate;
}