const scheduledTask = `<!DOCTYPE html>
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
<p>Периодические задачи представляют собой задачи, выполнение которых
происходит по заданному расписанию с определенной периодичностью.</p>
</div>
<div class="paragraph">
<p>Чтобы открыть список периодических задач необходимо выбрать пункт меню
«Задачи» – «Периодические задачи».</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/ScheduledTask.png" alt="image" width="450" height="170"></span></p>
</div>
<div class="paragraph">
<p>Периодические задачи создаются на основе шаблонов задач.</p>
</div>
<div class="paragraph">
<p>Перед созданием периодической задачи следует убедиться в наличии нужного
шаблона или создать новый.</p>
</div>
<div class="paragraph">
<p>Возможны два варианта создания периодических задач: создать новую или
копировать существующую.</p>
</div>
<div class="paragraph">
<p><div class="blockTabs">
<div class="tabs" id="ScheduledTaskTabs"><button class="tablinkScheduledTask" onclick="openPage('ScheduledTasktab1', this)" id="defaultOpenScheduledTask">
Copy</button><button class="tablinkScheduledTask" onclick="openPage('ScheduledTasktab2', this)" >
New</button><button class="tablinkScheduledTask" onclick="openPage('ScheduledTasktab3', this)" >
</button></div>
      <div class="tabsPages" id="ScheduledTaskPages">   <div id="ScheduledTasktab1" class="tabcontentScheduledTask" style="display: none;">
                    <div class="paragraph">
<p>При копировании существующей периодической задачи создается новая
задача, которая будет содержать действия и расписания выбранной задачи.</p>
</div>
<div class="paragraph">
<p>Для копирования периодической задачи выделите нужную задачу в списке
периодических задач и нажмите на кнопку
<span class="image"><img src="img/ButtonCreateCombo.png" alt="image" width="108" height="31"></span> – «Копировать».</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/CopyScheduledTask.png" alt="image" width="359" height="187"></span></p>
</div>
<div class="paragraph">
<p>В создаваемую периодическую задачу перенесутся все заполненные данные
из указанной для копирования задачи.</p>
</div>
<div class="paragraph">
<p>Далее пользователь может изменять и добавлять необходимую информацию по 
аналогии с создание новой периодической задачи.</p>
</div>
<div class="paragraph">
<p><strong>Описание вкладок:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>«Журнал» – отражается выполнение действий в соответствии с расписанием периодической задачи.</p>
</li>
<li>
<p>«История изменений» – содержит информацию об изменениях, произведенных в карточка задачи.</p>
</li>
<li>
<p>«Созданные задачи» – содержит список всех задач, созданных в результате наступления времени запуска периодической задачи.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/CreatedTasksScheduledTask.png" alt="image" width="464" height="301"></span></p>
</div>
                     </div>   <div id="ScheduledTasktab2" class="tabcontentScheduledTask" style="display: none;">
                    <div class="paragraph">
<p>При создании новой периодической задачи создается новая задача, все поля
которой не заполнены.</p>
</div>
<div class="paragraph">
<p><strong>Необходимые действия:</strong></p>
</div>
<div class="olist arabic">
<ol class="arabic">
<li>
<p>Нажмите на кнопку <span class="image"><img src="img/ButtonCreateCombo.png" alt="image" width="88" height="31"></span> –
«Новую».</p>
</li>
<li>
<p>В открывшемся окне на вкладке «Главная» укажите название задачи и
краткое описание.
<span class="image"><img src="img/EditingScheduledTask.png" alt="image" width="457" height="188"></span></p>
</li>
</ol>
</div>
<div class="paragraph">
<p>Нажатие на кнопку <span class="image"><img src="img/ButtonEdit.png" alt="image" width="50" height="25"></span>
открывает выбранное действие для редактирования.
Нижняя часть окна разделена на две колонки – «Действия» и «Расписание».
В левой части окна задаются необходимые действия.
В правой части экрана в поле «Расписания» устанавливается периодичность
запуска задачи.</p>
</div>
<div class="olist arabic">
<ol class="arabic">
<li>
<p>Добавьте необходимые действия по запуску задачи, нажав на кнопку
<span class="image"><img src="img/ButtonCreate.png" alt="image" width="74" height="25"></span> .</p>
</li>
<li>
<p>В появившемся окне заполните необходимые поля и нажмите «ОК».</p>
</li>
</ol>
</div>
<div class="paragraph">
<p>Добавить действия по запуску задачи можно путем выбора соответствующего
шаблона.
Чек-бокс «Уведомлять инициатора о запуске» устанавливает отправку
Инициатору уведомления о ее старте.</p>
</div>
<div class="olist arabic">
<ol class="arabic" start="5">
<li>
<p>Нажмите на кнопку <span class="image"><img src="img/ButtonCreate.png" alt="image" width="83" height="33"></span> и
установите периодичность запуска задачи в правой части карточки
редактирования периодической задачи в поле «Расписание».</p>
</li>
<li>
<p>Затем нажмите «ОК».</p>
</li>
</ol>
</div>
<div class="paragraph">
<p>В появившемся окне пользователь может задать периодичность выполнения
и точное время запуска задачи.</p>
</div>
<div class="paragraph">
<p>Если запуск периодической задачи приходится на нерабочий день, то ее
старт будет выполнен на следующий за ним рабочий день в соответствии с
рабочим календарем.</p>
</div>
<div class="olist arabic">
<ol class="arabic" start="6">
<li>
<p>После внесения всей необходимой информации в карточку редактирования
периодической задачи нажмите «ОК».</p>
</li>
</ol>
</div>
<div class="paragraph">
<p>Новая периодическая задача будет сохранена и появится в списке
периодических задач.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/ScheduledTaskList.png" alt="image" width="432" height="155"></span></p>
</div>
                     </div>   <div id="ScheduledTasktab3" class="tabcontentScheduledTask" style="display: none;">
                    
                     </div></div>

<script>
function openPageScheduledTask(pageName,elmnt) {
  var i, tabcontentScheduledTask, tablinks;
  tabcontentScheduledTask = document.getElementsByClassName("tabcontentScheduledTask");
  for (i = 0; i < tabcontentScheduledTask.length; i++) {
    tabcontentScheduledTask[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkScheduledTask");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpenScheduledTask").click();
</script>
`;