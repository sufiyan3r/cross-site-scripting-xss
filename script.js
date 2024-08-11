/*
    // Get the form and output elements
    const form = document.querySelector('form');
    const output = document.querySelector('#output');

    // Add an event listener to the form submit button
    form.addEventListener('submit', (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the value of the input field
      const inputValue = form.elements.input.value;

      // Set the output element's innerHTML to the input value
      output.innerHTML = `Hello, ${inputValue}!`;
    });
*/
/*
    function testXSS() {
        // Retrieve the input value
        var input = document.getElementById("input").value;
      
        // Inject the input value into the DOM
        var output = document.getElementById("output");
        output.innerHTML = "Hello, " + input + "!";
      }
      
    */  
/*
      function submitForm(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var name = document.getElementById("email").value;

        var regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

        if (regex.test(name) && regex.test(email)&&name && email) {
          document.getElementById("output").innerHTML = "Form Submission Successful!";
        } else {
          document.getElementById("output").innerHTML = "<p class='prompt'>Unvalid Input Entered!";
        }
      }

*/
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (event) => {
  const nameInput = document.getElementById('name');
  const nameValue = nameInput.value;

  if (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(nameValue)) {
    alert('ERROR!...Execution of Reflected XSS is Unsuccessful!');
    event.preventDefault();
  }
});

      