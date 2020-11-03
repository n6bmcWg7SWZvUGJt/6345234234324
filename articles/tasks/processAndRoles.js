const processAndRoles = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="generator" content="Asciidoctor 1.5.2">
<title>Untitled</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic%7CNoto+Serif:400,400italic,700,700italic%7CDroid+Sans+Mono:400">

</head>
<body class="article">
<div id="header">
</div>
<div id="content">
<div class="paragraph">
<p><div class="blockTabs">
<div class="tabs" id="ProcessAndRolesTabs"><button class="tablinkProcessAndRoles" onclick="openPage('ProcessAndRolestab1', this)" id="defaultOpenProcessAndRoles">
Process</button><button class="tablinkProcessAndRoles" onclick="openPage('ProcessAndRolestab2', this)" >
Roles</button><button class="tablinkProcessAndRoles" onclick="openPage('ProcessAndRolestab3', this)" >
</button></div>
      <div class="tabsPages" id="ProcessAndRolesPages">   <div id="ProcessAndRolestab1" class="tabcontentProcessAndRoles" style="display: none;">
                    <div class="paragraph">
<p><span class="image"><img src="img/Task Management Process.png" alt="image" width="459" height="207"></span></p>
</div>
<div class="paragraph">
<p><strong>Процесс выполнения задачи может быть представлен следующим образом:</strong></p>
</div>
<div class="olist arabic">
<ol class="arabic">
<li>
<p>Инициатор создает задачу и направляет ее Исполнителю.</p>
</li>
<li>
<p>Исполнитель выполняет задачу и отправляет её на контроль.</p>
</li>
<li>
<p>Задача переходит к Контролеру, который:</p>
</li>
</ol>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>если задача нуждается в доработке, то Контролер возвращает ее Исполнителю;</p>
</li>
<li>
<p>если Контролер принимает задачу, то она отправляется к Инициатору.</p>
</li>
</ul>
</div>
<div class="olist arabic">
<ol class="arabic" start="4">
<li>
<p>После принятия задачи Контролером она переходит к Инициатору, который:</p>
</li>
</ol>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>если задача требует доработки, то Инициаторе возвращает ее Исполнителю</p>
</li>
<li>
<p>если Инициатор принимает задачу, то он завершает ее и, соответственно, весь процесс.</p>
</li>
</ul>
</div>
<div class="olist arabic">
<ol class="arabic" start="5">
<li>
<p>Наблюдатели не принимают непосредственного участия в работе над
задачей, но могут следить за процессом и получать уведомления об этапах
выполнения задачи.</p>
</li>
</ol>
</div>
<div class="paragraph">
<p>Создать задачу может не только Инициатор. Например, руководитель может
дать поручение секретарю создать задачу. В таком случае секретарь будет
являться Автором задачи в Системе и укажет своего руководителя как
Инициатора, чтобы он принимал результаты выполнения поручения и завершал
задачу.</p>
</div>
<div class="paragraph">
<p>В процессе есть возможность автоматического определения руководителя
автора карточки задачи. В том случае, например, если в качестве
Контролера всегда должен выступать непосредственный руководитель Автора,
необходимо выполнить настройку процесса. Для ее выполнения следует
обратиться к Администратору.</p>
</div>
<div class="paragraph">
<p>В рамках управления задачами пользователь может иметь различные роли.
Роль пользователя определяет, какие действия он может или должен
выполнять в процессе выполнения задачи. Кроме того, набор ролей
пользователя влияет на число и состав доступных папок действий.</p>
</div>
                     </div>   <div id="ProcessAndRolestab2" class="tabcontentProcessAndRoles" style="display: none;">
                    <div class="paragraph">
<p>В рамках процесса работы над задачами определены следующие роли:</p>
</div>
<table class="tableblock frame-all grid-all spread">
<colgroup>
<col style="width: %;">
<col style="width: %;">
<col style="width: %;">
</colgroup>
<thead>
<tr>
<th class="tableblock halign-left valign-top">Роль</th>
<th class="tableblock halign-left valign-top">Статус</th>
<th class="tableblock halign-left valign-top">Полномочия</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">Инициатор</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Обязательная роль</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Создание задачи и направление ее на
исполнение</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">Исполнитель</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Обязательная роль</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Выполнение задачи</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">Контролер</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Необязательная роль</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Проверка качества выполненной задачи</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">Наблюдатель</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Необязательная роль</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">Наблюдение за процессом исполнения
задачи</p></td>
</tr>
</tbody>
</table>
                     </div>   <div id="ProcessAndRolestab3" class="tabcontentProcessAndRoles" style="display: none;">
                    
                     </div></div>

<script>
function openPageProcessAndRoles(pageName,elmnt) {
  var i, tabcontentProcessAndRoles, tablinks;
  tabcontentProcessAndRoles = document.getElementsByClassName("tabcontentProcessAndRoles");
  for (i = 0; i < tabcontentProcessAndRoles.length; i++) {
    tabcontentProcessAndRoles[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkProcessAndRoles");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpenProcessAndRoles").click();
</script>
`;