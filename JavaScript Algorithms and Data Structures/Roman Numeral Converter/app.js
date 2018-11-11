const romanSymbols = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
};

function getRoman(place, times) {
	let roman = '';
	if (place === 1000) {
		for (var i=0; i<times; ++i) {
			roman += romanSymbols[place];
		}	
	}
	else {
		switch(times) {
			case 1:
			case 2:
			case 3:
				for (var i=0; i<times; ++i) {
					roman += romanSymbols[place];
				}
				break;
			case 4:
				roman += romanSymbols[place] + romanSymbols[place*5];
				break;
			case 5:
				roman += romanSymbols[place*5];
				break;
			case 6:
			case 7:
			case 8:
				roman += romanSymbols[place*5];
				for (var i=0; i<times - 5; ++i) {
					roman += romanSymbols[place];
				}
				break;
			case 9:
				roman += romanSymbols[place] + romanSymbols[place*10];
				break;
			}
	}
	return roman;
}

function convertToRoman(num) {

	const thousandths = Math.floor(num/1000);
	num = num - 1000*thousandths;
	const hundredths = Math.floor(num/100);
	num = num - 100*hundredths;
	const tens = Math.floor(num/10);
	num = num - 10*tens;
	const ones = Math.floor(num);
	
	return (getRoman(1000, thousandths) + getRoman(100, hundredths) + getRoman(10, tens) + getRoman(1, ones));
}

console.log(convertToRoman(1984));
