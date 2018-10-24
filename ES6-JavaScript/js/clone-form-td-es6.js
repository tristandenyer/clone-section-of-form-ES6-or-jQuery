/*
Author: Tristan Denyer
GitHub repo: https://github.com/tristandenyer/Clone-section-of-form-using-jQuery
Demo: https://tristandenyer.github.io/Clone-section-of-form-using-jQuery/ES6-JavaScript/
Ver: 0.1.0
Last updated: Oct 21, 2018

The MIT License (MIT)

Copyright (c) 2018 Tristan Denyer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
const btnDel = document.getElementById("btnDel");
const btnAdd = document.getElementById("btnAdd");

// Enable the "add" button
btnAdd.disabled = false;
// Disable the "remove" button
btnDel.disabled = true;

btnAdd.addEventListener(
  "click",
  function() {
    // Checks to see how many duplicated sections we currently have
    let num = document.getElementsByClassName("clonedInput").length;
    // The numeric ID of the new input field being added, increasing by 1 each time
    let newNum = num + 1;
    let newElem = document.getElementById("entry" + num);
    let newElemCloned = newElem.cloneNode(true);
    // create the new element via clone(), and manipulate it's ID using newNum value
    newElemCloned.setAttribute("id", `entry${newNum}`);

    // Header - <H2>
    let header = newElemCloned.querySelector(".heading-reference");
    header.setAttribute("id", "ID" + newNum + "_reference");
    header.setAttribute("name", "ID" + newNum + "_reference");
    header.innerHTML = "Entry #" + newNum;

    // Title - <select>
    let title = newElemCloned.querySelector(".label_ttl");
    title.setAttribute("for", "ID" + newNum + "_title");
    let titleSelect = newElemCloned.querySelector(".select_ttl");
    titleSelect.setAttribute("id", "ID" + newNum + "_title");
    titleSelect.setAttribute("name", "ID" + newNum + "_title");

    // First name - <input> text
    let firstNameLabel = newElemCloned.querySelector(".label_fn");
    firstNameLabel.setAttribute("for", "ID" + newNum + "_first_name");
    let firstNameInput = newElemCloned.querySelector(".input_fn");
    firstNameInput.setAttribute("id", "ID" + newNum + "_first_name");
    firstNameInput.setAttribute("name", "ID" + newNum + "_first_name");
    firstNameInput.value = "";

    // Last name - <input> text
    let lastNameLabel = newElemCloned.querySelector(".label_ln");
    lastNameLabel.setAttribute("for", "ID" + newNum + "_last_name");
    let lastNameInput = newElemCloned.querySelector(".input_ln");
    lastNameInput.setAttribute("id", "ID" + newNum + "_last_name");
    lastNameInput.setAttribute("name", "ID" + newNum + "_last_name");
    lastNameInput.value = "";

    /*  Color - <input> checkboxes
        Note that each input_checkboxitem has a unique identifier "-0".
        This helps pair up duplicated checkboxes and labels correctly. A bit verbose, at the moment.
    */
    let colorLabel = newElemCloned.querySelector(".label_checkboxitem");
    colorLabel.setAttribute("for", "ID" + newNum + "_checkboxitem");
    // -0
    let colorInput0 = newElemCloned.querySelector(".input_checkboxitem-0");
    colorInput0.setAttribute("id", "ID" + newNum + "_checkboxitem-0");
    colorInput0.setAttribute("name", "ID" + newNum + "_checkboxitem");
    // -1
    let colorInput1 = newElemCloned.querySelector(".input_checkboxitem-1");
    colorInput1.setAttribute("id", "ID" + newNum + "_checkboxitem-1");
    colorInput1.setAttribute("name", "ID" + newNum + "_checkboxitem");
    // -2
    let colorInput2 = newElemCloned.querySelector(".input_checkboxitem-2");
    colorInput2.setAttribute("id", "ID" + newNum + "_checkboxitem-2");
    colorInput2.setAttribute("name", "ID" + newNum + "_checkboxitem");
    // clear the checkboxes for cloned section -------- TODO: improve this (see radios).
    let inputs = newElemCloned.getElementsByTagName("input");
    for (let c = 0; c < inputs.length; c++) {
      if (inputs[c].type.toLowerCase() == "checkbox") {
        inputs[c].checked = false;
      }
    }

    // Skate - <input> radio
    let skateLabel = newElemCloned.querySelector(".label_radio");
    skateLabel.setAttribute("for", "ID" + newNum + "_radioitem");
    let skateAnswerInput = newElemCloned.getElementsByClassName("input_radio");
    for (let r = 0; r < skateAnswerInput.length; r++) {
      skateAnswerInput[r].setAttribute("id", "ID" + newNum + "_radioitem");
      skateAnswerInput[r].setAttribute("name", "ID" + newNum + "_radioitem");
      if (skateAnswerInput[r].type.toLowerCase() == "radio") {
        skateAnswerInput[r].checked = false;
      }
    }

    // Email - <input> text
    let emailLabel = newElemCloned.querySelector(".label_email");
    emailLabel.setAttribute("for", "ID" + newNum + "_email_address");
    let emailInput = newElemCloned.querySelector(".input_email");
    emailInput.setAttribute("id", "ID" + newNum + "_email_address");
    emailInput.setAttribute("name", "ID" + newNum + "_email_address");
    emailInput.value = "";

    // Insert the new element after the last "duplicatable" input field
    newElem.after(newElemCloned);

    // Enable the "remove" button. This only shows once you have a duplicated section.
    btnDel.disabled = false;

    // Right now you can only add 4 sections, for a total of 5. Change '5' below to the max number of sections you want to allow.
    if (newNum === 5) {
      btnAdd.disabled = true;
      btnAdd.setAttribute("value", "You've reached the limit");
    }
  },
  false
);

btnDel.addEventListener(
  "click",
  function() {
    // check how many duplicated sections we currently have
    let num = document.getElementsByClassName("clonedInput").length;

    // Confirmation dialog box
    if (
      confirm(
        `Are you sure you wish to remove Entry #${num}? This cannot be undone.`
      )
    ) {
      // remove last section
      document.getElementById("entry" + num).remove(); // TODO: .remove doesn't work in IE :|
      // update num
      num = document.getElementsByClassName("clonedInput").length;
      if (num == 1) {
        btnDel.disabled = true;
      }
      if (num < 5) {
        btnAdd.disabled = false;
        btnAdd.setAttribute("value", "add section");
      }
    }
  },
  false
);
