const taskGroupTask = `<!DOCTYPE html>
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
<div class="tabs" id="taskGroupTaskTabs"><button class="tablinktaskGroupTask" onclick="openPage('taskGroupTasktab1', this)" id="defaultOpentaskGroupTask">
  Детали</button><button class="tablinktaskGroupTask" onclick="openPage('taskGroupTasktab2', this)" >
  Вложения</button></div>
      <div class="tabsPages" id="taskGroupTaskPages">   <div id="taskGroupTasktab1" class="tabcontenttaskGroupTask" style="display: none;">
                    <div class="sect1">
<h2 id="_детали_группы_задач">Детали группы задач</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Вы можете объединить задачи, имеющие общие признаки, например, это может быть одна задача, над которой работают несколько исполнителей.</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Как создать группу задач105" class="hide"/>
<label class="detail-title" for="Как создать группу задач105">Как создать группу задач</label>
<div class="detail-content">
<div class="dc">

Для создания группы задач нужно выбрать пункт меню «Задачи» – «Группы задач»
В списоке созданных групп задач нажмите Создать - Новую</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>В открывшемся окне введите наименование группы, выбрать инициатора и карточку задачи или документа, которая является основанием для создания новой группы задач.</p>
</li>
<li>
<p>Нажамите на кнопку  для создания новой задачи</p>
</li>
<li>
<p>После этого в таблице «Задачи» появится новая строка с пустыми полями. Эти поля необходимо заполнить. Таким же образом вы можете создать любое необходимое количество задач в группе.</p>
</li>
<li>
<p>Нажмите . Задачи создадутся в системе и сразу же отправятся в работу исполнителям.

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
<input type="checkbox" id="Редактирование списка задач528" class="hide"/>
<label class="detail-title" for="Редактирование списка задач528">Редактирование списка задач</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>открывает список существующих задач, из которых вы можете выбрать те, что будут добавлены в группу</p>
</li>
<li>
<p>удаляет выбранную задачу</p>
</li>
<li>
<p>создает новую задачу на основе выбранной из таблицы. Поля задачи уже заполнены аналогично исходной задаче, но она еще не создана в системе

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
<input type="checkbox" id="Редактирование списка задач553" class="hide"/>
<label class="detail-title" for="Редактирование списка задач553">Редактирование списка задач</label>
<div class="detail-content">
<div class="dc">

Группа задач так же может быть создана при постановке задачи нескольким исполнителям. Подобный процесс постановки задачи в целом аналогичен созданию простой задачи, за исключением того, что на этапе подтверждения списка пользователей в качестве исполнителя нужно выбрать не одного, а нескольких пользователей.
Для этого добавте еще одну или несколько ролей «Исполнитель» , либо нажмите на кнопку «Группа» .
Далее необходимо выбрать Тип запуска и запустить процесс</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>для всех исполнителей – включает в себя несколько одинаковых задач, назначенных на каждого из исполнителей</p>
</li>
<li>
<p>для одного из исполнителей – одна задача, назначенная всем исполнителям, но после принятия в работу задачи одним из исполнителей, задача становится недоступной для других

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
                     </div>   <div id="taskGroupTasktab2" class="tabcontenttaskGroupTask" style="display: none;">
                    taskGroupTask/Вложения.adoc
  
                     </div></div>

<script>
function openPagetaskGroupTask(pageName,elmnt) {
  var i, tabcontenttaskGroupTask, tablinks;
  tabcontenttaskGroupTask = document.getElementsByClassName("tabcontenttaskGroupTask");
  for (i = 0; i < tabcontenttaskGroupTask.length; i++) {
    tabcontenttaskGroupTask[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinktaskGroupTask");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpentaskGroupTask").click();
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