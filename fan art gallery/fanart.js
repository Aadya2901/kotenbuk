document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
      const countSpan = button.querySelector('.like-count');
      let count = parseInt(countSpan.textContent);
      countSpan.textContent = count + 1;
    });
  });
 