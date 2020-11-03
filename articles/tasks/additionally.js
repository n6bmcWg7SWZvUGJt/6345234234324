const additionally = `<!DOCTYPE html>
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
<p>Наименее используемые вкладки карточки вынесены в отдельную вкладку
<span class="image"><img src="media/image1.png" alt="image" width="13" height="11"></span> , при нажатии на
которую откроется перечень с возможностью выбора.</p>
</div>
<div class="paragraph">
<p>В случае если необходимо, чтобы какая-нибудь из дополнительных вкладок
присутствовала в карточке постоянно, необходимо обратиться к
Администратору для настройки этой функции.</p>
</div>
<div class="paragraph">
<p><div class="blockTabs">
<div class="tabs" id="AdditionallyTabs"><button class="tablinkAdditionally" onclick="openPage('Additionallytab1', this)" id="defaultOpenAdditionally">
Change History</button><button class="tablinkAdditionally" onclick="openPage('Additionallytab2', this)" >
Linked Cards</button><button class="tablinkAdditionally" onclick="openPage('Additionallytab3', this)" >
Open History</button><button class="tablinkAdditionally" onclick="openPage('Additionallytab4', this)" >
Projects</button><button class="tablinkAdditionally" onclick="openPage('Additionallytab5', this)" >
Roles</button><button class="tablinkAdditionally" onclick="openPage('Additionallytab6', this)" >
Security</button><button class="tablinkAdditionally" onclick="openPage('Additionallytab7', this)" >
</button></div>
      <div class="tabsPages" id="AdditionallyPages">   <div id="Additionallytab1" class="tabcontentAdditionally" style="display: none;">
                    <div class="paragraph">
<p>Вкладка «История изменений» содержит информацию об изменениях,
произведенных в карточке задачи, документа, договора или совещания.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image1.png" alt="image" width="540" height="263"></span></p>
</div>
<div class="paragraph">
<p>Вкладка «История изменений»</p>
</div>
<div class="paragraph">
<p>В процессе создания карточки эта вкладка пустая.</p>
</div>
<div class="paragraph">
<p>Первые записи появятся после сохранения карточки.</p>
</div>
<div class="paragraph">
<p>На вкладке в хронологическом порядке отображаются все изменения.</p>
</div>
<div class="paragraph">
<p>При выделении строк, в таблице снизу будут показаны атрибуты, которые
были изменены и их новое значение.</p>
</div>
                     </div>   <div id="Additionallytab2" class="tabcontentAdditionally" style="display: none;">
                    <div class="paragraph">
<p><strong>На вкладке «Связанные карточки» отображаются следующие карточки:</strong></p>
</div>
<div class="paragraph">
<p>Карточки, отображающиеся на вкладке</p>
</div>
<table class="tableblock frame-all grid-all spread">
<colgroup>
<col style="width: %;">
<col style="width: %;">
</colgroup>
<thead>
<tr>
<th class="tableblock halign-left valign-top">Вид карточки</th>
<th class="tableblock halign-left valign-top">Отображаемые карточки</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">Задача</p></td>
<td class="tableblock halign-left valign-top"><div><div class="ulist circle">
<ul class="circle">
<li>
<p>добавленные пользователем</p>
</li>
</ul>
</div></div></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">Документ</p></td>
<td class="tableblock halign-left valign-top"><div><div class="ulist circle">
<ul class="circle">
<li>
<p>добавленные пользователем;</p>
</li>
<li>
<p>являющиеся основанием;</p>
</li>
<li>
<p>участвующие в иерархии;</p>
</li>
<li>
<p>из истории переписки</p>
</li>
</ul>
</div></div></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">Договор</p></td>
<td class="tableblock halign-left valign-top"><div><div class="ulist circle">
<ul class="circle">
<li>
<p>добавленные пользователем;</p>
</li>
<li>
<p>являющиеся основанием;</p>
</li>
<li>
<p>участвующие в иерархии</p>
</li>
</ul>
</div></div></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">Совещание</p></td>
<td class="tableblock halign-left valign-top"><div><div class="ulist circle">
<ul class="circle">
<li>
<p>добавленные пользователем;</p>
</li>
<li>
<p>являющиеся основанием;</p>
</li>
<li>
<p>участвующие в иерархии</p>
</li>
</ul>
</div></div></td>
</tr>
</tbody>
</table>
<div class="paragraph">
<p><strong>Для добавления одной или нескольких карточек необходимо:</strong></p>
</div>
<div class="olist arabic">
<ol class="arabic">
<li>
<p>Открыть в нужной карточке вкладку «Связанные карточки» и нажать на
кнопку <span class="image"><img src="media/image1.png" alt="image" width="81" height="25"></span>.</p>
</li>
<li>
<p>Выбрать тип карточки.</p>
</li>
</ol>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image2.png" alt="image" width="287" height="90"></span></p>
</div>
<div class="paragraph">
<p>Выбор типа карточки</p>
</div>
<div class="olist arabic">
<ol class="arabic" start="2">
<li>
<p>Выбрать в открывшемся списке нужные карточки и нажать на кнопку
«Выбрать».</p>
</li>
</ol>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image3.png" alt="image" width="350" height="216"></span></p>
</div>
<div class="paragraph">
<p>Выбор нужного документа</p>
</div>
<div class="paragraph">
<p>Карточка выбранной задачи, документа, договора или совещания добавится
на вкладку.</p>
</div>
<div class="paragraph">
<p>Для того чтобы удалить карточку из данной вкладки, необходимо выделить
нужную строку таблицы и нажать на кнопку
<span class="image"><img src="media/image4.png" alt="image" width="50" height="25"></span>.</p>
</div>
                     </div>   <div id="Additionallytab3" class="tabcontentAdditionally" style="display: none;">
                    <div class="paragraph">
<p>На вкладке «История открытий» фиксируется факт открытия карточки задачи,
документа, договора или совещания пользователями Системы.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image1.png" alt="image" width="494" height="243"></span></p>
</div>
<div class="paragraph">
<p>Вкладка «История открытий»</p>
</div>
                     </div>   <div id="Additionallytab4" class="tabcontentAdditionally" style="display: none;">
                    <div class="paragraph">
<p>Зачастую выполнение задач и работа с документами проходят в рамках
конкретных проектов компании. Для их отображения можно создать проекты,
которые будут объединять нужные карточки (подробнее о создании проектов
см. справочник «Проекты»).</p>
</div>
<div class="paragraph">
<p>На вкладке «Проекты» отображаются проекты компании, в рамках которых
ведется работа над задачей или документом.</p>
</div>
<div class="paragraph">
<p>Рядом с названием вкладки отображается число проектов, в которые входит
задача или документ. Карточки могут относиться к нескольким проектам
одновременно.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image1.png" alt="image" width="397" height="138"></span></p>
</div>
<div class="paragraph">
<p>Вкладка «Проекты»</p>
</div>
<div class="paragraph">
<p>С помощью нажатия на кнопку
<span class="image"><img src="media/image2.png" alt="image" width="140" height="25"></span> можно отметить, какой
проект является основным (в соответствующем столбце будет отмечен
чек-бокс, а название проекта будет отображаться в списке карточек).</p>
</div>
<div class="paragraph">
<p>Для того чтобы добавить документ или задачу в проект, на вкладке
необходимо нажать на кнопку
<span class="image"><img src="media/image3.png" alt="image" width="81" height="25"></span>, в открывшемся окне
выбрать группу проектов и сам проект, а затем нажать на кнопку
<span class="image"><img src="media/image4.png" alt="image" width="95" height="25"></span>.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image5.png" alt="image" width="354" height="157"></span></p>
</div>
<div class="paragraph">
<p>Добавление проекта</p>
</div>
<div class="paragraph">
<p>Выбранный проект отобразится во вкладке «Проекты», которая будет
постоянно присутствовать в карточке данной задачи или документа. Одну
задачу или документ можно добавить к разным проектам. Можно указать
основной проект.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image6.png" alt="image" width="370" height="148"></span></p>
</div>
<div class="paragraph">
<p>Основной проект</p>
</div>
<div class="paragraph">
<p>После того как проект был добавлен, необходимо нажать на кнопку
<span class="image"><img src="media/image7.png" alt="image" width="190" height="25"></span> или
<span class="image"><img src="media/image8.png" alt="image" width="88" height="25"></span>.</p>
</div>
<div class="paragraph">
<p>Просмотреть список всех существующих проектов можно в меню «Справочники»
– «Проекты». В открывшемся окне требуется выбрать группу проектов и сам
проект.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image9.png" alt="image" width="549" height="225"></span></p>
</div>
<div class="paragraph">
<p>Список всех проектов</p>
</div>
<div class="paragraph">
<p>Для просмотра списка задач, документов и договоров, относящихся к
проекту, нужно отметить чек-бокс «Показать карточки».</p>
</div>
<div class="paragraph">
<p>Для того чтобы открыть документ или задачу, необходимо дважды нажать
на соответствующую строку таблицы.</p>
</div>
                     </div>   <div id="Additionallytab5" class="tabcontentAdditionally" style="display: none;">
                    <div class="paragraph">
<p>На вкладке «Роли» отображаются роли участников процесса работы над
задачей.</p>
</div>
<div class="paragraph">
<p>Изменять роли во время работы процесса запрещено.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image1.png" alt="image" width="412" height="210"></span></p>
</div>
<div class="paragraph">
<p>Вкладка «Роли»</p>
</div>
                     </div>   <div id="Additionallytab6" class="tabcontentAdditionally" style="display: none;">
                    <div class="paragraph">
<p>На вкладке «Безопасность» содержится список пользователей по текущей
задаче, документу, договору или совещанию, которым данная карточка
доступна для просмотра в соответствии с системными настройками.</p>
</div>
<div class="paragraph">
<p>В карточках задач, документов, договоров и совещаний существует
возможность добавлять пользователей, которые будут иметь доступ к
карточке. Данную операцию могут производить Администратор, Автор или
Инициатор.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="media/image1.png" alt="image" width="510" height="253"></span></p>
</div>
<div class="paragraph">
<p>Вкладка «Безопасность»</p>
</div>
<div class="paragraph">
<p>На вкладку «Безопасность» автоматически добавляются пользователи,
указанные в полях «От», «Кому», «Копия» вкладки «Детали» с ролями
«Отправитель», «Получатель» и «Получатель копии» соответственно.</p>
</div>
                     </div>   <div id="Additionallytab7" class="tabcontentAdditionally" style="display: none;">
                    
                     </div></div>

<script>
function openPageAdditionally(pageName,elmnt) {
  var i, tabcontentAdditionally, tablinks;
  tabcontentAdditionally = document.getElementsByClassName("tabcontentAdditionally");
  for (i = 0; i < tabcontentAdditionally.length; i++) {
    tabcontentAdditionally[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkAdditionally");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpenAdditionally").click();
</script>
`;