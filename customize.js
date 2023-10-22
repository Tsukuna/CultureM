// for product details
document.addEventListener("DOMContentLoaded", function () {
    const circleImageLinks = document.querySelectorAll(".circle-image-link");
    const sidebarImageLinks = document.querySelectorAll(".sidebar-image-link");
    const carouselInner = document.querySelector(".carousel-inner");
    const carousel = document.getElementById("carouselExampleFade");
    const carouselInstance = bootstrap.Carousel.getInstance(carousel);
  
    circleImageLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("data-target");
        const targetCarouselItem = document.getElementById(targetId);
  
        // Update the carousel to show the clicked item
        const carouselItems = Array.from(carousel.querySelectorAll(".carousel-item"));
        const targetIndex = carouselItems.indexOf(targetCarouselItem);
        carouselInstance.to(targetIndex);
  
        // Update the sidebar to show the clicked item's sidebar-image-link
        sidebarImageLinks.forEach(sidebarImageLink => {
          if (sidebarImageLink.getAttribute("href") === `#${targetId}`) {
            sidebarImageLink.classList.add("active");
          } else {
            sidebarImageLink.classList.remove("active");
          }
        });
      });
    });
  
    sidebarImageLinks.forEach((link, index) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1); 
        const targetCarouselItem = document.getElementById(targetId);
  
        carouselInner.querySelectorAll(".carousel-item").forEach((item) => {
          item.classList.remove("active");
        });
  
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item", "active");
        carouselItem.innerHTML = `
              <a href="#">
                <img src="${link.querySelector("img").src}" alt="" class="object-fit-cover border rounded" style="width: 600px; height: 799px;">
              </a>
            `;
  
        carouselInner.appendChild(carouselItem);
  
        carouselInstance.to(index + 1);
      });
    });
  });

  // Get all circle-image-link elements
const circleImageLinks = document.querySelectorAll('.circle-image-link');

circleImageLinks.forEach(circleImageLink => {
  circleImageLink.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = circleImageLink.getAttribute('data-target');

    const carouselItem = document.getElementById(targetId);
    const sidebarImageLink = document.querySelector(`a.sidebar-image-link[data-target="${targetId}"]`);

    document.querySelectorAll('.carousel-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('a.sidebar-image-link').forEach(link => link.classList.remove('active'));

    carouselItem.classList.add('active');
    sidebarImageLink.classList.add('active');
  });
});