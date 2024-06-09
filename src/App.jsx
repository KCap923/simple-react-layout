function Header() {
  return(<h1> Simple React Applications </h1>)
}

function Content() {
  return(<p> This is NOT my first React Application, still wish me luck! </p>)
}
  
function Footer() {
  return(<h1> Created by me, of course! </h1>)
}


function App() {
  

  return (
    <>
      <Header />
      <Content color="blue" text="This is NOT my first React Application!" />
      <Content color="red" text="Still wish me luck..." />
      <Content color="green" text="I got this!!!" />
      <Footer />
    </>
  );
}

export default App
