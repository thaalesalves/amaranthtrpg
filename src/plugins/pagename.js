const titlePlugin = config => (hook, vm) => {
    hook.doneEach(content => {
        var pageTitleCustomDefined = document.body.outerHTML.toString()
                .split('<!-- PageTitle:').pop()
                .split('-->')[0].trim();

        var pageTitle = !pageTitleCustomDefined.startsWith('<') ? pageTitleCustomDefined : titleCase(document.URL.split('/').slice(-1)[0]);
        pageTitle = pageTitle === '' ? 'Home' : pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
        document.title = `${pageTitle}${config.suffix}`;
    });
}

const titleCase = title => title.replace(/_/g, ' ')
        .replace(/^([a-z])|[ (]+([a-z])/g, l => l.toUpperCase());
