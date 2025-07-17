import { 
  useState,
  useEffect,
  Suspense,
  lazy,
} from 'react'
import {
 // BrowserRouter as Router,
 Route,
 Routes,
 Navigate,
} from'react-router-dom'
import './App.css'
import Loading from './components/Loading'

const RepoList =lazy(()=>import('./pages/RepoList'))

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
          <Route path="/user/:id/repos" element={<RepoList/>}/>
          <Route path="*" element={<Navigate to="user/yuan479/repos"/>}/>
        

      </Routes>
    </Suspense>
  )
}

export default App