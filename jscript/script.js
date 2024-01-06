$(document).ready(function(){
    $(".text-a").waypoint(function(){
        $(".text-a").addClass("animate__animated animate__fadeInleft");
    });
});

document.querySelector('#About').addEventListener('click', function() {
    window.scrollTo({
      x: 0,
      y: document.getElementById('about').offsetTop
    });
  });