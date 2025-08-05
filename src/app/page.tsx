import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { Problem } from '@/components/sections/problem'
import { Solution } from '@/components/sections/solution'
import { Diference } from '@/components/sections/diference'
import { SocialTest } from '@/components/sections/social-test'
import { OpinionLeadership } from '@/components/sections/opinion-leadership'
import { CallToAction } from '@/components/sections/call-to-action'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Problem />
      <Solution />
      <Diference />
      <SocialTest />
      <OpinionLeadership />
      <CallToAction />
    </MainLayout>
  )
}
