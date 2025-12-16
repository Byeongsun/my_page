# 정병선 - Portfolio Website

Brittany Chiang 스타일의 포트폴리오 웹사이트입니다.

## 🚀 배포 방법

### 방법 1: Vercel 웹 인터페이스 (권장)

1. **Vercel 계정 생성/로그인**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "Add New Project" 클릭
   - GitHub 저장소 `Byeongsun/my_page` 선택
   - 프로젝트 설정:
     - **Framework Preset**: Other
     - **Root Directory**: `./` (기본값)
     - **Build Command**: (비워두기)
     - **Output Directory**: (비워두기)
   - "Deploy" 클릭

3. **도메인 연결 (greenmiso.org)**
   - 배포 완료 후 프로젝트 선택
   - Settings → Domains 클릭
   - `greenmiso.org` 입력 후 Add
   - Vercel이 제공하는 DNS 레코드를 도메인 제공업체에 추가

### 방법 2: Vercel CLI

```bash
# Node.js 설치 필요 (https://nodejs.org/)
npm install -g vercel
vercel login
vercel --prod
```

## 📁 프로젝트 구조

```
.
├── index.html          # 메인 HTML 파일
├── style.css          # 스타일시트
├── script.js          # JavaScript 파일
├── assets/
│   └── profile.png    # 프로필 이미지
├── vercel.json        # Vercel 배포 설정
└── README.md          # 프로젝트 설명
```

## 🛠 기술 스택

- HTML5
- CSS3
- JavaScript (Vanilla)
- Vercel (배포)

## 📝 섹션

1. **About** - 자기소개 및 기술 스택
2. **Experience** - 경력사항 (탭 형식)
3. **Projects** - 프로젝트 (추가 예정)
4. **Contact** - 연락처 정보

## 🔗 링크

- GitHub: https://github.com/Byeongsun/my_page
- 배포 URL: (Vercel 배포 후 업데이트 예정)
