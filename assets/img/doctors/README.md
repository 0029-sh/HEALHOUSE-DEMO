# 원장님 사진 폴더

이 폴더에 아래 파일명 그대로 사진을 넣으면 사이트에 자동으로 반영됩니다.
(파일명은 `assets/js/site-data.js` 에 정의된 경로와 정확히 일치해야 합니다.)

## 현재 등록된 원장님

| 원장님 | 프로필 사진 (1장) | 피드 캐러셀 사진 (원하는 만큼, 최소 1장) |
|---|---|---|
| 배정민 | `bae-jeongmin.jpg` | `bae-jeongmin-feed-1.jpg`, `bae-jeongmin-feed-2.jpg`, `bae-jeongmin-feed-3.jpg` |
| 정한미 | `jung-hanmi.jpg` | `jung-hanmi-feed-1.jpg`, `jung-hanmi-feed-2.jpg`, `jung-hanmi-feed-3.jpg` |
| 박새미 | `park-saemi.jpg` | `park-saemi-feed-1.jpg`, `park-saemi-feed-2.jpg`, `park-saemi-feed-3.jpg` |

- 프로필 사진: 3:4 세로 비율 권장
- 피드 사진: 1:1 정방형 권장
- 사진이 없는 동안에는 "사진 준비중" 플레이스홀더가 자동으로 표시됩니다.

## 새 원장님을 추가하고 싶다면

사진 파일만 넣어서는 반영되지 않습니다. `assets/js/site-data.js` 의 `DOCTORS` 배열에
이름/소속 지점/소개글 등 데이터를 함께 추가해야 합니다 (파일 안에 예시 템플릿이 주석으로 있습니다).
데이터를 채워서 알려주시면 반영해드리겠습니다.
