import './App.css'
import Navbar from './Components/Navbar'
import Comment from './Components/Comment'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='wrapper'>
        <div className='feed'>
          <select className='dropdown' name="Sort By" id="SortBy" placeholder='Sort By'>
            <option value="recent">Most Recent</option>
            <option value="liked">Most Liked</option>
            <option value="disliked">Most Disliked</option>
            <option value="commented">Most Commented</option>
          </select>

          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />

        </div>
        <div className='trending'>
          Trending Topic
        </div>
      </div>
    </div>
  )
}

export default App
