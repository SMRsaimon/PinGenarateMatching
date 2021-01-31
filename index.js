function $(seletedID) {
    return document.getElementById(seletedID);
}

$('genaratePinBtn').addEventListener('click', function() {
    genaratePin();
});

// genarate pin
function genaratePin() {
    const rendom = Math.random() * 10000;
    let pin = rendom + '';
    pin = pin.split('.')[0];

    if (pin.length === 4) {
        $('pinDisplay').value = pin;
    } else {
        return genaratePin();
    }
}

//type pin using event Bubbble

$('type-pin-container').addEventListener('click', function(event) {
    const digite = event.target.innerText;
    if (isNaN(digite)) {
        if (digite === 'C') {
            $('numberDisplay').value = '';
            $('unmatch').style.display = 'none';
            $('match').style.display = 'none';
        }
        if (digite == 'B') {
            const totalNumber = $('numberDisplay').value;
            const remainingNumber = totalNumber.substr(0, totalNumber.length - 1);
            $('numberDisplay').value = remainingNumber;
            $('unmatch').style.display = 'none';
            $('match').style.display = 'none';
        }

        //
    } else {
        const inputNumber = $('numberDisplay').value;
        const Number = inputNumber + digite;
        $('numberDisplay').value = Number;
    }
});

// matching pin

$('submitBtn').addEventListener('click', function() {
    const inputPin = $('numberDisplay').value;
    const pinRandom = $('pinDisplay').value;

    if (inputPin === pinRandom && inputPin != '' && pinRandom != '') {
        $('match').style.display = 'block';
        $('unmatch').style.display = 'none';
    } else {
        if (inputPin === '') {
            alert('Please type your  genarate PIN  to match it. Thank you  :)');
            $('unmatch').style.display = 'none';
            $('match').style.display = 'none';
        } else if (pinRandom == '') {
            alert(' Please genarate PIN First ');
        } else {
            $('unmatch').style.display = 'block';
            $('match').style.display = 'none';
        }
    }
});