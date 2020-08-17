import $ from 'jquery';

function getNumberOfDoggos() {
  let number = $('input[name=number]').val();
  $('input[name=number]').val('3');
  return number;
}

function getImages() {
  //let result =[];
  fetch(`https://dog.ceo/api/breeds/image/random/${getNumberOfDoggos()}`
  )
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}
function handleSumbit() {
  $('main').on('submit', function (e) {
    e.preventDefault();
    getImages();
    
  });
}

function main() {
  handleSumbit();
}
$(main);