export const getLanguageCode = (data) => {
  let langCode = '';
  switch (data) {
    case 'Arabic':
      langCode = 'ar';
      break;
    case 'Bengali':
      langCode = 'bn';
      break;
    case 'Chinese-CHN':
      langCode = 'zh_CN';
      break;
    case 'Chinese-HKG':
      langCode = 'zh_HK';
      break;
    case 'Chinese-TAI':
      langCode = 'zh_TW';
      break;
    case 'Dutch':
      langCode = 'nl';
      break;
    case 'English':
      langCode = 'en';
      break;
    case 'English - US':
      langCode = 'en_US';
      break;
    case 'English - UK':
      langCode = 'en_GB';
      break;
    case 'German':
      langCode = 'de';
      break;
    case 'Hindi':
      langCode = 'hi';
      break;
    case 'Tamil':
      langCode = 'ta';
      break;
    case 'Afrikaans':
      langCode = 'af';
      break;
    case 'Albanian':
      langCode = 'sq';
      break;
    case 'Azerbaijani':
      langCode = 'az';
      break;
    case 'Bulgarian':
      langCode = 'bg';
      break;
    case 'Catalan':
      langCode = 'ca';
      break;
    case 'Croatian':
      langCode = 'hr';
      break;
    case 'English':
      langCode = 'en';
      break;
    case 'English - US':
      langCode = 'en_US';
      break;
    case 'English - UK':
      langCode = 'en_GB';
      break;
    case 'Czech':
      langCode = 'cs';
      break;
    case 'Danish':
      langCode = 'da';
      break;
    case 'Estonian':
      langCode = 'et';
      break;
    case 'Filipino':
      langCode = 'fil';
      break;
    case 'Finnish':
      langCode = 'fi';
      break;
    case 'French':
      langCode = 'fr';
      break;
    case 'Georgian':
      langCode = 'ka';
      break;
    case 'German':
      langCode = 'de';
      break;
    case 'Greek':
      langCode = 'el';
      break;
    case 'Gujarati':
      langCode = 'gu';
      break;
    case 'English - US':
      langCode = 'en_US';
      break;
    case 'English - UK':
      langCode = 'en_GB';
      break;
    case 'Hausa':
      langCode = 'ha';
      break;
    case 'Hebrew':
      langCode = 'he';
      break;
    case 'Hungarian':
      langCode = 'hu';
      break;
    case 'Indonesian':
      langCode = 'id';
      break;
    case 'Irish':
      langCode = 'ga';
      break;
    case 'Italian':
      langCode = 'it';
      break;
    case 'Japanese':
      langCode = 'ja';
      break;
    case 'Kannada':
      langCode = 'kn';
      break;
    case 'Kazakh':
      langCode = 'kk';
      break;
    case 'Kinyarwanda':
      langCode = 'rw_RW';
      break;
    case 'Korean':
      langCode = 'ko';
      break;
    case 'Kyrgyz-Kyrgyzstan':
      langCode = 'ky_KG';
      break;
    case 'Lao':
      langCode = 'lo';
      break;
    case 'Latvian':
      langCode = 'lv';
      break;
    case 'Lithuanian':
      langCode = 'lt';
      break;
    //
    case 'Macedonian':
      langCode = 'mk';
      break;
    case 'Malay':
      langCode = 'ms';
      break;
    case 'Malayalam':
      langCode = 'ml';
      break;
    case 'Marathi':
      langCode = 'mr';
      break;
    case 'Norwegian':
      langCode = 'nb';
      break;
    case 'Persian':
      langCode = 'fa';
      break;
    case 'Polish':
      langCode = 'pl';
      break;
    case 'Portuguese - BR':
      langCode = 'pt_BR';
      break;
    case 'Portuguese - POR':
      langCode = 'pt_PT';
      break;
    case 'Punjabi':
      langCode = 'pa';
      break;
    case 'Romanian':
      langCode = 'ro';
      break;
    case 'Russian':
      langCode = 'ru';
      break;
    case 'Serbian':
      langCode = 'sr';
      break;
    case 'Slovak':
      langCode = 'sk';
      break;
    case 'Slovenian':
      langCode = 'sl';
      break;
    case 'Spanish':
      langCode = 'es';
      break;
    case 'Spanish-ARG':
      langCode = 'es_AR';
      break;
    case 'Spanish-SPA':
      langCode = 'es_ES';
      break;
    case 'Spanish-MEX':
      langCode = 'es_MX';
      break;
    case 'Swahili':
      langCode = 'sw';
      break;
    case 'Swedish':
      langCode = 'sv';
      break;
    case 'Telugu':
      langCode = 'te';
      break;
    case 'Thai':
      langCode = 'th';
      break;
    case 'Turkish':
      langCode = 'tr';
    case 'Ukrainian':
      langCode = 'uk';
      break;
    case 'Urdu':
      langCode = 'ur';
      break;
    case 'Uzbek':
      langCode = 'uz';
      break;
    case 'Vietnamese':
      langCode = 'vi';
      break;
    case 'Zulu':
      langCode = 'zu';
      break;
    default:
      langCode = '';
      break;
  }
  return langCode;
};

export const getLanguageName = (data) => {
  let langCode = '';
  switch (data) {
    case 'ar':
      langCode = 'Arabic';
      break;
    case 'bn':
      langCode = 'Bengali';
      break;
    case 'zh_CN':
      langCode = 'Chinese-CHN';
      break;
    case 'zh_HK':
      langCode = 'Chinese-HKG';
      break;
    case 'zh_TW':
      langCode = 'Chinese-TAI';
      break;
    case 'nl':
      langCode = 'Dutch';
      break;
    case 'en':
      langCode = 'English';
      break;
    case 'en_US':
      langCode = 'English - US';
      break;
    case 'en_GB':
      langCode = 'English - UK';
      break;
    case 'de':
      langCode = 'German';
      break;
    case 'hi':
      langCode = 'Hindi';
      break;
    case 'ta':
      langCode = 'Tamil';
      break;
    case 'af':
      langCode = 'Afrikaans';
      break;
    case 'sq':
      langCode = 'Albanian';
      break;
    case 'az':
      langCode = 'Azerbaijani';
      break;
    case 'bg':
      langCode = 'Bulgarian';
      break;
    case 'ca':
      langCode = 'Catalan';
      break;
    case 'hr':
      langCode = 'Croatian';
      break;
    case 'en':
      langCode = 'English';
      break;
    case 'en_US':
      langCode = 'English - US';
      break;
    case 'en_GB':
      langCode = 'English - UK';
      break;
    case 'cs':
      langCode = 'Czech';
      break;
    case 'da':
      langCode = 'Danish';
      break;
    case 'et':
      langCode = 'Estonian';
      break;
    case 'fil':
      langCode = 'Filipino';
      break;
    case 'fi':
      langCode = 'Finnish';
      break;
    case 'fr':
      langCode = 'French';
      break;
    case 'ka':
      langCode = ' Georgian';
      break;
    case 'de':
      langCode = ' German';
      break;
    case 'el':
      langCode = ' Greek';
      break;
    case 'gu':
      langCode = ' Gujarati';
      break;
    case 'en_US':
      langCode = ' English - US';
      break;
    case 'en_GB':
      langCode = ' English - UK';
      break;
    case 'ha':
      langCode = ' Hausa';
      break;
    case 'he':
      langCode = ' Hebrew';
      break;
    case 'hu':
      langCode = ' Hungarian';
      break;
    case 'id':
      langCode = ' Indonesian';
      break;
    case 'ga':
      langCode = ' Irish';
      break;
    case 'it':
      langCode = ' Italian';
      break;
    case 'ja':
      langCode = ' Japanese';
      break;
    case 'kn':
      langCode = ' Kannada';
      break;
    case 'kk':
      langCode = ' Kazakh';
      break;
    case 'rw_RW':
      langCode = ' Kinyarwanda';
      break;
    case 'ko':
      langCode = 'Korean';
      break;
    case 'ky_KG':
      langCode = 'Kyrgyz-Kyrgyzstan';
      break;
    case 'lo':
      langCode = 'Lao';
      break;
    case 'lv':
      langCode = ' Latvian';
      break;
    case 'lt':
      langCode = ' Lithuanian';
      break;
    case 'mk':
      langCode = ' Macedonian';
      break;
    case 'ms':
      langCode = ' Malay';
      break;
    case 'ml':
      langCode = ' Malayalam';
      break;
    case 'mr':
      langCode = ' Marathi';
      break;
    case 'nb':
      langCode = ' Norwegian';
      break;
    case 'fa':
      langCode = ' Persian';
      break;
    case 'pl':
      langCode = ' Polish';
      break;
    case 'pt_BR':
      langCode = ' Portuguese - BR';
      break;
    case 'pt_PT':
      langCode = 'Portuguese - POR';
      break;
    case 'pa':
      langCode = ' Punjabi';
      break;
    case 'ro':
      langCode = ' Romanian';
      break;
    case 'ru':
      langCode = ' Russian';
      break;
    case 'sr':
      langCode = ' Serbian';
      break;
    case 'sk':
      langCode = ' Slovak';
      break;
    case 'sl':
      langCode = ' Slovenian';
      break;
    case 'es':
      langCode = ' Spanish';
      break;
    case 'es_AR':
      langCode = ' Spanish-ARG';
      break;
    case 'es_ES':
      langCode = ' Spanish-SPA';
      break;
    case 'es_MX':
      langCode = ' Spanish-MEX';
      break;
    case 'sw':
      langCode = ' Swahili';
      break;
    case 'sv':
      langCode = ' Swedish';
      break;
    case 'te':
      langCode = ' Telugu';
      break;
    case 'th':
      langCode = ' Thai';
      break;
    case 'tr':
      langCode = ' Turkish';
    case 'uk':
      langCode = ' Ukrainian';
      break;
    case 'ur':
      langCode = ' Urdu';
      break;
    case 'uz':
      langCode = ' Uzbek';
      break;
    case 'vi':
      langCode = ' Vietnamese';
      break;
    case 'zu':
      langCode = ' Zulu';
      break;
    default:
      langCode = '';
      break;
  }
  return langCode;
};
