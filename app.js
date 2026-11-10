const map = L.map("map").setView([53.9, 27.56], 7);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
// Только демонстрационные точки const testPoints = [ { coords: [53.9, 27.56], name: "Тестовая точка — Минск" }, { coords: [53.68, 23.83], name: "Тестовая точка — Гродно" }, { coords: [52.1, 23.7], name: "Тестовая точка — Брест" } ];
testPoints.forEach(point => { L.marker(point.coords) .addTo(map) .bindPopup( <b>${point.name}</b><br>Демонстрационная отметка. ); });
