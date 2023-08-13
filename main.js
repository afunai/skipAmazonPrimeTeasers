const callback = (mutationList, observer) => {
  if (mutationList.find(mutation => mutation.addedNodes.length > 0)) {
    const buttons = document.querySelectorAll('.atvwebplayersdk-infobar-container > div > :nth-child(2) > *');
    if (buttons) {
      for (const button of buttons) {
        if (button.innerText === 'スキップ') {
          console.log('skipping teaser :P');
          window.setTimeout(() => button.click(), 1000);
        }
      }
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(document.body, { childList: true, subtree: true });
