/**
 * Capitalizes first letter of every word
 *
 * @param {string} title
 * @returns string with every first letter in upper case
 */
const titleCase = title => title.replace(/_/g, ' ')
        .replace(/^([a-z])|[ (]+([a-z])/g, letter => letter.toUpperCase());

/**
 * Extracts custom page title created with @PageTitle comment in markdown files
 *
 * @returns string with custom title included in page comment
 */
const extractCustomTitle = () => document.body.outerHTML.toString()
        .split('<!-- @PageTitle:').pop().split('-->')[0].trim();

const titlePlugin = config => (hook, vm) => {
    hook.doneEach(content => {
        var pageTitle = !extractCustomTitle().startsWith('<') ? extractCustomTitle() : titleCase(document.URL.split('/').slice(-1)[0]);
        document.title = `${pageTitle === '' ? 'Home' : pageTitle}${config.suffix}`;
    });
}
