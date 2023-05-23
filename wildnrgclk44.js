
document.onmousedown = rightclickD;
            function rightclickD(e) 
            { 
                e = e||event;
                console.log(e);
                if (e.button == 2) {
                //alert('Right click disabled!!!'); 
                 return false; }
            }