<?php

namespace Database\Seeders;

use App\Models\Country;
use App\Models\Language;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Role::query()->create([
            'name' => 'Super Admin',
            'is_super_admin' => 1,
        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'admin@evisa.com',
            'username' => 'admin@evisa.com',
            'role' => 1,
            'role_id' => 1,
            'password' => bcrypt('password')
        ]);


        User::factory()->create([
            'name' => 'Test User',
            'email' => 'agency@evisa.com',
            'username' => 'agency@evisa.com',
            'role' => 2,
            'role_id' => 1,
            'password' => bcrypt('password')
        ]);
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'user@evisa.com',
            'username' => 'user@evisa.com',
            'role' => 3,
            'role_id' => 1,
            'password' => bcrypt('password')
        ]);

        $countries = [
            'Afghanistan' => 'Afghan',
            'Albania' => 'Albanian',
            'Algeria' => 'Algerian',
            'Andorra' => 'Andorran',
            'Angola' => 'Angolan',
            'Antigua and Barbuda' => 'Antiguan or Barbudan',
            'Argentina' => 'Argentine',
            'Armenia' => 'Armenian',
            'Australia' => 'Australian',
            'Austria' => 'Austrian',
            'Azerbaijan' => 'Azerbaijani',
            'Bahamas' => 'Bahamian',
            'Bahrain' => 'Bahraini',
            'Bangladesh' => 'Bangladeshi',
            'Barbados' => 'Barbadian',
            'Belarus' => 'Belarusian',
            'Belgium' => 'Belgian',
            'Belize' => 'Belizean',
            'Benin' => 'Beninese',
            'Bhutan' => 'Bhutanese',
            'Bolivia' => 'Bolivian',
            'Bosnia and Herzegovina' => 'Bosnian or Herzegovinian',
            'Botswana' => 'Botswanan',
            'Brazil' => 'Brazilian',
            'Brunei' => 'Bruneian',
            'Bulgaria' => 'Bulgarian',
            'Burkina Faso' => 'Burkinabé',
            'Burundi' => 'Burundian',
            'Cabo Verde' => 'Cape Verdean',
            'Cambodia' => 'Cambodian',
            'Cameroon' => 'Cameroonian',
            'Canada' => 'Canadian',
            'Central African Republic' => 'Central African',
            'Chad' => 'Chadian',
            'Chile' => 'Chilean',
            'China' => 'Chinese',
            'Colombia' => 'Colombian',
            'Comoros' => 'Comorian',
            'Congo (Congo-Brazzaville)' => 'Congolese',
            'Congo (Democratic Republic of the Congo)' => 'Congolese',
            'Costa Rica' => 'Costa Rican',
            'Croatia' => 'Croatian',
            'Cuba' => 'Cuban',
            'Cyprus' => 'Cypriot',
            'Czech Republic' => 'Czech',
            'Denmark' => 'Danish',
            'Djibouti' => 'Djiboutian',
            'Dominica' => 'Dominican',
            'Dominican Republic' => 'Dominican',
            'Ecuador' => 'Ecuadorian',
            'Egypt' => 'Egyptian',
            'El Salvador' => 'Salvadoran',
            'Equatorial Guinea' => 'Equatorial Guinean',
            'Eritrea' => 'Eritrean',
            'Estonia' => 'Estonian',
            'Eswatini' => 'Swazi',
            'Ethiopia' => 'Ethiopian',
            'Fiji' => 'Fijian',
            'Finland' => 'Finnish',
            'France' => 'French',
            'Gabon' => 'Gabonese',
            'Gambia' => 'Gambian',
            'Georgia' => 'Georgian',
            'Germany' => 'German',
            'Ghana' => 'Ghanaian',
            'Greece' => 'Greek',
            'Grenada' => 'Grenadian',
            'Guatemala' => 'Guatemalan',
            'Guinea' => 'Guinean',
            'Guinea-Bissau' => 'Guinea-Bissauan',
            'Guyana' => 'Guyanese',
            'Haiti' => 'Haitian',
            'Honduras' => 'Honduran',
            'Hungary' => 'Hungarian',
            'Iceland' => 'Icelander',
            'India' => 'Indian',
            'Indonesia' => 'Indonesian',
            'Iran' => 'Iranian',
            'Iraq' => 'Iraqi',
            'Ireland' => 'Irish',
            'Israel' => 'Israeli',
            'Italy' => 'Italian',
            'Jamaica' => 'Jamaican',
            'Japan' => 'Japanese',
            'Jordan' => 'Jordanian',
            'Kazakhstan' => 'Kazakhstani',
            'Kenya' => 'Kenyan',
            'Kiribati' => 'I-Kiribati',
            'Korea (North)' => 'North Korean',
            'Korea (South)' => 'South Korean',
            'Kuwait' => 'Kuwaiti',
            'Kyrgyzstan' => 'Kyrgyzstani',
            'Laos' => 'Lao',
            'Latvia' => 'Latvian',
            'Lebanon' => 'Lebanese',
            'Lesotho' => 'Mosotho',
            'Liberia' => 'Liberian',
            'Libya' => 'Libyan',
            'Liechtenstein' => 'Liechtenstein',
            'Lithuania' => 'Lithuanian',
            'Luxembourg' => 'Luxembourgish',
            'Madagascar' => 'Malagasy',
            'Malawi' => 'Malawian',
            'Malaysia' => 'Malaysian',
            'Maldives' => 'Maldivian',
            'Mali' => 'Malian',
            'Malta' => 'Maltese',
            'Marshall Islands' => 'Marshallese',
            'Mauritania' => 'Mauritanian',
            'Mauritius' => 'Mauritian',
            'Mexico' => 'Mexican',
            'Micronesia' => 'Micronesian',
            'Moldova' => 'Moldovan',
            'Monaco' => 'Monacan',
            'Mongolia' => 'Mongolian',
            'Montenegro' => 'Montenegrin',
            'Morocco' => 'Moroccan',
            'Mozambique' => 'Mozambican',
            'Myanmar' => 'Burmese',
            'Namibia' => 'Namibian',
            'Nauru' => 'Nauruan',
            'Nepal' => 'Nepali',
            'Netherlands' => 'Dutch',
            'New Zealand' => 'New Zealander',
            'Nicaragua' => 'Nicaraguan',
            'Niger' => 'Nigerien',
            'Nigeria' => 'Nigerian',
            'North Macedonia' => 'Macedonian',
            'Norway' => 'Norwegian',
            'Oman' => 'Omani',
            'Pakistan' => 'Pakistani',
            'Palau' => 'Palauan',
            'Panama' => 'Panamanian',
            'Papua New Guinea' => 'Papua New Guinean',
            'Paraguay' => 'Paraguayan',
            'Peru' => 'Peruvian',
            'Philippines' => 'Filipino',
            'Poland' => 'Polish',
            'Portugal' => 'Portuguese',
            'Qatar' => 'Qatari',
            'Romania' => 'Romanian',
            'Russia' => 'Russian',
            'Rwanda' => 'Rwandan',
            'Saint Kitts and Nevis' => 'Kittitian or Nevisian',
            'Saint Lucia' => 'Saint Lucian',
            'Saint Vincent and the Grenadines' => 'Saint Vincentian',
            'Samoa' => 'Samoan',
            'San Marino' => 'Sammarinese',
            'Sao Tome and Principe' => 'Sao Tomean',
            'Saudi Arabia' => 'Saudi',
            'Senegal' => 'Senegalese',
            'Serbia' => 'Serbian',
            'Seychelles' => 'Seychellois',
            'Sierra Leone' => 'Sierra Leonean',
            'Singapore' => 'Singaporean',
            'Slovakia' => 'Slovak',
            'Slovenia' => 'Slovene',
            'Solomon Islands' => 'Solomon Islander',
            'Somalia' => 'Somali',
            'South Africa' => 'South African',
            'South Sudan' => 'South Sudanese',
            'Spain' => 'Spanish',
            'Sri Lanka' => 'Sri Lankan',
            'Sudan' => 'Sudanese',
            'Suriname' => 'Surinamese',
            'Sweden' => 'Swedish',
            'Switzerland' => 'Swiss',
            'Syria' => 'Syrian',
            'Taiwan' => 'Taiwanese',
            'Tajikistan' => 'Tajik',
            'Tanzania' => 'Tanzanian',
            'Thailand' => 'Thai',
            'Timor-Leste' => 'Timorese',
            'Togo' => 'Togolese',
            'Tonga' => 'Tongan',
            'Trinidad and Tobago' => 'Trinidadian',
            'Tunisia' => 'Tunisian',
            'Turkey' => 'Turkish',
            'Turkmenistan' => 'Turkmen',
            'Tuvalu' => 'Tuvaluan',
            'Uganda' => 'Ugandan',
            'Ukraine' => 'Ukrainian',
            'United Arab Emirates' => 'Emirati',
            'United Kingdom' => 'British',
            'United States of America' => 'American',
            'Uruguay' => 'Uruguayan',
            'Uzbekistan' => 'Uzbekistani',
            'Vanuatu' => 'Vanuatu-an',
            'Vatican City' => 'Vatican',
            'Venezuela' => 'Venezuelan',
            'Vietnam' => 'Vietnamese',
            'Yemen' => 'Yemeni',
            'Zambia' => 'Zambian',
            'Zimbabwe' => 'Zimbabwean'
        ];

        $countryData = [];

        foreach ($countries as $country => $nationality) {
            $countryData[] = [
                'name' => $country,
                'nationality' => $nationality,
                'created_at' => now(),
                'updated_at' => now()
            ];
        }

        Country::query()->insert($countryData);

        $languages = [

            ['name' => 'Bangla', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'English', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Chinese', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Hindi', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Spanish', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'French', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Arabic', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Portuguese', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Russian', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Urdu', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Indonesian', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Standard German', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Japanese', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Swahili', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Marathi', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Telugu', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Turkish', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Korean', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Tamil', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Vietnamese', 'created_at' => now(), 'updated_at' => now()]
        ];

        Language::query()->insert($languages);

    }
}
