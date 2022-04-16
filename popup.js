// Initialize butotn with users's prefered color
console.log('popup js');
let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: injectIframe,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get('color', ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

function injectIframe() {
  // if overlay exists, remove it
  const specialDiv = document.querySelector('#uniqueID');
  if (specialDiv) {
    console.log('removing');
    specialDiv.remove();
    return;
  }

  console.log('creating');
  const body = document.querySelector('body');

  // create a div ( our overlay )
  const div = document.createElement('div');
  div.style = 'height: 100%; width: 100%;';
  div.style.pointerEvents = 'none';
  div.style.position = 'fixed';
  div.style.zIndex = 100;
  div.style.top = 0;
  div.style.left = 0;
  div.style.right = 0;
  div.style.bottom = 0;

  div.style.backgroundImage =
    'url(https://divi.space/wp-content/uploads/2019/02/hearts.png)';
  div.id = 'uniqueID';
  div.animate(
    [
      {
        // from
        backgroundPosition: '0% -30%',
      },
      // {
      //   // to
      //   backgroundPosition: '30%',
      // },
    ],
    {
      duration: 18000,
      iterations: Infinity,
    }
  );

  // prepend div to body
  body.prepend(div);

  // prepend div to body

  //var cssAnimation = document.createElement('style');
  // cssAnimation.type = 'text/css';
  // var rules = document.createTextNode('@-webkit-keyframes slider {'+
  // 'from { left:100px; }'+
  // '80% { left:150px; }'+
  // '90% { left:160px; }'+
  // 'to { left:150px; }'+
  // '}');
  // cssAnimation.appendChild(rules);
  // document.getElementsByTagName("head")[0].appendChild(cssAnimation);
}
