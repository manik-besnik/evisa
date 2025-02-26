import sys
import json
import PassportExtractor

def extract_from_pdf(pdf_path):
    extractor = PassportExtractor.PassportExtractor()
    passport_number, extracted_data = extractor.process_pdf(pdf_path)
    extracted_data['passport_no'] = passport_number
    return extracted_data

def extract_from_image(image_path):
    extractor = PassportExtractor.PassportExtractor()
    passport_number, extracted_data = extractor.process_image(image_path)
    extracted_data['passport_no'] = passport_number
    return extracted_data

if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(1)

    function_name = sys.argv[1]
    file_path = sys.argv[2]

    if function_name == "extract_from_pdf":
        result = extract_from_pdf(file_path)
    elif function_name == "extract_from_image":
        result = extract_from_image(file_path)
    else:
        sys.exit(1)

    print(json.dumps(result))
