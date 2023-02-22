// import logo from './logo.svg';
import './App.css';
// var islogin = false;
// var data;
function App() {
  function handleClick(clg){
    if(clg==='piet'){
      document.getElementById("info").innerHTML = "Registrations open soon";
    // window.open("https://kunalsharma0553.pythonanywhere.com/login/google");
    }
    else{
      window.open("https://www.aarohanpce.com/");
      }
  }

  return (
    <div className="App">
      <div class="container">
  <div class="center">
    <p id="info">Click on respective collage</p>
  <div class="left-btn">
  <button class="glow-on-hover" type="button" onClick={() => handleClick('piet')}>PIET</button>
</div>
<div class="right-btn">
<button class="glow-on-hover" type="button" onClick={() => handleClick('ppp')}>PCE</button>
</div>
  </div>
</div>


      
    
    </div>
    
  );
}

export default App;
