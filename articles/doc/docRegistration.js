const docRegistration = `<!DOCTYPE html>
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
<div class="tabs" id="docRegistrationTabs"><button class="tablinkdocRegistration" onclick="openPage('docRegistrationtab1', this)" id="defaultOpendocRegistration">
  Инициатор</button><button class="tablinkdocRegistration" onclick="openPage('docRegistrationtab2', this)" >
  Делопроизводитель</button></div>
      <div class="tabsPages" id="docRegistrationPages">   <div id="docRegistrationtab1" class="tabcontentdocRegistration" style="display: none;">
                    <div class="sect1">
<h2 id="_сценарий_работы_инициатора">Сценарий работы инициатора</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Инициатор отправляет документ на регистрацию делопроизводителю, указывая при этом необходимую информацию</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Действия инициатора120" class="hide"/>
<label class="detail-title" for="Действия инициатора120">Действия инициатора</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>запускает процесс регистрации</p>
</li>
<li>
<p>позволяет добавить новых участников, изменить текщих</p>
</li>
<li>
<p>отменяет процесс регистрации

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
<input type="checkbox" id="Запуск процесса296" class="hide"/>
<label class="detail-title" for="Запуск процесса296">Запуск процесса</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Выберите пользователя на роль секретаря</p>
</li>
<li>
<p>Заполнить форму регистрации. Обязательные поля помечены *</p>
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
<input type="checkbox" id="Доработка19" class="hide"/>
<label class="detail-title" for="Доработка19">Доработка</label>
<div class="detail-content">
<div class="dc">

В случае если делопроизводитель отправляет карточку на доработку инициатору, вы можете увидеть ее в в папке действий "Документы" - "Доработка".
Внесите необходимые изменения в документ и нажмите  чтобы продолжить процесс

</div>
</div>
</div>
</div>
</div></p>
</div>
</div>
</div>
                     </div>   <div id="docRegistrationtab2" class="tabcontentdocRegistration" style="display: none;">
                    docRegistration/Делопроизводитель.adoc
  
                     </div></div>

<script>
function openPagedocRegistration(pageName,elmnt) {
  var i, tabcontentdocRegistration, tablinks;
  tabcontentdocRegistration = document.getElementsByClassName("tabcontentdocRegistration");
  for (i = 0; i < tabcontentdocRegistration.length; i++) {
    tabcontentdocRegistration[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkdocRegistration");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpendocRegistration").click();
</script>
`;