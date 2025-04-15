
    const episodes = document.querySelectorAll('.episode');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.3
    });
  
    episodes.forEach(episode => {
      observer.observe(episode);
    });

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

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".episode-row").forEach((episodeEl, index) => {
          const stars = episodeEl.querySelectorAll(".star");
          const commentInput = episodeEl.querySelector(".comment-input");
          const submitBtn = episodeEl.querySelector(".submit-comment");
          const commentsList = episodeEl.querySelector(".comments-list");
      
          const storageKey = `episode-${index + 1}`;
      
          // Load previous rating and comments
          const savedData = JSON.parse(localStorage.getItem(storageKey)) || {};
          if (savedData.rating) {
            stars.forEach((star, i) => {
              if (i < savedData.rating) star.classList.add("active");
            });
          }
          if (savedData.comments) {
            savedData.comments.forEach(comment => {
              const p = document.createElement("p");
              p.textContent = comment;
              commentsList.appendChild(p);
            });
          }
      
          stars.forEach((star, i) => {
            star.addEventListener("click", () => {
              stars.forEach(s => s.classList.remove("active"));
              for (let j = 0; j <= i; j++) {
                stars[j].classList.add("active");
              }
      
              // Save rating to localStorage
              const data = JSON.parse(localStorage.getItem(storageKey)) || {};
              data.rating = i + 1;
              localStorage.setItem(storageKey, JSON.stringify(data));
            });
          });
      
          submitBtn.addEventListener("click", () => {
            const text = commentInput.value.trim();
            if (!text) return;
      
            const data = JSON.parse(localStorage.getItem(storageKey)) || {};
            data.comments = data.comments || [];
            data.comments.push(text);
            localStorage.setItem(storageKey, JSON.stringify(data));
      
            const p = document.createElement("p");
            p.textContent = text;
            commentsList.appendChild(p);
            commentInput.value = "";
          });
        });
      });
      
      document.addEventListener('DOMContentLoaded', () => {
        const episodes = document.querySelectorAll('.episode');
      
        episodes.forEach((episode, index) => {
          const stars = episode.querySelectorAll('.star');
          const episodeKey = `episode-rating-${index + 1}`;
      
          // Load saved rating
          const savedRating = localStorage.getItem(episodeKey);
          if (savedRating) {
            highlightStars(stars, parseInt(savedRating));
          }
      
          // Star click logic
          stars.forEach(star => {
            star.addEventListener('click', () => {
              const rating = parseInt(star.getAttribute('data-star'));
              localStorage.setItem(episodeKey, rating);
              highlightStars(stars, rating);
            });
          });
        });
      
        function highlightStars(stars, rating) {
          stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-star'));
            star.classList.toggle('rated', starValue <= rating);
          });
        }
      });

      document.querySelectorAll('.rating').forEach(ratingBlock => {
        const episodeNum = ratingBlock.dataset.episode;
        const defaultRating = parseInt(ratingBlock.dataset.rating, 10) || 0;
        const savedRating = localStorage.getItem(`episodeRating-${episodeNum}`);
        const stars = ratingBlock.querySelectorAll('.star');
      
        const applyRating = (rating) => {
          stars.forEach((star, index) => {
            star.classList.toggle('rated', index < rating);
          });
        };
      
        // Load saved or default rating
        const initialRating = savedRating ? parseInt(savedRating, 10) : defaultRating;
        applyRating(initialRating);
      
        // Save rating on click
        stars.forEach((star, index) => {
          star.addEventListener('click', () => {
            const rating = index + 1;
            localStorage.setItem(`episodeRating-${episodeNum}`, rating);
            applyRating(rating);
          });
        });
      });
      
      document.querySelectorAll('.rating').forEach(ratingBlock => {
        const episodeNum = ratingBlock.dataset.episode;
        const defaultRating = parseInt(ratingBlock.dataset.rating, 10) || 0;
        const savedRating = localStorage.getItem(`episodeRating-${episodeNum}`);
        const stars = ratingBlock.querySelectorAll('.star');
      
        const applyRating = (rating) => {
          stars.forEach((star, index) => {
            star.classList.toggle('rated', index < rating);
          });
        };
      
        // Load saved or default rating
        const initialRating = savedRating ? parseInt(savedRating, 10) : defaultRating;
        applyRating(initialRating);
      
        // Save rating on click
        stars.forEach((star, index) => {
          star.addEventListener('click', () => {
            const rating = index + 1;
            localStorage.setItem(`episodeRating-${episodeNum}`, rating);
            applyRating(rating);
          });
        });
      });
      