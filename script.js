function displayHTML() {
  // Get user input
  var hi = document.getElementById("hi").value;
  var name = document.getElementById("name").value;
  var subtitle=document.getElementById("subtitle").value;
  //working
  var working=document.getElementById("working").value;
  var workingProjectname=document.getElementById("working.projectname").value;
  var workingProjeclink=document.getElementById("working.projectlink").value;
  //collaborate
  var collaborate=document.getElementById("collaborate").value;
  var collaborateProjectname=document.getElementById("collaborate.projectname").value;
  var collaborateProjeclink=document.getElementById("collaborate.projectlink").value;

  //looking
  var looking=document.getElementById("looking").value;
  var lookingProjectname=document.getElementById("looking.projectname").value;
  var lookingProjeclink=document.getElementById("looking.projectlink").value;

  //learning
  var learning=document.getElementById("learning").value;
  var learningPlaceholder=document.getElementById("learning.placeholder").value;

  //ask
var ask=document.getElementById("ask").value;
var askPlaceholder=document.getElementById("ask.placeholder").value;

//reach
var reach=document.getElementById("reach").value;
var reachPlaceholder=document.getElementById("reach.placeholder").value;

//projects
var projects=document.getElementById("projects").value;
var projectsPlaceholder=document.getElementById("projects.placeholder").value;

//articles
var articles=document.getElementById("articles").value;
var articlesPlaceholder=document.getElementById("articles.placeholder").value;

//resume
var resume=document.getElementById("resume").value;
var resumePlaceholder=document.getElementById("resume.placeholder").value;

//funfact
var funfact=document.getElementById("funfact").value;
var funfactPlaceholder=document.getElementById("funfact.placeholder").value;





  // Create a template for the resume
  var resumeTemplate = `
  <h1 align="center">${hi},${name}</h1>
  <h3 align="center">${subtitle}</h3>

-${working} [${workingProjectname}] (${workingProjeclink})
-${learning} **${learningPlaceholder}**
-${collaborate} [${collaborateProjectname}] (${collaborateProjeclink})
-${looking} [${lookingProjectname}] (${lookingProjeclink})
-${projects} [${projectsPlaceholder}] (${projectsPlaceholder})
-${articles} [${articlesPlaceholder}] (${articlesPlaceholder})
-${ask} **${askPlaceholder}**
-${reach} **${askPlaceholder}**
-${resume} [${resumePlaceholder}] (${resumePlaceholder})
-${funfact} **${funfactPlaceholder}**
`;




  // Display the generated resume
  document.getElementById("displaycode").innerHTML = resumeTemplate;
}