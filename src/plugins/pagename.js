const titlePlugin = config => {
    return (hook, vm) => {
        hook.doneEach((content) => {
            var pageTitle = document.URL.split('/').slice(-1)[0];
            pageTitle = pageTitle === '' ? 'Home' : pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
            document.title = titleCase(`${pageTitle}${config.suffix}`);
        });
    }
}

const titleCase = title => title.split(/ /g)
        .map(word => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`)
        .join(" ")
        .replaceAll('_', ' ');