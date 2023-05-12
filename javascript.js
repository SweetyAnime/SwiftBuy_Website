function submitForm() {
  // Retrieve the values from the form inputs
  const ratingValue = document.querySelector('input[name="rating"]:checked').value;
  const usernameValue = document.getElementById('username').value;
  const commentValue = document.getElementById('comment').value;

  // Create a new feedback entry
  const feedbackEntry = document.createElement('div');
  feedbackEntry.classList.add('feedback-entry');

  // Create and append the stars element
  const starsElement = document.createElement('div');
  starsElement.innerHTML = `Stars: ${getStarSymbols(ratingValue)}`;
  feedbackEntry.appendChild(starsElement);

  // Create and append the username element
  const usernameElement = document.createElement('div');
  usernameElement.innerHTML = `Username: ${usernameValue}`;
  feedbackEntry.appendChild(usernameElement);

  // Create and append the comment element
  const commentElement = document.createElement('div');
  commentElement.innerHTML = `Comment: ${commentValue}`;
  feedbackEntry.appendChild(commentElement);

  // Append the feedback entry to the feedback section
  const feedbackSection = document.getElementById('feedback');
  feedbackSection.appendChild(feedbackEntry);

  // Clear the form inputs
  document.getElementById('username').value = '';
  document.getElementById('comment').value = '';
}

function getStarSymbols(count) {
  let stars = '';
  for (let i = 0; i < count; i++) {
    stars += '★';
  }
  return stars;
}
