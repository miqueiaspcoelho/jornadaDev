import './App.css';
import Video from "./pages/Video"
function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={10}
          messages={20}
          shares={30}
          name="micas"
          description="Gato goleiro"
          music="música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
          likes={100}
          messages={2000}
          shares={300}
          name="nerd"
          description="gato músico"
          music="clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />

      </div>
    </div>
  );
}

export default App;
