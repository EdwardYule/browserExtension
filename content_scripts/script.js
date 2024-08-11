if(window.location.pathname.includes('question')){
  const handleList = () => {
    setTimeout(() => {
      const listItems = Array.from(document.querySelectorAll('.AnswerItem'));
      listItems.forEach(element => {
        const head = element.querySelector('.ContentItem-meta');
        const richText = element.querySelector('.RichText');
        const headSpan = head.querySelector('.words');
        if (!headSpan) {
          const words = richText.innerText;
          const span = document.createElement('span');
          span.className = 'words';
          span.style = `margin-top: 8px;`
          span.innerText = `共有${words.length}个字`;
          head.appendChild(span);
          if(words.length > 1000){
            // 超过一千个字，就缩成高度500px，然后再展开
            // 但其实这样并不太准确
            richText.style = `height: 500px; overflow: hidden; display: block;`;
            const expandDiv = document.createElement('div');
            expandDiv.className = 'expandSpan';
            expandDiv.textContent = '展开';
            expandDiv.style = 'text-align: right; margin-top: 4px; cursor: pointer;'
            expandDiv.addEventListener('click', () => {
              richText.style = `height: auto; overflow: visible; display: block;`;
              expandDiv.remove();
            });
            richText.parentNode.appendChild(expandDiv);
          }
        }
      });
    });
  }
  window.addEventListener('load', () => {
    handleList();
    const element = document.querySelector('[role="list"]');
    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          handleList();
        }
      }
    });
    observer.observe(element, { childList: true }); // 开始观察
  })
}