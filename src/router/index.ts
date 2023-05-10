import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SalesAccelerationView from '../views/SalesAccelerationView.vue'
import MarketingView from '../views/MarketingView.vue'
import ChannelView from '../views/ChannelView.vue'
import TrainingView from '../views/TrainingView.vue'
import CompanyView from '../views/CompanyView.vue'
import BlogView from '../views/BlogView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import BlogArticle from '../views/BlogArticle.vue'
import TermsOfUseView from '../views/TermsOfUseView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import CookiesView from '../views/CookiesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sales-acceleration',
      name: 'sales_acceleration',
      component: SalesAccelerationView
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: MarketingView
    },
    {
      path: '/channel',
      name: 'channel',
      component: ChannelView
    },
    {
      path: '/training',
      name: 'training',
      component: TrainingView
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/contact-us',
      name: 'contact_us',
      component: ContactUsView
    },
    {
      path: '/blog/:slug',
      name: 'blog_arctile',
      component: BlogArticle
    },
    {
      path: '/terms-of-use',
      name: 'terms_of_use',
      component: TermsOfUseView
    },
    {
      path: '/privacy-policy',
      name: 'privacy_policy',
      component: PrivacyPolicyView
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: CookiesView
    }
  ]
})

router.beforeEach((to, from) => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 500)
})

export default router
