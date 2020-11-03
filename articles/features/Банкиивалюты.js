const банкиивалюты = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="generator" content="Asciidoctor 1.5.2">
<title>Untitled</title>
<link rel="stylesheet" href="../../styles/main.css">
</head>
<body class="book">
<div id="header">
</div>
<div id="content">
<div id="preamble">
<div class="sectionbody">
<div class="paragraph">
<p><div class="blockTabs">
<div class="tabs" id="БанкиивалютыTabs"><button class="tablinkБанкиивалюты" onclick="openPage('Банкиивалютыtab1', this)" id="defaultOpenБанкиивалюты">
  Банки</button><button class="tablinkБанкиивалюты" onclick="openPage('Банкиивалютыtab2', this)" >
  Валюты</button><button class="tablinkБанкиивалюты" onclick="openPage('Банкиивалютыtab3', this)" >
  Регионы банков</button><button class="tablinkБанкиивалюты" onclick="openPage('Банкиивалютыtab4', this)" >
  </button></div>
      <div class="tabsPages" id="БанкиивалютыPages">   <div id="Банкиивалютыtab1" class="tabcontentБанкиивалюты" style="display: none;">
                    
                     </div>   <div id="Банкиивалютыtab2" class="tabcontentБанкиивалюты" style="display: none;">
                    
                     </div>   <div id="Банкиивалютыtab3" class="tabcontentБанкиивалюты" style="display: none;">
                    
                     </div>   <div id="Банкиивалютыtab4" class="tabcontentБанкиивалюты" style="display: none;">
                    
                     </div></div>

<script>
function openPageБанкиивалюты(pageName,elmnt) {
  var i, tabcontentБанкиивалюты, tablinks;
  tabcontentБанкиивалюты = document.getElementsByClassName("tabcontentБанкиивалюты");
  for (i = 0; i < tabcontentБанкиивалюты.length; i++) {
    tabcontentБанкиивалюты[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkБанкиивалюты");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpenБанкиивалюты").click();
</script>

</div>
</div></p>
</div>
</div>
</div>
</div>
<div id="footer">
<div id="footer-text">
Last updated 2020-10-27 13:35:14 RTZ 3 (чшьр)
</div>
</div>
</body>
</html>`;