const data = [
  {
    name: "Nabeel",
    cat:"logo"
  },
  {
    name: "Razeena",
    cat:"logo"
  },
  {
    name: "Anjun",
    cat:"footer"
  },
  {
    name: "Nawaf",
    cat:"logo"
  },
  {
    name: "Shaheef",
    cat:"icon"
  },
  {
    name: "Saurav",
    cat:"icon"
  },
  
];

var persons = [];

for (let i = 0; i < data.length; i++) {
  persons.push({
    name: data[i].name,
    cat: data[i].cat,
  });
}
