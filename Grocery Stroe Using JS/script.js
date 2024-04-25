//Script for overlay
document.addEventListener("DOMContentLoaded", function () {
  var loc = document.getElementById("location");
  var exit = document.getElementById("cross");
  var overlay = document.getElementById("blur");
  if (loc) {
    loc.addEventListener("click", clickHandler);
    exit.addEventListener("click", crosshandler);
    overlay.addEventListener("click", closePopup);
  }

  // Click Handlers for Overlay
  function clickHandler() {
    document.getElementById("blur").style.display = "block";
  }
  function crosshandler() {
    document.getElementById("blur").style.display = "none";
  }
  function closePopup(event) {
    const blur = document.getElementById("blur");
    if (event.target == blur) {
      blur.style.display = "none";
    }
  }

  // Script for Dynamic Loading of Products
      $.getJSON("project.json", function (val) {
      var newContainer = document.getElementById("photosJson");
      var values = val.items;
      var section = document.createElement("section");
      section.className = "specialoffers";
      if (newContainer) {
        for (var i = 0; i < values.length; i++) {
          var article = values[i];
          var articleDiv = document.createElement("article");
          var count = 100 - article.availableStock;
          if ("discount" in article && article.discount !== "") {
            articleDiv.innerHTML = `<pre><span> ${article.discount}% </span></pre> 
        <a href="thumnail.html"><div class = "item-img"><img src="${article.img}" alt= "Product-image" style="width:150px;" /></div></a>
        <p class="offer-price">$${article.price}</p>
        <p>${article.name}</p>
        <div class="review-stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i
                class="fa-solid fa-star-half-stroke"
               
              ></i>
              4.3(68)
            </div>
            <p class="availibility">IN STOCK</p>
            <progress
              class="custom-progress"
              id="#"
              max="100"
              value="${count}"
            ></progress>
            <p>the available products: ${article.availableStock}</p>`;
          } else {
            articleDiv.innerHTML = `<pre> ‎ </pre> 
        <a href="thumnail.html"><div class = "item-img"><img src="${article.img}" alt= "Product-image" style="width: 150px;" /></div></a>
        <p class="offer-price">$${article.price}</p>
        <p>${article.name}</p>
        <div class="review-stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              4.3(68)
            </div>
            <p class="availibility">IN STOCK</p>
            <progress
              class="custom-progress"
              id="#"
              max="100"
              value="${count}"
            ></progress>
            <p>the available products: ${article.availableStock}</p>`;
          }
          section.appendChild(articleDiv);
        }
        newContainer.appendChild(section);
      }
    })
});

// Thumnail Images Switching
function displayImage(imageUrl) {
  var displayedImage = document.getElementById("image-space");
  displayedImage.src = imageUrl;
}

//number increment decrement
let a = 1;
function plus() {
  var num = document.querySelector(".num");
  a++;
  a = a < 10 ? "0" + a : a;
  num.innerText = a;
}
function minus() {
  var num = document.querySelector(".num");
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
  }
}

//Script for Section switching
function showSegment(segmentId, linkId) {
  const segments = document.querySelectorAll(".segment");
  segments.forEach((segment) => {
    segment.style.display = "none";
  });
  const selectedSegment = document.getElementById(segmentId);
  selectedSegment.style.display = "block";

  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.classList.remove("active-link");
  });
  const selectedLink = document.getElementById(linkId);
  selectedLink.classList.add("active-link");
}
