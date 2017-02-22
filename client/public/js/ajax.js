$(document).ready(function(){
  addMeal()
})

function addMeal(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/scope/meals',
    success: function(data) {

      sessionStorage.setItem('meals',data)
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function randomMeal(){
  var meals = sessionStorage.getItem('meals')
  var arr = meals.split(',')
  $('#change').html(arr[Math.floor(Math.random()*arr.length)])
}

function getUrl(){
  var url = window.location.href;
  $('#change').html(url)
}

function getAttr(){
var x = $('#change').attr('style')
$('#change').html(x)
}
