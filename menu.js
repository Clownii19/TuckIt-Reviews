//burger
function submitRatingb() {
  const ratingInputb = document.getElementById("ratingb");
  const ratingb = parseFloat(ratingInputb.value); // Parse the input as a floating-point number

  if (!isNaN(ratingb) && ratingb >= 0 && ratingb <= 5) {
    const apiUrl = "https://retoolapi.dev/GAq6V3/data";

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ ratingburger: ratingb }), // Send the rating as a number
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Rating submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error submitting rating:", error);
      });
  } else {
    alert("Please enter a valid rating between 0 and 5.");
  }
}
function fetchAndAverageItemRatingsb() {
  const apiUrl = "https://retoolapi.dev/GAq6V3/data";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        // Calculate the average of 'ratingburger' values
        const totalRatings = data.reduce((acc, item) => acc + item.ratingburger, 0);
        const averageRatingb = totalRatings / data.length;

        // Display the average rating in an HTML element with an ID
        const averageRatingbElement = document.getElementById("averageRatingb");
        if (averageRatingbElement) {
          averageRatingbElement.textContent = `Average Rating: ${averageRatingb.toFixed(2)}`;
        } else {
          console.error("Average rating element not found.");
        }
      } else {
        console.error("No data found in the API response.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error);
    });
}

//garlic bread
function submitRatinggb() {
  const ratingInputgb = document.getElementById("ratinggb");
  const ratinggb = parseFloat(ratingInputgb.value); // Parse the input as a floating-point number

  if (!isNaN(ratinggb) && ratinggb >= 0 && ratinggb <= 5) {
    const apiUrl = "https://retoolapi.dev/bP66uB/data";

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ ratinggarlicbread: ratinggb }), // Send the rating as a number
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Rating submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error submitting rating:", error);
      });
  } else {
    alert("Please enter a valid rating between 0 and 5.");
  }
}
function fetchAndAverageItemRatingsgb() {
  const apiUrl = "https://retoolapi.dev/bP66uB/data";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        // Calculate the average of 'ratingburger' values
        const totalRatingsgb = data.reduce((acc, item) => acc + item.ratinggarlicbread, 0);
        const averageRatinggb = totalRatingsgb / data.length;

        // Display the average rating in an HTML element with an ID
        const averageRatinggbElement = document.getElementById("averageRatinggb");
        if (averageRatinggbElement) {
          averageRatinggbElement.textContent = `Average Rating: ${averageRatinggb.toFixed(2)}`;
        } else {
          console.error("Average rating element not found.");
        }
      } else {
        console.error("No data found in the API response.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error);
    });
}
//butterchicken
function submitRatingbc() {
  const ratingInputbc = document.getElementById("ratingbc");
  const ratingbc = parseFloat(ratingInputbc.value); // Parse the input as a floating-point number

  if (!isNaN(ratingbc) && ratingbc >= 0 && ratingbc <= 5) {
    const apiUrl = "https://retoolapi.dev/uyfNFU/data";

    fetch(apiUrl, {
      method: "POST",  
      body: JSON.stringify({ ratingbutterchicken: ratingbc }), // Send the rating as a number
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Rating submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error submitting rating:", error);
      });
  } else {
    alert("Please enter a valid rating between 0 and 5.");
  }
}
function fetchAndAverageItemRatingsbc() {
  const apiUrl = "https://retoolapi.dev/uyfNFU/data";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        // Calculate the average of 'ratingburger' values
        const totalRatingsbc = data.reduce((acc, item) => acc + item.ratingbutterchicken, 0);
        const averageRatingbc = totalRatingsbc / data.length;

        // Display the average rating in an HTML element with an ID
        const averageRatingbcElement = document.getElementById("averageRatingbc");
        if (averageRatingbcElement) {
          averageRatingbcElement.textContent = `Average Rating: ${averageRatingbc.toFixed(2)}`;
        } else {
          console.error("Average rating element not found.");
        }
      } else {
        console.error("No data found in the API response.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error);
    });
}
//wedges
function submitRatingw() {
  const ratingInputw = document.getElementById("ratingw");
  const ratingw = parseFloat(ratingInputw.value); // Parse the input as a floating-point number

  if (!isNaN(ratingw) && ratingw >= 0 && ratingw <= 5) {
    const apiUrl = "https://retoolapi.dev/YUdAID/data";

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ ratingwedges: ratingw }), // Send the rating as a number
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Rating submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error submitting rating:", error);
      });
  } else {
    alert("Please enter a valid rating between 0 and 5.");
  }
}
function fetchAndAverageItemRatingsw() {
  const apiUrl = "https://retoolapi.dev/YUdAID/data";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        // Calculate the average of 'ratingburger' values
        const totalRatingsw = data.reduce((acc, item) => acc + item.ratingwedges, 0);
        const averageRatingw = totalRatingsw / data.length;

        // Display the average rating in an HTML element with an ID
        const averageRatingwElement = document.getElementById("averageRatingw");
        if (averageRatingwElement) {
          averageRatingwElement.textContent = `Average Rating: ${averageRatingw.toFixed(2)}`;
        } else {
          console.error("Average rating element not found.");
        }
      } else {
        console.error("No data found in the API response.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error);
    });
}