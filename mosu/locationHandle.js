function initMap() {
    // 사용자 위치를 받아오는 Geolocation API 사용
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            const map = L.map('map').setView([userLat, userLng], 14); // 초기 위치 설정

            // OSM(OpenStreetMap) 타일 레이어
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // 사용자 위치에 마커 표시
            L.marker([userLat, userLng]).addTo(map)
                .bindPopup("당신의 위치")
                .openPopup();

            // 예시: 모스버거 지점들 (실제 위치에 맞게 추가)
            const stores = [
                { name: "모스버거 1", lat: userLat + 0.005, lng: userLng + 0.005 },
                { name: "모스버거 2", lat: userLat - 0.005, lng: userLng - 0.005 },
                { name: "모스버거 3", lat: userLat + 0.01, lng: userLng - 0.01 }
            ];

            stores.forEach(store => {
                L.marker([store.lat, store.lng]).addTo(map)
                    .bindPopup(store.name);
            });
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function findNearestStore() {
    // 가까운 매장 찾기 로직 추가 (현재는 예시로 사용자의 위치를 기준으로 매장 위치 표시)
    initMap();
}

$(document).ready(function() {
    $('#findNearest').click(function() {
        findNearestStore();
    });
});
