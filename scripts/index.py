import easyocr
import re

# Initialize EasyOCR reader
reader = easyocr.Reader(['en'])

# Function to process OCR text and clean unwanted characters
def get_text_from_image(image_path):
    result = reader.readtext(image_path)

    # Extract and join OCR text from the image
    ocr_text = ""
    for detection in result:
        ocr_text += detection[1] + " "
    ocr_text = ocr_text.replace('\n', ' ').strip()
    print("Raw OCR Text:", ocr_text)
    return ocr_text

# Function to extract passport number
def extract_passport_number(ocr_text):
    # Clean unwanted characters or noise from OCR text
    ocr_text = re.sub(r'[<>]', '', ocr_text)  # Remove angle brackets and extraneous characters
    ocr_text = re.sub(r'\s+', ' ', ocr_text)  # Normalize multiple spaces into one
    ocr_text = re.sub(r'[A-Za-z]{1,2}[^A-Za-z0-9\s]{3,}', '', ocr_text)  # Remove strange alphanumeric noise

    # Regex patterns for passport number (handling variations in format)
    patterns = [
        r'Passport\s?No[:\s]*([A-Za-z0-9]{9})\b',  # Matches Passport No with exactly 9 alphanumeric characters
        r'Passport\s?Number[:\s]*([A-Za-z0-9]{9})\b',  # Matches Passport Number with exactly 9 alphanumeric characters
        r'\b([A-Za-z0-9]{9})\b'  # Matches any 9-character alphanumeric string in the OCR text
    ]

    # Look for valid passport numbers
    for pattern in patterns:
        match = re.search(pattern, ocr_text)
        if match:
            passport_number = match.group(1).strip()
            # Additional check to ensure the passport number is valid
            if re.match(r'^[A-Za-z0-9]{9}$', passport_number):
                print("Matched Pattern:", pattern)
                return passport_number

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

# Extract text from image
ocr_text = get_text_from_image('image.jpeg')

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

# Print the extracted data
print(f"Passport Number: {passport_number}")
for field, value in extracted_data.items():
    print(f"{field.replace('_', ' ').title()}: {value}")
