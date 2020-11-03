const docContract = `<!DOCTYPE html>
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
<div class="tabs" id="docContractTabs"><button class="tablinkdocContract" onclick="openPage('docContracttab1', this)" id="defaultOpendocContract">
  Детали</button><button class="tablinkdocContract" onclick="openPage('docContracttab2', this)" >
  Вложения</button><button class="tablinkdocContract" onclick="openPage('docContracttab3', this)" >
  Иерархия</button><button class="tablinkdocContract" onclick="openPage('docContracttab4', this)" >
  Обсуждения</button><button class="tablinkdocContract" onclick="openPage('docContracttab5', this)" >
  Дополнительно</button></div>
      <div class="tabsPages" id="docContractPages">   <div id="docContracttab1" class="tabcontentdocContract" style="display: none;">
                    <div class="sect1">
<h2 id="_детали_договора">Детали договора</h2>
<div class="sectionbody">
<div class="paragraph">
<p>В этой вкладке вносится и отображается основная информация о договоре. В зависимости от вида договора набор полей может меняться.</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Системные поля199" class="hide"/>
<label class="detail-title" for="Системные поля199">Системные поля</label>
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
<input type="checkbox" id="Поля заполняемые пользователем293" class="hide"/>
<label class="detail-title" for="Поля заполняемые пользователем293">Поля заполняемые пользователем</label>
<div class="detail-content">
<div class="dc">

  Номер – номер документа заполняется автоматически в соответствии с заданной нумерацией документов в системе, однако может быть введен пользователем</p>
</div>
<div class="literalblock">
<div class="content">
<pre>Дата – дата создания документа. Заполняется автоматически, но может быть изменена пользователем</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Организация – содержит название организации, заключающей договор. Выбирается из выпадающего списка. По умолчанию заполняется той организацией, к которой относится автор договора</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Категория – название категории, к которой относится создаваемый договор</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Контрагент – содержит наименование контрагента, с которым заключается договор</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Конт. лицо контрагента – содержит имя лица, представляющего контрагента. Выбирается из выпадающего списка</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Основание – договор, документ, совещание или задача, на основании которых был создан этот договор</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Активный – нужно отметить данный флажок, если договор находится в работе</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Куратор – выбор имени сотрудника, курирующего работу над данным договором. По умолчанию заполняется фамилией автора документа, но может быть изменено вручную. Выбранному сотруднику предоставляется доступ к просмотру этой карточки</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Подразделение – автоматически заполняется подразделением автора договора</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Начало обязательств – поле содержит дату начала обязательств по договору</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Окончание обязательств – поле содержит дату окончания обязательств по договору</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Сумма – сумма, на которую заключается договор</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Валюта – пользователь может выбрать, в какой валюте указать сумму</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>НДС в сумме – данная опция должна быть отмечена, в случае если НДС включен в сумму договора</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Ставка, % – процентная ставка НДС</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Сумма НДС – вычисляется автоматически на основании суммы договора и того, включен ли НДС в сумму договора или нет</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Описание – описание договора в свободной форме и указание любой дополнительной информации</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>Условия платежа – описание в свободной форме условий платежа</pre>
</div>
</div>
<div class="literalblock">
<div class="content">
<pre>  Флажок Доступ к карточке-основанию позволяет пользователю, обладающему доступом к карточке документа получить доступ к задаче/документу/договору/совещанию, указанным в поле «Основание»

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
<input type="checkbox" id="Журнал действий226" class="hide"/>
<label class="detail-title" for="Журнал действий226">Журнал действий</label>
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
<input type="checkbox" id="Как сделать документ важным547" class="hide"/>
<label class="detail-title" for="Как сделать документ важным547">Как сделать документ важным</label>
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
                     </div>   <div id="docContracttab2" class="tabcontentdocContract" style="display: none;">
                    
                     </div>   <div id="docContracttab3" class="tabcontentdocContract" style="display: none;">
                    
                     </div>   <div id="docContracttab4" class="tabcontentdocContract" style="display: none;">
                    
                     </div>   <div id="docContracttab5" class="tabcontentdocContract" style="display: none;">
                    docContract/Дополнительно.adoc
  
                     </div></div>

<script>
function openPagedocContract(pageName,elmnt) {
  var i, tabcontentdocContract, tablinks;
  tabcontentdocContract = document.getElementsByClassName("tabcontentdocContract");
  for (i = 0; i < tabcontentdocContract.length; i++) {
    tabcontentdocContract[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkdocContract");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpendocContract").click();
</script>
`;