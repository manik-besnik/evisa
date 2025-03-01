import sys
from pdf2image import convert_from_path
from pytesseract import image_to_string, tesseracts
from PyPDF2 import PdfReader
import cv2
from PIL import Image

# Set Tesseract executable path
pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

sys.stdout.reconfigure(encoding='utf-8')

def preprocess_image(image_path):
    """Preprocess the image for better OCR accuracy."""
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 128, 255, cv2.THRESH_BINARY)
    preprocessed_image_path = "preprocessed_image.png"
    cv2.imwrite(preprocessed_image_path, thresh)  # Save for debugging
    return Image.fromarray(thresh)

def extract_text_from_image(image_path):
    """Extract text from an image file."""
    try:
        preprocessed_image = preprocess_image(image_path)
        return image_to_string(preprocessed_image, lang='eng+ben')
    except Exception as e:
        return f"Error processing image: {e}"

def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file."""
    try:
        text = ""
        reader = PdfReader(pdf_path)
        for page in reader.pages:
            text += page.extract_text()
        return text
    except Exception as e:
        print(f"Error reading PDF with PyPDF2: {e}")
        try:
            images = convert_from_path(pdf_path, dpi=300)
            return "".join([image_to_string(img, lang='eng+ben') for img in images])
        except Exception as img_error:
            return f"Error processing PDF images: {img_error}"

if __name__ == "__main__":
    file_paths = sys.argv[1:]  # Pass file paths as arguments
    extracted_text = []

    for file_path in file_paths:
        if file_path.endswith(('.jpg', '.jpeg', '.png')):
            extracted_text.append(extract_text_from_image(file_path))
        elif file_path.endswith('.pdf'):
            extracted_text.append(extract_text_from_pdf(file_path))

    print("\n".join(extracted_text))
