const taskTemplate2 = `<!DOCTYPE html>
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
<div class="tabs" id="taskTemplateTabs"><button class="tablinktaskTemplate" onclick="openPage('taskTemplatetab1', this)" id="defaultOpentaskTemplate">
  Шаблоны задач</button><button class="tablinktaskTemplate" onclick="openPage('taskTemplatetab2', this)" >
  Шаблоны групп задач</button></div>
      <div class="tabsPages" id="taskTemplatePages">   <div id="taskTemplatetab1" class="tabcontenttaskTemplate" style="display: none;">
                    <div class="sect1">
<h2 id="_шаблоны_задач">Шаблоны задач</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Шаблоны задач позволяют оптимизировать процесс создания типовых задач. Для шаблонов задач можно создавать и применять фильтры аналогично фильтрам для задач. Шаблоны задач доступны для редактирования по умолчанию только автору и администратору</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Как создать шаблон146" class="hide"/>
<label class="detail-title" for="Как создать шаблон146">Как создать шаблон</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Создание нового шаблона задач. В этом случае откроется окно редактирования шаблона задач, в котором нужно заполнить необходимые поля.
Задача - Шаблон задачи - Создать</p>
</li>
<li>
<p>Копирование существующего шаблона . В этом случае создается копия выбранного из списка шаблона
Задача - Шаблон задачи - Копировать

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
<input type="checkbox" id="Как открыть доступ к шаблону другим пользователям300" class="hide"/>
<label class="detail-title" for="Как открыть доступ к шаблону другим пользователям300">Как открыть доступ к шаблону другим пользователям</label>
<div class="detail-content">
<div class="dc">

  Чтобы шаблоном смогли воспользоваться все пользователи, установите признак Доступен всем пользователям.</p>
</div>
<div class="literalblock">
<div class="content">
<pre>  Чтобы установить доступ к шаблону для отдельных пользователей, перейдите на вкладку Доступ к шаблону и выберите необходимых пользователей.

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
<input type="checkbox" id="Как создать карточку из шаблона202" class="hide"/>
<label class="detail-title" for="Как создать карточку из шаблона202">Как создать карточку из шаблона</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>В списке шаблонов выберите нужный вам шаблон и нажмите Создать задачу.</p>
</li>
<li>
<p>Создавая новую карточку выберите вид документа и укажите шаблон в поле По шаблону .</p>
</li>
</ul>
</div>
<div class="paragraph">
<p>Также создавая новую карточку вы можете заполнить поля карточки согласно шаблону, нажав Заполнить по шаблону. Обратите внимание:</p>
</div>
<div class="ulist circle">
<ul class="circle">
<li>
<p>Если поле задачи и соответствующее поле шаблона не заполнены, поле остается пустым</p>
</li>
<li>
<p>Если поле задачи не заполнено, а соответствующее поле шаблона содержит информацию, поле задачи заполняется информацией из шаблона</p>
</li>
<li>
<p>Если поле задачи заполнено, и соответствующее поле шаблона также содержит информацию, информация, введенная в поле задачи, будет заменена информацией из шаблона</p>
</li>
<li>
<p>Если поле задачи заполнено, а соответствующее поле шаблона пусто, информация в поле задачи затрется</p>
</li>
<li>
<p>Если на момент заполнения карточки по шаблону в ней уже имеются вложения,то они сохраняются, а не перезаполняются. Из шаблона добавляются только новые записи.

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
                     </div>   <div id="taskTemplatetab2" class="tabcontenttaskTemplate" style="display: none;">
                    taskTemplate/Шаблоны_групп_задач.adoc
  
                     </div></div>

<script>
function openPagetaskTemplate(pageName,elmnt) {
  var i, tabcontenttaskTemplate, tablinks;
  tabcontenttaskTemplate = document.getElementsByClassName("tabcontenttaskTemplate");
  for (i = 0; i < tabcontenttaskTemplate.length; i++) {
    tabcontenttaskTemplate[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinktaskTemplate");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpentaskTemplate").click();
</script>
`;