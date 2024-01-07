const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
let skillsection=``;
function getCheckedImages() {
  var checkboxes = document.querySelectorAll('.checkbox');
  var checkedImages = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      var image = checkbox.parentNode.querySelector('img');
      if (image) {
        checkedImages.push(image.outerHTML);
      }
    }
  });
  if (checkedImages.length > 0) {
    skillsection = `Languages and Tools : ${checkedImages.join('   ')}`;
  } else {
    skillsection = ''; // Reset skillsection if checkedImages is empty
  }}

function displayHTML() {
  // Get user input
  var hi = document.getElementById("hi").value;
  var name = document.getElementById("name").value;
  var namesection = '';
  if (name.trim() !== "") {
    namesection = `<h1 align="center">${hi},${name}</h1>`;
  }
  var subtitle=document.getElementById("subtitle").value;

  //working
  var working = document.getElementById("working").value;
  var workingProjectname = document.getElementById("workingprojectname").value;
  var workingProjeclink = document.getElementById("workingprojectlink").value;
  var workingProjectSection = '';
  if (workingProjectname.trim() !== "") {
    workingProjectSection = `-${working} [${workingProjectname}] (${workingProjeclink})`;
  }
  //collaborate
  var collaborate=document.getElementById("collaborate").value;
  var collaborateProjectname=document.getElementById("collaborateprojectname").value;
  var collaborateProjeclink=document.getElementById("collaborateprojectlink").value;
  var collabProjectSection = '';
  if (collaborateProjectname.trim() !== "") {
    collabProjectSection = `-${collaborate} [${collaborateProjectname}] (${collaborateProjeclink})`;
  }

  //looking
  var looking=document.getElementById("looking").value;
  var lookingProjectname=document.getElementById("lookingprojectname").value;
  var lookingProjeclink=document.getElementById("lookingprojectlink").value;
  var lookingsection=``;
  if(lookingProjectname.trim() !== ""){
    lookingsection=`  -${looking} [${lookingProjectname}] (${lookingProjeclink})`;
  }
  //learning
  var learning=document.getElementById("learning").value;
  var learningPlaceholder=document.getElementById("learningplaceholder").value;
  var learningsection=``;
  if(learningPlaceholder.trim()!==""){
    learningsection=`-${learning} **${learningPlaceholder}**`;
  }
  //ask
var ask=document.getElementById("ask").value;
var askPlaceholder=document.getElementById("askplaceholder").value;
var asksection=``;
if(askPlaceholder.trim()!==""){
  asksection=`-${ask} **${askPlaceholder}**`;
}

//reach
var reach=document.getElementById("reach").value;
var reachPlaceholder=document.getElementById("reachplaceholder").value;
var reachsection=``;
if(reachPlaceholder.trim()!==""){
  reachsection=`-${reach} **${askPlaceholder}**  `;
}
//projects
var projects=document.getElementById("projects").value;
var projectsPlaceholder=document.getElementById("projectsplaceholder").value;
var projectsection=``;
if(projectsPlaceholder.trim()!==""){
  projectsection=`-${projects} [${projectsPlaceholder}] (${projectsPlaceholder})  `;
}
//articles
var articles=document.getElementById("articles").value;
var articlesPlaceholder=document.getElementById("articlesplaceholder").value;
var articlesection=``;
if(articlesPlaceholder.trim()!==""){
  articlesection=`-${articles} [${articlesPlaceholder}] (${articlesPlaceholder})  `;
}
//resume
var resume=document.getElementById("resume").value;
var resumePlaceholder=document.getElementById("resumeplaceholder").value;
var resumesection=``;
if(resumePlaceholder.trim()!==""){
  resumesection=`-${resume} [${resumePlaceholder}] (${resumePlaceholder})  `;
}
//funfact
var funfact=document.getElementById("funfact").value;
var funfactPlaceholder=document.getElementById("funfactplaceholder").value;
var funfactsection=``;
if(funfactPlaceholder.trim()!==""){
  funfactsection=`-${funfact} **${funfactPlaceholder}**  `;
}
//social
var socialsection=``;
var github=document.getElementById("github").value;
if(github.trim()!==""){
  socialsection+=`<a href="https://github.com/${github}" target="blank"><img src="https://i.ibb.co/X5ghZZc/sm1.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var dev=document.getElementById("dev").value;
if(dev.trim()!==""){
  socialsection+=`<a href="https://dev.to/${dev}" target="blank"><img src="https://i.ibb.co/fnr7bjB/sm2.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var codesandbox=document.getElementById("codesandbox").value;
if(codesandbox.trim()!==""){
  socialsection+=`<a href="https://codesandbox.com/${codesandbox}" target="blank"><img src="https://i.ibb.co/yQpvqQZ/sm3.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var linkedin=document.getElementById("linkedin").value;
if(linkedin.trim()!==""){
  socialsection+=`<a href="https://linkedin.com/in/${linkedin}" target="blank"><img src="https://i.ibb.co/9WqpsXK/sm4.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var facebook=document.getElementById("facebook").value;
if(facebook.trim()!==""){
  socialsection+=`<a href="https://fb.com/${facebook}" target="blank"><img src="https://i.ibb.co/nwzq623/sm5.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var dribble=document.getElementById("dribble").value;
if(dribble.trim()!==""){
  socialsection+=`<a  href="https://dribbble.com/${dribble}" target="blank"><img src="https://i.ibb.co/HPH9WF9/sm6.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var hashnode=document.getElementById("hashnode").value;
if(hashnode.trim()!==""){
  socialsection+=`<a href="https://hashnode.com/${hashnode}" target="blank"><img src="https://i.ibb.co/j3W9FPy/sm7.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var youtube=document.getElementById("youtube").value;
if(youtube.trim()!==""){
  socialsection+=`<a href="https://www.youtube.com/c/${youtube}" target="blank"><img src="https://i.ibb.co/jg8Ch0m/sm8.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var hackerearth=document.getElementById("hackerearth").value;
if(hackerearth.trim()!==""){
  socialsection+=`<a href="https://www.hackerearth.com/${hackerearth}" target="blank"><img src="https://i.ibb.co/hs2RGsY/sm11.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var leetcode=document.getElementById("leetcode").value;
if(leetcode.trim()!==""){
  socialsection+=`<a href="https://www.leetcode.com/${leetcode}" target="blank"><img src="https://i.ibb.co/NKWXYfx/sm10.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var hackerrank=document.getElementById("hackerrank").value;
if(hackerrank.trim()!==""){
  socialsection+=`<a href="https://www.hackerrank.com/${hackerrank}" target="blank"> <img src="https://i.ibb.co/n8tg23x/sm9.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var discord=document.getElementById("discord").value;
if(discord.trim()!==""){
  socialsection+=`<a href="https://discord.gg/${discord}" target="blank"><img src="https://i.ibb.co/tHbHCsG/sm12.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var twitter=document.getElementById("twitter").value;
if(twitter.trim()!==""){
  socialsection+=`<a  href="https://twitter.com/${twitter}" target="blank"><img src="https://i.ibb.co/YZ1WV2d/sm13.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var codepen=document.getElementById("codepen").value;
if(codepen.trim()!==""){
  socialsection+=`<a href="https://codepen.io/${codepen}" target="blank"><img src="https://i.ibb.co/KG46YzC/sm14.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var stackoverflow=document.getElementById("stackoverflow").value;
if(stackoverflow.trim()!==""){
  socialsection+=`<a href="https://stackoverflow.com/users/${stackoverflow}" target="blank"><img src="https://i.ibb.co/0jssxtD/sm15.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var kaggle=document.getElementById("kaggle").value;
if(kaggle.trim()!==""){
  socialsection+=`<a href="https://kaggle.com/${kaggle}" target="blank"><img src="https://i.ibb.co/xsWQ9Yh/sm16.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var instagram=document.getElementById("instagram").value;
if(instagram.trim()!==""){
  socialsection+=`<a href="https://instagram.com/${instagram}" target="blank"><img src="https://i.ibb.co/k8rvk3x/sm17.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var behance=document.getElementById("behance").value;
if(behance.trim()!==""){
  socialsection+=`<a href="https://www.behance.net/${behance}" target="blank"><img src="https://i.ibb.co/wcTPp25/sm18.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var medium=document.getElementById("medium").value;
if(medium.trim()!==""){
  socialsection+=`<a href="https://medium.com/${medium}" target="blank"><img src="https://i.ibb.co/jMwbVZx/sm19.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var codechef=document.getElementById("codechef").value;
if(codechef.trim()!==""){
  socialsection+=`<a  href="https://www.codechef.com/users/${codechef}" target="blank"><img src="https://i.ibb.co/HgkJM8r/sm20.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var codeforces=document.getElementById("codeforces").value;
if(codeforces.trim()!==""){
  socialsection+=`<a href="https://codeforces.com/profile/${codeforces}" target="blank"><img src="https://i.ibb.co/Np13Kj2/sm21.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var topcoder=document.getElementById("topcoder").value;
if(topcoder.trim()!==""){
  socialsection+=`<a href="https://www.topcoder.com/members/${topcoder}" target="blank"><img src="https://i.ibb.co/4ZK0bjN/sm22.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var GFG=document.getElementById("GFG").value;
if(GFG.trim()!==""){
  socialsection+=`<a href="https://auth.geeksforgeeks.org/user/${GFG}" target="blank"><img src="https://i.ibb.co/kDkg95M/sm23.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}
var RSS=document.getElementById("RSS").value;
if(RSS.trim()!==""){
  socialsection+=`<a href="/${RSS}" target="blank"><img src="https://i.ibb.co/Hzvj1Zp/sm24.png" fill="currentColor" class="social" viewBox="0 0 0 0" style="border-radius: 50%; height: 3em; width: 3em;"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;
}

//skills
getCheckedImages(); 

var addonsection=``;
var badge=`<br> ![Profile views](https://komarev.com/ghpvc/?username=${username}&label=Profile%20views&color=0e75b6&style=flat) <br>`;
var trophy=`<br> [![trophy](https://github-profile-trophy.vercel.app/?username=${username})](https://github.com/ryo-ma/github-profile-trophy) <br>`;
var statscard=`<br>![Your GitHub stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true)<br>`;
var topskills=`<br>![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact)<br>`;
var streak=`<br>[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${username})](https://git.io/streak-stats)<br>`;
var twitterbadge=`<br>[![Twitter Follow](https://img.shields.io/twitter/follow/${twitter}?style=social)](https://twitter.com/${twitter})<br>`;
var devblogs=`<br>![Latest Dev.to Blog](https://img.shields.io/endpoint?url=https://devto.latest-story-badge.vercel.app/api?username=${dev}&rss_url=${RSS})<br>`;
var mediumblogs=`<br>![Latest Medium Blog](https://img.shields.io/endpoint?url=https://medium.latest-story-badge.vercel.app/api?username=${medium}&rss_url=${RSS})<br>`;
var personalblogs=`<br>![Latest Blog](https://img.shields.io/endpoint?url=https://yourblog.latest-story-badge.vercel.app/api?rss_url=https://${RSS}/rss)<br>`;
var a = document.querySelector('.badge');
if (a.checked) {
  addonsection +=badge+'\n';
}
var b = document.querySelector('.trophy');
if (b.checked) {
  addonsection +=trophy+'\n';
}
var c = document.querySelector('.statscard');
if (c.checked) {
  addonsection +=statscard+'\n';
}
var d = document.querySelector('.topskills');
if (d.checked) {
  addonsection +=topskills+'\n';
}
var e = document.querySelector('.streak');
if (e.checked) {
  addonsection +=streak+'\n';
}
var f = document.querySelector('.twitterbadge');
if (f.checked) {
  addonsection +=twitterbadge+'\n';
}
var g = document.querySelector('.devblogs');
if (g.checked) {
  addonsection +=devblogs+'\n';
}
var h = document.querySelector('.mediumblogs');
if (h.checked) {
  addonsection +=mediumblogs+'\n';
}
var i = document.querySelector('.personalblogs');
if (i.checked) {
  addonsection +=personalblogs+'\n';
}

var connect=``;
if(socialsection.trim()!==""){
  connect+=`<h3 align="left">Connect with me:</h3>`;
}
// Create a template for the resume
  var resumeTemplate = `
  ${namesection}
  <h3 align="center">${subtitle}</h3>
  ${workingProjectSection}
  ${learningsection}
  ${collabProjectSection}
  ${lookingsection}
  ${projectsection}
  ${articlesection}
  ${asksection}
  ${reachsection}
  ${resumesection}
  ${funfactsection}
  ${addonsection}
  ${connect}
  <p align="left">
  ${socialsection}
  </p>
  ${skillsection}
  `;
  
  // Display the generated resume
  document.getElementById("displaycode").innerHTML = resumeTemplate.replace(/\n\s*\n/g, '\n\n');
}
