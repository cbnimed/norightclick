//<![CDATA[
function noLeftClick() {
if (event.button==1) {
alert('You can NOT Left-Click on this page -- but you CAN Right-Click.')
}
}
document.onmousedown=noLeftClick
//]]>