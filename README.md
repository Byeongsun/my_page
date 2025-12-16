# 정병선 - Portfolio Website

영상처리 및 카메라 개발 전문가 포트폴리오 웹사이트

## 기술 스택

- HTML5
- CSS3
- JavaScript (Vanilla)

## 배포

이 프로젝트는 Vercel을 통해 배포됩니다.

### Vercel CLI를 사용한 배포

1. Vercel CLI 설치 (아직 설치하지 않은 경우)
```bash
npm i -g vercel
```

2. Vercel 로그인
```bash
vercel login
```

3. 프로젝트 배포
```bash
vercel
```

4. 프로덕션 배포
```bash
vercel --prod
```

### 도메인 설정

1. Vercel 대시보드에 로그인
2. 프로젝트 선택
3. Settings > Domains로 이동
4. `greenmiso.org` 도메인 추가
5. DNS 설정:
   - A 레코드: `@` → `76.76.21.21`
   - CNAME 레코드: `www` → `cname.vercel-dns.com`

또는 Vercel이 제공하는 DNS 설정을 따르세요.

## 로컬 개발

브라우저에서 `index.html` 파일을 직접 열거나, 로컬 서버를 사용하세요:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 설치 필요)
npx http-server
```

그 후 브라우저에서 `http://localhost:8000` 접속

## 파일 구조

```
.
├── index.html          # 메인 HTML 파일
├── style.css          # 스타일시트
├── script.js          # JavaScript 파일
├── vercel.json        # Vercel 배포 설정
├── assets/
│   └── profile.png    # 프로필 이미지
└── README.md          # 프로젝트 설명
```

## 라이선스

© 2025 정병선. All rights reserved.