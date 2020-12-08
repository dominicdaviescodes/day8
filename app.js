// grab all the labels (get a node list)

const labels = document.querySelectorAll('.form-control');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    // split into an array
    .split('')
    // turn into a different array (turn each letter into a span/transition delay)
    .map((letter, idx) => `<span>${letter}</span>`)
    // want to turn back into a string
    .join('');
});
