import $ from 'jquery';

function getNumberOfDoggos() {
  let number = $('input[name=number]').val();
  $('input[name=number]').val('3');
  return number;
}

function getImages() {
  console.log('test');
  let result =[];
  fetch(`https://dog.ceo/api/breeds/image/random/${getNumberOfDoggos()}`
  )
    .then(response => response.json())
    .then(responseJson => {
      result = responseJson;
      console.log(result.message);
      });
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