$(document).ready(function () {
  $("ul#searchFilter li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    // console.log($('ul li').hasClass('active'));
  });
});
const imagePath = "./images/";
var persons = [];

const data = [
  {
    name: "Janssen",
    image: "footer_logo.png",
    cat: "logo",
    keywords: "",
  },
  {
    name: "Janssen Medical Cloud",
    image: "footer_logo_2.png",
    cat: "logo",
    keywords: "",
  },
  {
    name: "Janssen With Me",
    image: "JWM_bg.png",
    cat: "logo",
    keywords: "",
  },
  {
    name: "Janssen With Me Blue",
    image: "JWM_logo.png",
    cat: "logo",
    keywords: "",
  },
  {
    name: "Janssen With Me White",
    image: "Janssen_with_Me.png",
    cat: "logo",
    keywords: "",
  },
  {
    name: "janssen oncology",
    image: "janssen-oncology.png",
    cat: "logo",
    keywords: "",
  },
  {
    name: "janssen oncology White",
    image: "Oncology_logo.png",
    cat: "logo",
    keywords: "",
  },
  {
    name: "Janssen Immunology",
    image: "Janssen-Immunology_Logo.png",
    cat: "logo",
    keywords: "",
  },
  {
    name: "Pharmacyclics",
    image: "Logo_Pharmacyclics.png",
    cat: "logo",
    keywords: "",
  },
 
  
  {
    name: "Tremfya",
    image: "CZ-EE-Tremfya Logo.png",
    cat: "logo",
    keywords: "czech replublic estonia",
  },
  {
    name: "Tremfya",
    image: "LT -Tremfya_Logo-.png",
    cat: "logo",
    keywords: "Luthvania",
  },
  {
    name: "Erleada",
    image: "CZ-Erleada_logo.png",
    cat: "logo",
    keywords: "slovenia",
  },
  {
    name: "Erleada",
    image: "HU-Erleada_logo.png",
    cat: "logo",
    keywords: "hungary",
  },
  {
    name: "Erleada White",
    image: "HU-Erleada_logo_white.png",
    cat: "logo",
    keywords: "hungary",
  },
  {
    name: "Darzalex SC Hungary",
    image: "Darzalex _SC_Logo.png",
    cat: "logo",
    keywords: "hungary",
  },
  {
    name: "Darzalex SC Slovenia",
    image: "SI_Darzalex _SC_Logo.png",
    cat: "logo",
    keywords: "slovenia",
  },
  {
    name: "Arrow",
    image: "arrow.png",
    cat: "icon",
    keywords: "bulgaria",
  },
  {
    name: "Profile",
    image: "Icon-1-01.png",
    cat: "icon",
    keywords: "czech republic",
  },
  {
    name: "Target",
    image: "Icon-2-02.png",
    cat: "icon",
    keywords: "slovakia",
  },
  {
    name: "Do not forward",
    image: "CZ_donotforward.png",
    cat: "footer",
    keywords: "czech republic",
  },
  {
    name: "Border line",
    image: "border_line2.png",
    cat: "icon",
    keywords: "czech",
  },
  {
    name: "info",
    image: "Image_2.png",
    cat: "icon",
    keywords: "czech republic",
  },
  {
    name: "Do not forward",
    image: "EE_donotforward.png",
    cat: "footer",
    keywords: "Estonia",
  },
  {
    name: "Do not forward",
    image: "HU_donotforward.png",
    cat: "footer",
    keywords: "hungary",
  },
  {
    name: "Do not forward",
    image: "SI_donotforward.png",
    cat: "footer",
    keywords: "slovenia",
  },
  {
    name: "Border line",
    image: "border_line.png",
    cat: "icon",
    keywords: "",
  },
  {
    name: "Top shadow",
    image: "top.png",
    cat: "icon",
    keywords: "",
  },
  {
    name: "Bottom shadow",
    image: "bottom.png",
    cat: "icon",
    keywords: "",
  },
 
  {
    name: "Contact",
    image: "Icon-3-03.png",
    cat: "icon",
    keywords: "",
  },
];

for (var i = 0; i < data.length; i++) {
  persons.push({
    name: data[i].name,
    image: imagePath+data[i].cat+'/' + data[i].image,
    cat: data[i].cat,
    keywords: data[i].keywords,
  });
}
