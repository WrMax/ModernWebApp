function features2016() {
    function exponentiationOperator(){
        let a = 3, b = 2, result = 0;
        // basic support
        result = a ** b;
        console.log('3 ** 2 = ' + result);
        // assignment
        result = a;
        result **= b;
        console.log('3 ** 2 = ' + result);
    }

    function arrayIncludes(){
        let result = false;
        result = [1, 2, 3].includes(1);
        console.log('[1, 2, 3] included 1 is ' + result);
        result = [1, 2, 3].includes(4);
        console.log('[1, 2, 3] included 4 is ' + result);
    }

    exponentiationOperator();
    arrayIncludes();
}

function app(){
    features2016();
}