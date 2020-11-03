const task = `<!DOCTYPE html>
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
<p>При нажатии на кнопку <span class="image"><img src="img/ButtonPrintCombo.png" alt="image" width="190" height="25"></span>
возможно распечатать информацию о выбранной задаче, а также некоторые
специфические отчеты или формы.</p>
</div>
<div class="paragraph">
<p>Возможности действий по данной кнопке отличаются в зависимости от вида
карточки.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/TaskPrintButtonList.png" alt="image" width="195" height="98"></span></p>
</div>
<div class="paragraph">
<p>При выборе по кнопке <span class="image"><img src="img/ButtonPrintCombo.png" alt="image" width="175" height="31"></span>
варианта «Задача» откроется сформированная печатная форма, которую можно
отправить на печать.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/TaskInformationReport.png" alt="image" width="348" height="430"></span></p>
</div>
<div class="paragraph">
<p><div class="blockTabs">
<div class="tabs" id="TaskTabs"><button class="tablinkTask" onclick="openPage('Tasktab1', this)" id="defaultOpenTask">
For Many Executers</button><button class="tablinkTask" onclick="openPage('Tasktab2', this)" >
For One Executer</button><button class="tablinkTask" onclick="openPage('Tasktab3', this)" >
Task Creation Ways</button><button class="tablinkTask" onclick="openPage('Tasktab4', this)" >
</button></div>
      <div class="tabsPages" id="TaskPages">   <div id="Tasktab1" class="tabcontentTask" style="display: none;">
                    <div class="paragraph">
<p>При создании задачи можно определить одного или нескольких Исполнителей.</p>
</div>
<div class="paragraph">
<p><strong>Задачу на нескольких Исполнителей можно создать несколькими способами:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>создать задачу любым удобным способом и на этапе подтверждения списка пользователей выбрать несколько Исполнителей.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/TaskForSeveralExecuter.png" alt="image" width="484" height="286"></span></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>создать группу задач (подробнее см. «Группа задач»).</p>
</li>
</ul>
</div>
                     </div>   <div id="Tasktab2" class="tabcontentTask" style="display: none;">
                    <div class="paragraph">
<p>При создании задачи можно определить одного или нескольких Исполнителей.</p>
</div>
<div class="paragraph">
<p><strong>Задачу на одного Исполнителя можно создать несколькими способами:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>создать задачу любым удобным способом и на этапе подтверждения списка пользователей в качестве Исполнителя указать одного.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/UserListConfirmation.png" alt="image" width="512" height="304"></span></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>создать задачу на нескольких Исполнителей, но определить тип запуска «Задача на одного из исполнителей».</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>В этом случае задача, назначенная всем Исполнителям, после принятия в
работу задачи одним из Исполнителей, она становится недоступной для
других.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/TaskForOneExecuter.png" alt="image" width="517" height="305"></span></p>
</div>
                     </div>   <div id="Tasktab3" class="tabcontentTask" style="display: none;">
                    <div class="paragraph">
<p>При создании задачи необходимо создать карточку, заполнить нужные поля и
назначить Исполнителя.</p>
</div>
<div class="paragraph">
<p><strong>Новую задачу можно создать несколькими способами:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Создать новую задачу – в этом случае создается новая задача, все поля которой не заполнены.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p><strong>Способы:</strong></p>
</div>
<div class="ulist square">
<ul class="square">
<li>
<p>нажать «Создать задачу» на кнопку на основном экране Системы;</p>
</li>
<li>
<p>выбрать пункт меню «Задачи» – «Создать задачу»;</p>
</li>
<li>
<p>нажать на кнопку <span class="image"><img src="img/ButtonCreateCombo.png" alt="image" width="88" height="25"></span> – «Новую» в списке задач;</p>
</li>
<li>
<p>с помощью сочетания клавиш «Alt+T».</p>
</li>
</ul>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Создать задачу на основании существующей задачи, документа, договора или совещания – в этом случае создается новая задача, которая является подзадачей для задачи, документа, договора или совещания, на основании которой она была создана.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p><strong>Способы:</strong></p>
</div>
<div class="ulist square">
<ul class="square">
<li>
<p>в списке задач выбрать задачу, на основании которой нужно создать новую, и нажать на кнопку <span class="image"><img src="img/ButtonCreateCombo.png" alt="image" width="88" height="25"></span> – «На основании» и выбрать вариант «Задачу»;</p>
</li>
<li>
<p>нажать на кнопку <span class="image"><img src="img/ButtonCreateCombo.png" alt="image" width="88" height="25"></span> – «На основании» в разделе действий выбранной задачи, документа, договора или совещания и выбрать вариант «Задачу».</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>При соответствующей настройке Системы родительская задача не может быть
завершена, пока не будут завершены все ее подзадачи.</p>
</div>
<div class="paragraph">
<p>Выполнить указанную настройку может Администратор.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Создать задачу из шаблона – в этом случае создается новая задача, заполненная на основании выбранного шаблона.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p><strong>Способы:</strong></p>
</div>
<div class="ulist square">
<ul class="square">
<li>
<p>нажать на кнопку <span class="image"><img src="img/ButtonCreateCombo.png" alt="image" width="88" height="25"></span> – «Из шаблона» в списке задач и выбрать нужный шаблон на открывшемся экране;</p>
</li>
<li>
<p>в списке шаблонов задач выбрать нужный шаблон и нажать <span class="image"><img src="img/ButtonCreateTheTask.png" alt="image" width="120" height="25"></span>;</p>
</li>
<li>
<p>в карточке новой задачи в разделе действий нажать на кнопку <span class="image"><img src="img/ButtonFillFromTheTemplate.png" alt="image" width="185" height="25"></span> и выбрать нужный шаблон;</p>
</li>
<li>
<p>указать шаблон по умолчанию, по которому будут заполнены все вновь создаваемые задачи.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Выбрать шаблон можно во вкладке «Умолчания» пункта меню «Помощь» –
«Настройки.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Скопировать существующую задачу – в этом случае новая задача будет заполнена на основе выбранной задачи.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Способы:</p>
</div>
<div class="ulist square">
<ul class="square">
<li>
<p>выбрать задачу в списке задач и нажать – «Копировать»;</p>
</li>
<li>
<p>нажать на кнопку <span class="image"><img src="img/ButtonCreateCombo.png" alt="image" width="88" height="25"></span> – «Копировать» в разделе действий карточки задачи.</p>
</li>
</ul>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Создать задачу самому себе – в этом случае пользователь является одновременно Инициатором и Исполнителем задачи.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Для этого необходимо в списке задач нажать на кнопку
<span class="image"><img src="img/ButtonCreateCombo.png" alt="image" width="88" height="25"></span> – «Самому себе». Далее
процесс аналогичен созданию новой задачи.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Создать зависимую задачу – в этом случае создается новая задача, которая является зависимой от задачи, на основании которой она была создана.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Зависимая задача будет отправлена Исполнителю автоматически при
завершении основной задачи. Обязательным условием при этом является
указание Исполнителя в зависимой задаче, так как запуск будет
осуществлен без участия пользователя.</p>
</div>
<div class="paragraph">
<p>Для создания зависимой задачи необходимо нажать на кнопку
<span class="image"><img src="img/ButtonCreateCombo.png" alt="image" width="88" height="25"></span> – «Зависимую» в
разделе действий карточки задачи.</p>
</div>
                     </div>   <div id="Tasktab4" class="tabcontentTask" style="display: none;">
                    
                     </div></div>

<script>
function openPageTask(pageName,elmnt) {
  var i, tabcontentTask, tablinks;
  tabcontentTask = document.getElementsByClassName("tabcontentTask");
  for (i = 0; i < tabcontentTask.length; i++) {
    tabcontentTask[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkTask");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpenTask").click();
</script>
`;