const characters = [
  { 
    name: "Houtarou Oreki", 
    img: "oreki.jpg", 
    role: "main", 
    desc: "Lazy but brilliant when solving mysteries.",
    quotes: "If I don’t have to do something, I won’t.", 
    voiceActor: "Yûichi Nakamura", 
    personalityTraits: "Laziness, Intelligence, Sarcastic", 
    roleInStory: "Main Character"
  },
  { 
    name: "Eru Chitanda", 
    img: "eru.jpg", 
    role: "main", 
    desc: "A curious girl driven by mystery and wonder.",
    quotes: "I’m curious!", 
    voiceActor: "Chiwa Saito", 
    personalityTraits: "Curious, Enthusiastic, Determined", 
    roleInStory: "Main Character"
  },
  { 
    name: "Satoshi Fukube", 
    img: "satoshi.jpg", 
    role: "main", 
    desc: "The cheerful database of the Classic Club.",
    quotes: "I know everything about everyone!", 
    voiceActor: "Daisuke Hirakawa", 
    personalityTraits: "Confident, Knowledgeable, Playful", 
    roleInStory: "Main Character"
  },
  { 
    name: "Mayaka Ibara", 
    img: "mayaka.png", 
    role: "main", 
    desc: "Smart, sharp, and a manga enthusiast.",
    quotes: "I’m not interested in things I can’t understand.", 
    voiceActor: "Mai Nakahara", 
    personalityTraits: "Intelligent, Ambitious, Serious", 
    roleInStory: "Main Character"
  },
  { 
    name: "Tomoe Oreki", 
    img: "tomoe.png", 
    role: "supporting", 
    desc: "Oreki's insightful and mysterious sister.",
    quotes: "Don’t bother me unless you have a good reason.", 
    voiceActor: "Kikuko Inoue", 
    personalityTraits: "Mysterious, Independent, Intuitive", 
    roleInStory: "Supporting Character"
  },
  { 
    name: "Irisu Fuyumi", 
    img: "iris.png", 
    role: "supporting", 
    desc: "A manipulative senior known as 'The Empress'.",
    quotes: "I always get what I want.", 
    voiceActor: "Mai Nakahara", 
    personalityTraits: "Manipulative, Strategic, Confident", 
    roleInStory: "Supporting Character"
  },
  { 
    name: "Kaho Juumonji", 
    img: "kaho.png", 
    role: "supporting", 
    desc: "A friendly upperclassman with a secret role.",
    quotes: "I want to see how this turns out.", 
    voiceActor: "Ryo Hirohashi", 
    personalityTraits: "Friendly, Supportive, Mysterious", 
    roleInStory: "Supporting Character"
  },
  { 
    name: "Jun Sekitani",
    img: "sekitani.jpg",
    role: "side",
    desc: "Chitanda’s uncle whose mysterious past sets off the Classic Literature Club’s first big mystery.",
    quotes: "It was a different time.",
    voiceActor: "Hideo Ishikawa",
    personalityTraits: "Reserved, Idealistic, Tragic",
    roleInStory: "Central to the Hyouka anthology mystery"
  },
  { 
    name: "Misaki Sawakiguchi",
    img: "sawakiguchi.jpg",
    role: "side",
    desc: "Film club member and aspiring director with a sharp tongue.",
    quotes: "I want to make something meaningful.",
    voiceActor: "Saori Hayami",
    personalityTraits: "Passionate, Critical, Creative",
    roleInStory: "Part of the film club mystery arc"
  },
  { 
    name: "Midori Yamanishi",
    img: "yamanishi.jpg",
    role: "side",
    desc: "A cheerful student known for her involvement in various school events and her friendly demeanor.",
    quotes: "Let's make this event unforgettable!",
    voiceActor: "Ami Koshimizu",
    personalityTraits: "Energetic, Sociable, Enthusiastic",
    roleInStory: "Adds vibrancy to school events and supports the main characters' endeavors."
  },
  { 
    name: "Nakajou", 
    img: "nakajou.png", 
    role: "minor", 
    desc: "One of the Film Club's skeptical directors.",
    quotes: "Not sure if we should trust this...", 
    voiceActor: "Hikaru Midorikawa", 
    personalityTraits: "Skeptical, Cautious, Thoughtful", 
    roleInStory: "Minor Character"
  },
  { 
    name: "Yamauchi", 
    img: "yamauchi.png", 
    role: "minor", 
    desc: "Literature Club member seen at the festival.",
    quotes: "I just enjoy reading.", 
    voiceActor: "Kazuya Nakai", 
    personalityTraits: "Introverted, Intellectual, Calm", 
    roleInStory: "Minor Character"
  },
  { 
    name: "Shouko Yuasa",
    img: "yuasa.jpg",
    role: "side",
    desc: "Festival committee member, helps organize the cultural festival events.",
    quotes: "Everyone’s counting on us to make this work.",
    voiceActor: "Yumi Uchiyama",
    personalityTraits: "Organized, Responsible, Cooperative",
    roleInStory: "Helps coordinate festival events during the Juumonji arc"
  },
  { 
    name: "Ayako Kouchi",
    img: "kouchi.jpg",
    role: "side",
    desc: "A member of the Manga Club and a friend of Mayaka, known for her artistic skills and supportive nature.",
    quotes: "Art is the expression of one's soul.",
    voiceActor: "Masumi Asano",
    personalityTraits: "Artistic, Supportive, Creative",
    roleInStory: "Provides insight into Mayaka's interests and the dynamics of the Manga Club."
  },
  { 
    name: "Muneyoshi Kugayama",
    img: "kugayama.jpg",
    role: "side",
    desc: "A charismatic upperclassman and former student council president, admired for his leadership.",
    quotes: "Leadership is about inspiring others.",
    voiceActor: "Toshiyuki Morikawa",
    personalityTraits: "Charismatic, Responsible, Influential",
    roleInStory: "Serves as a role model and influences the student body's activities."
  },
  { 
    name: "Masakiyo Ogi",
    img: "masakiyo.jpg",
    role: "side",
    desc: "A dedicated teacher at Kamiyama High School, known for his strict yet caring approach to education.",
    quotes: "Discipline is the foundation of success.",
    voiceActor: "Kouji Yusa",
    personalityTraits: "Strict, Caring, Disciplined",
    roleInStory: "Provides guidance to students and maintains order within the school."
  }
];

  
    const characterGrid = document.querySelector(".character-grid");
    const modal = document.getElementById("characterModal");
    const closeModal = document.getElementById("closeModal");
  
    const modalImg = document.getElementById("modalImg");
    const modalName = document.getElementById("modalName");
    const modalDesc = document.getElementById("modalDesc");
    const modalQuotes = document.getElementById("modalQuotes");
    const modalVoiceActor = document.getElementById("modalVoiceActor");
    const modalAge = document.getElementById("modalAge");
    const modalRoleInStory = document.getElementById("modalRoleInStory");
  
    // Function to create character cards
    function displayCharacters(characterArray) {
      characterGrid.innerHTML = "";
      characterArray.forEach(char => {
        const card = document.createElement("div");
        card.className = "character-card";
        card.setAttribute("data-role", char.role.toLowerCase());
  
        card.innerHTML = `
          <div class="card-inner">
            <div class="card-front">
              <img src="${char.img}" alt="${char.name}">
              <h3>${char.name}</h3>
            </div>
            <div class="card-back">
              <div>
                <h3>${char.name}</h3>
                <p>${char.desc}</p>
                <button class="more-info-btn" data-name="${char.name}">More Info</button>
              </div>
            </div>
          </div>
        `;
        characterGrid.appendChild(card);
      });
  
      // Attach modal triggers to buttons
      document.querySelectorAll(".more-info-btn").forEach(button => {
        button.addEventListener("click", (e) => {
          const name = e.target.getAttribute("data-name");
          const char = characters.find(c => c.name === name);
          if (char) showModal(char);
        });
      });
    }
  
    // Show character modal
    function showModal(char) {
      modalImg.src = char.img;
      modalName.textContent = char.name;
      modalDesc.textContent = char.desc;
      modalQuotes.textContent = `"${char.quotes}"`;
      modalVoiceActor.textContent = `Voice Actor: ${char.voiceActor}`;
      modalAge.textContent = `Age: ${char.age}`;
      modalRoleInStory.textContent = `Role in Story: ${char.roleInStory}`;
      modal.classList.add("show");
    }
  
    // Close modal logic
    closeModal.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  
    // Filter buttons
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        const allCards = document.querySelectorAll(".character-card");
  
        allCards.forEach(card => {
          const role = card.getAttribute("data-role");
          if (filter === "all" || role === filter) {
            card.style.display = "inline-block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  
    // Initial load
    displayCharacters(characters);

    //sakura
    const container = document.getElementById("sakura-container");
  
    function createPetal() {
      const petal = document.createElement("div");
      petal.classList.add("sakura");
  
      const size = Math.random() * 10 + 10; // 10px to 20px
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
  
      petal.style.left = Math.random() * window.innerWidth + "px";
      petal.style.animationDuration = 5 + Math.random() * 5 + "s"; // 5s - 10s
      petal.style.opacity = Math.random() + 0.3;
  
      // Random end horizontal position for fluttering
      const xEnd = (Math.random() - 0.5) * 200 + "px";
      petal.style.setProperty('--x-end', xEnd);
  
      container.appendChild(petal);
  
      // Clean up after animation
      setTimeout(() => {
        container.removeChild(petal);
      }, 10000);
    }
  
    // Create petals repeatedly
    setInterval(createPetal, 300);

    