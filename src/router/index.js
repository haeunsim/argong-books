import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const readingActivitySidebar = [
  {
    title: '우리 반 독서 대시보드',
    description: '우리 반 독서 활동을 시각화하여 요약합니다.',
    to: { name: 'readingDashboard' },
  },
  {
    title: '학생 독서 현황',
    description: '개별 학생 단위로 독서 현황을 파악합니다.',
    to: { name: 'studentReadingStatus' },
  },
]

const missionSidebar = [
  {
    title: '교사미션 생성',
    description: '빠르고 간편하게 교사미션을 설정합니다.',
    to: { name: 'missionCreate' },
  },
  {
    title: '교사미션 현황',
    description: '교사미션을 한 화면에서 운영/관리합니다.',
    to: { name: 'missionStatus' },
  },
]

const librarySidebar = [
  {
    title: '즐겨찾기 도서',
    description: '즐겨찾기로 등록한 도서 목록을 확인합니다.',
    to: { name: 'favoriteBooks' },
  },
  {
    title: '교과연계 도서',
    description: '교과 단원과 연계된 도서를 단원별로 보여줍니다.',
    to: { name: 'curriculumBooks' },
  },
  {
    title: '전체 도서',
    description: '보유 중인 모든 도서의 정보를 조회할 수 있습니다.',
    to: { name: 'allBooks' },
  },
]

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'readingDashboard' },
  },
  {
    name: 'app',
    path: '/',
    component: AppLayout,
    redirect: { name: 'readingDashboard' },
    children: [
      // 우리반 독서활동
      {
        name: 'readingDashboard',
        path: 'reading',
        component: () => import('@/views/reading-activity/ReadingDashboard.vue'),
        meta: { sidebarItems: readingActivitySidebar },
      },
      {
        name: 'studentReadingStatus',
        path: 'reading/status/:studentId',
        component: () => import('../views/reading-activity/StudentReadingStatus.vue'),
        meta: { sidebarItems: readingActivitySidebar },
      },
      // 교사미션
      {
        name: 'missionCreate',
        path: 'mission/create',
        component: () => import('../views/teacher-mission/CreateMission.vue'),
        meta: { sidebarItems: missionSidebar },
      },
      {
        name: 'missionStatus',
        path: 'mission/status',
        component: () => import('@/views/teacher-mission/MissionOverview.vue'),
        meta: { sidebarItems: missionSidebar },
      },
      // 소장도서 열람
      {
        name: 'favoriteBooks',
        path: 'library/favorites',
        component: () => import('@/views/library/FavoriteBooks.vue'),
        meta: { sidebarItems: librarySidebar },
      },
      {
        name: 'curriculumBooks',
        path: 'library/curriculum',
        component: () => import('@/views/library/CurriculumBooks.vue'),
        meta: { sidebarItems: librarySidebar },
      },
      {
        name: 'allBooks',
        path: 'library/all',
        component: () => import('@/views/library/AllBooks.vue'),
        meta: { sidebarItems: librarySidebar },
      },
    ],
  },
  // 수업보기
  {
    path: '/view',
    component: AuthLayout,
    children: [
      {
        name: 'classView',
        path: '',
        component: () => import('@/views/class-view/ClassView.vue'),
      },
    ],
  },
  //   {
  //     path: '/auth',
  //     component: AuthLayout,
  //     children: [
  //       {
  //         name: 'login',
  //         path: 'login',
  //         component: () => import('../views/auth/Login.vue'),
  //       },
  //       {
  //         name: 'signup',
  //         path: 'signup',
  //         component: () => import('../views/auth/Signup.vue'),
  //       },
  //       {
  //         name: 'recoverPassword',
  //         path: 'recover-password',
  //         component: () => import('../views/auth/RecoverPassword.vue'),
  //       },
  //       {
  //         name: 'recoverPasswordEmail',
  //         path: 'recover-password-email',
  //         component: () => import('../views/auth/CheckTheEmail.vue'),
  //       },
  //       {
  //         path: '',
  //         redirect: { name: 'login' },
  //       },
  //     ],
  //   },
  //   {
  //     name: '404',
  //     path: '/404',
  //     component: () => import('../views/404.vue'),
  //   },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    window.scrollTo(0, 0)
  },
  routes,
})

export default router
