async function sliderUtility(htmlClass,cssVariable, heightRange) {

  const slider = document.getElementById(heightRange);
  //const output = document.getElementById(heightValue);

  //output.innerHTML = slider.value; // Display the default slider value

  const section = document.getElementsByClassName(htmlClass);
  var i =0;
  for (i = 0; i < section.length; i++) {
    section[i].style.setProperty(cssVariable, (slider.value), null );
  };

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    //output.innerHTML = this.value;

    for (i = 0; i < section.length; i++) {
      //section[i].style.Height = (parseInt(slider.value) + vh );
      section[i].style.setProperty(cssVariable, (slider.value), null);
    }
  }
}