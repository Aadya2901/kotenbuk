document.querySelectorAll('.episode-rating').forEach(ratingContainer => {
  const stars = ratingContainer.querySelectorAll('.star');

  stars.forEach((star, idx) => {
    // Hover effect
    star.addEventListener('mouseover', () => {
      stars.forEach((s, i) => {
        s.classList.toggle('hovered', i <= idx);
      });
    });

    // Reset on mouse out
    star.addEventListener('mouseout', () => {
      stars.forEach(s => s.classList.remove('hovered'));
    });

    // Click to rate
    star.addEventListener('click', () => {
      const selectedValue = parseInt(star.dataset.value);
      stars.forEach((s, i) => {
        s.classList.toggle('selected', i < selectedValue);
      });

      // Optional: Save rating to localStorage or send to backend
      const episode = ratingContainer.dataset.episode;
      localStorage.setItem(`rating-episode-${episode}`, selectedValue);
    });

    // Load saved rating
    const episode = ratingContainer.dataset.episode;
    const savedRating = localStorage.getItem(`rating-episode-${episode}`);
    if (savedRating) {
      stars.forEach((s, i) => {
        s.classList.toggle('selected', i < savedRating);
      });
    }
  });
});
