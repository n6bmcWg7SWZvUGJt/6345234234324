const taskCard = `<!DOCTYPE html>
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
<div class="tabs" id="taskCardTabs"><button class="tablinktaskCard" onclick="openPage('taskCardtab1', this)" id="defaultOpentaskCard">
  Детали</button><button class="tablinktaskCard" onclick="openPage('taskCardtab2', this)" >
  Роли</button><button class="tablinktaskCard" onclick="openPage('taskCardtab3', this)" >
  Вложения</button><button class="tablinktaskCard" onclick="openPage('taskCardtab4', this)" >
  Иерархия</button><button class="tablinktaskCard" onclick="openPage('taskCardtab5', this)" >
  Обсуждения</button><button class="tablinktaskCard" onclick="openPage('taskCardtab6', this)" >
  Дополнительно</button><button class="tablinktaskCard" onclick="openPage('taskCardtab7', this)" >
  </button></div>
      <div class="tabsPages" id="taskCardPages">   <div id="taskCardtab1" class="tabcontenttaskCard" style="display: none;">
                    <div class="sect1">
<h2 id="_детали_задачи">Детали задачи</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Данная вкладка содержит основную информацию о задаче, которая вносится при её создании</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Системные поля424" class="hide"/>
<label class="detail-title" for="Системные поля424">Системные поля</label>
<div class="detail-content">
<div class="dc">

Данные поля назначаются системой автоматически и не могут быть изменены:</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Номер</p>
</li>
<li>
<p>Дата создания</p>
</li>
<li>
<p>Состояние - текущий этап процесса

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
<input type="checkbox" id="Поля для заполнения997" class="hide"/>
<label class="detail-title" for="Поля для заполнения997">Поля для заполнения</label>
<div class="detail-content">
<div class="dc">

Название – название задачи, задаваемое пользователем</p>
</div>
<div class="paragraph">
<p>Длительность и время выполнения задаются инициатором в минутах, часах или днях. В этом случае время выполнения будет вычислено автоматически на основе рабочего календаря, в котором учитываются выходные и праздничные дни, а также количество рабочих часов. Инициатор может задать срок, к которому должна быть выполнена задача, в поле «Выполнить до» . Этот способ удобно использовать в случае, если задача должна быть выполнена строго к определенной дате. Нажав на символ  , можно индивидуально настроить дату и время персональных уведомлений о выполнении задачи.</p>
</div>
<div class="paragraph">
<p>Тип задачи выбирается из значений, заданных администратором в справочнике «Типы задач», и определяет общую категорию, к которой относится задача. В зависимости от типа задачи набор полей во вкладке может меняться</p>
</div>
<div class="paragraph">
<p>Приоритет выбирается из типов, заданных в справочнике «Приоритеты», и определяет важность и/или срочность задачи. По умолчанию в системе есть четыре типа приоритетов: критический, высокий, нормальный и низкий.</p>
</div>
<div class="paragraph">
<p>Основание содержит название и номер задачи, документа, договора или совещания, послужившего основанием для создания текущей задачи. При создании задачи на основании либо при заполнении поля «Основание» система предлагает скопировать вложения в подчиненную карточку. Зависит от – содержит название и номер задачи, от которой зависит текущая задача. Текущая задача автоматически запускается сразу после завершения предыдущей зависимой задачи.</p>
</div>
<div class="paragraph">
<p>Полное описание задачи может содержать любую необходимую информацию о ней</p>
</div>
<div class="paragraph">
<p>Флажок «Переназначение возможно». Если отметить данный флажок, то исполнитель, назначенный при создании задачи, сможет переназначить ее выполнение другому пользователю.</p>
</div>
<div class="paragraph">
<p>Флажок «Отказ возможен» . Если отметить данный флажок, то исполнитель, назначенный при создании задачи, сможет отказаться от её выполнения.</p>
</div>
<div class="paragraph">
<p>Флажок «Не требует подтверждения выполнения». Если отметить данный флажок, то после выполнения задачи исполнителем, она не будет отправлена на контроль инициатору.</p>
</div>
<div class="paragraph">
<p>Флажок «Доступ к карточке-основанию» . Если отметить данный флажок, то исполнитель получит доступ к задаче/документу/договору/совещанию, которые указаны в поле «Основание».</p>
</div>
<div class="paragraph">
<p>Процент выполнения на этапе создания задачи не отображается и недоступен для редактирования, однако может быть изменен на последующих этапах выполнения задачи передвижением ползунка.</p>
</div>
<div class="paragraph">
<p>Если карточка задачи содержит вложения, в нижней части вкладки отображается список вложенных файлов. При нажатии на ссылку в списке файл будет открыт.

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
<input type="checkbox" id="Журнал действий816" class="hide"/>
<label class="detail-title" for="Журнал действий816">Журнал действий</label>
<div class="detail-content">
<div class="dc">

В нижней части экрана задачи отображается журнал действий, который содержит информацию об изменениях состояния задачи в процессе ее выполнения</p>
</div>
<div class="paragraph">
<p>Для просмотра записи журнала действий необходимо нажать на ссылку в столбце «Дата поступления».

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
<input type="checkbox" id="Как сделать задачу важной96" class="hide"/>
<label class="detail-title" for="Как сделать задачу важной96">Как сделать задачу важной</label>
<div class="detail-content">
<div class="dc">

У всех карточек на вкладке «Детали» в верхнем левом углу расположена звездочка , нажав на которую можно отметить карточку как «важную». Если звездочка изменила цвет на желтый  , это означает, что карточка приобрела статус и будет отображаться во вкладке «Важное» на основном экране и плагине в MS Outlook. Для того чтобы изменить статус карточки, необходимо снова нажать на звездочку. После этого звездочка примет серый цвет, и карточка перестанет считаться важной.

</div>
</div>
</div>
</div>
</div></p>
</div>
</div>
</div>
                     </div>   <div id="taskCardtab2" class="tabcontenttaskCard" style="display: none;">
                    <div class="paragraph">
<p>Роли
Данная вкладка позволяет просматривать роли участников процесса работы над задачей. Изменять роли во время работы процесса запрещено</p>
</div>
                     </div>   <div id="taskCardtab3" class="tabcontenttaskCard" style="display: none;">

                     </div>   <div id="taskCardtab4" class="tabcontenttaskCard" style="display: none;">

                     </div>   <div id="taskCardtab5" class="tabcontenttaskCard" style="display: none;">

                     </div>   <div id="taskCardtab6" class="tabcontenttaskCard" style="display: none;">

                     </div>   <div id="taskCardtab7" class="tabcontenttaskCard" style="display: none;">

                     </div></div>

<script>
function openPagetaskCard(pageName,elmnt) {
  var i, tabcontenttaskCard, tablinks;
  tabcontenttaskCard = document.getElementsByClassName("tabcontenttaskCard");
  for (i = 0; i < tabcontenttaskCard.length; i++) {
    tabcontenttaskCard[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinktaskCard");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpentaskCard").click();
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
