# 지점 사진 폴더

이 폴더에 아래 파일명 그대로 사진을 넣으면 사이트에 자동으로 반영됩니다.
(파일명은 `assets/js/site-data.js` 에 정의된 경로와 정확히 일치해야 합니다.)

## 지점별 파일명

| 지점 | 메인 사진 (1장) | 갤러리 캐러셀 사진 (원하는 만큼, 최소 1장) |
|---|---|---|
| 강남점 | `gangnam-main.jpg` | `gangnam-gallery-1.jpg`, `gangnam-gallery-2.jpg`, `gangnam-gallery-3.jpg` |
| 건대점 | `konkuk-main.jpg` | `konkuk-gallery-1.jpg`, `konkuk-gallery-2.jpg`, `konkuk-gallery-3.jpg` |
| 판교점 | `pangyo-main.jpg` | `pangyo-gallery-1.jpg`, `pangyo-gallery-2.jpg`, `pangyo-gallery-3.jpg` |
| 수원점 | `suwon-main.jpg` | `suwon-gallery-1.jpg`, `suwon-gallery-2.jpg`, `suwon-gallery-3.jpg` |
| 대구점 | `daegu-main.jpg` | `daegu-gallery-1.jpg`, `daegu-gallery-2.jpg`, `daegu-gallery-3.jpg` |

- 메인 사진: 16:7 가로 비율 권장
- 갤러리 사진: 4:3 비율 권장
- 사진이 없는 동안에는 "사진 준비중" 플레이스홀더가 자동으로 표시됩니다.
- 강남점을 제외한 나머지 4개 지점은 주소/전화번호/진료시간도 아직 "입력 예정"으로 되어 있습니다.
  `assets/js/site-data.js` 의 `CLINICS` 배열에 실제 정보를 채워서 알려주시면 반영해드리겠습니다.
