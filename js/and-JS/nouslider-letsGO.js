document.addEventListener("DOMContentLoaded", () => {
   const priceSlider = document.getElementById('name__range');
   const fromValue = document.querySelector('[data-range-frome]')
   const toValue = document.querySelector('[data-range-to]')

   noUiSlider.create(priceSlider, {
      start: [Number(fromValue.value), Number(toValue.value)],
      tooltips: [true, true],
      connect: true,
      // padding: 6,
      range: {
         'min': [Number(fromValue.dataset.rangeFrome)],
         'max': [Number(toValue.dataset.rangeTo)]
      },
   });
   priceSlider.noUiSlider.on('update', function (values, handle) {
      fromValue.value = values[handle = 0];
      toValue.value = values[handle = 1];
   })
})