const myTasks = `<!DOCTYPE html>
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
<div class="tabs" id="My TasksTabs"><button class="tablinkMy Tasks" onclick="openPage('My Taskstab1', this)" id="defaultOpenMy Tasks">
Incoming</button><button class="tablinkMy Tasks" onclick="openPage('My Taskstab2', this)" >
Outgoing</button><button class="tablinkMy Tasks" onclick="openPage('My Taskstab3', this)" >
</button></div>
      <div class="tabsPages" id="My TasksPages">   <div id="My Taskstab1" class="tabcontentMy Tasks" style="display: none;">
                    <div class="paragraph">
<p>«Папки поиска» можно создавать и настраивать самостоятельно.</p>
</div>
<div class="paragraph">
<p>Набор папок поиска не зависит от ролей, которые назначены пользователю.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image1.png" alt="image" width="150" height="321"></span></p>
</div>
<div class="paragraph">
<p>Папки поиска</p>
</div>
<div class="paragraph">
<p>Папка поиска <strong>«Все мои задачи»</strong> – предустановленная папка поиска, которая
доступна всем пользователям Системы и содержит все задачи пользователя.</p>
</div>
<div class="paragraph">
<p>В подпапке <strong>«Полученные»</strong> находятся задачи, поставленные пользователю
другими пользователями, <strong>а именно:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>«Активные» – задачи, находящиеся в процессе выполнения;</p>
</li>
<li>
<p>«Завершенные» – выполненные задачи;</p>
</li>
<li>
<p>«Просроченные» – задачи, у которых истек срок выполнения.</p>
</li>
</ul>
</div>
                     </div>   <div id="My Taskstab2" class="tabcontentMy Tasks" style="display: none;">
                    <div class="paragraph">
<p>«Папки поиска» можно создавать и настраивать самостоятельно.</p>
</div>
<div class="paragraph">
<p>Набор папок поиска не зависит от ролей, которые назначены пользователю.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image1.png" alt="image" width="164" height="349"></span></p>
</div>
<div class="paragraph">
<p>Папки поиска</p>
</div>
<div class="paragraph">
<p>Папка поиска <strong>«Все мои задачи»</strong> – предустановленная папка поиска, которая
доступна всем пользователям Системы и содержит все задачи пользователя.</p>
</div>
<div class="paragraph">
<p>В подпапке <strong>«Поставленные мной»</strong> находятся задачи, где пользователь
является Инициатором, <strong>а именно:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>«Активные» – задачи, находящиеся в процессе выполнения;</p>
</li>
<li>
<p>«Завершенные» – принятые задачи;</p>
</li>
<li>
<p>«Просроченные» – задачи, у которых истек срок выполнения.</p>
</li>
</ul>
</div>
                     </div>   <div id="My Taskstab3" class="tabcontentMy Tasks" style="display: none;">
                    
                     </div></div>

<script>
function openPageMy Tasks(pageName,elmnt) {
  var i, tabcontentMy Tasks, tablinks;
  tabcontentMy Tasks = document.getElementsByClassName("tabcontentMy Tasks");
  for (i = 0; i < tabcontentMy Tasks.length; i++) {
    tabcontentMy Tasks[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkMy Tasks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpenMy Tasks").click();
</script>
`;