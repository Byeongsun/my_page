// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initTabs();
    initScrollAnimation();
    initSmoothScroll();
});

/**
 * 네비게이션 활성화 관리
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Intersection Observer로 현재 보이는 섹션 감지
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // 네비게이션 링크 클릭 이벤트
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 경력 탭 전환 기능
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetCompany = this.getAttribute('data-company');
            
            // 모든 탭 버튼과 콘텐츠에서 active 제거
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 클릭한 탭과 해당 콘텐츠에 active 추가
            this.classList.add('active');
            const targetContent = document.getElementById(targetCompany);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

/**
 * 스크롤 애니메이션 초기화
 */
function initScrollAnimation() {
    const elements = document.querySelectorAll('.section, .about-content, .experience-container');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

/**
 * 부드러운 스크롤
 */
function initSmoothScroll() {
    // CSS scroll-behavior: smooth 대신 JavaScript로 구현하여 더 부드럽게
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 모바일 메뉴 토글 (필요시 추가)
 */
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuButton && sidebar) {
        mobileMenuButton.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
}

/**
 * 타이핑 효과 (Hero 섹션용, 선택사항)
 */
function initTypingEffect() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.textContent = '';
        let index = 0;
        
        function type() {
            if (index < text.length) {
                heroName.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        
        // 스크롤이 Hero 섹션에 도달하면 시작
        const observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                type();
                observer.disconnect();
            }
        });
        
        observer.observe(heroName);
    }
}

/**
 * 스크롤 위치에 따른 헤더 효과
 */
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 스크롤 방향에 따른 효과 추가 가능
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // 스크롤 다운
    } else {
        // 스크롤 업
    }
    
    lastScrollTop = scrollTop;
});

/**
 * 이미지 로드 시 애니메이션 및 오류 처리
 */
function initImageAnimation() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
            console.log('Image loaded:', this.src);
        });
        
        img.addEventListener('error', function() {
            console.error('Image failed to load:', this.src);
            // 이미지 로드 실패 시 placeholder 표시
            if (this.src.includes('profile.png')) {
                console.warn('Profile image failed to load. Checking alternative paths...');
                // 절대 경로로 재시도
                const currentSrc = this.src;
                if (!currentSrc.startsWith('http')) {
                    const baseUrl = window.location.origin;
                    this.src = baseUrl + '/assets/profile.png';
                    console.log('Retrying with absolute URL:', this.src);
                }
            }
        });
    });
}

// 페이지 로드 시 이미지 로드 확인 및 강제 재로드
document.addEventListener('DOMContentLoaded', function() {
    initImageAnimation();
    
    // 프로필 이미지 특별 처리 - 모든 환경에서 올바른 경로 사용
    const profileImgs = document.querySelectorAll('.profile-img');
    profileImgs.forEach(profileImg => {
        const currentSrc = profileImg.getAttribute('src') || profileImg.src;
        const isFileProtocol = window.location.protocol === 'file:';
        const baseUrl = window.location.origin;
        
        // 파일 프로토콜(file://)인 경우 상대 경로 사용, 그 외에는 절대 경로 사용
        let correctPath;
        if (isFileProtocol) {
            // 로컬 파일 열기 시: 상대 경로
            correctPath = 'assets/profile.png';
        } else {
            // 웹 서버/배포 환경: 절대 경로
            correctPath = baseUrl + '/assets/profile.png';
        }
        
        // 경로가 올바르지 않으면 수정
        if (profileImg.src !== correctPath && !profileImg.src.includes('profile.png')) {
            profileImg.src = correctPath;
            console.log('Setting profile image path:', correctPath);
            console.log('Protocol:', window.location.protocol);
            console.log('Origin:', window.location.origin);
        }
        
        // 이미지 로드 실패 시 재시도 로직
        const retryPaths = [
            baseUrl + '/assets/profile.png',
            '/assets/profile.png',
            'assets/profile.png',
            './assets/profile.png'
        ];
        
        let retryIndex = 0;
        let isRetrying = false;
        
        const tryNextPath = () => {
            if (retryIndex < retryPaths.length && !isRetrying) {
                isRetrying = true;
                const retrySrc = retryPaths[retryIndex] + '?t=' + Date.now();
                console.log(`Retrying with path ${retryIndex + 1}/${retryPaths.length}:`, retrySrc);
                profileImg.src = retrySrc;
                retryIndex++;
                
                // 다음 시도를 위해 플래그 리셋 (이미지 로드 성공/실패 후)
                setTimeout(() => {
                    isRetrying = false;
                }, 500);
            } else if (retryIndex >= retryPaths.length) {
                console.error('All retry paths failed. Tried:', retryPaths);
            }
        };
        
        profileImg.addEventListener('error', function() {
            console.error('Profile image failed to load:', this.src);
            console.error('Current URL:', window.location.href);
            console.error('Origin:', window.location.origin);
            
            // 다음 경로 시도 (이미지가 로드 실패할 때마다 호출됨)
            if (retryIndex < retryPaths.length) {
                setTimeout(tryNextPath, 100);
            } else {
                console.error('All retry paths exhausted');
            }
        });
        
        // 이미지 로드 성공 확인 및 재시도 인덱스 리셋
        profileImg.addEventListener('load', function() {
            if (retryIndex > 0) {
                console.log('Profile image loaded successfully after retry:', this.src);
            } else {
                console.log('Profile image loaded successfully:', this.src);
            }
            retryIndex = 0; // 성공 시 리셋하여 다음 실패 시 다시 시도 가능하도록
            isRetrying = false;
        });
    });
});