const callback = (mutationList, observer) => {
  if (mutationList.find(mutation => mutation.addedNodes.length > 0)) {
    const buttons = document.querySelectorAll('.atvwebplayersdk-infobar-container > div > :nth-child(2) > *');
    if (buttons) {
      for (const button of buttons) {
        if (button.innerText === 'スキップ') {
          button.innerText = '*スキップ*';
          window.setTimeout(() => {
            if (button.innerText === '*スキップ*') {
              console.log('skipping teaser :P');
              button.click();
            }
          }, 500);
        }
      }
    }
  }

  const nextCardHideButton = document.querySelector('button.atvwebplayersdk-nextupcardhide-button');
  if (nextCardHideButton) {
    console.log('hide next card :P');
    nextCardHideButton.click();
  }
};
const observer = new MutationObserver(callback);
observer.observe(document.body, { childList: true, subtree: true });
