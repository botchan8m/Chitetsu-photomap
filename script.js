/*
 * ふふっと富山のフォトマップ 初期版
 * 写真・スポットの追加は、下の SPOTS と PHOTOS にデータを追加します。
 * 画像ファイルは images/ フォルダに入れてください。
 */

// 1スポットにつき1件。lat/lng は必ず実際の撮影位置に修正してください。
// 下記は画面確認用の仮座標で、実際の撮影地点を示すものではありません。
const SPOTS = [
  {
    id: "spot-1",
    number: 1,
    name: "No.001",
    area: "富山駅前",
    lat: 36.700424,
    lng: 137.212191,
    description: "富山駅から発車する大学前行きの電車と環状線の電車を撮影できます。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.700424&mlon=137.212191#map=16/36.700424/137.212191"
  },
  {
    id: "spot-2",
    number: 2,
    name: "No.002",
    area: "富山駅",
    lat: 36.701400,
    lng: 137.212789,
    description: "富山駅を発着する電車を撮影できます。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.701400&mlon=137.212789#map=16/36.701400/137.212789"
  },
  {
    id: "spot-3",
    number: 3,
    name: "No.003",
    area: "松川公園",
    lat: 36.694361,
    lng: 137.210574,
    description: "富山市の桜の名所、松川公園で撮影しました。路面電車と車が被りやすいです。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.694361&mlon=137.210574#map=16/36.694361/137.210574"
  },
  {
    id: "spot-4",
    number: 4,
    name: "No.004",
    area: "国際会議場前",
    lat: 36.691199,
    lng: 137.211373,
    description: "夜間は乗降が少なく停車時間がごくわずかなのでシャッターチャンスは一瞬です。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.691199&mlon=137.211373#map=16/36.691199/137.211373"
  },
  {
    id: "spot-5",
    number: 5,
    name: "No.005",
    area: "富山大学前",
    lat: 36.698455,
    lng: 137.191251,
    description: "駅に入線する電車を撮影できます。車が被りやすいです。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.698455&mlon=137.191251#map=16/36.698455/137.191251"
  },
  {
    id: "spot-6",
    number: 6,
    name: "No.006",
    area: "月岡駅～大庄駅　久保踏切",
    lat: 36.621356,
    lng: 137.272876,
    description: "朝の岩峅寺行き電車を撮影できます。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.621356&mlon=137.272876#map=16/36.621356/137.272876"
  },
  {
    id: "spot-7",
    number: 7,
    name: "No.007",
    area: "上市駅",
    lat: 36.704500,
    lng: 137.356829,
    description: "留置線に停車している10035-10036編成（廃車待ち）を撮影しました。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.704500&mlon=137.356829#map=16/36.704500/137.356829"
  },
  {
    id: "spot-8",
    number: 8,
    name: "No.008",
    area: "新宮川駅～中加積駅　第一大永田踏切",
    lat: 36.725859,
    lng: 137.349806,
    description: "午後の電鉄富山行き電車を撮影できます。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.725859&mlon=137.349806#map=16/36.725859/137.349806"
  },
  {
    id: "spot-9",
    number: 9,
    name: "No.009",
    area: "新宮川駅～中加積駅",
    lat: 36.725744,
    lng: 137.348950,
    description: "立山連峰を背景に撮影できます。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.725744&mlon=137.348950#map=16/36.725744/137.348950"
  },
  {
    id: "spot-10",
    number: 10,
    name: "No.010",
    area: "中加積駅～西加積駅",
    lat: 36.744131,
    lng: 137.342137,
    description: "夕方の宇奈月温泉方面の電車を撮影できます。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.744131&mlon=137.342137#map=16/36.744131/137.342137"
  },
    {
    id: "spot-11",
    number: 11,
    name: "No.011",
    area: "新宮川駅～中加積駅",
    lat: 36.729708,
    lng: 137.349334,
    description: "夕方の宇奈月温泉方面の電車を撮影できます。",
    mapUrl: "https://www.openstreetmap.org/?mlat=36.729708&mlon=137.329334#map=16/36.729708/137.329334"
  }
];

// photo id は写真ごとに固有。spotId で SPOTS の id と紐づけます。
// image のパスは images/ フォルダ内のファイル名に変更してください。
// landscape: true にすると、横写真を縦2:3の枠内に余白付きで表示します。
const PHOTOS = [
  { id: "photo-1", spotId: "spot-1", title: "No.001", image: "images/20260712-IMG_3690.jpg", landscape: true, featured: true },
  { id: "photo-2", spotId: "spot-2", title: "No.002", image: "images/IMG_0535.jpg", landscape: true, featured: false },
  { id: "photo-3", spotId: "spot-3", title: "No.003", image: "images/IMG_2446.jpg", landscape: false, featured: false },
  { id: "photo-4", spotId: "spot-4", title: "No.004", image: "images/IMG_3218.jpg", landscape: false, featured: false },
  { id: "photo-5", spotId: "spot-5", title: "No.005", image: "images/IMG_3752.jpg", landscape: false, featured: false },
  { id: "photo-6", spotId: "spot-6", title: "No.006", image: "images/IMG_3879.jpg", landscape: true, featured: true },
  { id: "photo-7", spotId: "spot-7", title: "No.007", image: "images/IMG_6527.jpg", landscape: true, featured: false },
  { id: "photo-8", spotId: "spot-8", title: "No.008", image: "images/IMG_6551.jpg", landscape: true, featured: true },
  { id: "photo-9", spotId: "spot-9", title: "No.009", image: "images/IMG_6559.jpg", landscape: true, featured: false },
  { id: "photo-10", spotId: "spot-10", title: "No.010", image: "images/IMG_6571.jpg", landscape: true, featured: true },
  { id: "photo-11", spotId: "spot-11", title: "No.011", image: "images/IMG_2536.jpg", landscape: true, featured: true }
];

const INITIAL_VISIBLE_PHOTOS = 6;
const AUTO_SLIDE_MS = 5500;

let map;
let markerBySpotId = new Map();
let activeCarouselIndex = 0;
let showAllPhotos = false;
let carouselTimer = null;

const spotById = new Map(SPOTS.map((spot) => [spot.id, spot]));
const photoById = new Map(PHOTOS.map((photo) => [photo.id, photo]));

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function photosForSpot(spotId) {
  return PHOTOS.filter((photo) => photo.spotId === spotId);
}

function imageFallback(image) {
  image.onerror = null;
  image.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900"><rect width="600" height="900" fill="#e7ece4"/><path d="M180 520l90-110 75 85 55-60 95 120H105z" fill="#bdcdbd"/><circle cx="390" cy="300" r="48" fill="#bdcdbd"/><text x="300" y="640" text-anchor="middle" font-family="sans-serif" font-size="25" fill="#416b50">写真を追加してください</text><text x="300" y="680" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#6d7971">images/ フォルダ</text></svg>'
  );
}

function bindImageFallbacks(root = document) {
  root.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener("error", () => imageFallback(image), { once: true });
  });
}

function renderCarousel() {
  const featuredPhotos = PHOTOS.filter((photo) => photo.featured);
  const carousel = document.getElementById("carousel");
  const dots = document.getElementById("carousel-dots");

  if (!featuredPhotos.length) {
    carousel.innerHTML = '<div class="empty-state">カルーセルに表示する写真がありません。</div>';
    dots.innerHTML = "";
    return;
  }

  activeCarouselIndex = ((activeCarouselIndex % featuredPhotos.length) + featuredPhotos.length) % featuredPhotos.length;
  const photo = featuredPhotos[activeCarouselIndex];
  const spot = spotById.get(photo.spotId);

  carousel.innerHTML = `
    <a href="#map-section" class="carousel-card" data-photo-id="${escapeHtml(photo.id)}" aria-label="${escapeHtml(spot?.name)}の地図を表示">
      <div class="carousel-image-wrap">
        <img class="carousel-image" src="${escapeHtml(photo.image)}" data-fallback alt="${escapeHtml(photo.title)}">
      </div>
      <div class="carousel-copy">
        <span class="spot-number">SPOT ${escapeHtml(spot?.number ?? "-")} · ${escapeHtml(spot?.area ?? "")}</span>
        <h3>${escapeHtml(photo.title)}</h3>
        <p>${escapeHtml(spot?.description ?? "")}</p>
        <span class="inline-link">撮影スポットを見る <span aria-hidden="true">↗</span></span>
      </div>
    </a>`;

  dots.innerHTML = featuredPhotos.map((item, index) => `
    <button class="carousel-dot" type="button" data-carousel-index="${index}"
      aria-label="カルーセルの写真 ${index + 1}" aria-current="${index === activeCarouselIndex ? "true" : "false"}"></button>
  `).join("");

  bindImageFallbacks(carousel);
  carousel.querySelector(".carousel-card").addEventListener("click", (event) => {
    event.preventDefault();
    goToSpot(photo.spotId);
  });
  dots.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCarouselIndex = Number(button.dataset.carouselIndex);
      renderCarousel();
      restartCarouselTimer();
    });
  });
}

function changeCarousel(step) {
  activeCarouselIndex += step;
  renderCarousel();
  restartCarouselTimer();
}

function restartCarouselTimer() {
  if (carouselTimer) window.clearInterval(carouselTimer);
  const featuredCount = PHOTOS.filter((photo) => photo.featured).length;
  if (featuredCount > 1) {
    carouselTimer = window.setInterval(() => {
      activeCarouselIndex += 1;
      renderCarousel();
    }, AUTO_SLIDE_MS);
  }
}

function renderPhotos() {
  const grid = document.getElementById("photo-grid");
  const count = document.getElementById("photo-count");
  const moreButton = document.getElementById("show-more");
  const visiblePhotos = showAllPhotos ? PHOTOS : PHOTOS.slice(0, INITIAL_VISIBLE_PHOTOS);

  count.textContent = `${PHOTOS.length} photos`;

  if (!PHOTOS.length) {
    grid.innerHTML = '<div class="empty-state">写真はまだ登録されていません。</div>';
    moreButton.hidden = true;
    return;
  }

  grid.innerHTML = visiblePhotos.map((photo) => {
    const spot = spotById.get(photo.spotId);
    return `
      <button class="photo-card" type="button" data-photo-id="${escapeHtml(photo.id)}"
        aria-label="${escapeHtml(photo.title)}。${escapeHtml(spot?.name)}の地図を表示">
        <span class="photo-frame">
          <img src="${escapeHtml(photo.image)}" data-fallback class="${photo.landscape ? "is-landscape" : "is-portrait"}"
            alt="${escapeHtml(photo.title)}" loading="lazy">
          <span class="spot-badge">${escapeHtml(spot?.number ?? "-")}</span>
        </span>
        <span class="photo-meta">
          <span class="photo-title">${escapeHtml(photo.title)}</span>
        </span>
      </button>`;
  }).join("");

  bindImageFallbacks(grid);
  grid.querySelectorAll(".photo-card").forEach((button) => {
    button.addEventListener("click", () => goToSpot(photoById.get(button.dataset.photoId)?.spotId));
  });

  moreButton.hidden = PHOTOS.length <= INITIAL_VISIBLE_PHOTOS;
  moreButton.innerHTML = showAllPhotos
    ? '閉じる <span aria-hidden="true">↑</span>'
    : 'さらに見る <span aria-hidden="true">↓</span>';
}

function makeNumberedIcon(number) {
  return L.divIcon({
    className: "",
    html: `<div class="numbered-marker"><span>${escapeHtml(number)}</span></div>`,
    iconSize: [30, 38],
    iconAnchor: [15, 36],
    popupAnchor: [0, -34]
  });
}

function initMap() {
  const mapElement = document.getElementById("map");
  if (!window.L) {
    mapElement.innerHTML = '<div class="empty-state">地図ライブラリを読み込めませんでした。インターネット接続を確認してください。</div>';
    return;
  }

  map = L.map("map", { scrollWheelZoom: false }).setView([36.695, 137.2137], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
  }).addTo(map);

  SPOTS.forEach((spot) => {
    const marker = L.marker([spot.lat, spot.lng], { icon: makeNumberedIcon(spot.number) }).addTo(map);
    const spotPhotos = photosForSpot(spot.id);
    const firstPhoto = spotPhotos[0];
    marker.bindPopup(`
      <div class="popup-title">${escapeHtml(spot.number)}. ${escapeHtml(spot.name)}</div>
      <div class="popup-description">${escapeHtml(spot.description)}</div>
      <div class="popup-description">登録写真：${spotPhotos.length}枚</div>
      <a class="popup-link" href="#photos" data-popup-spot="${escapeHtml(spot.id)}">この場所の写真を見る →</a>
    `);
    marker.on("popupopen", () => {
      const link = document.querySelector(`[data-popup-spot="${spot.id}"]`);
      if (link) link.addEventListener("click", (event) => {
        event.preventDefault();
        if (firstPhoto) openPhotoDialog(firstPhoto.id);
      }, { once: true });
    });
    markerBySpotId.set(spot.id, marker);
  });

  if (SPOTS.length > 1) {
    const bounds = L.latLngBounds(SPOTS.map((spot) => [spot.lat, spot.lng]));
    map.fitBounds(bounds.pad(0.2));
  } else if (SPOTS.length === 1) {
    map.setView([SPOTS[0].lat, SPOTS[0].lng], 15);
  }

  document.getElementById("open-map").href = SPOTS[0]?.mapUrl || "https://www.openstreetmap.org/";
  renderSpotResults();
}

function renderSpotResults() {
  const results = document.getElementById("spot-results");
  results.innerHTML = SPOTS.map((spot) => `
    <button class="spot-result" type="button" data-spot-id="${escapeHtml(spot.id)}">
      <span class="spot-result-number">${escapeHtml(spot.number)}</span>
      <span>
        <h3>${escapeHtml(spot.name)}</h3>
        <p>${escapeHtml(spot.area)} · 写真 ${photosForSpot(spot.id).length}枚</p>
      </span>
    </button>
  `).join("");

  results.querySelectorAll("[data-spot-id]").forEach((button) => {
    button.addEventListener("click", () => goToSpot(button.dataset.spotId));
  });
}

function goToSpot(spotId) {
  const spot = spotById.get(spotId);
  if (!spot) return;

  document.getElementById("map-section").scrollIntoView({ behavior: "smooth", block: "start" });
  if (map) {
    map.invalidateSize();
    map.setView([spot.lat, spot.lng], Math.max(map.getZoom(), 15), { animate: true });
    const marker = markerBySpotId.get(spotId);
    if (marker) marker.openPopup();
  }
}

function openPhotoDialog(photoId) {
  const photo = photoById.get(photoId);
  if (!photo) return;
  const spot = spotById.get(photo.spotId);
  const dialog = document.getElementById("photo-dialog");
  const content = document.getElementById("dialog-content");

  content.innerHTML = `
    <div class="dialog-layout">
      <img src="${escapeHtml(photo.image)}" data-fallback alt="${escapeHtml(photo.title)}">
      <div>
        <span class="spot-number">SPOT ${escapeHtml(spot?.number ?? "-")} · ${escapeHtml(spot?.area ?? "")}</span>
        <h3>${escapeHtml(photo.title)}</h3>
        <p><strong>${escapeHtml(spot?.name ?? "スポット未設定")}</strong></p>
        <p>${escapeHtml(spot?.description ?? "")}</p>
        <p>この写真の撮影スポットを地図で確認できます。</p>
        <a class="dialog-map-link" href="${escapeHtml(spot?.mapUrl ?? "https://www.openstreetmap.org/")}" target="_blank" rel="noopener noreferrer">外部地図で開く ↗</a>
        <p><button class="more-button" id="dialog-show-map" type="button">サイト内の地図で見る</button></p>
      </div>
    </div>`;
  bindImageFallbacks(content);

  content.querySelector("#dialog-show-map").addEventListener("click", () => {
    dialog.close();
    goToSpot(photo.spotId);
  });

  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

document.getElementById("carousel-prev").addEventListener("click", () => changeCarousel(-1));
document.getElementById("carousel-next").addEventListener("click", () => changeCarousel(1));
document.getElementById("show-more").addEventListener("click", () => {
  showAllPhotos = !showAllPhotos;
  renderPhotos();
});
document.getElementById("dialog-close").addEventListener("click", () => {
  document.getElementById("photo-dialog").close();
});
document.getElementById("photo-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

renderCarousel();
renderPhotos();
initMap();
restartCarouselTimer();

