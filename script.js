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
    
    // 프로필 이미지 특별 처리
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        // 이미지 로드 상태 확인
        const checkImageLoad = () => {
            if (!profileImg.complete || profileImg.naturalHeight === 0) {
                console.log('Profile image not loaded, checking path...');
                const currentSrc = profileImg.src;
                console.log('Current image source:', currentSrc);
                console.log('Window location:', window.location.href);
                console.log('Base URL:', window.location.origin);
                
                // 절대 경로로 강제 재로드
                const baseUrl = window.location.origin;
                const absolutePath = baseUrl + '/assets/profile.png';
                if (currentSrc !== absolutePath) {
                    console.log('Reloading image with absolute path:', absolutePath);
                    profileImg.src = absolutePath + '?t=' + Date.now(); // 캐시 방지
                }
            } else {
                console.log('Profile image loaded successfully:', profileImg.src);
            }
        };
        
        // 즉시 확인
        checkImageLoad();
        
        // 이미지 로드 이벤트 리스너
        profileImg.addEventListener('load', function() {
            console.log('Profile image loaded:', this.src);
        });
        
        profileImg.addEventListener('error', function() {
            console.error('Profile image failed to load:', this.src);
            // 절대 경로로 재시도
            const baseUrl = window.location.origin;
            const newSrc = baseUrl + '/assets/profile.png?t=' + Date.now();
            console.log('Retrying with:', newSrc);
            this.src = newSrc;
        });
    }
});