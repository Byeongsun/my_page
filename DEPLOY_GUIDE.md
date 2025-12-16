# 🚀 Vercel 배포 가이드

## 현재 상태
✅ GitHub 저장소에 코드 푸시 완료  
✅ Vercel 설정 파일 준비 완료  
⏳ Vercel 배포 대기 중

## 배포 단계별 가이드

### 1단계: Vercel 접속 및 로그인
1. 브라우저에서 https://vercel.com 접속
2. "Sign Up" 또는 "Log In" 클릭
3. **"Continue with GitHub"** 선택하여 GitHub 계정으로 로그인

### 2단계: 새 프로젝트 추가
1. Vercel 대시보드에서 **"Add New..."** 또는 **"New Project"** 클릭
2. GitHub 저장소 목록에서 **"Byeongsun/my_page"** 선택
3. "Import" 클릭

### 3단계: 프로젝트 설정
다음과 같이 설정하세요:

- **Project Name**: `my-page` (또는 원하는 이름)
- **Framework Preset**: **Other** 선택
- **Root Directory**: `./` (기본값, 변경 불필요)
- **Build Command**: (비워두기 - 정적 사이트이므로 빌드 불필요)
- **Output Directory**: (비워두기)
- **Install Command**: (비워두기)

### 4단계: 배포 실행
1. 설정 확인 후 **"Deploy"** 버튼 클릭
2. 배포 진행 상황 확인 (약 1-2분 소요)
3. 배포 완료 후 **배포 URL 확인**
   - 예: `https://my-page-xxxxx.vercel.app`

### 5단계: 도메인 연결 (greenmiso.org)
1. 배포 완료 후 프로젝트 페이지에서 **"Settings"** 클릭
2. 왼쪽 메뉴에서 **"Domains"** 클릭
3. 도메인 입력란에 **`greenmiso.org`** 입력
4. **"Add"** 클릭

### 6단계: DNS 설정
Vercel이 제공하는 DNS 레코드를 도메인 제공업체에 추가:

1. Vercel Domains 페이지에서 DNS 설정 확인
2. 도메인 제공업체(예: 가비아, 후이즈 등)에 로그인
3. DNS 관리 페이지로 이동
4. Vercel이 제공한 레코드 추가:
   - **Type**: A 또는 CNAME
   - **Name**: @ 또는 www
   - **Value**: Vercel이 제공한 값

### 7단계: 확인
- DNS 전파 완료 후 (보통 몇 분~24시간)
- `https://greenmiso.org` 접속하여 사이트 확인

## 문제 해결

### 배포 실패 시
- Vercel 대시보드의 "Deployments" 탭에서 로그 확인
- `vercel.json` 파일이 올바른지 확인

### 도메인 연결 실패 시
- DNS 레코드가 올바르게 추가되었는지 확인
- DNS 전파 시간 대기 (최대 24시간)

### 사이트가 보이지 않을 때
- 브라우저 캐시 삭제 후 재시도
- Vercel 배포 상태 확인

## 완료 후
✅ 배포 완료 시 이 파일을 삭제하거나 업데이트하세요.
