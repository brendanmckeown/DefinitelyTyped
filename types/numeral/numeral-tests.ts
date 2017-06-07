let valueFormat: string = numeral(1000).format('0,0');
// '1,000'

let valueUnformat: number = numeral().unformat('($10,000.00)');
// '-10000'

let valueFormatFloor: string = numeral(1.357).format('0.00', Math.floor);
// '1.35'

let value3: Numeral = numeral(1000);
let added: Numeral = value3.add(10);
// 1010

let value4: Numeral = numeral(1000);
let formatValue4a: string = value4.format('0,0');
// '1,000'
let formatValue4b: number = value4.value();
// 1000

let value5: Numeral = numeral();
value5.set(1000);
let value5Num: number = value5.value();
// 1000

let value6: Numeral = numeral(1000);
let value: number = 100;
let difference = value6.difference(value);
// 900

let value7: Numeral = numeral(0);
numeral.zeroFormat('N/A');
let zeroString: string = value7.format('0.0');
// 'N/A'

let a: Numeral = numeral(1000);
let b: Numeral = numeral(a);
let c: Numeral = a.clone();

let aVal: number = a.set(2000).value();
// 2000
let bVal: number = b.value();
// 1000
let cVal: number = c.add(10).value();
// 1010

// Formats
numeral.register('format', 'percentage', {
    regexps: {
        format: /(%)/,
        unformat: /(%)/
    },
    format: (value, format, roundingFunction) => {
        return 'foo';
    },
    unformat: (string) => {
        return 123;
    }
});

let customFormatted = numeral().format('0%');

// Locales
// load a locale
numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: (number) => {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '€'
    }
});

// switch between locales
numeral.locale('fr');

// return the current locale
numeral.locale();
// 'fr'
