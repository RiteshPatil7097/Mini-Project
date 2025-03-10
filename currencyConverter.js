const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromcurr=document.querySelector(".from select")
const tocurr=document.querySelector(".to select")
const msg=document.querySelector(".msg");
const countryList = {
    AED: "AE",AFN: "AF",XCD: "AG",
    ALL: "AL",AMD: "AM",ANG: "AN",
    AOA: "AO",AQD: "AQ",ARS: "AR",
    AUD: "AU",AZN: "AZ",BAM: "BA",
    BBD: "BB",BDT: "BD",XOF: "BE",
    BGN: "BG",BHD: "BH",BIF: "BI",
    BMD: "BM",BND: "BN",BOB: "BO",
    BRL: "BR",BSD: "BS",NOK: "BV",
    BWP: "BW",BYR: "BY",BZD: "BZ",
    CAD: "CA",CDF: "CD",XAF: "CF",
    CHF: "CH",CLP: "CL",CNY: "CN",
    COP: "CO",CRC: "CR",CUP: "CU",
    CVE: "CV",CYP: "CY",CZK: "CZ",
    DJF: "DJ",DKK: "DK",DOP: "DO",
    DZD: "DZ",ECS: "EC",EEK: "EE",
    EGP: "EG",ETB: "ET",EUR: "FR",
    FJD: "FJ",FKP: "FK",GBP: "GB",
    GEL: "GE",GGP: "GG",GHS: "GH",
    GIP: "GI",GMD: "GM",GNF: "GN",
    GTQ: "GT",GYD: "GY",HKD: "HK",
    HNL: "HN",HRK: "HR",HTG: "HT",
    HUF: "HU",IDR: "ID",ILS: "IL",
    INR: "IN",IQD: "IQ",IRR: "IR",
    ISK: "IS",JMD: "JM",JOD: "JO",
    JPY: "JP",KES: "KE",KGS: "KG",
    KHR: "KH",KMF: "KM",KPW: "KP",
    KRW: "KR",KWD: "KW",KYD: "KY",
    KZT: "KZ",LAK: "LA",LBP: "LB",
    LKR: "LK",LRD: "LR",LSL: "LS",
    LTL: "LT",LVL: "LV",LYD: "LY",
    MAD: "MA",MDL: "MD",MGA: "MG",
    MKD: "MK",MMK: "MM",MNT: "MN",
    MOP: "MO",MRO: "MR",MTL: "MT",
    MUR: "MU",MVR: "MV",MWK: "MW",
    MXN: "MX",MYR: "MY",MZN: "MZ",
    NAD: "NA",XPF: "NC",NGN: "NG",
    NIO: "NI",NPR: "NP",NZD: "NZ",
    OMR: "OM",PAB: "PA",PEN: "PE",
    PGK: "PG",PHP: "PH",PKR: "PK",
    PLN: "PL",PYG: "PY",QAR: "QA",
    RON: "RO",RSD: "RS",RUB: "RU",
    RWF: "RW",SAR: "SA",SBD: "SB",
    SCR: "SC",SDG: "SD",SEK: "SE",
    SGD: "SG",SKK: "SK",SLL: "SL",
    SOS: "SO",SRD: "SR",STD: "ST",
    SVC: "SV",SYP: "SY",SZL: "SZ",
    THB: "TH",TJS: "TJ",TMT: "TM",
    TND: "TN",TOP: "TO",TRY: "TR",
    TTD: "TT",TWD: "TW",TZS: "TZ",
    UAH: "UA",UGX: "UG",USD: "US",
    UYU: "UY",UZS: "UZ",VEF: "VE",
    VND: "VN",VUV: "VU",YER: "YE",
    ZAR: "ZA",ZMK: "ZM",ZWD: "ZW",
  };
  
  

  for(let select of dropdowns){
    for(code in countryList){
        //console.log(code,countryList[code]);
        let newOption=document.createElement("option");
        newOption.value=code;
        newOption.innerText=code;
        if(select.name==="from" && code==="USD"){
            newOption.selected="selected";
        } 
        else if(select.name==="to" && code==="INR"){
            newOption.selected="selected";
        } 
        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
    const updateFlag= (element)=>{
        let code=element.value;
        console.log(code);
        let countryCode=countryList[code];
        let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
        let img=element.parentElement.querySelector("img");
        img.src=newSrc;
    }
  }

  btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal="1";
    }
    console.log(amtVal);
    console.log(fromcurr.value,tocurr.value);
    //const URL=`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    //let response= fetch(URL);
    let data=84;
    let rate=84.83;
    //let data= response.json();
    //let rate=data[tocurr.value.toLowerCase()];
    console.log(data);
    let finalAmount= rate * amtVal;
    msg.innerText=`${amtVal} ${fromcurr.value}=${finalAmount} ${tocurr.value}`;

  })
