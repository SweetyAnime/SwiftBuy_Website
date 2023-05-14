from bs4 import BeautifulSoup

# Read the HTML file
file_path = r'D:\website\asuslaptop.html'
with open(file_path, 'r') as file:
    html_content = file.read()

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Scrape the ratings and comments
feedback_entries = soup.find_all('div', class_='feedback-entry')

for entry in feedback_entries:
    stars_element = entry.find('div', class_='rating')
    username_element = entry.find('div', class_='username')
    comment_element = entry.find('div', class_='comment-form')

    stars = stars_element.text.strip() if stars_element else None
    username = username_element.text.strip() if username_element else None
    comment = comment_element.text.strip() if comment_element else None

    print(f"Stars: {stars}")
    print(f"Username: {username}")
    print(f"Comment: {comment}")
    print("----------------------")