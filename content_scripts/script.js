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