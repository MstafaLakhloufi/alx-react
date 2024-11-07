import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append(`
  <p>Holberton Dashboard</p>
  <p>Dashboard data for the students</p>
  <button>Click here to get started</button>
  <p id='count'></p>
  <p>Copyright - Holberton School</p>
`);

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));