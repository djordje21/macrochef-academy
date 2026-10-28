import { useEffect } from 'react'
import { useRoute } from './router'
import { findLesson, gradeOfModule } from '../content'
import { BottomNav } from './BottomNav'
import { Home } from '../screens/Home'
import { ModuleScreen } from '../screens/Module'
import { LessonScreen } from '../screens/Lesson'
import { StepScreen } from '../screens/Step'
import { LessonEnd } from '../screens/LessonEnd'
import { Reference } from '../screens/Reference'
import { Landing } from '../screens/Landing'
import { Exam } from '../screens/Exam'
import { GradeView } from '../screens/GradeView'
import { Theory } from '../screens/Theory'
import { Practice } from '../screens/Practice'
import { isWelcomed } from './progress'
import { Menu } from './Menu'
import { AppBar } from './AppBar'
import { TimerPill } from '../components/TimerPill'
import { Oops } from '../components/Oops'
import { SharePrompt } from '../components/SharePrompt'

function Screen() {
  const { path, params } = useRoute()
  const [, section, id, sub] = path.split('/')

  if (section === 'about' || (path === '/' && !isWelcomed())) return <Landing />
  if (section === 'exam') return <Exam />
  if (section === 'grade' && id) return <GradeView key={id} n={Number(id)} />
  if (section === 'module' && id) return <ModuleScreen id={id} />
  if (section === 'lesson' && id && sub === 'step') return <StepScreen id={id} n={Number(params.get('n') ?? 1)} />
  if (section === 'lesson' && id && sub === 'end') return <LessonEnd id={id} />
  if (section === 'lesson' && id && sub === 'theory') return <Theory id={id} />
  if (section === 'lesson' && id && sub === 'practice') return <Practice id={id} />
  if (section === 'lesson' && id) return <LessonScreen id={id} />
  if (section && section !== 'home' && section !== 'reference') return <Oops kind="missing" />

  return (
    <>
      {section === 'reference' ? <Reference /> : <Home />}
      <BottomNav />
    </>
  )
}

/** The grade whose room the current screen sits in; everything outside a grade is grade 1's. */
function gradeOf(path: string): number {
  const [, section, id] = path.split('/')
  if (section === 'grade') return Number(id) || 1
  if (section === 'module') return gradeOfModule(id)?.n ?? 1
  if (section === 'lesson') return gradeOfModule(findLesson(id)?.module.id ?? '')?.n ?? 1
  return 1
}

export function App() {
  const { path } = useRoute()
  const grade = gradeOf(path)
  useEffect(() => {
    document.documentElement.dataset.grade = String(grade)
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg)
  }, [grade])
  // The step screen stays a focused, full-screen view next to the stove.
  const focused = path.endsWith('/step')
  return (
    <>
      <div className={focused ? 'focused' : 'with-bar'}>
        <Screen />
      </div>
      {!focused && <AppBar />}
      {!focused && <Menu />}
      <TimerPill />
      {!focused && <SharePrompt />}
    </>
  )
}
