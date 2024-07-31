if(window.location.pathname.includes('question')){
  window.addEventListener('load', () => {
    const listItems = Array.from(document.querySelectorAll('.AnswerItem'));
    listItems.forEach(element => {
      const head = element.querySelector('.ContentItem-meta');
      console.dir(head)
      const richText = element.querySelector('.RichText');
      console.dir(richText)
      const words = richText.innerText;
      const span = document.createElement('span');
      span.innerText = `共有${words.length}个字`;
      head.appendChild(span);
    });
  })
}