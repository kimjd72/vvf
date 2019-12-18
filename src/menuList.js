export default [
  {
    title: '시스템',
    to: '',
    icon: 'mdi-vhs',
    subItems: [
      { title: '코드관리', to: '/code/list', titlePath: 'Home > 시스템 > 코드관리' },
      { title: '관리자메뉴관리', to: '/mngrmenu/list', titlePath: 'Home > 시스템 > 관리자메뉴관리' },
      { title: '관리자권한관리', to: '/role/list', titlePath: 'Home > 시스템 > 관리자권한관리' },
      { title: '관리자URL관리', to: '/mngrurl/list', titlePath: 'Home > 시스템 > 관리자URL관리' },
      { title: '프론트메뉴관리', to: '/menu/list', titlePath: 'Home > 시스템 > 프론트메뉴관리' },
      { title: '프론트URL관리', to: '/url/list', titlePath: 'Home > 시스템 > 프론트URL관리' },
      { title: '다국어문자열관리', to: '/charst/list', titlePath: 'Home > 시스템 > 다국어문자열관리' }
    ]
  },
  {
    title: '관리자',
    to: '',
    icon: 'mdi-account',
    subItems: [
      { title: '관리자관리', to: '/mngr/list', titlePath: 'Home > 관리자 > 관리자관리' },
      { title: '로그인기록', to: '/mngr-login/list', titlePath: 'Home > 관리자 > 로그인기록' }
    ]
  },
  {
    title: '강좌',
    to: '',
    icon: 'mdi-account',
    subItems: [
      { title: '카드', to: '/lectures/card', titlePath: 'Home > 강좌 > 카드' },
      { title: '레이아웃', to: '/lectures/layout', titlePath: 'Home > 강좌 > 레이아웃' },
      { title: '노트', to: '/lectures/notes', titlePath: 'Home > 강좌 > 노트' },
      { title: '액시오스', to: '/lectures/axios', titlePath: 'Home > 강좌 > 액시오스' },
      { title: '컴포넌트', to: '/lectures/mother', titlePath: 'Home > 강좌 > 컴포넌트' },
      { title: '뷰액스', to: '/lectures/vuex', titlePath: 'Home > 강좌 > 뷰액스' },
      { title: '로딩서클', to: '/lectures/progressbar', titlePath: 'Home > 강좌 > 로딩서클' }
    ]
  }
]
