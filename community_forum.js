
  const sakuraContainer = document.getElementById('sakura-container');

  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('sakura');

    // Random horizontal start
    petal.style.left = Math.random() * 100 + 'vw';

    // Random duration and rotation offset
    petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
    petal.style.setProperty('--x-end', `${Math.random() * 100 - 50}px`);

    sakuraContainer.appendChild(petal);

    // Remove after 7 seconds
    setTimeout(() => {
      petal.remove();
    }, 7000);
  }

  // Sprinkle for 5 seconds after load
  window.addEventListener('load', () => {
    const interval = setInterval(createPetal, 150);
    setTimeout(() => clearInterval(interval), 5000); // sprinkle only for 5 seconds
  });

  document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('postTitle').value;
    const description = document.getElementById('postDescription').value;

    const postHTML = `
      <div class="forum-post">
        <h4>${title}</h4>
        <p>${description}</p>
        <button>Join Discussion</button>
      </div>
    `;

    document.querySelector('.forum-cards').insertAdjacentHTML('beforeend', postHTML);

    this.reset();
  });

