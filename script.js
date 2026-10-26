/* =========================================
   SHAMBA SMART JAVASCRIPT
   ========================================= */


/* =========================================
   1. WELCOME BUTTON
   ========================================= */

const welcomeButton =
    document.getElementById("welcomeButton");

const welcomeMessage =
    document.getElementById("welcomeMessage");


if (welcomeButton) {

    welcomeButton.addEventListener(
        "click",
        function () {

            welcomeMessage.textContent =
                "🌱 Welcome to Shamba Smart! Let's grow smarter together.";

        }
    );

}


/* =========================================
   2. DIGITAL CLOCK
   ========================================= */

function updateClock() {

    const digitalClock =
        document.getElementById("digitalClock");

    /*
       If the clock does not exist on the
       current page, stop the function.
    */

    if (!digitalClock) {
        return;
    }


    const currentTime = new Date();


    let hours =
        currentTime.getHours();

    let minutes =
        currentTime.getMinutes();

    let seconds =
        currentTime.getSeconds();


    /*
       Add zero before numbers
       below 10.
    */

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    digitalClock.textContent =
        hours + ":" +
        minutes + ":" +
        seconds;
}


/*
   Start the clock immediately.
*/

updateClock();


/*
   Update every one second.
*/

setInterval(updateClock, 1000);



/* =========================================
   3. FARMING TIP BUTTON
   ========================================= */

const tipButton =
    document.getElementById("tipButton");

const tipText =
    document.getElementById("tipText");


const farmingTips = [

    "Inspect your crops regularly to identify pests early.",

    "Use healthy and certified seeds whenever possible.",

    "Keep farm records for planting and harvesting activities.",

    "Protect your soil using organic matter and suitable crop rotation.",

    "Use water carefully and avoid unnecessary wastage.",

    "Keep your farm clean to reduce pest and disease problems."

];


if (tipButton) {

    tipButton.addEventListener(
        "click",
        function () {

            const randomNumber =
                Math.floor(
                    Math.random() *
                    farmingTips.length
                );


            tipText.textContent =
                "💡 " +
                farmingTips[randomNumber];

        }
    );

}



/* =========================================
   4. CROP INFORMATION SELECTOR
   ========================================= */

const cropSelect =
    document.getElementById("cropSelect");

const cropInfo =
    document.getElementById("cropInfo");


/*
   Information for each crop.
*/

const cropData = {

    maize:
        "<strong>🌽 Maize:</strong> Maize grows well in suitable fertile soils with adequate moisture and sunlight. Farmers should monitor the crop regularly for pests and diseases.",

    beans:
        "<strong>🫘 Beans:</strong> Beans generally perform well in well-drained soils. Avoid prolonged waterlogging and monitor the crop for pests and diseases.",

    potato:
        "<strong>🥔 Potatoes:</strong> Potatoes perform well in fertile, well-drained soils. Proper soil preparation, moisture management and disease monitoring are important.",

    tomato:
        "<strong>🍅 Tomatoes:</strong> Tomatoes need adequate sunlight, suitable soil and regular moisture. Farmers should monitor them carefully for pests and diseases."

};


if (cropSelect) {

    cropSelect.addEventListener(
        "change",
        function () {

            const selectedCrop =
                cropSelect.value;


            if (selectedCrop === "") {

                cropInfo.innerHTML =
                    "Please select a crop to display information.";

                return;
            }


            cropInfo.innerHTML =
                cropData[selectedCrop];

        }
    );

}



/* =========================================
   5. CONTACT FORM VALIDATION
   ========================================= */

const submitButton =
    document.getElementById("submitButton");


if (submitButton) {

    submitButton.addEventListener(
        "click",
        function () {


            /*
               Get values from the form.
            */

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const subject =
                document.getElementById("subject").value;

            const message =
                document.getElementById("message").value.trim();


            /*
               Error message elements.
            */

            const nameError =
                document.getElementById("nameError");

            const emailError =
                document.getElementById("emailError");

            const phoneError =
                document.getElementById("phoneError");

            const subjectError =
                document.getElementById("subjectError");

            const messageError =
                document.getElementById("messageError");

            const formResult =
                document.getElementById("formResult");


            /*
               Clear old messages.
            */

            nameError.textContent = "";

            emailError.textContent = "";

            phoneError.textContent = "";

            subjectError.textContent = "";

            messageError.textContent = "";

            formResult.textContent = "";


            let valid = true;


            /* ---------- NAME ---------- */

            if (name === "") {

                nameError.textContent =
                    "Please enter your full name.";

                valid = false;

            } else if (name.length < 2) {

                nameError.textContent =
                    "Name must contain at least 2 characters.";

                valid = false;
            }


            /* ---------- EMAIL ---------- */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email === "") {

                emailError.textContent =
                    "Please enter your email address.";

                valid = false;

            } else if (!emailPattern.test(email)) {

                emailError.textContent =
                    "Please enter a valid email address.";

                valid = false;
            }


            /* ---------- PHONE ---------- */

            if (phone === "") {

                phoneError.textContent =
                    "Please enter your phone number.";

                valid = false;

            } else if (phone.length < 9) {

                phoneError.textContent =
                    "Please enter a valid phone number.";

                valid = false;
            }


            /* ---------- SUBJECT ---------- */

            if (subject === "") {

                subjectError.textContent =
                    "Please select a subject.";

                valid = false;
            }


            /* ---------- MESSAGE ---------- */

            if (message === "") {

                messageError.textContent =
                    "Please enter your message.";

                valid = false;

            } else if (message.length < 10) {

                messageError.textContent =
                    "Message must contain at least 10 characters.";

                valid = false;
            }


            /* ---------- FINAL RESULT ---------- */

            if (valid) {

                formResult.textContent =
                    "✅ Thank you! Your message has been successfully validated.";

                formResult.style.color =
                    "#2e7d4b";


                /*
                   Clear the form after successful validation.
                */

                document.getElementById("name").value = "";

                document.getElementById("email").value = "";

                document.getElementById("phone").value = "";

                document.getElementById("subject").value = "";

                document.getElementById("message").value = "";


            } else {

                formResult.textContent =
                    "❌ Please correct the errors above.";

                formResult.style.color =
                    "#c62828";
            }

        }
    );

}