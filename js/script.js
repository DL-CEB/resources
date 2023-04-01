const resourcesList = document.getElementById("resourcesList");
const searchBar = document.getElementById("searchQueryInput");
let hpResources = [];
const filterItems = document.querySelectorAll("#searchFilter li");
let searchTerm = "all";
let searchString = ''

filterItems.forEach((filter) => {
  filter.addEventListener("click", function () {
    searchTerm = filter.innerHTML.toLowerCase();
    const filteredResources = hpResources.filter((resource) => {
      return (resource.name.toLowerCase().includes(searchString)||resource.keywords.toLowerCase().includes(searchString)) && (resource.cat.toLowerCase().includes(searchTerm) || searchTerm=='all');
    });
    displayResources(filteredResources);
  });
});

searchBar.addEventListener("keyup", (e) => {
  searchString = e.target.value.toLowerCase();
  const filteredResources = hpResources.filter((resource) => {
    return (resource.name.toLowerCase().includes(searchString)||resource.keywords.toLowerCase().includes(searchString)) && (resource.cat.toLowerCase().includes(searchTerm) || searchTerm=='all');
  });
  displayResources(filteredResources);
});

const loadResources = async () => {
  try {
    const res = persons;
    hpResources = res;
    displayResources(hpResources);
  } catch (err) {
    console.error(err);
  }
};

const displayResources = (resources) => {
  let htmlString = 'No results'
  if(resources.length!=0){
    htmlString = resources
      .map((resource) => {
        return `
        <div class="card">
        <a href="${resource.image}" class="download" download><img src="./images/download-icon.png" alt="" >
        </a>
        <div class="image">
          <img src="${resource.image}" alt="">
        </div>
        <p>${resource.name}</p>
      </div>
          `;
      })
      .join("");
  }
  resourcesList.innerHTML = htmlString;
};

loadResources();
