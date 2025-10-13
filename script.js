// Petit script pour interaction basique (effet de scroll sur bouton)

document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".btn");

  btns.forEach(btn => {
    btn.addEventListener("click", e => {
      if (btn.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(btn.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 50,
            behavior: "smooth"
          });
        }
      }
    });
  });
});


// Zoom image modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".zoomable").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

