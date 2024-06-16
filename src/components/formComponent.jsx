import React, { useRef, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6"
import FormNavigator from './formNavigator'
import { Select } from 'antd'
import ReactFlagsSelect from "react-flags-select"
import q7Banner from '../assets/q7Banner.png'

export default function FormComponent({setThankU}) {

  //State for selecting country code
  const [selected, setSelected] = useState("")

  //Form data states
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [phoneNumber, setPhoneNumber] = useState()
  const [countryCode, setCountryCode] = useState()
  const [progLangState, setProgLang] = useState([])
  const [exp, setExp] = useState('')
  const [salary, setSalary] = useState('')
  const [linkedInLink, setLinkedInLink] = useState('')


  //Form data handling methods
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }
  
  const handleLastName = (e) => {
    setLastName(e.target.value);
  }
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  
  const handleCountry = (e) => {
    setCountry(e.target.value);
  }
  
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }
  
  const handleCountryCode = (e) => {
    setCountryCode(e.target.value)
  }
  
  const handleExp = (item) => {
    setExp(item.value);
  }
  
  const handleSalary = (item) => {

    setSalary(item.value);
  }
  

  const handleLinkedInLink = (e) => {
    setLinkedInLink(e.target.value);
  }

  const handleProgLangClick = (item) => {
    setProgLang((prevLangs) => {
      if (!prevLangs.some(lang => lang.index === item.index)) {
        return [...prevLangs, item];
      }
      return prevLangs;
    });
  };



  //scroll on btn press behavior
  const sectionRefs = useRef([])
  sectionRefs.current = [useRef(null), useRef(null), useRef(null),useRef(null), useRef(null), useRef(null),useRef(null), useRef(null), useRef(null)]

  const currentSectionIndex = useRef(0)

  const nextSection = () => {

    const nextIndex = (currentSectionIndex.current + 1) % sectionRefs.current.length
    currentSectionIndex.current = nextIndex

    sectionRefs.current[nextIndex].current.scrollIntoView({ behavior: 'smooth' })
  }

  const prevSection = () => {
    const prevIndex = (currentSectionIndex.current - 1) % sectionRefs.current.length
    currentSectionIndex.current = prevIndex

    sectionRefs.current[prevIndex].current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmission = async(e) => {
    e.preventDefault()

    const payload = {
      firstName : firstName,
      lastName : lastName,
      email : email,
      country : country,
      phoneNumber : countryCode + phoneNumber,
      progLangs : progLangState,
      exp : exp,
      salary : salary,
      linkedInLink : linkedInLink
    }
    
    //Api is empty no API url has been provided
    await fetch('',{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(res => {

    }).catch(error => {
      console.log(error)
    })
    
  
  }

  const handleThankU = () => {
    setThankU()
  }
  //Arrays 
  const countryList = [
    'United States',
    'United Kingdom',
    'China',
    'Canada',
    'United Arab Emirates',
    'Australia',
    'Andorra',
    'Afghanistan',
    'Antigua and Barbuda',
    'Anguilla',
    'Albania',
    'Armenia',
    'Angola',
    'Antarctica',
    'Argentina',
    'American Samoa',
    'Austria',
    'Aruba',
    'Azerbaijan',
    'Bosnia and Herzegovina',
    'Barbados',
    'Bangladesh',
    'Belgium',
    'Burkina Faso',
    'Bulgaria',
    'Bahrain',
    'Burundi',
    'Benin',
    'Saint Barthelemy',
    'Bermuda',
    'Brunei',
    'Bolivia',
    'Brazil',
    'Bahamas, The',
    'Bhutan',
    'Bouvet Island',
    'Botswana',
    'Belarus',
    'Belize',
    'Cocos (Keeling) Islands',
    'Congo, Democratic Republic of the',
    'Central African Republic',
    'Congo, Republic of the',
    'Switzerland',
    'Cote d\'Ivoire',
    'Cook Islands',
    'Chile',
    'Cameroon',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Cape Verde',
    'Curacao',
    'Christmas Island',
    'Cyprus',
    'Czech Republic',
    'Germany',
    'Djibouti',
    'Denmark',
    'Dominica',
    'Dominican Republic',
    'Algeria',
    'Ecuador',
    'Estonia',
    'Egypt',
    'Western Sahara',
    'Eritrea',
    'Spain',
    'Ethiopia',
    'Finland',
    'Fiji',
    'Falkland Islands (Islas Malvinas)',
    'Micronesia, Federated States of',
    'Faroe Islands',
    'France',
    'France, Metropolitan',
    'Gabon',
    'Grenada',
    'Georgia',
    'French Guiana',
    'Guernsey',
    'Ghana',
    'Gibraltar',
    'Greenland',
    'Gambia, The',
    'Guinea',
    'Guadeloupe',
    'Equatorial Guinea',
    'Greece',
    'South Georgia and the Islands',
    'Guatemala',
    'Guam',
    'Guinea-Bissau',
    'Guyana',
    'Hong Kong (SAR China)',
    'Heard Island and McDonald Islands',
    'Honduras',
    'Croatia',
    'Haiti',
    'Hungary',
    'Indonesia',
    'Ireland',
    'Israel',
    'Isle of Man',
    'India',
    'British Indian Ocean Territory',
    'Iraq',
    'Iran',
    'Iceland',
    'Italy',
    'Jersey',
    'Jamaica',
    'Jordan',
    'Japan',
    'Kenya',
    'Kyrgyzstan',
    'Cambodia',
    'Kiribati',
    'Comoros',
    'Saint Kitts and Nevis',
    'Korea, South',
    'Kuwait',
    'Cayman Islands',
    'Kazakhstan',
    'Laos',
    'Lebanon',
    'Saint Lucia',
    'Liechtenstein',
    'Sri Lanka',
    'Liberia',
    'Lesotho',
    'Lithuania',
    'Luxembourg',
    'Latvia',
    'Libya',
    'Morocco',
    'Monaco',
    'Moldova',
    'Montenegro'
  ]

  const custLabels = {
    "US": { primary: "United States", secondary: "+1" },
    "GB": { primary: "United Kingdom", secondary: "+44" },
    "CN": { primary: "China", secondary: "+86" },
    "CA": { primary: "Canada", secondary: "+1" },
    "AE": { primary: "United Arab Emirates", secondary: "+971" },
    "AU": { primary: "Australia", secondary: "+61" },
    "AD": { primary: "Andorra", secondary: "+376" },
    "AF": { primary: "Afghanistan", secondary: "+93" },
    "AG": { primary: "Antigua and Barbuda", secondary: "+1" },
    "AI": { primary: "Anguilla", secondary: "+1" },
    "AL": { primary: "Albania", secondary: "+355" },
    "AM": { primary: "Armenia", secondary: "+374" },
    "AO": { primary: "Angola", secondary: "+244" },
    "AR": { primary: "Argentina", secondary: "+54" },
    "AS": { primary: "American Samoa", secondary: "+1" },
    "AT": { primary: "Austria", secondary: "+43" },
    "AW": { primary: "Aruba", secondary: "+297" },
    "AZ": { primary: "Azerbaijan", secondary: "+994" },
    "BA": { primary: "Bosnia and Herzegovina", secondary: "+387" },
    "BB": { primary: "Barbados", secondary: "+1" },
    "BD": { primary: "Bangladesh", secondary: "+880" },
    "BE": { primary: "Belgium", secondary: "+32" },
    "BF": { primary: "Burkina Faso", secondary: "+226" },
    "BG": { primary: "Bulgaria", secondary: "+359" },
    "BH": { primary: "Bahrain", secondary: "+973" },
    "BI": { primary: "Burundi", secondary: "+257" },
    "BL": { primary: "Saint Barthelemy", secondary: "+590" },
    "BM": { primary: "Bermuda", secondary: "+1" },
    "BN": { primary: "Brunei", secondary: "+673" },
    "BO": { primary: "Bolivia", secondary: "+591" },
    "BR": { primary: "Brazil", secondary: "+55" },
    "BS": { primary: "Bahamas, The", secondary: "+1" },
    "BT": { primary: "Bhutan", secondary: "+975" },
    "BV": { primary: "Bouvet Island", secondary: "" },
    "BW": { primary: "Botswana", secondary: "+267" },
    "BY": { primary: "Belarus", secondary: "+375" },
    "BZ": { primary: "Belize", secondary: "+501" },
    "CC": { primary: "Cocos (Keeling) Islands", secondary: "" },
    "CD": { primary: "Congo, Democratic Republic", secondary: "+243" },
    "CF": { primary: "Central African Republic", secondary: "+236" },
    "CG": { primary: "Congo", secondary: "+242" },
    "CH": { primary: "Switzerland", secondary: "+41" },
    "CI": { primary: "Cote d'Ivoire", secondary: "+225" },
    "CK": { primary: "Cook Islands", secondary: "+682" },
    "CL": { primary: "Chile", secondary: "+56" },
    "CM": { primary: "Cameroon", secondary: "+237" },
    "CO": { primary: "Colombia", secondary: "+57" },
    "CR": { primary: "Costa Rica", secondary: "+506" },
    "CU": { primary: "Cuba", secondary: "+53" },
    "CV": { primary: "Cape Verde", secondary: "+238" },
    "CW": { primary: "Curacao", secondary: "+599" },
    "CX": { primary: "Christmas Island", secondary: "" },
    "CY": { primary: "Cyprus", secondary: "+357" },
    "CZ": { primary: "Czech Republic", secondary: "+420" },
    "DE": { primary: "Germany", secondary: "+49" },
    "DJ": { primary: "Djibouti", secondary: "+253" },
    "DK": { primary: "Denmark", secondary: "+45" },
    "DM": { primary: "Dominica", secondary: "+1" },
    "DO": { primary: "Dominican Republic", secondary: "+1" },
    "DZ": { primary: "Algeria", secondary: "+213" },
    "EC": { primary: "Ecuador", secondary: "+593" },
    "EE": { primary: "Estonia", secondary: "+372" },
    "EG": { primary: "Egypt", secondary: "+20" },
    "EH": { primary: "Western Sahara", secondary: "" },
    "ER": { primary: "Eritrea", secondary: "+291" },
    "ES": { primary: "Spain", secondary: "+34" },
    "ET": { primary: "Ethiopia", secondary: "+251" },
    "FI": { primary: "Finland", secondary: "+358" },
    "FJ": { primary: "Fiji", secondary: "+679" },
    "FK": { primary: "Falkland Islands (Islas Malvinas)", secondary: "" },
    "FM": { primary: "Micronesia", secondary: "" },
    "FO": { primary: "Faroe Islands", secondary: "+298" },
    "FR": { primary: "France", secondary: "+33" },
    "GA": { primary: "Gabon", secondary: "+241" },
    "GD": { primary: "Grenada", secondary: "+1" },
    "GE": { primary: "Georgia", secondary: "+995" },
    "GF": { primary: "French Guiana", secondary: "+594" },
    "GG": { primary: "Guernsey", secondary: "+44" },
    "GH": { primary: "Ghana", secondary: "+233" },
    "GI": { primary: "Gibraltar", secondary: "+350" },
    "GL": { primary: "Greenland", secondary: "+299" },
    "GM": { primary: "Gambia, The", secondary: "+220" },
    "GN": { primary: "Guinea", secondary: "+224" },
    "GP": { primary: "Guadeloupe", secondary: "+590" },
    "GQ": { primary: "Equatorial Guinea", secondary: "+240" },
    "GR": { primary: "Greece", secondary: "+30" },
    "GS": { primary: "South Georgia and the South Sandwich Islands", secondary: "" },
    "GT": { primary: "Guatemala", secondary: "+502" },
    "GU": { primary: "Guam", secondary: "+1" },
    "GW": { primary: "Guinea-Bissau", secondary: "+245" },
    "GY": { primary: "Guyana", secondary: "+592" },
    "HK": { primary: "Hong Kong", secondary: "+852" },
    "HM": { primary: "Heard Island and McDonald Islands", secondary: "" },
    "HN": { primary: "Honduras", secondary: "+504" },
    "HR": { primary: "Croatia", secondary: "+385" },
    "HT": { primary: "Haiti", secondary: "+509" },
    "HU": { primary: "Hungary", secondary: "+36" },
    "ID": { primary: "Indonesia", secondary: "+62" },
    "IE": { primary: "Ireland", secondary: "+353" },
    "IL": { primary: "Israel", secondary: "+972" },
    "IM": { primary: "Isle of Man", secondary: "+44" },
    "IN": { primary: "India", secondary: "+91" },
    "IO": { primary: "British Indian Ocean Territory", secondary: "" },
    "IQ": { primary: "Iraq", secondary: "+964" },
    "IR": { primary: "Iran", secondary: "+98" },
    "IS": { primary: "Iceland", secondary: "+354" },
    "IT": { primary: "Italy", secondary: "+39" },
    "JE": { primary: "Jersey", secondary: "+44" },
    "JM": { primary: "Jamaica", secondary: "+1" },
    "JO": { primary: "Jordan", secondary: "+962" },
    "JP": { primary: "Japan", secondary: "+81" },
    "KE": { primary: "Kenya", secondary: "+254" },
    "KG": { primary: "Kyrgyzstan", secondary: "+996" },
    "KH": { primary: "Cambodia", secondary: "+855" },
    "KI": { primary: "Kiribati", secondary: "+686" },
    "KM": { primary: "Comoros", secondary: "+269" },
    "KN": { primary: "Saint Kitts and Nevis", secondary: "+1" },
    "KR": { primary: "South Korea", secondary: "+82" },
    "KW": { primary: "Kuwait", secondary: "+965" },
    "KY": { primary: "Cayman Islands", secondary: "+1" },
    "KZ": { primary: "Kazakhstan", secondary: "+7" },
    "LA": { primary: "Laos", secondary: "+856" },
    "LB": { primary: "Lebanon", secondary: "+961" },
    "LC": { primary: "Saint Lucia", secondary: "+1" },
    "LI": { primary: "Liechtenstein", secondary: "+423" },
    "LK": { primary: "Sri Lanka", secondary: "+94" },
    "LR": { primary: "Liberia", secondary: "+231" },
    "LS": { primary: "Lesotho", secondary: "+266" },
    "LT": { primary: "Lithuania", secondary: "+370" },
    "LU": { primary: "Luxembourg", secondary: "+352" },
    "LV": { primary: "Latvia", secondary: "+371" },
    "LY": { primary: "Libya", secondary: "+218" },
    "MA": { primary: "Morocco", secondary: "+212" },
    "MC": { primary: "Monaco", secondary: "+377" },
    "MD": { primary: "Moldova", secondary: "+373" },
    "ME": { primary: "Montenegro", secondary: "+382" },
    "MF": { primary: "Saint Martin", secondary: "+590" },
    "MG": { primary: "Madagascar", secondary: "+261" },
    "MH": { primary: "Marshall Islands", secondary: "+692" },
    "MK": { primary: "North Macedonia", secondary: "+389" },
    "ML": { primary: "Mali", secondary: "+223" },
    "MM": { primary: "Myanmar", secondary: "+95" },
    "MN": { primary: "Mongolia", secondary: "+976" },
    "MO": { primary: "Macau", secondary: "+853" },
    "MP": { primary: "Northern Mariana Islands", secondary: "+1" },
    "MQ": { primary: "Martinique", secondary: "+596" },
    "MR": { primary: "Mauritania", secondary: "+222" },
    "MS": { primary: "Montserrat", secondary: "+1" },
    "MT": { primary: "Malta", secondary: "+356" },
    "MU": { primary: "Mauritius", secondary: "+230" },
    "MV": { primary: "Maldives", secondary: "+960" },
    "MW": { primary: "Malawi", secondary: "+265" },
    "MX": { primary: "Mexico", secondary: "+52" },
    "MY": { primary: "Malaysia", secondary: "+60" },
    "MZ": { primary: "Mozambique", secondary: "+258" },
    "NA": { primary: "Namibia", secondary: "+264" },
    "NC": { primary: "New Caledonia", secondary: "+687" },
    "NE": { primary: "Niger", secondary: "+227" },
    "NF": { primary: "Norfolk Island", secondary: "" },
    "NG": { primary: "Nigeria", secondary: "+234" },
    "NI": { primary: "Nicaragua", secondary: "+505" },
    "NL": { primary: "Netherlands", secondary: "+31" },
    "NO": { primary: "Norway", secondary: "+47" },
    "NP": { primary: "Nepal", secondary: "+977" },
    "NR": { primary: "Nauru", secondary: "+674" },
    "NU": { primary: "Niue", secondary: "+683" },
    "NZ": { primary: "New Zealand", secondary: "+64" },
    "OM": { primary: "Oman", secondary: "+968" },
    "PA": { primary: "Panama", secondary: "+507" },
    "PE": { primary: "Peru", secondary: "+51" },
    "PF": { primary: "French Polynesia", secondary: "+689" },
    "PG": { primary: "Papua New Guinea", secondary: "+675" },
    "PH": { primary: "Philippines", secondary: "+63" },
    "PK": { primary: "Pakistan", secondary: "+92" },
    "PL": { primary: "Poland", secondary: "+48" },
    "PM": { primary: "Saint Pierre and Miquelon", secondary: "+508" },
    "PN": { primary: "Pitcairn Islands", secondary: "+64" },
    "PR": { primary: "Puerto Rico", secondary: "+1" },
    "PT": { primary: "Portugal", secondary: "+351" },
    "PW": { primary: "Palau", secondary: "+680" },
    "PY": { primary: "Paraguay", secondary: "+595" },
    "QA": { primary: "Qatar", secondary: "+974" },
    "RE": { primary: "Reunion", secondary: "+262" },
    "RO": { primary: "Romania", secondary: "+40" },
    "RS": { primary: "Serbia", secondary: "+381" },
    "RU": { primary: "Russia", secondary: "+7" },
    "RW": { primary: "Rwanda", secondary: "+250" },
    "SA": { primary: "Saudi Arabia", secondary: "+966" },
    "SB": { primary: "Solomon Islands", secondary: "+677" },
    "SC": { primary: "Seychelles", secondary: "+248" },
    "SD": { primary: "Sudan", secondary: "+249" },
    "SE": { primary: "Sweden", secondary: "+46" },
    "SG": { primary: "Singapore", secondary: "+65" },
    "SH": { primary: "Saint Helena, Ascension and Tristan da Cunha", secondary: "+290" },
    "SI": { primary: "Slovenia", secondary: "+386" },
    "SJ": { primary: "Svalbard and Jan Mayen", secondary: "+47" },
    "SK": { primary: "Slovakia", secondary: "+421" },
    "SL": { primary: "Sierra Leone", secondary: "+232" },
    "SM": { primary: "San Marino", secondary: "+378" },
    "SN": { primary: "Senegal", secondary: "+221" },
    "SO": { primary: "Somalia", secondary: "+252" },
    "SR": { primary: "Suriname", secondary: "+597" },
    "SS": { primary: "South Sudan", secondary: "+211" },
    "ST": { primary: "Sao Tome and Principe", secondary: "+239" },
    "SV": { primary: "El Salvador", secondary: "+503" },
    "SX": { primary: "Sint Maarten", secondary: "+1" },
    "SY": { primary: "Syria", secondary: "+963" },
    "SZ": { primary: "Eswatini (Swaziland)", secondary: "+268" },
    "TC": { primary: "Turks and Caicos Islands", secondary: "+1" },
    "TD": { primary: "Chad", secondary: "+235" },
    "TF": { primary: "French Southern and Antarctic Lands", secondary: "" },
    "TG": { primary: "Togo", secondary: "+228" },
    "TH": { primary: "Thailand", secondary: "+66" },
    "TJ": { primary: "Tajikistan", secondary: "+992" },
    "TK": { primary: "Tokelau", secondary: "+690" },
    "TL": { primary: "Timor-Leste", secondary: "+670" },
    "TM": { primary: "Turkmenistan", secondary: "+993" },
    "TN": { primary: "Tunisia", secondary: "+216" },
    "TO": { primary: "Tonga", secondary: "+676" },
    "TR": { primary: "Turkey", secondary: "+90" },
    "TT": { primary: "Trinidad and Tobago", secondary: "+1" },
    "TV": { primary: "Tuvalu", secondary: "+688" },
    "TW": { primary: "Taiwan", secondary: "+886" },
    "TZ": { primary: "Tanzania", secondary: "+255" },
    "UA": { primary: "Ukraine", secondary: "+380" },
    "UG": { primary: "Uganda", secondary: "+256" },
    "UM": { primary: "United States Minor Outlying Islands", secondary: "" },
    "UY": { primary: "Uruguay", secondary: "+598" },
    "UZ": { primary: "Uzbekistan", secondary: "+998" },
    "VA": { primary: "Vatican City (Holy See)", secondary: "+39" },
    "VC": { primary: "Saint Vincent and the Grenadines", secondary: "+1" },
    "VE": { primary: "Venezuela", secondary: "+58" },
    "VG": { primary: "British Virgin Islands", secondary: "+1" },
    "VI": { primary: "U.S. Virgin Islands", secondary: "+1" },
    "VN": { primary: "Vietnam", secondary: "+84" },
    "VU": { primary: "Vanuatu", secondary: "+678" },
    "WF": { primary: "Wallis and Futuna", secondary: "+681" },
    "WS": { primary: "Samoa", secondary: "+685" },
    "YE": { primary: "Yemen", secondary: "+967" },
    "YT": { primary: "Mayotte", secondary: "+262" },
    "ZA": { primary: "South Africa", secondary: "+27" },
    "ZM": { primary: "Zambia", secondary: "+260" },
    "ZW": { primary: "Zimbabwe", secondary: "+263" }
  }

  const progLangs = [
    {
      index: "A",
      value: "Solidity"
    },
    {
      index: "B",
      value: "Rust"
    },
    {
      index: "C",
      value: "Node.js"
    },
    {
      index: "D",
      value: "Typescript"
    },
    {
      index: "E",
      value: "Javascript"
    },
    {
      index: "F",
      value: "C"
    },
    {
      index: "G",
      value: "C++"
    },
    {
      index: "H",
      value: "C#"
    },
    {
      index: "I",
      value: "SQL"
    },
    {
      index: "J",
      value: "Python"
    },
    {
      index: "K",
      value: "Assembly Language"
    },
    {
      index: "L",
      value: "Haskell"
    },
    {
      index: "M",
      value: "R"
    },
    {
      index: "N",
      value: ".NET"
    },
    {
      index: "O",
      value: "Other"
    },
  ]

  const experienceLevel = [
    {
      index: "A",
      value: "No experience (I have never programmed before)"
    },
    {
      index: "B",
      value: "Beginner (I have played with some introductory coding lessons and tutorials.)"
    },
    {
      index: "C",
      value: "Intermediate (I have completed some coding classes or tutorials.)"
    },
    {
      index: "D",
      value: "Advanced (I can build applications.)"
    },
    {
      index: "E",
      value: "Professional (I am an experienced software engineer)"
    },
  ]

  const salaryList = [
    {
      index: "A",
      value: "<$30,000"
    },
    {
      index: "B",
      value: "$30,000 - $50,000"
    },
    {
      index: "C",
      value: "$50,000 - $80,000"
    },
    {
      index: "D",
      value: "$80,000 - $120,000"
    },
    {
      index: "E",
      value: "$120,000 - $250,000"
    },
    {
      index: "F",
      value: "$250,000 or more"
    },
  ]


  return (
    <div>
      <form onSubmit={handleSubmission} className=' snap-y snap-mandatory overflow-y-auto overflow-x-hidden h-screen w-screen'>
        <section id='q1' ref={sectionRefs.current[0]} className=' snap-start w-screen h-screen flex justify-center items-center'>
          <div className='flex text-black items-center h-full w-1/2'>
            <div className='flex w-full'>
              <div className='flex text-[#CF9FFF] items-start '>
                <div className=' flex items-center gap-2 text-base mt-1 pr-2'>
                  <p>1</p>
                  <FaArrowRightLong />

                </div>

              </div>
              <div className=' w-full flex flex-col'>
                <p className=' font-lexend-deca text-[#191B33] text-2xl'>Before we start, what is your name?</p>
                <div className=' w-full flex flex-col mt-8'>
                  <span className=' w-full flex flex-col text-[#CF9FFF] mb-12'>
                    <label className=' text-base'>First name</label>
                    <input onChange={handleFirstName} type='text' placeholder='Jane' className='focus:outline-0 text-2xl pb-2 appearance-none  w-full border-b-2 border-[#CF9FFF] placeholder:text-[#F1E2FF]' />
                  </span>
                  <span className=' w-full flex flex-col text-[#CF9FFF] mb-12'>
                    <label className=' text-base'>Last name</label>
                    <input  onChange={handleLastName} type='text' placeholder='Jane' className=' focus:outline-0 text-2xl pb-2 appearance-none  w-full border-b-2 border-[#CF9FFF] placeholder:text-[#F1E2FF]' />
                  </span>
                </div>
                <div className=' flex '>
                  <button type='button' onClick={() => nextSection()} className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>OK</button>
                  <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                    <p>press  &nbsp;</p>
                    <strong>Enter ↵</strong>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section id='q2' ref={sectionRefs.current[1]} className=' snap-start w-screen h-screen flex justify-center items-center'>
          <div className='flex text-black  h-full  items-center w-1/2'>
            <div className='flex w-full'>
              <div className='flex text-[#CF9FFF] items-start '>
                <div className=' flex items-center gap-2 text-base mt-1 pr-2'>
                  <p>2</p>
                  <FaArrowRightLong />

                </div>

              </div>
              <div className=' w-full flex flex-col'>
                <p className=' font-lexend-deca text-[#191B33] text-2xl'>What's your email address?</p>
                <p className=' font-lexend-deca text-[#5E5F70] mt-3 text-xl'>This is how we'll contact you.</p>
                <div className=' w-full flex flex-col mt-8'>
                  <span className=' w-full flex flex-col text-[#CF9FFF] mb-4'>
                    <input  onChange={handleEmail} type='email' placeholder='name@example.com' className='focus:outline-0 text-3xl pb-2 appearance-none  w-full border-b-2 border-[#CF9FFF] placeholder:text-[#F1E2FF]' />
                  </span>

                </div>
                <div className=' flex '>
                  <button type='button' onClick={() => nextSection()} className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>OK</button>
                  <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                    <p>press  &nbsp;</p>
                    <strong>Enter ↵</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
        <section id='q3' ref={sectionRefs.current[2]} className=' snap-start w-screen h-screen flex justify-center items-center'>
          <div className='flex text-black items-center h-full w-1/2'>
            <div className='flex w-full'>
              <div className='flex text-[#CF9FFF] items-start '>
                <div className=' flex items-center gap-2 text-base mt-1 pr-2'>
                  <p>3</p>
                  <FaArrowRightLong />

                </div>

              </div>
              <div className=' w-full flex flex-col'>
                <p className=' font-lexend-deca text-[#191B33] text-2xl'>Which country you are from? 🏡🏡🏡</p>

                <div className=' w-full flex flex-col mt-8'>
                  <span className=' w-full flex flex-col text-[#CF9FFF] mb-4'>

                    <Select
                      showSearch
                      style={{ width: '100%' }}
                      placeholder="Type or select an option"
                      optionFilterProp="children"
                      filterOption={(input, option) => (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
                      filterSort={(optionA, optionB) =>
                        (optionA?.children ?? '').toLowerCase().localeCompare((optionB?.children ?? '').toLowerCase())
                      }
                      popupClassName="custom-dropdown"
                      className=' border-b-2 pb-[50px] border-[#CF9FFF] placeholder:text-[#F1E2FF]'
                    >

                      {countryList.map((country, index) => (
                        <Option key={index} value={country}  onChange={handleCountry}>
                          {country}
                        </Option>
                      ))}
                    </Select>
                  </span>

                </div>
                <div className=' flex '>
                  <button type='button' onClick={() => nextSection()} className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>OK</button>
                  <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                    <p>press  &nbsp;</p>
                    <strong>Enter ↵</strong>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section id='q4' ref={sectionRefs.current[3]} className=' snap-start w-screen h-screen flex justify-center items-center'>
          <div className='flex text-black items-center h-full w-1/2'>
            <div className='flex w-full'>
              <div className='flex text-[#CF9FFF] items-start '>
                <div className=' flex items-center gap-2 text-base mt-1 pr-2'>
                  <p>4</p>
                  <FaArrowRightLong />

                </div>

              </div>
              <div className=' w-full flex flex-col'>
                <p className=' font-lexend-deca text-[#191B33] text-2xl'>What is your phone number?</p>
                <div className=' w-full flex flex-col mt-8'>
                  <span className=' w-full flex text-[#CF9FFF] mb-4 items-center'>
                    <ReactFlagsSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      placeholder=''
                      searchable
                      countries={["US", "GB", "CN", "CA", "AE", "AU", "AD", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BL", "BM", "BN", "BO", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME"]}
                      customLabels={custLabels}
                      searchPlaceholder='Search countries'
                      showSelectedLabel={false}
                      showSecondarySelectedLabel={false}
                      className=' mr-2'
                      fullWidth={false}
                      onChange={handleCountryCode}
                    />
                    <input  onChange={handlePhoneNumber} type='number' placeholder='0551 23 45 67' className='focus:outline-0 text-3xl pb-2 appearance-none  w-full border-b-2 border-[#CF9FFF] placeholder:text-[#F1E2FF]' />
                  </span>

                </div>
                <div className=' flex '>
                  <button type='button' onClick={() => nextSection()} className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>OK</button>
                  <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                    <p>press  &nbsp;</p>
                    <strong>Enter ↵</strong>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section id='q5' ref={sectionRefs.current[4]} className=' snap-start w-screen h-screen flex justify-center items-center'>
          <div className='flex text-black  h-full  items-center w-1/2'>
            <div className='flex w-full'>
              <div className='flex text-[#CF9FFF] items-start '>
                <div className=' flex items-center gap-2 text-base mt-1 pr-2'>
                  <p>5</p>
                  <FaArrowRightLong />

                </div>

              </div>
              <div className=' w-full flex flex-col'>
                <p className=' font-lexend-deca text-[#191B33] text-2xl'>What languages and frameworks are you familiar with?</p>
                <p className=' font-lexend-deca text-[#5E5F70] mt-3 text-xl'>Select all the languages you know.</p>
                <p className=' font-lexend-deca text-[#CF9FFF] text-sm  mt-8 mb-2'>Choose as many as you like</p>
                <div className=' w-full flex flex-col'>
                  <div  className=' flex  flex-wrap w-full h-fit'>
                    {progLangs.map((item) => (
                      <div key={item.index} onClick={() => handleProgLangClick(item)} className=' cursor-pointer rounded-lg w-[32%] mb-2 mr-2 p-2 font-lexend-deca text-[#CF9FFF] border-[#CF9FFF] border-2 flex bg-[#FAF5FF] hover:bg-[#E7CFFF] items-center'>
                        <div className=' bg-white px-2 border-2 mr-2 border-[#CF9FFF] rounded-md'>{item.index}</div>
                        <div >{item.value}</div>
                      </div>
                    ))}
                  </div>

                </div>
                <div className=' flex '>
                  <button type='button' onClick={() => nextSection()} className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>OK</button>
                  <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                    <p>press  &nbsp;</p>
                    <strong>Enter ↵</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
        <section id='q6' ref={sectionRefs.current[5]} className=' snap-start w-screen h-screen flex justify-center items-center'>
          <div className='flex text-black  h-full  items-center w-1/2'>
            <div className='flex w-full'>
              <div className='flex text-[#CF9FFF] items-start '>
                <div className=' flex items-center gap-2 text-base mt-1 pr-2'>
                  <p>6</p>
                  <FaArrowRightLong />

                </div>

              </div>
              <div className=' w-full flex flex-col'>
                <p className=' font-lexend-deca text-[#191B33] text-2xl'>How would you describe your current level of coding experience?</p>

                <div className=' w-full flex mt-8 flex-col'>
                  <div className=' flex flex-col w-full h-fit'>
                    {experienceLevel.map((item) => (
                      <div  onClick={() => handleExp(item)} className=' cursor-pointer rounded-lg w-full mb-2  p-2 font-lexend-deca text-[#CF9FFF] border-[#CF9FFF] border-2 flex bg-[#FAF5FF] hover:bg-[#E7CFFF] items-center'>
                        <div className=' bg-white px-2 border-2 mr-2 border-[#CF9FFF] rounded-md'>{item.index}</div>
                        <div >{item.value}</div>
                      </div>
                    ))}
                  </div>

                </div>
                <div className=' flex '>
                  <button type='button' onClick={() => nextSection()} className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>OK</button>
                  <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                    <p>press  &nbsp;</p>
                    <strong>Enter ↵</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
        <section id='q7' ref={sectionRefs.current[6]} className=' snap-start w-screen h-screen flex justify-center items-center'>
          <div className='flex text-black  h-full  items-center w-full'>
            <div className='flex w-1/2 pl-8'>
              <div className='flex text-[#CF9FFF] items-start '>
                <div className=' flex items-center gap-2 text-base mt-1 pr-2'>
                  <p>7</p>
                  <FaArrowRightLong />

                </div>

              </div>
              <div className=' w-full flex flex-col'>
                <p className=' font-lexend-deca text-[#191B33] text-2xl'>What is your current annual compensation? (Optional)</p>
                <p className=' font-lexend-deca text-[#5E5F70] mt-3 text-xl'>Disclaimer: The information provided regarding salary will be kept confidential and <b>will not be</b> used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.</p>
                <div className=' w-full flex mt-8 flex-col'>
                  <div className=' flex flex-col w-full h-fit'>
                    {salaryList.map((item) => (
                      <div onClick={() => handleSalary(item)} className=' cursor-pointer rounded-lg w-1/2 mb-2  p-2 font-lexend-deca text-[#CF9FFF] border-[#CF9FFF] border-2 flex bg-[#FAF5FF] hover:bg-[#E7CFFF] items-center'>
                        <div className=' bg-white px-2 border-2 mr-2 border-[#CF9FFF] rounded-md'>{item.index}</div>
                        <div >{item.value}</div>
                      </div>
                    ))}
                  </div>

                </div>
                <div className=' flex '>
                  <button type='button' onClick={() => nextSection()} className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>OK</button>
                  <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                    <p>press  &nbsp;</p>
                    <strong>Enter ↵</strong>
                  </div>
                </div>

              </div>
            </div>
            <div className=' flex justify-center items-center w-1/2'>
              <img src={q7Banner} alt='' />
            </div>

          </div>
        </section>
        <section id='q8' ref={sectionRefs.current[7]} className=' snap-start w-screen h-screen flex justify-center items-center'>
          <div className='flex text-black  h-full  items-center w-1/2'>
            <div className='flex w-full'>
              <div className='flex text-[#CF9FFF] items-start '>
                <div className=' flex items-center gap-2 text-base mt-1 pr-2'>
                  <p>8</p>
                  <FaArrowRightLong />

                </div>

              </div>
              <div className=' w-full flex flex-col'>
                <p className=' font-lexend-deca text-[#191B33] text-2xl'>Certifying Statement*</p>
                <p className=' font-lexend-deca text-[#5E5F70] mt-3 text-xl'>I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.</p>
                <div className=' w-full flex mt-8 flex-col'>
                  <div className=' cursor-pointer rounded-lg w-1/2 mb-2  p-2 font-lexend-deca text-[#CF9FFF] border-[#CF9FFF] border-2 flex bg-[#FAF5FF] hover:bg-[#E7CFFF] items-center'>
                    <div className=' bg-white px-2 border-2 mr-2 border-[#CF9FFF] rounded-md'>A</div>
                    <div >I accept</div>
                  </div>
                  <div className=' cursor-pointer rounded-lg w-1/2 mb-2  p-2 font-lexend-deca text-[#CF9FFF] border-[#CF9FFF] border-2 flex bg-[#FAF5FF] hover:bg-[#E7CFFF] items-center'>
                    <div className=' bg-white px-2 border-2 mr-2 border-[#CF9FFF] rounded-md'>B</div>
                    <div >I don't accept</div>
                  </div>

                </div>
                <div className=' flex '>
                  <button type='button' onClick={() => nextSection()} className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>OK</button>
                  <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                    <p>press  &nbsp;</p>
                    <strong>Enter ↵</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
        <section id='q9' ref={sectionRefs.current[8]} className=' snap-start w-screen h-screen flex justify-center items-center'>
          <div className='flex text-black  h-full  items-center w-1/2'>
            <div className='flex w-full'>
              <div className='flex text-[#CF9FFF] items-start '>
                <div className=' flex items-center gap-2 text-base mt-1 pr-2'>
                  <p>9</p>
                  <FaArrowRightLong />

                </div>

              </div>
              <div className=' w-full flex flex-col'>
                <p className=' font-lexend-deca text-[#191B33] text-2xl'>LinkedIn URL (optional)</p>
                <p className=' font-lexend-deca text-[#5E5F70] mt-3 text-xl'>Here's a sniper link to make your life easy - <a href='https://www.linkedin.com/in/me/' className=' underline'>linkedin.com</a> (It'll open in a new tab) 🚀</p>
                <div className=' w-full flex flex-col mt-8'>
                  <span className=' w-full flex flex-col text-[#CF9FFF] mb-4'>
                    <input onChange={handleLinkedInLink} type='text' placeholder='Type your answer here...' className='focus:outline-0 text-3xl pb-2 appearance-none  w-full border-b-2 border-[#CF9FFF] placeholder:text-[#F1E2FF]' />
                  </span>

                </div>
                <div className=' flex '>
                  <button type='submit' onClick={() => handleThankU()} className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>Submit</button>
                  <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                    <p>press  &nbsp;</p>
                    <strong>Ctrl + Enter ↵</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
        <FormNavigator selectNext={() => nextSection()} selectPrev={() => prevSection()} />

      </form>
    </div>
  )
}