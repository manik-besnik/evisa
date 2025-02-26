import PassportExtractor

extractor = PassportExtractor.PassportExtractor()

def extract_from_pdf(pdf_path):
    passport_number, extracted_data = extractor.process_pdf(pdf_path)
    print(f"Results for {pdf_path}:")
    print(f"Passport Number: {passport_number}")
    for field, value in extracted_data.items():
        print(f"{field.replace('_', ' ').title()}: {value}")
    print("\n" + "-"*50 + "\n")
    
def extract_from_image(image_path):
    passport_number, extracted_data = extractor.process_image(image_path)
    print(f"Passport Number: {passport_number}")
    for field, value in extracted_data.items():
        print(f"{field.replace('_', ' ').title()}: {value}")
    print("\n" + "-"*50 + "\n")
    
    
extract_from_image('image.jpeg')