function moveNavbar(){
  let windowInnerWidth = window.innerWidth;
  let navbar = $("#navbar");
  if(windowInnerWidth <= 993) {
      navbar.addClass("fixed-bottom");
      navbar.addClass("bg-dark");
  }
  if(windowInnerWidth >= 993){
      navbar.removeClass("fixed-bottom");
      navbar.removeClass("bg-dark");
  }
}

function showDropdown(navbarDropdown, list){
  $(navbarDropdown).addClass("show");
  $(navbarDropdown).prop("aria-expanded", true);
  $(list).addClass("show");
}

function hideDropdown(navbarDropdown, list){
  let windowInnerWidth = window.innerWidth;
  if(windowInnerWidth >= 993) {
      $(navbarDropdown).removeClass("show");
      $(navbarDropdown).prop("aria-expanded", false);
      $(list).removeClass("show");
  }
}
