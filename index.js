 
//const input = document.getElementById('button');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });

    //return "clicked";

const input = document.querySelector('input');
function addingEventListener(){
  input.addEventListener('click', function(){
  return "clicked";
});
}
