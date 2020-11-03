

const menus = new Map();
menus.set('features',featuresMenu);
menus.set('task', taskMenu);
menus.set('doc', docMenu);
menus.set('contracts',contractsMenu);
menus.set('meetings',meetingsMenu);
menus.set('chancellery',chancelleryMenu);

const articles = new Map();

articles.set('chancellery-actions-of-the-clerk', chancelleryActionsOfTheClerk);
articles.set('chancellery-archivist-actions', chancelleryArchivistActions);
articles.set('chancellery-common-data', chancelleryCommonData);
articles.set('chancellery-document-journals', chancelleryDocumentJournals);
articles.set('chancellery-quick-rregistration-form', chancelleryQuickRregistrationForm);
// articles.set('chancellery-re-registration', chancelleryRe-registration);
articles.set('chancellery-registration', chancelleryRegistration);
articles.set('chancellery-streaming-incoming', chancelleryStreamingIncoming);

articles.set('contracts-actions', contractsActions);
articles.set('contracts-all-my-documents', contractsAllMyDocuments);
articles.set('contracts-attachments', contractsAttachments);
articles.set('contracts-contracts', contractsContracts);
articles.set('contracts-process-diagram-and-roles', contractsProcessDiagramAndRoles);

articles.set('doc-awareness', docAwareness);
articles.set('doc-card', docCard);
articles.set('doc-contract', docContract);
articles.set('doc-endorsment', docEndorsment);
articles.set('doc-folders', docFolders);
articles.set('doc-prints', docPrints);
articles.set('doc-registration', docRegistration);
articles.set('doc-resolution', docResolution);
articles.set('doc-template', docTemplate);

// articles.set('features-attachments', featuresAttachments);
// articles.set('features-attachments0000', featuresAttachments0000);
//
// articles.set('банки-и-валюты', Банкиивалюты);
// articles.set('варианты-уведомлений', Вариантыуведомлений);
// articles.set('контрагенты', Контрагенты);
// articles.set('наша-организация', Нашаорганизация);
// articles.set('общие-справочники', Общиесправочники);
// articles.set('работа-со-списком', Работасосписком);
// articles.set('синхронизация', Синхронизация);
// articles.set('фильтрация', Фильтрация);
//
articles.set('meetings-actions', meetingsActions);
articles.set('meetings-actions_', meetingsActions_);
articles.set('meetings-attachments', meetingsAttachments);
articles.set('meetings-meetings', meetingsMeetings);
articles.set('meetings-process-diagram-and-roles', meetingsProcessDiagramAndRoles);
articles.set('meetings-process-diagram-and-roles_', meetingsProcessDiagramAndRoles_);
//
// articles.set('task-card', taskCard);
// articles.set('task-folders', taskFolders);
// articles.set('task-grouptask', taskGroupTask);
// articles.set('task-management', taskManagement);
// articles.set('task-periodtask', taskPeriodTask);
// articles.set('task-prints', taskPrints);
// articles.set('task-template', taskTemplate);








// articles.set('chancelleryactionsoftheclerk', chancelleryActionsOfTheClerk);
// articles.set('chancelleryarchivistactions', chancelleryArchivistActions);
// articles.set('chancellerycommondata', chancelleryCommonData);
// articles.set('chancellerydocumentjournals', chancelleryDocumentJournals);
// articles.set('chancelleryquickrregistrationform', chancelleryQuickRregistrationForm);
// articles.set('chancelleryre-registration', chancelleryRe-registration);
// articles.set('chancelleryregistration', chancelleryRegistration);
// articles.set('chancellerystreamingincoming', chancelleryStreamingIncoming);
// articles.set('contractsactions', contractsActions);
// articles.set('contractsactions2', contractsActions2);
// articles.set('contractsallmydocuments', contractsAllMyDocuments);
// articles.set('contractsattachments', contractsAttachments);
// articles.set('contractscontracts', contractsContracts);
// articles.set('contractsprocessdiagramandroles', contractsProcessDiagramAndRoles);
// articles.set('contractsprocessdiagramandroles2', contractsProcessDiagramAndRoles2);
// articles.set('docawareness', docAwareness);
// articles.set('doccard', docCard);
// articles.set('doccontract', docContract);
// articles.set('docendorsment', docEndorsment);
// articles.set('docfolders', docFolders);
// articles.set('docprints', docPrints);
// articles.set('docregistration', docRegistration);
// articles.set('docresolution', docResolution);
// articles.set('doctemplate', docTemplate);
// articles.set('featuresattachments', featuresAttachments);
// articles.set('featuresattachments0000', featuresAttachments0000);
// articles.set('filter', filter);
// articles.set('банки-и-валюты', Банкиивалюты);
// articles.set('варианты-уведомлений', Вариантыуведомлений);
// articles.set('контрагенты', Контрагенты);
// articles.set('наша-организация', Нашаорганизация);
// articles.set('общие-справочники', Общиесправочники);
// articles.set('работа-со-списком', Работасосписком);
// articles.set('синхронизация', Синхронизация);
// articles.set('фильтрация', Фильтрация);
// articles.set('meetingsactions', meetingsActions);
// articles.set('meetingsactions_', meetingsActions_);
// articles.set('meetingsattachments', meetingsAttachments);
// articles.set('meetingsmeetings', meetingsMeetings);
// articles.set('meetingsprocessdiagramandroles', meetingsProcessDiagramAndRoles);
// articles.set('meetingsprocessdiagramandroles_', meetingsProcessDiagramAndRoles_);
// articles.set('activity-log', ActivityLog);
// articles.set('additionally', Additionally);
// articles.set('attachments', Attachments);
// articles.set('card-comment', CardComment);
// articles.set('comments', Comments);
// articles.set('executive-discipline-control', ExecutiveDisciplineControl);
// articles.set('gantt-chart', GanttChart);
// articles.set('heirarhy', Heirarhy);
// articles.set('my-tasks', MyTasks);
// articles.set('print-forms', PrintForms);
// articles.set('process-actions', ProcessActions);
// articles.set('process-and-roles', ProcessAndRoles);
// articles.set('process-route', ProcessRoute);
// articles.set('scheduled-task', ScheduledTask);
// articles.set('search-folders', SearchFolders);
// articles.set('task-details', TaskDetails);
// articles.set('task-group', TaskGroup);
// articles.set('task-kind', TaskKind);

articles.set('task-management-process', taskManagementProcess);

// articles.set('task-report', TaskReport);
// articles.set('taskcard', taskCard);
// articles.set('taskfolders', taskFolders);
// articles.set('taskgrouptask', taskGroupTask);
// articles.set('taskmanagement', taskManagement);
// articles.set('taskperiodtask', taskPeriodTask);
// articles.set('taskprints', taskPrints);
// articles.set('tasktemplate', taskTemplate);
// articles.set('tasktemplate2', taskTemplate2);









articles.set('activity-log', activityLog);
articles.set('additionally', additionally);
articles.set('attachments', attachments);
articles.set('card-comment', cardComment);
articles.set('comments', comments);
articles.set('executive-discipline-control', executiveDisciplineControl);
articles.set('gantt-chart', ganttChart);
articles.set('heirarhy', heirarhy);
articles.set('my-tasks', myTasks);
articles.set('print-forms', printForms);
articles.set('process-actions', processActions);
articles.set('process-and-roles', processAndRoles);
articles.set('process-route', processRoute);
articles.set('scheduled-task', scheduledTask);
articles.set('search-folders', searchFolders);
articles.set('task-details', taskDetails);
articles.set('task-group', taskGroup);
articles.set('task-kind', taskKind);
articles.set('task-management-process', taskManagementProcess);
articles.set('task-report', taskReport);
// articles.set('taskcard', taskCard);
// articles.set('taskfolders', taskFolders);
// articles.set('taskgrouptask', taskGroupTask);
// articles.set('taskmanagement', taskManagement);
// articles.set('taskperiodtask', taskPeriodTask);
// articles.set('taskprints', taskPrints);
// articles.set('tasktemplate', taskTemplate);
// articles.set('tasktemplate2', taskTemplate2);








articles.set('chancelleryactionsoftheclerk', chancelleryActionsOfTheClerk);
articles.set('chancelleryarchivistactions', chancelleryArchivistActions);
articles.set('chancellerycommondata', chancelleryCommonData);
articles.set('chancellerydocumentjournals', chancelleryDocumentJournals);
articles.set('chancelleryquickrregistrationform', chancelleryQuickRregistrationForm);
// articles.set('chancelleryre-registration', chancelleryRe-registration);
articles.set('chancelleryregistration', chancelleryRegistration);
articles.set('chancellerystreamingincoming', chancelleryStreamingIncoming);
articles.set('contractsactions', contractsActions);
articles.set('contractsactions2', contractsActions2);
articles.set('contractsallmydocuments', contractsAllMyDocuments);
articles.set('contractsattachments', contractsAttachments);
articles.set('contractscontracts', contractsContracts);
articles.set('contractsprocessdiagramandroles', contractsProcessDiagramAndRoles);
articles.set('contractsprocessdiagramandroles2', contractsProcessDiagramAndRoles2);
articles.set('docawareness', docAwareness);
articles.set('doccard', docCard);
articles.set('doccontract', docContract);
articles.set('docendorsment', docEndorsment);
articles.set('docfolders', docFolders);
articles.set('docprints', docPrints);
articles.set('docregistration', docRegistration);
articles.set('docresolution', docResolution);
articles.set('doctemplate', docTemplate);
articles.set('featuresattachments', featuresAttachments);
articles.set('featuresattachments0000', featuresAttachments0000);
articles.set('filter', filter);
articles.set('банки-и-валюты', банкиивалюты);
articles.set('варианты-уведомлений', вариантыуведомлений);
articles.set('контрагенты', контрагенты);
articles.set('наша-организация', нашаорганизация);
articles.set('общие-справочники', общиесправочники);
articles.set('работа-со-списком', работасосписком);
articles.set('синхронизация', синхронизация);
articles.set('фильтрация', фильтрация);
articles.set('meetingsactions', meetingsActions);
articles.set('meetingsactions_', meetingsActions_);
articles.set('meetingsattachments', meetingsAttachments);
articles.set('meetingsmeetings', meetingsMeetings);
articles.set('meetingsprocessdiagramandroles', meetingsProcessDiagramAndRoles);
articles.set('meetingsprocessdiagramandroles_', meetingsProcessDiagramAndRoles_);
articles.set('activity-log', activityLog);
articles.set('activitylog', activityLog);
articles.set('additionally', additionally);
articles.set('attachments', attachments);
articles.set('card-comment', cardComment);
articles.set('cardcomment', cardComment);
articles.set('comments', comments);
articles.set('executive-discipline-control', executiveDisciplineControl);
articles.set('executivedisciplinecontrol', executiveDisciplineControl);
articles.set('gantt-chart', ganttChart);
articles.set('ganttchart', ganttChart);
articles.set('heirarhy', heirarhy);
articles.set('my-tasks', myTasks);
articles.set('mytasks', myTasks);
articles.set('print-forms', printForms);
articles.set('printforms', printForms);
articles.set('process-actions', processActions);
articles.set('process-and-roles', processAndRoles);
articles.set('process-route', processRoute);
articles.set('processroute', processRoute);
articles.set('scheduled-task', scheduledTask);
articles.set('scheduledtask', scheduledTask);
articles.set('search-folders', searchFolders);
articles.set('searchfolders', searchFolders);
articles.set('task-details', taskDetails);
articles.set('task-group', taskGroup);
articles.set('task-kind', taskKind);
articles.set('task-management-process', taskManagementProcess);
articles.set('task-report', taskReport);
articles.set('task', task);
articles.set('task2', task2);
articles.set('taskdetails', taskDetails);
articles.set('taskgroup', taskGroup);
articles.set('taskkind', taskKind);
articles.set('taskmanagementprocess', taskManagementProcess);
articles.set('taskreport', taskReport);










const initialArticles =  new Map();
// initialArticles.set('features',featuresAttachments)
// initialArticles.set('doc',docEndorsment)
// initialArticles.set('task',taskManagement)


getLinkTab();
back();
getLink();
changeMenu();
changeArticle();
changeTab();
