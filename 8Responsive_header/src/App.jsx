import { useState } from 'react'
import "./mycss.css"

function App() {
  const [falsh, setFalsh] = useState(true)

  const change = () => {
    setFalsh(prev => !prev)
  }

  return (
    <>

      <div className='header'>

        <div className="hamberger" onClick={change}>
          <div className="option">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="logo">
            <h3>Logo</h3>
          </div>
        </div>


        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contect</li>
          <li>Technical</li>
        </ul>
      </div>

      <div className={falsh ? 'hideHeader' : "yellow"}>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contect</li>
          <li>technology</li>
        </ul>
      </div>


      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas maxime sint atque. Hic quidem impedit earum iste autem corporis inventore id. Nam aperiam illo deleniti deserunt unde nobis quidem? Soluta vero sint aliquid voluptates id dolorum placeat nihil dignissimos quaerat exercitationem nam distinctio ut cupiditate qui consequuntur expedita maiores voluptatibus, nesciunt accusantium possimus? Beatae quam aliquid distinctio fugiat minus libero dolorem nobis blanditiis similique saepe, nostrum nisi. Sunt similique exercitationem aspernatur, eaque libero ipsam beatae cupiditate optio enim autem eius? Veniam quod aspernatur recusandae facere repellat assumenda at deleniti suscipit tenetur reiciendis blanditiis magni odit inventore laborum voluptatibus doloremque, iusto voluptatem, ducimus molestiae explicabo asperiores totam animi sint fuga. Perspiciatis, molestiae! Illum architecto et doloribus repellat aliquid ex odit itaque, magnam officia quisquam assumenda cumque, beatae dolor consectetur totam mollitia dolores maxime aliquam aut, molestiae numquam nemo. Vel fuga reiciendis, ullam vero dignissimos at est natus debitis ab sunt amet blanditiis veniam eum aliquam quo beatae modi quas! Soluta dolorem adipisci, iusto ratione laborum expedita fuga maiores aliquid eius vero eaque natus. Ut dolorum earum distinctio itaque voluptatum autem enim harum commodi tempore, velit, aut voluptate rerum, aspernatur optio doloribus necessitatibus quaerat id impedit ipsum et. Harum magni qui officiis?</div>
    </>
  )
}

export default App
