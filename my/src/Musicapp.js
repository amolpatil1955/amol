import React,{useState} from "react";


function Musicapp() {

  const [track, settrack] = useState([])
  const [key, setkey] = useState()
  let  [tol, settol] = useState()


  const gettrack = async ()=> {
    let api= await fetch(`https://v1.nocodeapi.com/patil1833/spotify/YfrQoRRAlUAqBApK/search?q=${key}&type=track`)
    let res=await api.json();
    console.log(res.tracks.items);
    settrack(res.tracks.items)

    if(key ===""){
      alert("please enter song name")
    }
  }
 




  return (
    <div className="App">
      {/* navbar */}
      <nav>
        {/* logo section */}
        <div className="logo">
          <i className="fa-brands fa-spotify"></i>
          <h1>Spotify</h1>
        </div>
        {/* navbar navlinks section */}
        <div className="link">
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">trending</a></li>
            <li><a href="#">producast</a></li>
          </ul>
        </div>
            {/* search section */}
        <div className="search">
           <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="enter song name" value={key} onChange={((e)=>{setkey(e.target.value)})}></input>
            <button onClick={gettrack}>search</button>
          </div>
      </nav>
      <div className="con">
       
      {
        track.map((cur,i)=>{
          
          return(
            <>
          
            <h1>{i} results is founds</h1>
           <div className="big">
            <div className="samll">
            <img src={cur.album.images[0].url}  ></img>
            <h1>{cur.name}</h1>
            <p><span>SINGER : </span>{cur.album.artists[0].name}</p>
            <p><span>REALESE DATE :</span> {cur.album.release_date}</p>
            <audio src={cur.preview_url} controls></audio>
            </div>
           </div>
           </>
          );
        })
      }
      </div>

    </div>
  );
}

export default Musicapp;
