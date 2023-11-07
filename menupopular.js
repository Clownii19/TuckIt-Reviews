



const stars = document.querySelectorAll('input[type=radio][name="rating"]');
const result = document.getElementById('result');

for (const star of stars) {
  star.addEventListener('change', function () {
    result.innerHTML = 'You rated it ' + this.value + ' stars.';
  });
}