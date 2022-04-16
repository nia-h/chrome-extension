/* <iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe Example"></iframe> */

// // Get HTML head element
// var head = document.getElementsByTagName('HEAD')[0];
// // Create new link Element
// var link = document.createElement('link');
// // set the attributes for link element
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = '/hearts.css';

// console.log(link);

// // Append link element to HTML head
// head.appendChild(link);

// const newSound = document.createElement('audio');
// newSound.id = 'mySound';
// body.prepend(newSound);
// newSound.src = 'bellchime.mp3';

// // send message to background.js when page loads
// chrome.runtime.sendMessage({ notice: 'sending from content' });

// // receive message from background.js
// chrome.runtime.onMessage.addListener(function () {
//   console.log('sound should play');
//   newSound.play();
//   //   sendResponse({ farewell: 'goodbye' });
// });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(request.notice);
//   newSound.play();
//   sendResponse({ farewell: 'goodbye' });
// });

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   console.log(tabs);
//   //   chrome.tabs.executeScript(tabs[0].id, { code: console.log(tabs[0].id) });
// });
