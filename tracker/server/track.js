// track.js
import fetch from 'node-fetch';

const phoneNumber = '+917673945374,7549810264'; // Replace with desired number
const access_key = '80f62e70341b8fff634c9a2f0b2767f3'; // Replace with your Numverify API key

async function trackPhoneNumber(number) {
  const url = `http://apilayer.net/api/validate?access_key=${access_key}&number=${number}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.valid) {
      console.log(`Phone Number: ${data.international_format}`);
      console.log(`Country: ${data.country_name}`);
      console.log(`Location: ${data.location}`);
      console.log(`Carrier: ${data.carrier}`);
      console.log(`Line Type: ${data.line_type}`);
    } else {
      console.log("Invalid phone number.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

trackPhoneNumber(phoneNumber);
