function telephoneCheck(str) {
    const telephoneRegex = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;
    return telephoneRegex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
