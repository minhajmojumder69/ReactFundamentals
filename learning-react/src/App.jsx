import './App.css'
// import ControlledDemo from './components/ControlledDemo'
// import SignUp from './components/SignUp'
import Layout from './components/Layout';
import AuthProvider from './context/AuthProvider';
// import UncontrolledDemo from './components/UncontrolledDemo'

function App() {

  return (
    <>
      {/* <UncontrolledDemo />
      <ControlledDemo /> */}
      {/* <SignUp /> */}
      <AuthProvider>
        <Layout/>
      </AuthProvider>
    </>
  )
}

export default App
