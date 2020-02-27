# MCX-Bookmarklets

These scripts can be called from a bookmark in your browser to execute the associated script.  To add them: 
1. Create a new bookmark
2. For the URL, enter:  
  
    javascript:var r = new XMLHttpRequest();  
    r.open("GET", "[ScriptPath]", true);             
    r.onloadend = function (oEvent) {  
        new Function(r.responseText)();  
    };  
    r.send();  

3. Change the [ScriptPath] section to the associated script you want to run
-Be sure to use the link to the raw file (https://raw.githubusercontent.com....)

Example:  

    javascript:var r = new XMLHttpRequest();  
    r.open("GET", "https://raw.githubusercontent.com/albinobean/MCX-Bookmarklets/master/Share Dashboard.js", true);            
    r.onloadend = function (oEvent) {  
        new Function(r.responseText)();  
    };  
    r.send();
