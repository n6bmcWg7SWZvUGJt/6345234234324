const docAwareness = `<!DOCTYPE html>
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
<div class="tabs" id="docAwarenessTabs"><button class="tablinkdocAwareness" onclick="openPage('docAwarenesstab1', this)" id="defaultOpendocAwareness">
  Инициатор</button><button class="tablinkdocAwareness" onclick="openPage('docAwarenesstab2', this)" >
  Ознакомляющийся</button></div>
      <div class="tabsPages" id="docAwarenessPages">   <div id="docAwarenesstab1" class="tabcontentdocAwareness" style="display: none;">
                    <div class="sect1">
<h2 id="_сценарий_работы_инициатора">Сценарий работы инициатора</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Инициатор выбирает документ для ознакомления и составляет список сотрудников, которые должны ознакомиться с этим документом.</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Действия инициатора996" class="hide"/>
<label class="detail-title" for="Действия инициатора996">Действия инициатора</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>запускает процесс ознакомления</p>
</li>
<li>
<p>позволяет добавить новых участников ознакомления, удалить ненужных</p>
</li>
<li>
<p>отменяет процесс ознакомления

</div>
</div>
</div>
</div>
</div></p>
</li>
</ul>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Запуск процесса235" class="hide"/>
<label class="detail-title" for="Запуск процесса235">Запуск процесса</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Выберите пользователь для ознакомления,чтобы добавить несколько участников нажмите  или Добавить участника</p>
</li>
<li>
<p>При необходимости установите дату В поле Завершить к</p>
</li>
<li>
<p>Нажмите Ок

</div>
</div>
</div>
</div>
</div></p>
</li>
</ul>
</div>
</div>
</div>
                     </div>   <div id="docAwarenesstab2" class="tabcontentdocAwareness" style="display: none;">
                    docAwarenesst/Ознакомляющийся.adoc
  
                     </div></div>

<script>
function openPagedocAwareness(pageName,elmnt) {
  var i, tabcontentdocAwareness, tablinks;
  tabcontentdocAwareness = document.getElementsByClassName("tabcontentdocAwareness");
  for (i = 0; i < tabcontentdocAwareness.length; i++) {
    tabcontentdocAwareness[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkdocAwareness");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpendocAwareness").click();
</script>
`;