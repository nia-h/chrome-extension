let color = '#3aa757';
console.log('background');

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log(
    'Updated! Default background color set to %cgreen',
    `color: ${color}`
  );
});

// receive message and create event listener for changing tabs
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension'
  );
  console.log('sent from tab.id=', sender.tab.id);

  chrome.tabs.onActivated.addListener(() => {
    chrome.tabs.query(
      { active: true, lastFocusedWindow: true },
      function (tabs) {
        var CurrTab = tabs[0];
        chrome.tabs.sendMessage(CurrTab.id, 'run');
      }
    );
  });
  sendResponse({ farewell: 'success?' });
});

// // receive callback and create event listener for changing tabs
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? 'from a content script:' + sender.tab.url
//       : 'from the extension'
//   );
//   if (typeof request.callback === 'object') {
//     chrome.tabs.onActivated.addListener(() => {
//       callback;
//     });
//     sendResponse({ farewell: 'success?' });
//   }
// });
