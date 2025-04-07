const cardTitle = document.getElementById("card-title");
const cardText = document.getElementById("card-text");
const cardImage = document.getElementById("card-image");
const countryLabel = document.getElementById("country-label");
const card = document.getElementById("card");

// Czechia
const data = {
  czechia: {
    title: "성격",
    text: `필요한 말을 정확하게 전달하려고 노력하는 스타일이에요.<br />
           차분한 편이고, 일할 땐 집중력 있게 꾸준히 파고드는 성향이에요.<br />
           조용하지만 책임감 있고, 맡은 건 끝까지 해내는 걸 중요하게 생각해요.`,
    // 이미지 경로를 아래처럼 고쳐줘!
    images: [
      "/profile/img/word/czechia1.jpg",
      "/profile/img/word/czechia2.jpg",
      "/profile/img/word/czechia3.jpg",
    ],

    // 여러 장 가능
    countryName: "Czechia",
  },
  // 다른 국가들도 동일하게 추가
};

// Hungary

// Austria

// China

// Taiwan

// Hong Kong

// 	Japan

// 	Australia

//	New Zealand

let currentImageIndex = 0;
let currentImages = [];

function showCard(country) {
  const info = data[country];
  if (!info) return;

  cardTitle.innerText = info.title;
  cardText.innerHTML = info.text;
  countryLabel.innerText = info.countryName;

  currentImages = info.images;
  currentImageIndex = 0;
  cardImage.src = currentImages[0];

  card.style.display = "flex";
}

function closeCard() {
  card.style.display = "none";
}

function changeImage(direction) {
  if (!currentImages.length) return;

  currentImageIndex =
    (currentImageIndex + direction + currentImages.length) %
    currentImages.length;
  cardImage.src = currentImages[currentImageIndex];
}
