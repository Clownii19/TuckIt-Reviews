function submitRating() {
  const ratingInput = document.getElementById("rating");
  const rating = parseFloat(ratingInput.value); // Parse the input as a floating-point number

  if (!isNaN(rating) && rating >= 0 && rating <= 5) {
    const apiUrl = "https://retoolapi.dev/sTDywX/data";

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ ratingburger: rating }), // Send the rating as a number
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
function fetchAndAverageItemRatings() {
  const apiUrl = "https://retoolapi.dev/sTDywX/data"; // Replace with your API URL

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        // Calculate the average of item ratings
        const totalRatings = data.reduce((acc, item) => acc + item.ratingburger, 0);
        const averageRating =  totalRatings/data.length ;

        // Display the average rating in an HTML element with an ID
        const averageRatingElement = document.getElementById("averageRating");
        if (averageRatingElement) {
          averageRatingElement.textContent = `Average Rating: ${averageRating.toFixed(2)}`;
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