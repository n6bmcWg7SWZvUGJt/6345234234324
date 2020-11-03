const contractsAttachments = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="generator" content="Asciidoctor 1.5.2">
<title>Untitled</title>

</head>
<body class="book">
<div id="header">
</div>
<div id="content">
<div id="preamble">
<div class="sectionbody">
<div class="paragraph">
<p><div class="blockTabs">
<div class="tabs" id="contractsAttachmentsTabs"><button class="tablinkcontractsAttachments" onclick="openPage('contractsAttachmentstab1', this)" id="defaultOpencontractsAttachments">
  Добавление вложений</button><button class="tablinkcontractsAttachments" onclick="openPage('contractsAttachmentstab2', this)" >
  Версии вложений</button><button class="tablinkcontractsAttachments" onclick="openPage('contractsAttachmentstab3', this)" >
  Редактирование вложения</button><button class="tablinkcontractsAttachments" onclick="openPage('contractsAttachmentstab4', this)" >
  Основные вложения</button><button class="tablinkcontractsAttachments" onclick="openPage('contractsAttachmentstab5', this)" >
  Работа с вложениями</button><button class="tablinkcontractsAttachments" onclick="openPage('contractsAttachmentstab6', this)" >
  </button></div>
      <div class="tabsPages" id="contractsAttachmentsPages">   <div id="contractsAttachmentstab1" class="tabcontentcontractsAttachments" style="display: none;">
                    <div class="paragraph">
<p>1111111Добавление_вложений</p>
</div>
                     </div>   <div id="contractsAttachmentstab2" class="tabcontentcontractsAttachments" style="display: none;">
                    <div class="paragraph">
<p>Версии_вложенийadoc</p>
</div>
                     </div>   <div id="contractsAttachmentstab3" class="tabcontentcontractsAttachments" style="display: none;">
                    <div class="paragraph">
<p>Редактирование_вложенияadoc</p>
</div>
                     </div>   <div id="contractsAttachmentstab4" class="tabcontentcontractsAttachments" style="display: none;">
                    <div class="paragraph">
<p>Основные_вложенияado</p>
</div>
                     </div>   <div id="contractsAttachmentstab5" class="tabcontentcontractsAttachments" style="display: none;">
                    <div class="paragraph">
<p>Работа_с_вложениямиadoc</p>
</div>
                     </div>   <div id="contractsAttachmentstab6" class="tabcontentcontractsAttachments" style="display: none;">
                    
                     </div></div>

<script>
function openPagecontractsAttachments(pageName,elmnt) {
  var i, tabcontentcontractsAttachments, tablinks;
  tabcontentcontractsAttachments = document.getElementsByClassName("tabcontentcontractsAttachments");
  for (i = 0; i < tabcontentcontractsAttachments.length; i++) {
    tabcontentcontractsAttachments[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkcontractsAttachments");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpencontractsAttachments").click();
</script>
`;