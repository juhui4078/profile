const cardTitle = document.getElementById("card-title");
const cardText = document.getElementById("card-text");
const cardImage = document.getElementById("card-image");
const countryLabel = document.getElementById("country-label");
const card = document.getElementById("card");

// Czechia
const data = {
  czechia: {
    title: "성격",
    text: `사람들과 두루두루 잘 어울리며, <b>활발하고 유쾌한 성격</b>입니다.<br />
       상황에 따라 <b>분위기를 파악하고 적절히 행동할 줄 아는 센스</b>를 가지고 있습니다.<br />
       맡은 일은 <b>끝까지 책임지고 완수하려는 태도</b>를 지니고 있습니다.`,

    images: [
      "/img/word/czechia1.jpg",
      "/img/word/czechia2.jpg",
      "/img/word/czechia3.jpg",
      "/img/word/czechia4.jpg",
      "/img/word/czechia5.jpg",
      "/img/word/czechia6.jpg",
      "/img/word/czechia7.jpg",
      "/img/word/czechia8.jpg",
    ],

    countryName: "Czechia",
  },

  // Hungary
  hungary: {
    title: "취미",
    text: `음악 감상과 책 읽기를 통해 <b>마음을 안정</b>시키는 것을 좋아합니다.<br />
       요리와 만들기 같은 <b>손으로 창조하는 활동</b>을 즐깁니다.<br />
       그림 그리기도 좋아하며, 일기를 쓰기도 합니다.`,

    images: [
      "/img/word/hungary12.jpeg",
      "/img/word/hungary14.jpeg",
      "/img/word/hungary7.jpg",
      "/img/word/hungary4.jpg",
      "/img/word/hungary1.jpg",
      "/img/word/hungary2.jpg",
      "/img/word/hungary3.jpeg",
    ],

    countryName: "Hungary",
  },

  // Austria
  austria: {
    title: "가치관",
    text: `항상 <b>남에게 피해를 주지 않도록 조심하여</b> 행동하려고 합니다.<br />
       어떤 일이든 <b>끝까지 포기하지 않고 해내려는 태도</b>를 중요하게 생각합니다.<br />
       <b>타인을 존중하고 고마움을 표현하며</b>, 남의 장점을 먼저 보는 시선을 가지려 노력합니다.`,

    images: [
      "/img/word/austria5.jpeg",
      "/img/word/austria4.jpg",
      "/img/word/austria13.jpg",
      "/img/word/austria2.jpg",
      "/img/word/austria3.jpg",
      "/img/word/austria7.jpg",
      "/img/word/austria10.jpg",
      "/img/word/austria11.jpg",
      "/img/word/austria1.jpg",
      "/img/word/austria12.jpg",
      "/img/word/austria8.jpg",
      "/img/word/austria9.jpeg",
    ],

    countryName: "Austria",
  },

  // China
  china: {
    title: "키워드",
    text: "<b>열정</b>적으로 임하고, 어떤 일이든 <b>끈기 있게 도전</b>하는 편입니다.<br />작은 부분도 놓치지 않으려는 <b>꼼꼼함과 성실함</b>을 중요하게 생각합니다.<br />무엇보다 맡은 일에 <b>책임감을 가지고 끝까지 완수</b>하려는 자세를 갖고 있습니다.",

    images: [
      "/img/word/china1.jpeg",
      "/img/word/china2.jpeg",
      "/img/word/china3.jpeg",
    ],

    countryName: "China",
  },

  // Taiwan
  taiwan: {
    title: "좋아하는 음식",
    text: "<b>한식</b>을 좋아하며, 특히 <b>김치찌개, 감자탕</b> 같은 얼큰한 음식을 즐깁니다.<br />느끼한 음식은 잘 먹지 않고, <b>속이 편안해지는 따뜻한 집밥 스타일</b>을 선호합니다.<br />매콤하고 진한 국물 맛이 주는 <b>든든함이</b> 좋아 자주 찾게 됩니다.",

    images: [
      "/img/word/taiwan1.jpeg",
      "/img/word/taiwan2.jpeg",
      "/img/word/taiwan3.jpeg",
    ],

    countryName: "Taiwan",
  },

  // Hong Kong
  hongkong: {
    title: "하고 싶은 말",
    text: "<b>멋사 13기 아기사자</b>로서 열정과 책임감을 가지고 활동에 임하겠습니다.<br />새로운 경험을 통해 <b>많이 배우고 성장하는 1년</b>이 되도록 노력하겠습니다.<br />앞으로 함께할 모든 분들께 <b>잘 부탁드립니다!</b> 😊",

    images: [
      "/img/word/hongkong3.jpeg",
      "/img/word/hongkong5.jpeg",
      "/img/word/hongkong1.jpeg",
      "/img/word/hongkong2.jpeg",
      "/img/word/hongkong4.jpeg",
    ],

    countryName: "Hong Kong",
  },

  // 	Japan
  japan: {
    title: "좋아하는 색",
    text: "<b>파란색</b>은 제가 가장 좋아하는 색입니다.<br />보면 <b>상쾌하면서도 왠지 모를 깊고 쓸쓸한 감정</b>이 듭니다.<br />때로는 <b>차갑고 시크한 매력</b>이 느껴지는 오묘함이 좋아서 자꾸 끌립니다.",

    images: [
      "/img/word/japan1.jpg",
      "/img/word/japan2.jpg",
      "/img/word/japan3.jpeg",
      "/img/word/japan3.jpg",
      "/img/word/japan5.jpeg",
      "/img/word/japan6.jpeg",
      "/img/word/japan7.jpeg",
    ],

    countryName: "Japan",
  },

  // 	Australia
  australia: {
    title: "좋아하는 계절",
    text: "<b>가을</b>은 제가 가장 좋아하는 계절입니다.<br />하늘이 높고 구름 한 점 없는 날씨 덕분에 <b>상쾌한 기분</b>을 느낄 수 있습니다.<br />특히 <b>겨울이 다가오는 냄새</b>가 나는 이 계절의 분위기를 정말 좋아합니다.",

    images: [
      "/img/word/a1.jpeg",
      "/img/word/australia1.jpeg",
      "/img/word/australia2.jpeg",
      "/img/word/australia3.jpeg",
      "/img/word/australia4.jpeg",
    ],

    countryName: "Australia",
  },

  //	New Zealand
  newzealand: {
    title: "버킷리스트",
    text: "<b>세계일주</b>는 어릴 적부터 간직해온 저의 <b>꿈이자 목표</b>입니다.<br />부모님의 영향으로 다양한 나라를 여행하며 여러 문화를 경험했고,<br/>그 과정에서 <b>자연스럽게 여행을 좋아하게 되었습니다</b>.<br />그래서 이번 자기소개 페이지도 <b>저의 꿈을 담아 세계지도를 기반으로 구성</b>하였습니다.",

    images: [
      "/img/word/newzealand1.jpeg",
      "/img/word/newzealand2.jpeg",
      "/img/word/newzealand3.jpeg",
      "/img/word/newzealand4.jpeg",
    ],

    countryName: "New Zealand",
  },
};

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
