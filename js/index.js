$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

/////////////////////////////
// Some attempts at vanilla js

// This works but has limited browser support

// let anchorlinks = document.querySelectorAll('a[href^="#"]');

// for (let item of anchorlinks) {
//     // relitere
//     item.addEventListener("click", (e) => {
//         let hashval = item.getAttribute("href");
//         let target = document.querySelector(hashval);
//         target.scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         });
//         history.pushState(null, null, hashval);
//         e.preventDefault();
//     });
// }

// Not currently working

// var anchorlinks = document.querySelectorAll('a[href^="#"]');
// console.log(anchorlinks);

// var anchorlinks = document.querySelectorAll('a[href^="#"]');

// var blob = Object.values(anchorlinks);
// console.log(blob);

// for (var item of anchorlinks) {
//   // relitere
//   item.addEventListener("click", (e) => {
//     var hashval = item.getAttribute("href");
//     var target = document.querySelector(hashval);
//     target.scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     });
//     history.pushState(null, null, hashval);
//     e.preventDefault();
//   });
// }

// var anchorlinks = document.querySelectorAll('a[href^="#"]');

// var blob = Object.values(anchorlinks);
// console.log(blob);

// blob.forEach(function(item) {
//   item.addEventListener("click", function(e) {
//     var hashval = item.getAttribute("href");
//     var target = document.querySelector(hashval);
//     target.scrollIntoView({
//       behaviour: "smooth",
//       block: "start"
//     });
//     history.pushState(null, null, hashval);
//     e.preventDefault();
//   });
// });

// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function(e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth"
//     });
//   });
// });
