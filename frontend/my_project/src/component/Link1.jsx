import {Routes,Route,Link} from 'react-router-dom'

function Link1() {
    function Home(){
        return <h1>This is my Home page</h1>
    }
    function About(){
        return <h1>This is my About page</h1>
    }
  return (
    <div>

        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
        </nav>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
</Routes>

    </div>
  )
}

export default Link1