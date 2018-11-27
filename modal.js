$(function() {
  $('[data-selector="data-opacity-button"]').on('click', function() {
    console.log('meow')
    $('[data-selector="data-opacity-modal"]').toggleClass('opacity-on-modal');
  })
});
