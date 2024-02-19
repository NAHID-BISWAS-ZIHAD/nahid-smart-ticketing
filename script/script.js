const buttons = document.getElementsByClassName('seat');
let lessSeat = 28;
let addSeat = 0;
let count = 0;

for (const button of buttons) {
    let singleBtn = button.childNodes[1].innerText;
    button.addEventListener('click', function clickHandler() {
        let availableSeats = document.getElementById('available-seats');
        let selectSeat = document.getElementById('add-seat');

        if (selectSeat.innerText < 4) {
            button.style.backgroundColor = 'green';
            button.style.color = 'white';

            addSeat = addSeat + 1;
            selectSeat.innerText = addSeat;
            count = selectSeat.innerText;
            seatCount();
            lessSeat = lessSeat - 1;
            availableSeats.innerText = lessSeat;

            const ticketPrice = 550;
            const seatClass = 'Economy';

            const seatPriceList = document.getElementById('seat-price-list');
            const p = document.createElement('p');
            p.innerText = singleBtn;
            const p1 = document.createElement('p');
            p1.innerText = seatClass;
            const p2 = document.createElement('p');
            p2.innerText = ticketPrice;
            p2.classList = 'flex justify-end'
            seatPriceList.appendChild(p);
            seatPriceList.appendChild(p1);
            seatPriceList.appendChild(p2);

            const totalPrice = document.getElementById('total-price');
            totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt(p2.innerText);

            document.getElementById('grand-total').innerText = totalPrice.innerText;

            button.removeEventListener('click', clickHandler);
        }

        else {
            alert('Already You Select 4 Ticket');
        }
    });

};

function applyButton() {
    const inputCoupon = document.getElementById('input-coupon').value;
    const totalPrice = document.getElementById('total-price').innerText;
    const convertTotalPrice = parseInt(totalPrice);
    const inputContainer = document.getElementById('input-container');

    if (inputCoupon === 'NEW15') {

        const discountPrice = convertTotalPrice * 0.15;
        document.getElementById('discount-price').innerText = discountPrice;
        const finalPrice = convertTotalPrice - discountPrice;
        document.getElementById('grand-total').innerText = finalPrice;
        inputContainer.style.display = 'none';
    }
    else if (inputCoupon === 'Couple 20') {

        const discountPrice = convertTotalPrice * 0.20;
        document.getElementById('discount-price').innerText = discountPrice;
        const finalPrice = convertTotalPrice - discountPrice;
        document.getElementById('grand-total').innerText = finalPrice;
        inputContainer.style.display = 'none';
    }
    else {
        alert('please input a right coupon code');
    }

};

function seatCount() {
    console.log(count);
    const inputPhone = document.getElementById('input-phone');
    inputPhone.addEventListener('keyup', function inputValue(event) {
        const getValue = event.target.value;
        const buttonNext = document.getElementById('button-next');
        if (getValue && count > 0) {
            buttonNext.removeAttribute('disabled');
        }
        else {
            buttonNext.setAttribute('disabled', true);
        }
    });

    const inputCoupon = document.getElementById('input-coupon');
    if(count === 4){
        inputCoupon.removeAttribute('disabled');
    }
    
}
// const seatSelect = document.getElementById('add-seat');
// console.log('vaia eita seat ar value', seatSelect,addSeat,count,selectSeat);





