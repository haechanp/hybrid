// 주문 추가 기능
function addOrder() {
    const burgerName = $('#burgerName').val();
    const quantity = $('#quantity').val();
    const extraOptions = $('#extraOptions').val();

    // 여기서 주문을 처리하고 DB에 저장하거나 로컬 스토리지에 저장할 수 있습니다.
    console.log(`버거 이름: ${burgerName}, 수량: ${quantity}, 추가 옵션: ${extraOptions}`);
}

// 주문 초기화 기능
function clearOrderForm() {
    $('#burgerName').val('');
    $('#quantity').val(1);
    $('#extraOptions').val('');
}

$(document).ready(function() {
    $('#submitOrder').click(function() {
        addOrder();
    });

    $('#clearOrder').click(function() {
        clearOrderForm();
    });
});
