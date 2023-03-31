

// CODE FOR Search AND filter

function filterSearch2(){
  var search = $(".uk-search-input").eq(1).val().toLowerCase();
  if(!search){
    $(".uk-search-input").eq(1).attr("uk-filter-control", "group: name");
  }else{
    $(".uk-search-input").eq(1).attr("uk-filter-control", "filter: [data-name*='" + search + "']; group: name");
  }
  $(".uk-search-input").eq(1).click();
}

$(".filter-main2").on("beforeFilter", function(){
  $(".skills-no-result").removeClass('visible uk-animation-shake');
});

$(".filter-main2").on("afterFilter", function(){
  var isElementVisible = false;
  var i = 0;

  while(!isElementVisible && i < $(".skills-el2").length)
  {
    if($(".skills-el2").eq(i).is(":visible")){
      isElementVisible = true;
    }

    i++;
  }

  if(isElementVisible === false){
    $(".skills-no-result2").addClass('visible uk-animation-shake');
  }
});