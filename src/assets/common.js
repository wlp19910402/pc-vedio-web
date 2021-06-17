/** 屏蔽F1帮助 */
window.onhelp = function () { return false; }
document.onkeydown = function (event) {
  event = window.event || event;
  if (event.keyCode == 116 || (event.ctrlKey && event.keyCode == 78) || (event.shiftKey && event.keyCode == 121) || (event.altKey && event.keyCode == 115)) {
    event.keyCode = 0;
    event.returnvalue = false;
  }
}
/** 屏蔽鼠标右键 */
document.oncontextmenu = function () { return false; }
document.onmousedown = function (event) {
  event = window.event || event;
  if (document.all && event.button == 2) {
    event.returnvalue = false;
  }
}

/** 屏蔽选中网页内容 */
document.onselectstart = function () { return false; }

/** 屏蔽复制网页内容 */
document.body.oncopy = function () { return false; }

/** 屏蔽剪切网页内容 */
document.body.oncut = function () { return false; }

/** 屏蔽向网页粘贴内容 */
document.body.onpaste = function () { return false; }

/** 屏蔽拷屏（不停的清空剪贴板） */
window.setInterval('window.clipboardData("Text", "")', 100);

