const docFolders = `<!DOCTYPE html>
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
<div class="tabs" id="docFoldersTabs"><button class="tablinkdocFolders" onclick="openPage('docFolderstab1', this)" id="defaultOpendocFolders">
  Папки действий</button><button class="tablinkdocFolders" onclick="openPage('docFolderstab2', this)" >
  Папки поиска</button><button class="tablinkdocFolders" onclick="openPage('docFolderstab3', this)" >
  </button></div>
      <div class="tabsPages" id="docFoldersPages">   <div id="docFolderstab1" class="tabcontentdocFolders" style="display: none;">
                    <div class="sect1">
<h2 id="_папки_действий">Папки действий</h2>
<div class="sectionbody">
<div class="paragraph">
<p>В данных папках отображаются карточки, с которыми вам нужно выполнить действие. Количество отображаемых в этой категории папок зависит от роли пользователя.
Рядом с названием папок отображается число входящих в них карточек. Если по документам и задачам, входящим в папки, имеются непросмотренные уведомления, то счетчик будет выделен цветом и жирным шрифтом</p>
</div>
<div class="paragraph">
<p><div class="blockDrop">
<div class="content">
<div class="tabBody">
<input type="checkbox" id="Документы217" class="hide"/>
<label class="detail-title" for="Документы217">Документы</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="paragraph">
<p>Черновики – документы, договоры и совещания, созданные данным пользователем, но не отправленные по какому-либо процессу. Отображается, если у вас есть роль Инициатор документов
Согласование – документы и договоры, направленные на согласование данному пользователю. Отображается, если у вас есть роль Согласующий
 Доработка – документы и договоры, возвращенные данному пользователю на доработку. Отображается, если у вас есть роль Инициатор документов
Утверждение – документы и договоры, направленные данному пользователю на утверждение. Отображается, если у вас есть роль Утверждающий
Ознакомление – документы, направленные для ознакомления данному пользователю. Отображается, если у вас есть роль Ознакомляющийся

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
<input type="checkbox" id="Канцелярия433" class="hide"/>
<label class="detail-title" for="Канцелярия433">Канцелярия</label>
<div class="detail-content">
<div class="dc">
</p>
</div>
<div class="paragraph">
<p>Документы и договоры могут также определяться в папки канцелярии:
 Потоковая обработка входящих – документы, подготовленные для регистрации в системе. Отображается только для делопроизводителя с ролью инициатора документов
 Регистрация – документы и договоры, требующие регистрации. Отображается только для делопроизводителя
 Резолюция – документы и договоры, направленные на резолюцию данному пользователю. Отображается только для утверждающего
 Обработка резолюции – документы и договоры, на которые была наложена резолюция, которая должна быть обработана. Отображается, если пользователь имеет роль Инициатор документов
 Отправка в ЭДО – документы и договоры, ожидающие отправки в ЭДО. Отображается, если пользователь имеет роль Оператор ЭДО

</div>
</div>
</div>
</div>
</div></p>
</div>
</div>
</div>
                     </div>   <div id="docFolderstab2" class="tabcontentdocFolders" style="display: none;">
                    
                     </div>   <div id="docFolderstab3" class="tabcontentdocFolders" style="display: none;">
                    
                     </div></div>

<script>
function openPagedocFolders(pageName,elmnt) {
  var i, tabcontentdocFolders, tablinks;
  tabcontentdocFolders = document.getElementsByClassName("tabcontentdocFolders");
  for (i = 0; i < tabcontentdocFolders.length; i++) {
    tabcontentdocFolders[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkdocFolders");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderBottom = "solid #ffffff00 2px";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.borderBottom = "solid #37c6ff 2px";
}
document.getElementById("defaultOpendocFolders").click();
</script>
`;