from PIL import Image
import easyocr
import re
import numpy as np
import fitz  # PyMuPDF
import io

class PassportExtractor:
    def __init__(self):
        self.reader = easyocr.Reader(['en'])

    def get_text_from_image(self, image):
        """Extract text from an image using OCR."""
        try:
            image_np = np.array(image)
            result = self.reader.readtext(image_np)
            ocr_text = " ".join([detection[1] for detection in result])
            return ocr_text
        except Exception as e:
            print(f"Error processing image: {e}")
            return ""

    def extract_passport_number(self, text):
        """Extract passport number from OCR text."""
        text = re.sub(r'[<>]', '', text)
        text = re.sub(r'\s+', ' ', text)
        text = re.sub(r'[A-Za-z]{1,2}[^A-Za-z0-9\s]{3,}', '', text)

        patterns = [
            r'Passport\s?Number\s*([A-Za-z0-9]{9})\b',
            r'Passport\s?Number\s*[A-Za-z0-9\s]*BGD\s*([A-Za-z0-9]{9})\b',
            r'BGD\s*([A-Za-z0-9]{9})\b',
            r'\b([A-Za-z0-9]{9})\b'
        ]

        for pattern in patterns:
            matches = re.findall(pattern, text)
            for match in matches:
                if re.match(r'^[A-Za-z0-9]{9}$', match):
                    return match

        return "Passport number not found"

    def extract_fields(self, text):
        """Extract other fields from OCR text using regex patterns."""
        patterns = {
            "name": r"Name[:\s]*([A-Za-z\s]+)",
            "father_name": r"Fathers? Name[:\s]*([A-Za-z\s]+)",
            "mother_name": r"Mothers? Name[:\s]*([A-Za-z\s]+)",
            "issue_date": r"Date of Issue[:\s]*([\d\w\s]+)",
            "expire_date": r"Date of Expiry[:\s]*([\d\w\s]+)",
            "nationality": r"Nationality[:\s]*([A-Za-z\s]+)",
            "birth_place": r"Place of Birth[:\s]*([A-Za-z\s]+)"
        }

        extracted_data = {}
        for field, pattern in patterns.items():
            match = re.search(pattern, text)
            if match:
                extracted_data[field] = match.group(1).strip()

        return extracted_data

    def process_image(self, image_path):
        """Process an image file and extract passport information."""
        image = Image.open(image_path)
        ocr_text = self.get_text_from_image(image)
        ocr_text = re.sub(r'(EMERGENCKCONTACT|7feso|ARTII|R7Rtn|Ca)', '', ocr_text)

        passport_number = self.extract_passport_number(ocr_text)
        extracted_data = self.extract_fields(ocr_text)

        return passport_number, extracted_data

    def convert_pdf_to_images(self, pdf_path, dpi=300):
        """Convert PDF to high-quality images."""
        document = fitz.open(pdf_path)
        images = []
        for page_num in range(len(document)):
            page = document.load_page(page_num)
            zoom = dpi / 72
            mat = fitz.Matrix(zoom, zoom)
            pix = page.get_pixmap(matrix=mat)
            img = Image.open(io.BytesIO(pix.tobytes()))
            images.append(img)
        return images

    def process_pdf(self, pdf_path):
        """Process a PDF file and extract passport information."""
        images = self.convert_pdf_to_images(pdf_path)
        ocr_text = ""
        for image in images:
            ocr_text += self.get_text_from_image(image) + " "

        ocr_text = re.sub(r'(EMERGENCKCONTACT|7feso|ARTII|R7Rtn|Ca)', '', ocr_text)

        passport_number = self.extract_passport_number(ocr_text)
        extracted_data = self.extract_fields(ocr_text)

        return passport_number, extracted_data

