import { useRoute } from './router'
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
import { TimerPill } from '../components/TimerPill'

function Screen() {
  const { path, params } = useRoute()
  const [, section, id, sub] = path.split('/')

  if (section === 'about' || (path === '/' && !isWelcomed())) return <Landing />
  if (section === 'exam') return <Exam />
  if (section === 'grade' && id) return <GradeView n={Number(id)} />
  if (section === 'module' && id) return <ModuleScreen id={id} />
  if (section === 'lesson' && id && sub === 'step') return <StepScreen id={id} n={Number(params.get('n') ?? 1)} />
  if (section === 'lesson' && id && sub === 'end') return <LessonEnd id={id} />
  if (section === 'lesson' && id && sub === 'theory') return <Theory id={id} />
  if (section === 'lesson' && id && sub === 'practice') return <Practice id={id} />
  if (section === 'lesson' && id) return <LessonScreen id={id} />

  return (
    <>
      {section === 'reference' ? <Reference /> : <Home />}
      <BottomNav />
    </>
  )
}

export function App() {
  const { path } = useRoute()
  // The step screen stays a focused, full-screen view next to the stove.
  const focused = path.endsWith('/step')
  return (
    <>
      <Screen />
      {!focused && <Menu />}
      <TimerPill />
    </>
  )
}
