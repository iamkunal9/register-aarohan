// import logo from './logo.svg';
import './App.css';
// var islogin = false;
// var data;
function App() {
  function handleClick(){
    window.open("https://kunalsharma0553.pythonanywhere.com/login/google");
  }

  return (
    <div className="App">
      <div class="container">
  <div class="center">
  <button type="button" class="login-with-google-btn" onClick={handleClick}>
  Sign in with Google
</button>
  </div>
</div>


      
    
    </div>
    
  );
}

export default App;
