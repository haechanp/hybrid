function loadMenu() {
    const menu = [
        { name: '모스버거', imgSrc: 'images/모스버거.jpg' },
        { name: '불고기버거', imgSrc: 'images/불고기버거.jpg' },
        { name: '새우카츠버거', imgSrc: 'images/새우카츠버거.jpg' },
        { name: '골든크리스피치킨버거', imgSrc: 'images/골든크리스피치킨버거.jpg' },
        { name: '와규치즈버거', imgSrc: 'images/와규치즈버거.jpg' }
    ];

    const menuList = $('#menuList');
    menuList.empty();  // 기존 메뉴 항목 초기화

    menu.forEach(item => {
        const menuItem = `
            <div class="menu-item">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h3>${item.name}</h3>
            </div>
        `;
        menuList.append(menuItem);
    });
}

$(document).ready(function() {
    $('#loadMenu').click(function() {
        loadMenu();
    });
});

