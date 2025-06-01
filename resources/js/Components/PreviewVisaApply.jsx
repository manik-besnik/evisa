import React, { useState, useEffect } from 'react';
import {usePage} from "@inertiajs/react";

import {
    genders,
    groups,
    maritalStatuses,
    visaProcessingTypes,
    visaTypes,
    passportTypes,
    assetUrl
} from "@/Components/Constant/index.js";


export const getValue = (items, id) => {
    return items.find(item => item.id === Number(id))?.name ?? ''
}


const PreviewVisaApply = ({ 
  show = true, 
  setShow = () => {}, 
  confirmSubmit = () => {}, 
  visa_apply = '',
  isPassportRequired = false,
  isPhotoRequired = true,
  photoFile = null  // Add this prop
}) => {
  const {countries} = usePage().props;
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState(null);

  // Create preview URL for the uploaded photo
  useEffect(() => {
    if (photoFile) {
      const url = URL.createObjectURL(photoFile);
      setPhotoPreviewUrl(url);
      
      // Cleanup function to revoke the URL when component unmounts or photo changes
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPhotoPreviewUrl(null);
    }
  }, [photoFile]);



  const getNationality = (itemId) => {
        if (!itemId){
            return "";
        }
        return countries.find(item => item.id === itemId)?.nationality
    }

  const getCountry = (itemId) => {
    if (!itemId) return "";
    return countries.find(item => item.id === itemId)?.name || "";
  };

  const InfoRow = ({ label, value, isHalf = false }) => (
    <tr className="border-b border-gray-300">
      <td className={`px-2 py-1 bg-gray-100 font-medium text-xs ${isHalf ? 'w-1/4' : 'w-1/3'} border-r border-gray-300`}>
        {label}
      </td>
      <td className={`px-2 py-1 text-xs ${isHalf ? 'w-1/4' : 'w-1/3'} ${isHalf ? 'border-r border-gray-300' : ''}`}>
        {value || "-"}
      </td>
      {isHalf && (
        <>
          <td className="px-2 py-1 bg-gray-100 font-medium text-xs w-1/4 border-r border-gray-300">
            {/* Second label will be passed separately */}
          </td>
          <td className="px-2 py-1 text-xs w-1/4">
            {/* Second value will be passed separately */}
          </td>
        </>
      )}
    </tr>
  );

  const DoubleInfoRow = ({ label1, value1, label2, value2 }) => (
    <tr className="border-b border-gray-300">
      <td className="px-2 py-1 bg-gray-100 font-medium text-xs  border-r border-gray-300">
        {label1}
      </td>
      <td className="px-2 py-1 text-xs  border-r border-gray-300" width={20}>
        {value1 || "-"}
      </td>
      <td className="px-2 py-1 bg-gray-100 font-medium text-xs border-r border-gray-300">
        {label2}
      </td>
      <td className="px-2 py-1 text-xs" width={0}>
        {value2 || "-"}
      </td>
    </tr>
  );

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-10" style={{backgroundImage: `url(${assetUrl}images/visaapplyformate.png)`, backgroundSize: 'cover'}}>
        {/* Header Section */}
        <div className="relative">
          <button 
            className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 text-xl font-bold"
            onClick={() => setShow(false)}
          >
            ×
          </button>
          
          <div className="flex items-center justify-between p-6">
            {/* Passport Photo Section - Updated */}
            <div className="border-2 border-gray-400 w-36 h-40 flex items-center justify-center bg-gray-50 overflow-hidden mt-[-44px]">
              {photoPreviewUrl ? (
                <img 
                  src={photoPreviewUrl} 
                  alt="Passport Photo" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-xs text-gray-600">
                  <div>Passport</div>
                  <div>Pic</div>
                </div>
              )}
            </div>

            {/* Logo and Title Section */}
            <div className="flex-1 text-center mx-6 ml-[-64px]">
              <div className="flex items-center justify-center mb-2">
                <div className="text-right mr-4">
                  <img  src={`${assetUrl + 'images/logo.png'}`} alt="logo" />
                </div>
                
              </div>
              <h1 className="text-[30px] font-bold text-gray-800 mb-1 mt-9">APPLICATION FORM</h1>
              <p className="text-blue-600 font-medium">{getValue(visaTypes, visa_apply.visa_type)}</p>
              <div className="flex items-center justify-center w-6/12 m-auto mt-3">
                <div className="border border-gray-400 mb-2 bg-white">
                    <div className="text-xs font-medium border border-gray-400 py-2 px-8">Date: {new Date().toLocaleDateString()}</div>
                    <div className="text-xs font-medium border border-gray-400 py-2 px-8"> </div>
                </div>
            </div>
            </div>

            {/* Date and Reference Section */}
            
          </div>

          {/* Warning Messages */}
          {(isPassportRequired || isPhotoRequired) && (
            <div className="px-6 pb-4">
              {isPassportRequired && (
                <p className="text-red-600 text-sm mb-1">⚠ Passport Document is required</p>
              )}
              {isPhotoRequired && (
                <p className="text-red-600 text-sm">⚠ Photo Document is required</p>
              )}
            </div>
          )}
        </div>

        {/* Applicant Information Section */}
        <div className="border-x-2 border-gray-400">
          <div className="bg-gray-600 text-white text-center py-2">
            <h2 className="font-bold text-sm">Applicant Information</h2>
          </div>
          
          <table className="w-full border-collapse">
            <tbody>
              <InfoRow label="Given Name" value={visa_apply.name} />
              <InfoRow label="Surname" value={visa_apply.name_arabic} />
              <InfoRow label="Father's Name" value={visa_apply.name} />
              <InfoRow label="Mother's Name" value={visa_apply.mother_name} />
              <DoubleInfoRow 
                label1="Gender" 
                value1={getValue(genders, visa_apply.gender)} 
                label2="Date of Birth" 
                value2={visa_apply.date_of_birth} 
              />
              <InfoRow label="Place of Birth" value={visa_apply.birth_place} />
              <DoubleInfoRow 
                label1="Profession" 
                value1={visa_apply.profession} 
                label2="Religion" 
                value2={visa_apply.religion} 
              />
              <DoubleInfoRow 
                label1="Marital Status" 
                value1={getValue(maritalStatuses, visa_apply.marital_status)} 
                label2="Nationality" 
                value2={getNationality(visa_apply.current_nationality)} 
              />
              <DoubleInfoRow 
                label1="Passport No." 
                value1={visa_apply.passport_no} 
                label2="Place of Issue" 
                value2={visa_apply.passport_issue_place} 
              />
              <DoubleInfoRow 
                label1="Date of Issue" 
                value1={visa_apply.passport_issue_date} 
                label2="Date of Expiry" 
                value2={visa_apply.passport_expire_date} 
              />
            </tbody>
          </table>
        </div>

        {/* Guarantor Details Section */}
        <div className="border-x-2 border-gray-400 mt-16">
          <div className="bg-gray-600 text-white text-center py-2">
            <h2 className="font-bold text-sm">Guarantor Details</h2>
          </div>
          
          <table className="w-full border-collapse">
            <tbody>
              <DoubleInfoRow 
                label1="Name" 
                value1={visa_apply.guarantor_name} 
                label2="Relation" 
                value2={visa_apply.guarantor_relation} 
              />
              <DoubleInfoRow 
                label1="Nationality" 
                value1={getNationality(visa_apply.guarantor_nationality)} 
                label2="PPT or E-ID No." 
                value2=" "
              />
              <DoubleInfoRow 
                label1="Guarantor Type" 
                value1={visa_apply.guarantor_relation} 
                label2="Agency No." 
                value2=" " 
              />
              <DoubleInfoRow 
                label1="Mobile No." 
                value1={visa_apply.guarantor_phone} 
                label2="E-mail" 
                value2=" " 
              />
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <div className="text-center">
            <button 
              onClick={confirmSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded font-medium transition-colors"
            >
              Confirm Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewVisaApply;