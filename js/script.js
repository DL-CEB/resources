const resourcesList = document.getElementById("resourcesList");
const searchBar = document.getElementById("searchQueryInput");
const filter = document.getElementById("searchFilter");
let hpResources = [];

$(document).ready(function () {
  $("ul#searchFilter li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    filterString = $(this).attr("cat");
  });
});

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredResources = hpResources.filter((resource) => {
    return resource.name.toLowerCase().includes(searchString);
  });
  displayResources(filteredResources);
});

const loadResources = async () => {
  try {
    const res = persons;
    console.log(persons);
    hpResources = res;
    console.error(hpResources);
    displayResources(hpResources);
  } catch (err) {
    console.error(err);
  }
};

const displayResources = (resources) => {
  const htmlString = resources
    .map((resource) => {
      return `
      <div class="card">
      <div class="image">
        <img src="./images/logos/Darzalex _SC_Logo.png" alt="">
      </div>
      <p>${resource.name}</p>
    </div>
        `;
    })
    .join("");
  resourcesList.innerHTML = htmlString;
};

loadResources();
