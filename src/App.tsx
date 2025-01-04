import './App.css'
import MyComponents from "./Components/MyComponents.tsx";


function App() {


  return (
    <>
     Hello Okten
        {
            MyComponents({text:'hello2'})
        }
        <MyComponents text={'hello1'}/>

          </>
  );
}

export default App
