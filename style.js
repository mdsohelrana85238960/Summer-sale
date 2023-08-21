
function cardItems(target) {
    

    const title = target.querySelector('.font-bold').innerText;
    
    const selectedItems = document.getElementById('selected-items');
    const p = document.createElement('p');
    const count = selectedItems.childElementCount;
    p.innerText = `${count + 1}.${title}`;
    selectedItems.appendChild(p);

    const totalPriceString = document.querySelector('#total').innerText;
    const totalPrice = parseFloat(totalPriceString);
   
    const priceString = target.querySelector('.price').innerText;
    const price = parseFloat(priceString);
    const currentTotal = totalPrice + price;
    const totalSpan = document.getElementById('total');
    totalSpan.innerText = currentTotal.toFixed(2);

    const makeBtn = document.getElementById('make-btn');
    if (currentTotal > 0) {
        makeBtn.removeAttribute('disabled');
    } else {
        makeBtn.setAttribute('disabled', 'true');
    }

    const couponBtn = document.querySelector('.btn');
    if (currentTotal >= 200) {
        couponBtn.removeAttribute('disabled');
    } else {
        couponBtn.setAttribute('disabled', 'true');
    }




    document.getElementById('apply').addEventListener('click', function(){
        const inputCode = document.getElementById('input-code').value;
        if (inputCode === 'SELL200') { 
            const discountedTotal = currentTotal * 0.8; 
            const mainTotal = document.getElementById('mainTotal'); 
            mainTotal.innerText = discountedTotal.toFixed(2); 


            const discountAmount = currentTotal - discountedTotal;
            const discountAmountTotal = document.getElementById('discount'); 
            discountAmountTotal.innerText = discountAmount.toFixed(2);
        }
        
    });


document.getElementById('go-home-btn').addEventListener('click', function(){
    location.reload();
})
   
}







