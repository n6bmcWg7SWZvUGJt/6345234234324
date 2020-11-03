const processActions = `<!DOCTYPE html>
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
<div class="tabs" id="ProcessActionsTabs"><button class="tablinkProcessActions" onclick="openPage('ProcessActionstab1', this)" id="defaultOpenProcessActions">
Controller</button><button class="tablinkProcessActions" onclick="openPage('ProcessActionstab2', this)" >
Executer</button><button class="tablinkProcessActions" onclick="openPage('ProcessActionstab3', this)" >
Initiator</button><button class="tablinkProcessActions" onclick="openPage('ProcessActionstab4', this)" >
Observer</button><button class="tablinkProcessActions" onclick="openPage('ProcessActionstab5', this)" >
</button></div>
      <div class="tabsPages" id="ProcessActionsPages">   <div id="ProcessActionstab1" class="tabcontentProcessActions" style="display: none;">
                    <div class="paragraph">
<p>Как только задача закрыта Исполнителем, она поступает к Контролеру.</p>
</div>
<div class="paragraph">
<p><strong>Карточку поступившей для проверки исполнения задачи можно найти на
основном экране системы ТЕЗИС:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>в центральной части в разделе текущих назначений;</p>
</li>
<li>
<p>в левой части в папке действий по задачам «Для контроля»;</p>
</li>
<li>
<p>в правой части в области уведомлений;</p>
</li>
<li>
<p>в меню «Задачи» в списках задач.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/ControlerMailScreen.png" alt="image" width="565" height="214"></span></p>
</div>
<div class="paragraph">
<p>Действия Контролера можно разбить на несколько этапов:</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Принятие задачи;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>При отсутствии замечаний к результату исполнения задачи Контролер
принимает задачу.</p>
</div>
<div class="paragraph">
<p>Для этого откройте карточку задачи и ознакомьтесь с данными, нажмите
кнопку <span class="image"><img src="img/Accept.png" alt="image" width="176" height="36"></span>и при
необходимости внесите комментарий.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Возврат задачи на доработку Исполнителю.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>При наличии замечаний к результату исполнения задачи Контролер
возвращает задачу Исполнителю на доработку.</p>
</div>
<div class="paragraph">
<p>Для этого отройте карточку задачи, нажмите кнопку
<span class="image"><img src="img/ImprovementRequired.png" alt="image" width="185" height="32"></span> и добавьте
комментарий.</p>
</div>
                     </div>   <div id="ProcessActionstab2" class="tabcontentProcessActions" style="display: none;">
                    <div class="paragraph">
<p>Как только задача назначена она поступает к Исполнителю.</p>
</div>
<div class="paragraph">
<p><strong>Карточку назначенной задачи можно найти на основном экране системы
ТЕЗИС:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>в центральной части в разделе текущих назначений;</p>
</li>
<li>
<p>в левой части в папке действий по задачам «Назначенные»;</p>
</li>
<li>
<p>в правой части в области уведомлений;</p>
</li>
<li>
<p>в меню «Задачи» в списках задач.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/ExecuterMainScreen.png" alt="image" width="594" height="234"></span></p>
</div>
<div class="paragraph">
<p><strong>Действия Исполнителя:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Принятие задачи в работу;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Исполнитель, увидев новую задачу может принять ее.</p>
</div>
<div class="paragraph">
<p>Для этого откройте карточку задачи и ознакомьтесь с данными, нажмите
кнопку <span class="image"><img src="img/Accept.png" alt="image" width="176" height="36"></span>и при
необходимости внесите комментарий.</p>
</div>
<div class="paragraph">
<p>После принятия задачи она переместилась из папки действий задач
«Назначенные» в папку «В работе».</p>
</div>
<div class="paragraph">
<p>При принятии задачи в работу важно обратить внимание на срок исполнения.
Если задача не будет исполнена в указанные сроки, то она станет красной
в списке задачи и будут приходить сообщения о нарушении сроков
исполнения.</p>
</div>
<div class="paragraph">
<p>Принятие задачи в работу не является обязательным этапом действий
Исполнителя. Возможно не принимать задачу в работу в системе ТЕЗИС, а
вести работу по ней или при наличии необходимых данных и совершении
нужных действий сразу отметить ее выполнение.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Выполнение задачи;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Как только по задаче будет проведена необходимая работа ее можно
закрывать.</p>
</div>
<div class="paragraph">
<p>Для этого откройте карточку задачи и ознакомьтесь с данными, добавьте
при необходимости в карточку файлы на вкладке «Вложения» и нажмите
кнопку <span class="image"><img src="img/Copmleted.png" alt="image" width="175" height="31"></span>. При
необходимости может быть добавлен комментарий.</p>
</div>
<div class="paragraph">
<p>Если в процессе работы по задаче назначен Контролер, то задача
отправлена на контроль.</p>
</div>
<div class="paragraph">
<p>Если в процессе нет назначенного Контролера, то задача отправлена для
принятия Инициатору.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Доработка задачи;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>При наличии замечаний к результату исполнения задачи Инициатор
возвращает задачу Исполнителю на доработку.</p>
</div>
<div class="paragraph">
<p>Действия с задачей, вернувшейся на доработку аналогичны действиям
«Принятие задачи в работу» и «Выполнение задачи».</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Возврат задачи Инициатору;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>При необходимости получения дополнительной информации или продления
срока задачи Исполнитель возвращает задачу Инициатору.</p>
</div>
<div class="paragraph">
<p>Для этого отройте карточку задачи, нажмите кнопку
<span class="image"><img src="img/Decline.png" alt="image" width="174" height="37"></span> и выберите нужный
вариант причины возврата задачи. Добавление комментария обязательно.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Переназначение Исполнителя.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Если при создании карточки задачи Инициатор отметил чек-бокс
«Переназначение возможно», то Исполнитель может переназначить выполнение
данной задачи другому пользователю. В большинстве случаев основанием для
таких действий является делегирование полномочий другому сотруднику.</p>
</div>
<div class="paragraph">
<p>Для этого отройте карточку задачи, нажмите кнопку
<span class="image"><img src="img/Reassign.png" alt="image" width="196" height="38"></span>, добавьте комментарий
и выберите нового Исполнителя в открывшемся окне переназначения
Исполнителя.</p>
</div>
<div class="paragraph">
<p>Новый Исполнитель получит уведомление о назначенной задаче и может
осуществлять все те же действия, что и Исполнитель.</p>
</div>
                     </div>   <div id="ProcessActionstab3" class="tabcontentProcessActions" style="display: none;">
                    <div class="paragraph">
<p><strong>Действия Инициатора можно разбить на несколько этапов:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Создание карточки задачи;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>В системе ТЕЗИС возможно создание карточки задачи несколькими способами.</p>
</div>
<div class="paragraph">
<p>Подробно варианты различных действий рассмотрены в разделе «Способы
создания».</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Отправка задачи на исполнение;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Задача может быть отправлена на исполнение сразу после создания новой
карточки задачи, а также путем выбора из списка существующих карточек в
папке меню «Задачи» – «Список задач» или из папки действий по задачам
«Черновики».</p>
</div>
<div class="paragraph">
<p>Для отправки на исполнение откройте карточку задачи, нажмите кнопку
<span class="image"><img src="img/Assign.png" alt="image" width="175" height="33"></span>и назначьте сотрудников
на роли.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Возврат задачи от Исполнителя;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>При необходимости получения дополнительной информации или продления
срока задачи Исполнитель возвращает задачу Инициатору.</p>
</div>
<div class="paragraph">
<p>Для этого откройте карточку задачи, нажмите кнопку
<span class="image"><img src="img/Assign.png" alt="image" width="175" height="33"></span>и при необходимости
внесите изменения в назначенные роли в окне подтверждения списка
пользователей.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Принятие задачи у Исполнителя;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Как только задача выполнена Исполнителем она поступает к Инициатору.</p>
</div>
<div class="paragraph">
<p>При отсутствии замечаний к результату исполнения задачи Инициатор
принимает задачу.</p>
</div>
<div class="paragraph">
<p>Для этого откройте карточку задачи, нажмите кнопку
<span class="image"><img src="img/Completed.png" alt="image" width="192" height="35"></span>и при необходимости
внесите комментарий в окне записи журнала действий.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Возврат задачи на доработку Исполнителю;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Как только задача выполнена Исполнителем она поступает к Инициатору.</p>
</div>
<div class="paragraph">
<p>При наличии замечаний к результату исполнения задачи Инициатор
возвращает задачу Исполнителю.</p>
</div>
<div class="paragraph">
<p>Для этого откройте карточку задачи, нажмите кнопку
<span class="image"><img src="img/ImprovementRequired.png" alt="image" width="193" height="36"></span>и обязательно внесите
комментарий в окне записи журнала действий.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Переназначение Исполнителя;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Если при создании карточки задачи Инициатор отметил чек-бокс
«Переназначение возможно», то Исполнитель может переназначить выполнение
данной задачи другому пользователю. В большинстве случаев основанием для
таких действий является делегирование полномочий другому сотруднику.</p>
</div>
<div class="paragraph">
<p>Для этого откройте карточку задачи, нажмите кнопку
<span class="image"><img src="img/Reassign.png" alt="image" width="183" height="30"></span>и обязательно внесите
комментарий в окне записи журнала действий.</p>
</div>
<div class="paragraph">
<p>Задача отзывается у текущего пользователя и переходит новому в папку
«Назначенные».</p>
</div>
<div class="paragraph">
<p>Новый Исполнитель получит уведомление о назначенной задаче и может
осуществлять все те же действия, что и Исполнитель.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Отмена процесса.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Отменить неактуальную задачу возможно в любое время до исполнения
задачи.</p>
</div>
<div class="paragraph">
<p>Для этого откройте карточку задачи, нажмите кнопку
<span class="image"><img src="img/CancelProcess.png" alt="image" width="180" height="32"></span>и обязательно внесите
комментарий в окне записи журнала действий.</p>
</div>
                     </div>   <div id="ProcessActionstab4" class="tabcontentProcessActions" style="display: none;">
                    <div class="paragraph">
<p><strong>Карточку задачи, в которой пользователь назначен Наблюдателем можно
найти на основном экране системы ТЕЗИС:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>в левой части в папке действий по задачам «Наблюдаемые»;</p>
</li>
<li>
<p>в правой части в области уведомлений;</p>
</li>
<li>
<p>в меню «Задачи» в списках задач.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/ObserverMainScreen.png" alt="image" width="590" height="219"></span></p>
</div>
<div class="paragraph">
<p><strong>Действия Наблюдателя можно разбить на несколько этапов:</strong></p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Наблюдение за задачей;</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Пользователь, назначенный на роль Наблюдателя, имеет доступ к карточке
задачи.</p>
</div>
<div class="paragraph">
<p>Он может открывать карточку задачи, изучать информацию на вкладках
и во вложении, добавлять файлы и участвовать в обсуждении. Кнопки
действий в карточке задачи у Наблюдателя неактивные.</p>
</div>
<div class="paragraph">
<p>При необходимости Наблюдатель может вести наблюдение за задачей отключив
оповещения. Для этого откройте карточку задачи и ознакомьтесь с данными
или добавьте комментарий на вкладке «Обсуждение», нажмите кнопку
<span class="image"><img src="img/StopWatchingCombo.png" alt="image" width="192" height="35"></span> и выберите вариант
«Отключить оповещения».</p>
</div>
<div class="paragraph">
<p>Дальнейшее наблюдение за задачей будет происходить без получения
уведомлений об изменениях состояния задачи.</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Прекращение наблюдения за задачей.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Наблюдатель может в любой момент прекратить наблюдения за задачей если
посчитает это целесообразным.</p>
</div>
<div class="paragraph">
<p>Для этого откройте карточку задачи, нажмите кнопку
<span class="image"><img src="img/StopWatchingCombo.png" alt="image" width="192" height="35"></span> и выберите вариант
«Удалить из наблюдателей».</p>
</div>
<div class="paragraph">
<p>Пользователь полностью лишается доступа к карточке задаче и ее больше
нет в папке действий по задачам «Наблюдение».</p>
</div>
                     </div>   <div id="ProcessActionstab5" class="tabcontentProcessActions" style="display: none;">
                    
                     </div></div>

<script>
function openPageProcessActions(pageName,elmnt) {
  var i, tabcontentProcessActions, tablinks;
  tabcontentProcessActions = document.getElementsByClassName("tabcontentProcessActions");
  for (i = 0; i < tabcontentProcessActions.length; i++) {
    tabcontentProcessActions[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkProcessActions");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpenProcessActions").click();
</script>
`;