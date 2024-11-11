import $ from 'jquery';
import __ from 'lodash';
import './body.css';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;

function updateCounter() {
  count++;
  $( "#count" ).text(`${count} clicks on the button` );
}

$("<button>Click here to get started</button>").on(
  "click",
  _.debounce( updateCounter, 500, { leading: true, trailing: false })
);