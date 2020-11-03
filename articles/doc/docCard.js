const docCard = `<!DOCTYPE html>
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
<div class="tabs" id="docCardTabs"><button class="tablinkdocCard" onclick="openPage('docCardtab1', this)" id="defaultOpendocCard">
  Детали</button><button class="tablinkdocCard" onclick="openPage('docCardtab2', this)" >
  Вложения</button><button class="tablinkdocCard" onclick="openPage('docCardtab3', this)" >
  Канцелярия</button><button class="tablinkdocCard" onclick="openPage('docCardtab4', this)" >
  Иерархия</button><button class="tablinkdocCard" onclick="openPage('docCardtab5', this)" >
  Обсуждения</button><button class="tablinkdocCard" onclick="openPage('docCardtab6', this)" >
  Дополнительно</button></div>
      <div class="tabsPages" id="docCardPages">   <div id="docCardtab1" class="tabcontentdocCard" style="display: none;">
                    <div class="sect1">
<h2 id="_детали_документа">Детали документа</h2>
<div class="sectionbody">
<div class="paragraph">
<p>В этой вкладке вносится и отображается основная информация о документе. В зависимости от вида документа набор полей может меняться.</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Системные поля562" class="hide"/>
<label class="detail-title" for="Системные поля562">Системные поля</label>
<div class="detail-content">
<div class="dc">

  Вид – наименование вида документа, который заполняется автоматически, в зависимости от того, какой вид документа был выбран при создании карточки.</p>
</div>
<div class="literalblock">
<div class="content">
<pre>Тек. процесс – название текущего процесса, который ведется по данному документу.</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Cостояние – заполняется и изменяется автоматически при изменении состояния документа. При нажатии на ссылку с названием состояния осуществляется переход к диаграмме процесса.</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>  В случае если документ уже прошел процесс регистрации, в заголовке также отображается его регистрационный номер и дата регистрации.

</div>
</div>
</div>
</div>
</div></pre>
</div>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Поля заполняемые пользователем465" class="hide"/>
<label class="detail-title" for="Поля заполняемые пользователем465">Поля заполняемые пользователем</label>
<div class="detail-content">
<div class="dc">

  Номер – номер документа заполняется автоматически в соответствии с заданной нумерацией документов в системе, однако может быть введен пользователем.
  Дата – дата создания документа. Заполняется автоматически, но может быть изменена пользователем.
  Тема – необходимо кратко указать основную тему документа, например, о чем говорится в письме.
  Организация – по умолчанию заполняется той организацией, к которой относится автор документа.
  Подразделение – автоматически заполняется подразделением автора документа.
  Основание – договор, документ, совещание или задача, на основании которых был создан этот документ. При создании на основании либо при заполнении поля «Основание» в карточке система предлагает скопировать вложения в подчиненную карточку.
  Категория – название категории, к которой относится создаваемый документ. Выбирается из справочника «Категории документов».
  Куратор – выбор имени сотрудника, курирующего работу над данным документом. По умолчанию заполняется фамилией автора документа, но может быть изменено вручную. Выбранному сотруднику предоставляется доступ к просмотру этой карточки.
  Содержание – в данном поле в свободной форме можно дать описание документа и указать любую дополнительную информацию.
  Флажок «Документ доступен всем» разрешает просмотр документа всем пользователям системы вне зависимости от настроек доступа. По умолчанию эта отметка скрыта. Для того чтобы включить данную опцию, необходимо обратиться к администратору системы.
  Флажок «Доступ к карточке-основанию» позволяет пользователю, обладающему доступом к карточке документа, получить доступ к задаче/документу/договору/совещанию, указанным в поле «Основание».
  Если карточка документа содержит вложения, то в нижней ее части будет отображен список последних версий вложенных файлов. При нажатии на ссылку система предложит сохранить файл на диск.

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
<input type="checkbox" id="Журнал действий603" class="hide"/>
<label class="detail-title" for="Журнал действий603">Журнал действий</label>
<div class="detail-content">
<div class="dc">

В журнале действий вы можете увидеть информацию об изменениях состояния карточки в различных процессах. Для просмотра записи журнала действий необходимо нажать на ссылку в столбце «Дата поступления».

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
<input type="checkbox" id="Как сделать документ важным41" class="hide"/>
<label class="detail-title" for="Как сделать документ важным41">Как сделать документ важным</label>
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
                     </div>   <div id="docCardtab2" class="tabcontentdocCard" style="display: none;">
                    
                     </div>   <div id="docCardtab3" class="tabcontentdocCard" style="display: none;">
                    
                     </div>   <div id="docCardtab4" class="tabcontentdocCard" style="display: none;">
                    
                     </div>   <div id="docCardtab5" class="tabcontentdocCard" style="display: none;">
                    
                     </div>   <div id="docCardtab6" class="tabcontentdocCard" style="display: none;">
                    docCard/Дополнительно.adoc
  
                     </div></div>

<script>
function openPagedocCard(pageName,elmnt) {
  var i, tabcontentdocCard, tablinks;
  tabcontentdocCard = document.getElementsByClassName("tabcontentdocCard");
  for (i = 0; i < tabcontentdocCard.length; i++) {
    tabcontentdocCard[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkdocCard");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpendocCard").click();
</script>
`;