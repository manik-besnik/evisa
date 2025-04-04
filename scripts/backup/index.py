from PIL import Image
import easyocr
import re
import numpy as np

# Initialize EasyOCR reader
reader = easyocr.Reader(['en'])

# Function to process OCR text and clean unwanted characters
def get_text_from_image(image_path):
    try:
        # Open the image file
        image = Image.open(image_path)
        # Convert PIL image to NumPy array
        image_np = np.array(image)
        # Perform OCR
        result = reader.readtext(image_np)
        # Extract and join OCR text from the image
        ocr_text = " ".join([detection[1] for detection in result])
        return ocr_text
    except Exception as e:
        print(f"Error processing image: {e}")
        return ""

# Function to extract passport number
def extract_passport_number(text):
    # Clean unwanted characters or noise from text
    text = re.sub(r'[<>]', '', text)  # Remove angle brackets and extraneous characters
    text = re.sub(r'\s+', ' ', text)  # Normalize multiple spaces into one
    text = re.sub(r'[A-Za-z]{1,2}[^A-Za-z0-9\s]{3,}', '', text)  # Remove strange alphanumeric noise

    # Regex patterns for passport number (handling variations in format)
    patterns = [
        r'Passport\s?Number\s*([A-Za-z0-9]{9})\b',  # Matches Passport Number with exactly 9 alphanumeric characters
        r'Passport\s?Number\s*[A-Za-z0-9\s]*BGD\s*([A-Za-z0-9]{9})\b',  # Matches Passport Number with BGD and 9 alphanumeric characters
        r'BGD\s*([A-Za-z0-9]{9})\b',  # Matches BGD followed by 9 alphanumeric characters
        r'\b([A-Za-z0-9]{9})\b'  # Matches any 9-character alphanumeric string in the OCR text
    ]

    # Look for valid passport numbers
    for pattern in patterns:
        matches = re.findall(pattern, text)
        for match in matches:
            if re.match(r'^[A-Za-z0-9]{9}$', match):
                return match

    return "Passport number not found"

# Define regex patterns to extract other required fields
patterns = {
    "name": r"Name[:\s]*([A-Za-z\s]+)",  # Match Name (only alphabetic characters and spaces)
    "mother_name": r"Mothers? Name[:\s]*([A-Za-z\s]+)",  # Match Mother's Name
    "issue_date": r"Date of Issue[:\s]*([\d\w\s]+)",  # Match Issue Date
    "expire_date": r"Date of Expiry[:\s]*([\d\w\s]+)",  # Corrected typo in the pattern
    "nationality": r"Nationality[:\s]*([A-Za-z\s]+)",  # Match Nationality (alphabetic)
    "birth_place": r"Place of Birth[:\s]*([A-Za-z\s]+)"  # Match Place of Birth (alphabetic)
}

# Process the image
image_path = "image.jpeg"
ocr_text = get_text_from_image(image_path)

# Filter out noise (optional step, based on observed patterns)
ocr_text = re.sub(r'(EMERGENCKCONTACT|7feso|ARTII|R7Rtn|Ca)', '', ocr_text)

# Extract passport number
passport_number = extract_passport_number(ocr_text)

# Extract each field using regex
extracted_data = {}
for field, pattern in patterns.items():
    match = re.search(pattern, ocr_text)
    if match:
        extracted_data[field] = match.group(1).strip()

print(f"Passport Number: {passport_number}")
for field, value in extracted_data.items():
    print(f"{field.replace('_', ' ').title()}: {value}")
print("\n" + "-"*50 + "\n")
