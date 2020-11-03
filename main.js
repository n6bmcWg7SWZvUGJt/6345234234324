

const menus = new Map();
menus.set('features',featuresMenu);
menus.set('task', taskMenu);
menus.set('doc', docMenu);
menus.set('contracts',contractsMenu);
menus.set('meetings',meetingsMenu);
menus.set('chancellery',chancelleryMenu);

const articles = new Map();


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
