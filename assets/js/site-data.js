/*
  힐하우스 데모 사이트 공용 데이터
  - 원장님/지점 사진은 assets/img/doctors/, assets/img/clinics/ 에 정해진 파일명으로 넣으면
    자동으로 화면에 반영됩니다. (자세한 파일명 규칙은 각 폴더의 README.md 참고)
  - 새 원장님/지점을 추가하려면 아래 배열에 객체를 하나 더 추가하면 됩니다.
*/

var CLINICS = [
  {
    id: 'gangnam',
    name: '강남점',
    address: '서울특별시 강남구 강남대로 518, 4층·5층 (논현동)',
    phone: '02-6951-5761',
    hours: '평일 10:00~19:00 · 토요일 10:00~16:00',
    mainImg: '../assets/img/clinics/gangnam-main.jpg',
    gallery: [
      '../assets/img/clinics/gangnam-gallery-1.jpg',
      '../assets/img/clinics/gangnam-gallery-2.jpg',
      '../assets/img/clinics/gangnam-gallery-3.jpg'
    ]
  },
  {
    id: 'konkuk',
    name: '건대점',
    address: '주소 입력 예정',
    phone: '전화번호 입력 예정',
    hours: '진료시간 입력 예정',
    mainImg: '../assets/img/clinics/konkuk-main.jpg',
    gallery: [
      '../assets/img/clinics/konkuk-gallery-1.jpg',
      '../assets/img/clinics/konkuk-gallery-2.jpg',
      '../assets/img/clinics/konkuk-gallery-3.jpg'
    ]
  },
  {
    id: 'pangyo',
    name: '판교점',
    address: '주소 입력 예정',
    phone: '전화번호 입력 예정',
    hours: '진료시간 입력 예정',
    mainImg: '../assets/img/clinics/pangyo-main.jpg',
    gallery: [
      '../assets/img/clinics/pangyo-gallery-1.jpg',
      '../assets/img/clinics/pangyo-gallery-2.jpg',
      '../assets/img/clinics/pangyo-gallery-3.jpg'
    ]
  },
  {
    id: 'suwon',
    name: '수원점',
    address: '주소 입력 예정',
    phone: '전화번호 입력 예정',
    hours: '진료시간 입력 예정',
    mainImg: '../assets/img/clinics/suwon-main.jpg',
    gallery: [
      '../assets/img/clinics/suwon-gallery-1.jpg',
      '../assets/img/clinics/suwon-gallery-2.jpg',
      '../assets/img/clinics/suwon-gallery-3.jpg'
    ]
  },
  {
    id: 'daegu',
    name: '대구점',
    address: '주소 입력 예정',
    phone: '전화번호 입력 예정',
    hours: '진료시간 입력 예정',
    mainImg: '../assets/img/clinics/daegu-main.jpg',
    gallery: [
      '../assets/img/clinics/daegu-gallery-1.jpg',
      '../assets/img/clinics/daegu-gallery-2.jpg',
      '../assets/img/clinics/daegu-gallery-3.jpg'
    ]
  }
];

var DOCTORS = [
  {
    id: 'bae-jeongmin',
    name: '배정민',
    title: '대표원장',
    clinicId: 'gangnam',
    photo: '../assets/img/doctors/bae-jeongmin.jpg',
    philosophyShort: '진심 어린 치료와 꾸준한 연구로 난치성 피부질환으로 고통받는 환자들의 영원한 동반자가 될 것을 약속합니다.',
    philosophyLong: '진심 어린 치료와 꾸준한 연구로 난치성 피부질환으로 고통받는 환자들의 영원한 동반자가 될 것을 약속합니다. 한 분 한 분의 피부 상태와 라이프스타일을 고려한 맞춤 진료로, 가장 자연스럽고 오래가는 결과를 만들어갑니다.',
    equipment: [
      { name: '써마지FLX', desc: '주름 개선 · 피부 타이트닝 · 눈가 리프팅' },
      { name: '더엘주사', desc: '지방 감소 · 얼굴 윤곽 개선 · 이중턱 개선' },
      { name: '인라이튼 루비피코', desc: '기미 치료 · 문신제거 · 흉터 치료' }
    ],
    feed: [
      '../assets/img/doctors/bae-jeongmin-feed-1.jpg',
      '../assets/img/doctors/bae-jeongmin-feed-2.jpg',
      '../assets/img/doctors/bae-jeongmin-feed-3.jpg'
    ],
    sns: { instagram: '#', youtube: 'https://www.youtube.com/@pibutenten', blog: 'https://blog.naver.com/healhouse_gn' }
  },
  {
    id: 'jung-hanmi',
    name: '정한미',
    title: '대표원장',
    clinicId: 'gangnam',
    photo: '../assets/img/doctors/jung-hanmi.jpg',
    philosophyShort: '한 번 시술 후 잊혀지는 의사가 아닌, 피부에 대한 모든 것을 믿고 맡길 수 있는 피부 주치의를 약속합니다.',
    philosophyLong: '한 번 시술 후 잊혀지는 의사가 아닌, 피부에 대한 모든 것을 믿고 맡길 수 있는 피부 주치의를 약속합니다. 유행보다는 지속가능성을, 화려함보다는 본질을 우선하는 진료를 지향합니다.',
    equipment: [
      { name: '스컬트라H+', desc: '자가 콜라겐이 만드는 오래가는 볼륨' },
      { name: '리쥬란 힐러', desc: '연어 DNA로 깨우는 피부 자가 재생력' },
      { name: '울쎄라피 프라임', desc: '수술 없이 완성하는 진피 리프팅' }
    ],
    feed: [
      '../assets/img/doctors/jung-hanmi-feed-1.jpg',
      '../assets/img/doctors/jung-hanmi-feed-2.jpg',
      '../assets/img/doctors/jung-hanmi-feed-3.jpg'
    ],
    sns: { instagram: '#', youtube: 'https://www.youtube.com/@pibutenten', blog: 'https://blog.naver.com/healhouse_gn' }
  },
  {
    id: 'park-saemi',
    name: '박새미',
    title: '대표원장',
    clinicId: 'gangnam',
    photo: '../assets/img/doctors/park-saemi.jpg',
    philosophyShort: '시간이 흐를수록 더 깊은 아름다움을 발견하실 수 있도록 든든한 동반자가 되어드리겠습니다.',
    philosophyLong: '시간이 흐를수록 더 깊은 아름다움을 발견하실 수 있도록 든든한 동반자가 되어드리겠습니다. 자연스러운 변화와 꾸준한 관리로 오래도록 건강한 피부를 지킬 수 있도록 돕겠습니다.',
    equipment: [
      { name: '리투오', desc: '진피 구조 자체를 복원해 피부를 재건' },
      { name: '버츄RF', desc: '고주파 니들이 촘촘하게 채우는 피부' },
      { name: 'M22', desc: '색소침착 개선 · 혈관 질환 치료 · 피부결 개선' }
    ],
    feed: [
      '../assets/img/doctors/park-saemi-feed-1.jpg',
      '../assets/img/doctors/park-saemi-feed-2.jpg',
      '../assets/img/doctors/park-saemi-feed-3.jpg'
    ],
    sns: { instagram: '#', youtube: 'https://www.youtube.com/@pibutenten', blog: 'https://blog.naver.com/healhouse_gn' }
  }

  /*
  // 새 원장님 추가 예시 (사진만 넣지 마시고, 아래처럼 데이터도 함께 추가해주세요)
  ,{
    id: 'doctor-id-영문',
    name: '이름',
    title: '대표원장',
    clinicId: 'konkuk', // gangnam, konkuk, pangyo, suwon, daegu 중 하나
    photo: '../assets/img/doctors/doctor-id-영문.jpg',
    philosophyShort: '한 줄 소개',
    philosophyLong: '상세 진료철학 글',
    equipment: [ { name: '장비명', desc: '설명' } ],
    feed: ['../assets/img/doctors/doctor-id-영문-feed-1.jpg'],
    sns: { instagram: '#', youtube: '#', blog: '#' }
  }
  */
];

var MAGAZINE_CATEGORIES = [
  { id: '', label: '전체' },
  { id: 'signature', label: '시그니처' },
  { id: 'lifting', label: '리프팅' },
  { id: 'skinbooster', label: '스킨부스터' },
  { id: 'fillervolume', label: '필러 볼륨' },
  { id: 'wrinklecontour', label: '주름 윤곽' },
  { id: 'laser', label: '레이저' },
  { id: 'etc', label: '기타' },
  { id: 'vitiligo', label: '백반증' }
];

var MAGAZINE_CATEGORY_LABEL = {
  signature: '시그니처', lifting: '리프팅', skinbooster: '스킨부스터',
  fillervolume: '필러 볼륨', wrinklecontour: '주름 윤곽', laser: '레이저',
  etc: '기타', vitiligo: '백반증'
};

var MAGAZINE_POSTS = [
  {
    title: '수술 없이 설계하는 프리미엄 윤곽 관리, 더엘주사를 선택해야 하는 이유',
    category: 'wrinklecontour', date: '2026-07-07', author: '정한미', views: 16, likes: 3,
    img: 'https://healhousegn.com/img/equip_ebd_06_n.jpg'
  },
  {
    title: '여름에 쥬브젠 받아도 괜찮을까, 회복기간과 관리법까지',
    category: 'wrinklecontour', date: '2026-07-02', author: '정한미', views: 41, likes: 0,
    img: 'https://healhousegn.com/img/equip_ebd_jew.jpg'
  },
  {
    title: '갑자기 늙어 보이는 얼굴, 리투오로 시작하는 피부 밀도 관리',
    category: 'skinbooster', date: '2026-06-30', author: '정한미', views: 55, likes: 0,
    img: 'https://healhousegn.com/img/equip_inj_06.jpg'
  },
  {
    title: '손주사 대신 기계로 맞은 리쥬란, 안 아프면 효과도 없을까',
    category: 'skinbooster', date: '2026-06-25', author: '정한미', views: 71, likes: 0,
    img: 'https://healhousegn.com/img/equip_inj_04.jpg'
  },
  {
    title: '리쥬란 효과 없었다면, 리투오가 답일 수 있습니다.',
    category: 'skinbooster', date: '2026-06-23', author: '정한미', views: 68, likes: 0,
    img: 'https://healhousegn.com/img/equip_inj_06.jpg'
  },
  {
    title: '스컬트라 가격, 비싼데도 가성비 시술인 이유',
    category: 'fillervolume', date: '2026-06-18', author: '정한미', views: 89, likes: 0,
    img: 'https://healhousegn.com/img/equip_inj_01.jpg'
  },
  {
    title: '30대 볼패임, 무작정 채우면 어색해지는 이유',
    category: 'fillervolume', date: '2026-06-17', author: '정한미', views: 82, likes: 0,
    img: 'https://healhousegn.com/img/equip_inj_03_n.jpg'
  },
  {
    title: '사각턱과 넓은하관, 더엘주사로 얼굴이 작아 보일 수 있을까',
    category: 'signature', date: '2026-06-11', author: '정한미', views: 152, likes: 0,
    img: 'https://healhousegn.com/img/sig_case01_new.jpg'
  },
  {
    title: '쥬브젠 어디서 받아야 할까, 다른 시술 조합과 병원 고르는 방법',
    category: 'wrinklecontour', date: '2026-06-01', author: '정한미', views: 123, likes: 0,
    img: 'https://healhousegn.com/img/equip_ebd_jew.jpg'
  },
  {
    title: '쥬브젠 부위·깊이별 가격과 상담 전, 체크리스트',
    category: 'wrinklecontour', date: '2026-06-01', author: '정한미', views: 743, likes: 0,
    img: 'https://healhousegn.com/img/equip_ebd_jew.jpg'
  },
  {
    title: '한남·청담 휩쓴 리투오, 입소문만큼 효과가 있을까',
    category: 'skinbooster', date: '2026-05-29', author: '박새미', views: 111, likes: 0,
    img: 'https://healhousegn.com/img/equip_inj_06.jpg'
  },
  {
    title: '통증 없는 리프팅이 가능할까, 올타이트 효과와 기존 리프팅과의 차이',
    category: 'lifting', date: '2026-05-04', author: '정한미', views: 152, likes: 0,
    img: 'https://healhousegn.com/img/equip_ebd_03_1.jpg'
  },
  {
    title: '힐로웨이브 후기, 효과와 부작용 필러와의 차이',
    category: 'skinbooster', date: '2026-05-04', author: '정한미', views: 152, likes: 0,
    img: 'https://healhousegn.com/img/equip_inj_05.jpg'
  },
  {
    title: '쥬브젠, 깊은 주름에 효과 있을까, 부작용·필러와의 차이·실제 후기',
    category: 'wrinklecontour', date: '2026-05-04', author: '정한미', views: 183, likes: 0,
    img: 'https://healhousegn.com/img/equip_ebd_jew.jpg'
  },
  {
    title: '차분히, 그러나 단단하게 새로운 시도를 이어갑니다',
    category: 'etc', date: '2026-04-01', author: '박새미', views: 214, likes: 0,
    img: 'https://healhousegn.com/img/core_bg01_n2.jpg'
  },
  {
    title: '자연스러움의 정석, 기다림의 미학, 스컬트라에 집중합니다.',
    category: 'signature', date: '2026-03-10', author: '정한미', views: 0, likes: 0,
    img: 'https://healhousegn.com/img/equip_inj_01.jpg'
  },
  {
    title: '작고 우아하며 빛나는 얼굴을 위하여',
    category: 'signature', date: '2026-03-10', author: '정한미', views: 0, likes: 0,
    img: 'https://healhousegn.com/img/sig_case03_new.jpg'
  },
  {
    title: '유행 보단 지속가능성, 화려함 보단 본질, 피부에 진심을 담았습니다.',
    category: 'etc', date: '2026-03-10', author: '정한미', views: 0, likes: 0,
    img: 'https://healhousegn.com/img/core_bg02_n.jpg'
  }

  /*
  // 새 칼럼 추가 예시
  ,{
    title: '글 제목',
    category: 'lifting', // signature, lifting, skinbooster, fillervolume, wrinklecontour, laser, etc, vitiligo 중 하나
    date: '2026-01-01',
    author: '작성자',
    views: 0,
    likes: 0,
    img: 'https://healhousegn.com/img/xxx.jpg'
  }
  */
];

function getClinicById(id) {
  for (var i = 0; i < CLINICS.length; i++) { if (CLINICS[i].id === id) return CLINICS[i]; }
  return null;
}
function getDoctorById(id) {
  for (var i = 0; i < DOCTORS.length; i++) { if (DOCTORS[i].id === id) return DOCTORS[i]; }
  return null;
}
function getDoctorsByClinic(clinicId) {
  return DOCTORS.filter(function (d) { return d.clinicId === clinicId; });
}
function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
