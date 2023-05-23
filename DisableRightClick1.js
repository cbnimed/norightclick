<script>
    function prevententer () {
 if(event.keyCode == 13) {
  return false;
 }
}
</script>
<script>
jQuery(document).ready(function() {
    function disableSelection(e) {
        if (typeof e.onselectstart != "undefined") e.onselectstart = function() {
            return false
        };
        else if (typeof e.style.MozUserSelect != "undefined") e.style.MozUserSelect = "none";
        else e.onmousedown = function() {
            return false
        };
        e.style.cursor = "default"
    }
    window.onload = function() {
        disableSelection(document.body)
    };

    window.addEventListener("keydown", function(e) {
        if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
            e.preventDefault()
        }
    });
    document.keypress = function(e) {
        if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 70 || e.which == 67 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {}
        return false
    };

    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == 123 || e.keyCode == 18) {
            return false
        }
    };

    document.oncontextmenu = function(e) {
        var t = e || window.event;
        var n = t.target || t.srcElement;
        if (n.nodeName != "A") return false
    };
    document.ondragstart = function() {
        return false
    };
});
</script>
<script>
    // Vanilla JS way
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
});

// jQuery way
$(document).bind('contextmenu', function(e) {
    e.preventDefault();
});
</script>
<script>
document.onmousedown = rightclickD;
            function rightclickD(e) 
            { 
                e = e||event;
                console.log(e);
                if (e.button == 2) {
                //alert('Right click disabled!!!'); 
                 return false; }
            }
</script>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};
$(document).keypress("u",function(e) {
  if(e.ctrlKey)
  {
return false;
}
else
{
return true;
}
});
</script>

<script>
document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 85 )) {
            return false;
        }
};
</script>

<script>
  document.onkeydown = function(e) {
    if (e.ctrlKey && e.keyCode === 85) {
      return false;
    }
  };
</script>

<script>
/*function check(e)
{
alert(e.keyCode);
}*/
 document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 ||     e.keyCode === 117 || e.keycode === 17 || e.keycode === 85)) {//ctrl+u Alt+c, Alt+v will also be disabled sadly.
        alert('not allowed');
    }
    return false;
};
</script>

<script>
    function prevententer () {
 if(event.keyCode == 13) {
  return false;
 }
}
</script>
<script>
jQuery(document).ready(function() {
    function disableSelection(e) {
        if (typeof e.onselectstart != "undefined") e.onselectstart = function() {
            return false
        };
        else if (typeof e.style.MozUserSelect != "undefined") e.style.MozUserSelect = "none";
        else e.onmousedown = function() {
            return false
        };
        e.style.cursor = "default"
    }
    window.onload = function() {
        disableSelection(document.body)
    };

    window.addEventListener("keydown", function(e) {
        if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
            e.preventDefault()
        }
    });
    document.keypress = function(e) {
        if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 70 || e.which == 67 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {}
        return false
    };

    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == 123 || e.keyCode == 18) {
            return false
        }
    };

    document.oncontextmenu = function(e) {
        var t = e || window.event;
        var n = t.target || t.srcElement;
        if (n.nodeName != "A") return false
    };
    document.ondragstart = function() {
        return false
    };
});
</script>
<script>
    // Vanilla JS way
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
});

// jQuery way
$(document).bind('contextmenu', function(e) {
    e.preventDefault();
});
</script>
<script>
document.onmousedown = rightclickD;
            function rightclickD(e) 
            { 
                e = e||event;
                console.log(e);
                if (e.button == 2) {
                //alert('Right click disabled!!!'); 
                 return false; }
            }
</script>
<script language="javascript">
function noLeftClick() {
if (event.button==1) {
alert('You can NOT Left-Click on this page -- but you CAN Right-Click.')
}
}
document.onmousedown=noLeftClick
</script>
<script type="text/javascript">
function clickIE() {if (document.all) {return false;}}
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {return false;}}}
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=function(){return false;};
</script>

<!--  ////////////////////////////////////////////////////////  -->