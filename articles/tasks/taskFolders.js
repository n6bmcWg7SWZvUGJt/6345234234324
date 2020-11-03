const taskFolders = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="generator" content="Asciidoctor 1.5.2">
<title>Папки действий</title>
<link rel="stylesheet" href="../../styles/main.css">
</head>
<body class="book">
<div id="header">
</div>
<div id="content">
<div class="sect1">
<h2 id="_папки_действий">Папки действий</h2>
<div class="sectionbody">
<div class="paragraph">
<p><div class="blockTabs">
<div class="tabs" id="taskFoldersTabs"><button class="tablinktaskFolders" onclick="openPage('taskFolderstab1', this)" id="defaultOpentaskFolders">
  Папки действий</button><button class="tablinktaskFolders" onclick="openPage('taskFolderstab2', this)" >
  Папки поиска</button><button class="tablinktaskFolders" onclick="openPage('taskFolderstab3', this)" >
  Мой_отдел</button></div>
      <div class="tabsPages" id="taskFoldersPages">   <div id="taskFolderstab1" class="tabcontenttaskFolders" style="display: none;">
                    <div class="sect1">
<h2 id="_папки_действий">Папки действий</h2>
<div class="sectionbody">
<div class="paragraph">
<p>В данных папках отображаются карточки, с которыми вам нужно выполнить действие. Количество отображаемых в этой категории папок зависит от роли пользователя.
Рядом с названием папок отображается число входящих в них карточек. Если по документам и задачам, входящим в папки, имеются непросмотренные уведомления, то счетчик будет выделен цветом и жирным шрифтом</p>
</div>
<div class="paragraph">
<p>Черновики – задачи, созданные данным пользователем. Отображается, если пользователь является Автором задачи
Возврат от исполнителя – задачи, вернувшиеся от исполнителя данному пользователю. Отображается, если пользователь является Инициатором
 Назначенные – задачи, назначенные на данного пользователя, но не принятые им к исполнению. Отображается, если пользователь является Исполнителем.
В работе – принятые к исполнению задачи. Отображается, если пользователь является Исполнителем.
Для контроля – все задачи, направленные на контроль выполнения. Отображается, если пользователь является Инициатором и/или Контролером
Наблюдаемые – задачи, направленные для наблюдения пользователю. Отображается, если пользователь является Наблюдателем</p>
</div>
</div>
</div>
                     </div>   <div id="taskFolderstab2" class="tabcontenttaskFolders" style="display: none;">
                    
                     </div>   <div id="taskFolderstab3" class="tabcontenttaskFolders" style="display: none;">
                    taskFolders/Мой_отдел.adoc
  
                     </div></div>

<script>
function openPagetaskFolders(pageName,elmnt) {
  var i, tabcontenttaskFolders, tablinks;
  tabcontenttaskFolders = document.getElementsByClassName("tabcontenttaskFolders");
  for (i = 0; i < tabcontenttaskFolders.length; i++) {
    tabcontenttaskFolders[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinktaskFolders");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpentaskFolders").click();
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