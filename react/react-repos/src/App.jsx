import { 
  Suspense,
  lazy,
} from 'react'
import {
 // BrowserRouter as Router,
 Route,
 Routes,
} from'react-router-dom'
import './App.css'
import Loading from './components/Loading'

const RepoList =lazy(()=>import('./pages/RepoList'))
const RepoDetail =lazy(()=>import('./pages/RepoDetail'))
const Home =lazy(()=>import('./pages/Home'))
const NotFound =lazy(()=>import('./pages/NotFound'))

function App() {
  /* useEffect(() => {
    (async () => {
      const repos = await getRepos('yuan479');
      const repo = await getRepoDetail('yuan479', 'ai_lesson');
      console.log(repos, repo);
    })()
    // return () => {
    //   console.log('----')
    // }
  }, []) */
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/:id/repos" element={<RepoList/>}/>
          {/* <Route path="/user/:id/repos/:repoId" element={<RepoDetail/>}/>
          <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Suspense>
  )
}

export default App