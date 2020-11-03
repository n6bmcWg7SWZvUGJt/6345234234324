const docResolution = `<!DOCTYPE html>
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
<div class="tabs" id="docResolutionTabs"><button class="tablinkdocResolution" onclick="openPage('docResolutiontab1', this)" id="defaultOpendocResolution">
  Инициатор</button><button class="tablinkdocResolution" onclick="openPage('docResolutiontab2', this)" >
  Утверждающий</button></div>
      <div class="tabsPages" id="docResolutionPages">   <div id="docResolutiontab1" class="tabcontentdocResolution" style="display: none;">
                    <div class="sect1">
<h2 id="_сценарий_работы_инициатора">Сценарий работы инициатора</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Инициатор начинает процесс резолюции для выбранного документа и отправляет его утверждающему для наложения резолюции.</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Действия инициатора811" class="hide"/>
<label class="detail-title" for="Действия инициатора811">Действия инициатора</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>запускает процесс резолюции</p>
</li>
<li>
<p>позволяет добавить новых участников, изменить текщих</p>
</li>
<li>
<p>отменяет процесс резолюции

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
<input type="checkbox" id="Запуск процесса92" class="hide"/>
<label class="detail-title" for="Запуск процесса92">Запуск процесса</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Выберите пользователя на роль утверждающего</p>
</li>
<li>
<p>Нажмите ОК

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
<input type="checkbox" id="Завершенире резолюции352" class="hide"/>
<label class="detail-title" for="Завершенире резолюции352">Завершенире резолюции</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="paragraph">
<p>После того как утверждающий ставит резолюцию карточка возвращается инициатору. Найти ее можно в папке "Канцелярия" - "Обработка резолюции" Вы можете завершить ее выполнение, либо начать новый процесс или создаать задачу или документ на основании текущего

</div>
</div>
</div>
</div>
</div></p>
</div>
</div>
</div>
                     </div>   <div id="docResolutiontab2" class="tabcontentdocResolution" style="display: none;">
                    docResolution/Утверждающий.adoc
  
                     </div></div>

<script>
function openPagedocResolution(pageName,elmnt) {
  var i, tabcontentdocResolution, tablinks;
  tabcontentdocResolution = document.getElementsByClassName("tabcontentdocResolution");
  for (i = 0; i < tabcontentdocResolution.length; i++) {
    tabcontentdocResolution[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkdocResolution");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpendocResolution").click();
</script>
`;