/* 힐하우스 데모 - 원장님/지점 카드·상세 렌더링 (site-data.js 필요) */

function photoSlotHTML(src, alt) {
  return '<div class="photo-slot"><img src="' + src + '" alt="' + alt + '" ' +
    'onerror="this.closest(\'.photo-slot\').classList.add(\'img-missing\')"></div>';
}

function doctorCardHTML(doctor) {
  var clinic = getClinicById(doctor.clinicId);
  return '<a class="doctor-card" href="../dermatologists/detail.html?id=' + doctor.id + '">' +
    photoSlotHTML(doctor.photo, doctor.name) +
    '<div class="doctor-card-info">' +
      '<h3>' + doctor.name + ' <small style="color:#999;font-weight:400;">' + doctor.title + '</small></h3>' +
      '<span>' + (clinic ? clinic.name : '') + '</span>' +
    '</div></a>';
}

function clinicCardHTML(clinic) {
  return '<a class="clinic-card" href="../clinics/detail.html?id=' + clinic.id + '">' +
    photoSlotHTML(clinic.mainImg, clinic.name) +
    '<div class="clinic-card-info">' +
      '<h3>' + clinic.name + '</h3>' +
      '<p>' + clinic.address + '<br>' + clinic.phone + '</p>' +
    '</div></a>';
}

function renderDoctorGrid(clinicId) {
  var list = clinicId ? getDoctorsByClinic(clinicId) : DOCTORS;
  var $grid = $('#doctorGrid').empty();
  if (list.length === 0) {
    $grid.append('<div class="doctor-grid-empty">해당 지점에는 아직 등록된 원장님이 없습니다.</div>');
    return;
  }
  list.forEach(function (d) { $grid.append(doctorCardHTML(d)); });
}

function initDoctorFilter() {
  renderDoctorGrid(null);
  $('.clinic-filter button').on('click', function () {
    $('.clinic-filter button').removeClass('active');
    $(this).addClass('active');
    var clinicId = $(this).data('clinic') || null;
    renderDoctorGrid(clinicId);
  });
}

function renderClinicGrid() {
  var $grid = $('#clinicGrid').empty();
  CLINICS.forEach(function (c) { $grid.append(clinicCardHTML(c)); });
}

function renderDoctorDetail() {
  var id = getQueryParam('id');
  var doctor = getDoctorById(id);
  if (!doctor) {
    $('#doctorDetail').html('<p style="text-align:center;color:#999;padding:80px 0;">원장님 정보를 찾을 수 없습니다. <a href="../dermatologists/">목록으로 돌아가기</a></p>');
    return;
  }
  var clinic = getClinicById(doctor.clinicId);
  document.title = doctor.name + ' 원장 :: 힐하우스피부과';

  var top = '<div class="doctor-detail-top">' +
    photoSlotHTML(doctor.photo, doctor.name) +
    '<div class="info">' +
      '<span class="clinic-tag">' + (clinic ? clinic.name : '') + '</span>' +
      '<h1>' + doctor.name + ' <small style="font-size:16px;color:#999;font-weight:400;">' + doctor.title + '</small></h1>' +
      '<p class="philosophy-short">' + doctor.philosophyShort + '</p>' +
      '<div class="sns-links">' +
        (doctor.sns.instagram ? '<a href="' + doctor.sns.instagram + '" target="_blank">Instagram</a>' : '') +
        (doctor.sns.youtube ? '<a href="' + doctor.sns.youtube + '" target="_blank">YouTube</a>' : '') +
        (doctor.sns.blog ? '<a href="' + doctor.sns.blog + '" target="_blank">Blog</a>' : '') +
      '</div>' +
    '</div>' +
  '</div>';

  var feed = '<h2 style="font-size:18px;margin-bottom:16px;">피드</h2><div class="ig-feed">' +
    doctor.feed.map(function (src) { return photoSlotHTML(src, doctor.name + ' feed'); }).join('') +
    '</div>';

  var tabsNav = '<h2 style="font-size:18px;margin-bottom:16px;">전문 시술 · 장비 소개</h2><div class="equip-tabs-nav">' +
    doctor.equipment.map(function (e, i) {
      return '<button data-idx="' + i + '" class="' + (i === 0 ? 'active' : '') + '">' + e.name + '</button>';
    }).join('') + '</div>' +
    doctor.equipment.map(function (e, i) {
      return '<div class="equip-tab-panel' + (i === 0 ? ' active' : '') + '" data-idx="' + i + '"><strong>' + e.name + '</strong><p style="margin-top:8px;">' + e.desc + '</p></div>';
    }).join('');

  var philosophy = '<div class="doctor-philosophy"><h2 style="font-size:18px;margin-bottom:12px;">진료 철학</h2><p>' + doctor.philosophyLong + '</p></div>';

  $('#doctorDetail').html(top + feed + tabsNav + philosophy);

  $('.equip-tabs-nav button').on('click', function () {
    var idx = $(this).data('idx');
    $('.equip-tabs-nav button').removeClass('active');
    $(this).addClass('active');
    $('.equip-tab-panel').removeClass('active');
    $('.equip-tab-panel[data-idx="' + idx + '"]').addClass('active');
  });
}

function renderClinicDetail() {
  var id = getQueryParam('id');
  var clinic = getClinicById(id);
  if (!clinic) {
    $('#clinicDetail').html('<p style="text-align:center;color:#999;padding:80px 0;">지점 정보를 찾을 수 없습니다. <a href="../clinics/">목록으로 돌아가기</a></p>');
    return;
  }
  document.title = clinic.name + ' :: 힐하우스피부과';

  var main = '<div class="clinic-detail-main">' + photoSlotHTML(clinic.mainImg, clinic.name) +
    '<h1 style="font-size:26px;color:#222;">' + clinic.name + '</h1>' +
    '<p style="color:#666;margin-top:10px;line-height:1.9;">' + clinic.address + '<br>' + clinic.phone + ' · ' + clinic.hours + '</p>' +
    '</div>';

  var doctors = getDoctorsByClinic(clinic.id);
  var doctorsHTML = '<h2 style="font-size:18px;margin-bottom:16px;">함께하는 의료진</h2>' +
    '<div class="clinic-detail-doctors">' +
    (doctors.length ? doctors.map(doctorCardHTML).join('') : '<p style="color:#aaa;">등록된 원장님이 없습니다.</p>') +
    '</div>';

  var galleryHTML = '<h2 style="font-size:18px;margin-bottom:16px;">지점 사진</h2>' +
    '<div class="swiper-container clinic-gallery"><div class="swiper-wrapper">' +
    clinic.gallery.map(function (src) {
      return '<div class="swiper-slide">' + photoSlotHTML(src, clinic.name) + '</div>';
    }).join('') +
    '</div></div>' +
    '<div class="clinic-gallery-pagination" style="text-align:center;margin-top:14px;"></div>';

  var cta = '<div style="text-align:center;margin-top:50px;">' +
    '<a href="https://form.typeform.com/to/tglXyzre" target="_blank" class="clinic-inquiry-btn">문의하러가기</a>' +
    '</div>';

  $('#clinicDetail').html(main + doctorsHTML + galleryHTML + cta);

  new Swiper('.clinic-gallery', {
    slidesPerView: 1.3,
    spaceBetween: 15,
    pagination: { el: '.clinic-gallery-pagination', clickable: true },
    breakpoints: { 769: { slidesPerView: 2.5, spaceBetween: 20 } }
  });
}

function magCardHTML(post) {
  return '<a class="mag-card" href="#">' +
    photoSlotHTML(post.img, post.title) +
    '<p class="mag-card-cat">' + (MAGAZINE_CATEGORY_LABEL[post.category] || '') + '</p>' +
    '<h3>' + post.title + '</h3>' +
    '<p class="meta">' + post.date + ' · by ' + post.author + '</p>' +
    '<p class="stats">👁 ' + post.views + '&nbsp;&nbsp;♡ ' + post.likes + '</p>' +
  '</a>';
}

function magSideCardHTML(post) {
  return '<a class="mag-hero-side-card" href="#">' +
    photoSlotHTML(post.img, post.title) +
    '<p class="mag-card-cat">' + (MAGAZINE_CATEGORY_LABEL[post.category] || '') + '</p>' +
    '<h3>' + post.title + '</h3>' +
    '<p class="meta">' + post.date + ' · by ' + post.author + '</p>' +
  '</a>';
}

// 히어로 : 왼쪽 큰 이미지 1개 + 오른쪽 2x2 카드 4개
function renderMagazineHero(posts) {
  if (posts.length === 0) { $('#magHero').empty(); return; }
  var main = posts[0];
  var side = posts.slice(1, 5);

  var mainHTML = '<a class="mag-hero-main" href="#">' +
    photoSlotHTML(main.img, main.title) +
    '<div class="overlay">' +
      '<p class="cat">' + (MAGAZINE_CATEGORY_LABEL[main.category] || '') + ' · ' + main.date + '</p>' +
      '<h2>' + main.title + '</h2>' +
      '<p class="meta">by ' + main.author + '</p>' +
    '</div>' +
  '</a>';

  var sideHTML = '<div class="mag-hero-side">' + side.map(magSideCardHTML).join('') + '</div>';

  $('#magHero').html('<div class="mag-hero-wrap">' + mainHTML + sideHTML + '</div>');
}

// 카테고리별로 묶인 섹션들 (전체 탭일 때만 노출)
function renderMagazineCategorySections() {
  var order = ['signature', 'lifting', 'skinbooster', 'fillervolume', 'wrinklecontour', 'laser', 'etc', 'vitiligo'];
  var html = '';
  order.forEach(function (cat) {
    var posts = MAGAZINE_POSTS.filter(function (p) { return p.category === cat; }).slice(0, 3);
    if (posts.length === 0) return;
    html += '<div class="mag-cat-section">' +
      '<h2 class="mag-section-title">' + MAGAZINE_CATEGORY_LABEL[cat] + '</h2>' +
      '<div class="mag-cat-row">' + posts.map(magCardHTML).join('') + '</div>' +
    '</div>';
  });
  $('#magCategorySections').html(html);
}

function renderMagazineGrid(category) {
  var list = category ? MAGAZINE_POSTS.filter(function (p) { return p.category === category; }) : MAGAZINE_POSTS;
  var heroPosts = list.slice(0, 5);
  var gridPosts = list.slice(5);

  if (category) {
    $('#magCategorySections').empty();
  } else {
    renderMagazineCategorySections();
  }

  renderMagazineHero(heroPosts);

  var $sectionTitle = $('#magSectionTitle');
  var $grid = $('#magGrid').empty();

  if (list.length === 0) {
    $sectionTitle.text(category ? MAGAZINE_CATEGORY_LABEL[category] : '');
    $grid.append('<div class="doctor-grid-empty">아직 등록된 칼럼이 없습니다.</div>');
    return;
  }
  if (gridPosts.length === 0) {
    $sectionTitle.text('');
    return;
  }
  $sectionTitle.text(category ? MAGAZINE_CATEGORY_LABEL[category] : 'LATEST STORIES');
  gridPosts.forEach(function (p) { $grid.append(magCardHTML(p)); });
}

function initMagazine() {
  renderMagazineGrid(null);
  $('.mag-tabs button').on('click', function () {
    $('.mag-tabs button').removeClass('active');
    $(this).addClass('active');
    renderMagazineGrid($(this).data('cat') || null);
  });
}
