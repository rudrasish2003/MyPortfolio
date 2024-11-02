// Include Swiper JS
const script = document.createElement('script');
script.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
document.head.appendChild(script);

script.onload = () => {
  // Function to fetch projects from GitHub
  async function fetchGitHubProjects() {
    try {
      const username = 'rudrasish2003'; // Your GitHub username
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const projects = await response.json();
      // Get the slider container
      const sliderContainer = document.getElementById('project-slider');

      projects.forEach(project => {
        // Create a slide for each project
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
          <div class="blog-entry justify-content-end">
            <a href="${project.html_url}" class="block-20 zoom-effect" target="_blank">
              <div class="text mt-3 float-right d-block">
                <h3 class="heading"><a href="${project.html_url}" target="_blank">${project.name}</a></h3>
                <p>${project.description || "No description provided."}</p>
              </div>
            </a>
          </div>`;
        sliderContainer.appendChild(slide);
      });

      // Initialize Swiper
      new Swiper('.swiper-container', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 30,
      });
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
    }
  }

  fetchGitHubProjects();
};
