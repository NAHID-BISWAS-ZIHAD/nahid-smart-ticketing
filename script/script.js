const buttons = document.getElementsByClassName('seat');
let lessSeat = 40;
let addSeat = 0;
for (const button of buttons) {
    let singleBtn = button.childNodes[1].innerText;
    button.addEventListener('click', function () {
        // available ticket list
        let availableSeats = document.getElementById('available-seats');
        lessSeat = lessSeat - 1;
        availableSeats.innerText = lessSeat;
        // selected list
        addSeat = addSeat + 1;
        let selectSeat = document.getElementById('add-seat');
        selectSeat.innerText = addSeat;
        // create a ticket select list
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

        // Total Price
        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt(p2.innerText);

        // coupon section

    })
}
function applyButton() {
    const inputCoupon = document.getElementById('input-coupon').value;

    if (inputCoupon === 'NEW15') {
        const totalPrice = document.getElementById('total-price').innerText;
        const convertTotalPrice = parseInt(totalPrice);
        // discount price
        const discountPrice = convertTotalPrice * 0.15;
        const finalPrice = convertTotalPrice - discountPrice;
        document.getElementById('grand-total').innerText = finalPrice;

        const inputContainer = document.getElementById('input-container');
        inputContainer.style.display = 'none';
    }
    else if (inputCoupon === 'Couple 20') {
        const totalPrice = document.getElementById('total-price').innerText;
        const convertTotalPrice = parseInt(totalPrice);
        // discount price
        const discountPrice = convertTotalPrice * 0.20;
        const finalPrice = convertTotalPrice - discountPrice;
        document.getElementById('grand-total').innerText = finalPrice;

        const inputContainer = document.getElementById('input-container');
        inputContainer.style.display = 'none';
    }
    else {
        alert('please input a right coupon code');
    }
}
