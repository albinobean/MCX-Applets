# MCX-Bookmarklets

These scripts can be called from a bookmark in your browser to execute the associated script.  To add them: 
1. Create a new bookmark
2. For the URL, enter: javascript:(function(){document.body.appendChild(document.createElement('script')).src='[ScriptPath]';})();

3. Change the [ScriptPath] section to the associated script you want to run

Example: javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://github.com/albinobean/MCX-Bookmarklets/blob/master/Share%20Dashboard.js';})();
