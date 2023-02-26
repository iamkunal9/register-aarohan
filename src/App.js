// import logo from './logo.svg';
import './App.css';
// var islogin = false;
// var data;
function App() {
  function handleClick(clg) {
    if (clg === 'piet') {
      window.open("http://kunalsharma0553.pythonanywhere.com/login/google");

    }
    else if (clg==='sharktank'){
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSd7UH2fjYITgQdPEqIqCrWfXh5EyTVkFIOhCdluk4-6ndP_Tg/viewform?usp=sf_link");
    }
    else if (clg==='fashion'){
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSd0mWAlRcz80x9WjmOdqBKmujmL4C8ZoWu6uuc09S4AT12HEw/viewform?usp=sf_link");
    }
    else {
      window.open("https://www.aarohanpce.com/");
    }
  }

  function show() {
    document.getElementById("box1").style.display = 'block';
    document.getElementById("box").style.display = 'none';
  }
  function show1() {
    document.getElementById("box1").style.display = 'none';
    document.getElementById("box2").style.display = 'block';
  }
  function goback(id){
    if(id===0){
    document.getElementById("box1").style.display = 'none';
    document.getElementById("box").style.display = 'block';

    }
    else{
      document.getElementById("box1").style.display = 'block';
    document.getElementById("box2").style.display = 'none';
    }
  }

  return (
    <div className="App">
      <div class="container">
        <div class="center" id='box'>
          <p id="info">Click on respective college</p>
          <div class="left-btn">
            <button class="glow-on-hover" type="button" onClick={() => show()}>PIET</button>
          </div>
          <div class="right-btn">
            <button class="glow-on-hover" type="button" onClick={() => handleClick('ppp')}>PCE</button>
          </div>
        </div>
        <div class="center" id="box1">
          {/* <p id="info">Click on respective college</p> */}
          <div class="left-btn">
            <button class="glow-on-hover" type="button" onClick={() => show1()}>Outside</button>
          </div>
          <div class="right-btn">
            <button class="glow-on-hover" type="button" onClick={() => handleClick('piet')}>Poornimaite</button>
          </div>
          <p onClick={()=>goback(0)}>Back</p>
        </div>
        <div class="center" id="box2">
          {/* <p id="info">Click on respective college</p> */}
          <div class="left-btn">
            <button class="glow-on-hover" type="button" onClick={() => handleClick('sharktank')}>Shark Tank</button>
          </div>
          <div class="right-btn">
            <button class="glow-on-hover" type="button" onClick={() => handleClick('fashion')}>Fashion Show</button>
          </div>
          <p onClick={()=>goback(1)}>Back</p>
        </div>
      </div>




    </div>

  );
}

export default App;
