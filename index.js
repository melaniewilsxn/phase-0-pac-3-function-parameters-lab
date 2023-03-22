function introduction(name) {
    return name = (`Hi, my name is ${name}.`);
  }

  function introductionWithLanguage(name, language) {
    return name = (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }

  function introductionWithLanguageOptional(name, language) {
    if (language === undefined) {
        language = "JavaScript"
    }
    return name = (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }