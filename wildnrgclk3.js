//<![CDATA[
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
});

// jQuery way
$(document).bind('contextmenu', function(e) {
    e.preventDefault();
});
//]]>