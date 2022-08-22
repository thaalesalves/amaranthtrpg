function titlePlugin(config) {
    return (hook, vm) => {
        hook.doneEach((content) => {
            var pageTitle = document.URL.split('/').slice(-1)[0];
            pageTitle = pageTitle === '' ? 'Home' : pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
            document.title = `${pageTitle}${config.suffix}`.replace('_', ' ');
        });
    }
}