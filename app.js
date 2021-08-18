let vid = document.querySelector(".video1");
let vid2 = document.querySelector(".video2");
vid.onended = function () {
  vid.style.display = "none";
  vid2.style.display = "initial";
};
