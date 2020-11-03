const taskManagement = `<!DOCTYPE html>
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
<div class="tabs" id="taskManagementTabs"><button class="tablinktaskManagement" onclick="openPage('taskManagementtab1', this)" id="defaultOpentaskManagement">
  Инициатор</button><button class="tablinktaskManagement" onclick="openPage('taskManagementtab2', this)" >
  Исполнитель</button><button class="tablinktaskManagement" onclick="openPage('taskManagementtab3', this)" >
  Контролер</button><button class="tablinktaskManagement" onclick="openPage('taskManagementtab4', this)" >
  Наблюдатель</button></div>
      <div class="tabsPages" id="taskManagementPages">   <div id="taskManagementtab1" class="tabcontenttaskManagement" style="display: none;">
                    <div class="sect1">
<h2 id="_сценарий_работы_инициатора_задачи">Сценарий работы инициатора задачи</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Инициатор создает задачу и направляет ее исполнителю</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Как создать карточку423" class="hide"/>
<label class="detail-title" for="Как создать карточку423">Как создать карточку</label>
<div class="detail-content">
<div class="dc">

Создать можно как новую карточку с пустыми полями,
так и карточку с уже заполненными полями используя шаблоны задач
или скопировать существующую карточку. Создать новую карточку:</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>на главном экране системы <span class="image"><img src="../../img/taskcreate.PNG" alt="taskcreate"></span></p>
</li>
<li>
<p>пункт меню «Задачи» – «Создать задачу»</p>
</li>
<li>
<p>из списка задач «Создать» - «Новый»</p>
</li>
<li>
<p>из списка шаблонов «Создать задачу»</p>
</li>
<li>
<p>из другой карточки «Создать» - «На основании»</p>
</li>
<li>
<p>С помощью сочетания клавиш <strong>Alt+T</strong></p>
</li>
<li>
<p>используя плагины

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
<input type="checkbox" id="Действия инициатора 860" class="hide"/>
<label class="detail-title" for="Действия инициатора 860">Действия инициатора </label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Отправить исполнителю – запускает процесс работы над задачей, при этом необходимо назначить пользователей на нужные роли</p>
</li>
<li>
<p>Завершить – завершает процесс работы над задачей, доступно после выполнения задачи исполнителем</p>
</li>
<li>
<p>Выполнена – завершает выполнение задачи</p>
</li>
<li>
<p>Вернуть на доработку – отправляет задачу на доработку исполнителю, доступно для задачи, выполненной исполнителем</p>
</li>
<li>
<p>Отменить процесс – позволяет прервать процесс работы над задачей

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
<input type="checkbox" id="Как переназначить задачу412" class="hide"/>
<label class="detail-title" for="Как переназначить задачу412">Как переназначить задачу</label>
<div class="detail-content">
<div class="dc">

Если исполнитель еще не выполнил задачу, инициатор может изменить исполнителя нажав
<span class="image"><img src="../../img/changeexecutor.PNG" alt="changeexecutor"></span>

</div>
</div>
</div>
</div>
</div></p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Как назначить задачу самому себе95" class="hide"/>
<label class="detail-title" for="Как назначить задачу самому себе95">Как назначить задачу самому себе</label>
<div class="detail-content">
<div class="dc">

В списке задач нажмите "Создать" - "Самому себе"
В этом случае вы являетесь одновременно инициатором и исполнителем задачи

</div>
</div>
</div>
</div>
</div></p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Как завершить задачу364" class="hide"/>
<label class="detail-title" for="Как завершить задачу364">Как завершить задачу</label>
<div class="detail-content">
<div class="dc">

После того, как исполнитель и контролер закончили свои действия задачи, она возвращается инициатору для завершения</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Если инициатор принимает задачу, он завершает ее, и, соответственно, весь процесс</p>
</li>
<li>
<p>Если же задача требует доработки, она возвращается исполнителю

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
                     </div>   <div id="taskManagementtab2" class="tabcontenttaskManagement" style="display: none;">
                    <div class="sect1">
<h2 id="_сценарий_работы_исполнителя_задачи">Сценарий работы исполнителя задачи</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Исполнитель выполняет задачу и отправляет её на контроль инициатору</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Исполнитель330" class="hide"/>
<label class="detail-title" for="Исполнитель330">Исполнитель</label>
<div class="detail-content">
<div class="dc">

выполняет задачу и отправляет её на контроль инициатору</p>
</div>
<div class="ulist square">
<ul class="square">
<li>
<p>1</p>
</li>
<li>
<p>2

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
                     </div>   <div id="taskManagementtab3" class="tabcontenttaskManagement" style="display: none;">
                    
                     </div>   <div id="taskManagementtab4" class="tabcontenttaskManagement" style="display: none;">
                    taskManagement/Наблюдатель.adoc
  
                     </div></div>

<script>
function openPagetaskManagement(pageName,elmnt) {
  var i, tabcontenttaskManagement, tablinks;
  tabcontenttaskManagement = document.getElementsByClassName("tabcontenttaskManagement");
  for (i = 0; i < tabcontenttaskManagement.length; i++) {
    tabcontenttaskManagement[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinktaskManagement");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpentaskManagement").click();
</script>

</div>
</div></p>
</div>
</div>
</div>
</div>
<div id="footer">
<div id="footer-text">
Last updated 2020-10-08 11:55:02 RTZ 3 (чшьр)
</div>
</div>
</body>
</html>`;