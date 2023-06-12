function main() {
  const searchInput = document.querySelector(".search-input");
  const searchContent = document.getElementById("search-content");

  searchInput.addEventListener("click", () => {
    searchContent.classList.remove("hide");
  });

  searchInput.addEventListener("blur", () => {
    searchContent.classList.add("hide");
  });

  document.addEventListener(
    "keydown",
    (event) => {
      let name = event.key;
      if (name === "Control") {
        return;
      }

      if (event.ctrlKey) {
        if (name === "/") {
          searchContent.classList.toggle("hide");
          searchInput.focus();
        }
      }
    },
    false
  );

  // https://codepen.io/mehuldesign/pen/eYpbXMg
  let ul = document.getElementById("option-list");
  let liSelected;
  let index = -1;

  document.addEventListener(
    "keydown",
    function (event) {
      let len = ul.getElementsByTagName("li").length - 1;
      if (event.which === 40) {
        index++;
        //down
        if (liSelected) {
          removeClass(liSelected, "selected");
          next = ul.getElementsByTagName("li")[index];
          if (typeof next !== undefined && index <= len) {
            liSelected = next;
          } else {
            index = 0;
            liSelected = ul.getElementsByTagName("li")[0];
          }
          addClass(liSelected, "selected");
        } else {
          index = 0;

          liSelected = ul.getElementsByTagName("li")[0];
          addClass(liSelected, "selected");
        }
      } else if (event.which === 38) {
        //up
        if (liSelected) {
          removeClass(liSelected, "selected");
          index--;
          next = ul.getElementsByTagName("li")[index];
          if (typeof next !== undefined && index >= 0) {
            liSelected = next;
          } else {
            index = len;
            liSelected = ul.getElementsByTagName("li")[len];
          }
          addClass(liSelected, "selected");
        } else {
          index = 0;
          liSelected = ul.getElementsByTagName("li")[len];
          addClass(liSelected, "selected");
        }
      }
    },
    false
  );

  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
    }
  }

  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += " " + className;
    }
  }
}

document.addEventListener("DOMContentLoaded", main);
