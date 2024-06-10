import Logo from "./assets/CodeLab.svg"

function App() {
  return (
    <>
    <header className="bg-dark-20 border-2 border-dark-40 rounded-md">
      <div className="py-24 px-8 m-auto max-w-7xl flex flex-col justify-center items-center gap-16">
        <nav>
          <a href="/" className="text-dark-60">
          <img src={Logo} alt="codelab logo" title="CodeLab"/>
          </a>
        </nav>
        <div className="w-full">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input id="search" type="text" placeholder="Search article" className="w-full p-4 rounded-md font-medium text-2xl text-dark-50 bg-dark-30 border-2 border-dark-40"/>
        </div>
      </div>
    </header>
      <main className="m-auto py-24 px-8 max-w-7xl grid grid-cols-12 gap-8" role="main">  
        <article className="col-span-12 p-10 border-2 border-dark-40 rounded-md bg-dark-20 cursor-pointer hover:border-brand-color">
          <header>
            <time className="text-brand-color font-medium text-lg" dateTime="2017-10-04">4 October 2017</time>
            <h2 className="text-dark-60 font-medium text-2xl mt-4">What is Lorem Ipsum?</h2>
          </header>
          <p className="text-dark-50 font-medium text-xl mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </article>

        <article className="col-span-12 p-10 border-2 border-dark-40 rounded-md bg-dark-20 cursor-pointer hover:border-brand-color">
          <header>
            <time className="text-brand-color font-medium text-lg" dateTime="2017-10-04">4 October 2017</time>
            <h2 className="text-dark-60 font-medium text-2xl mt-4">What is Lorem Ipsum?</h2>
          </header>
          <p className="text-dark-50 font-medium text-xl mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </article>

        <article className="col-span-12 p-10 border-2 border-dark-40 rounded-md bg-dark-20 cursor-pointer hover:border-brand-color">
          <header>
            <time className="text-brand-color font-medium text-lg" dateTime="2017-10-04">4 October 2017</time>
            <h2 className="text-dark-60 font-medium text-2xl mt-4">What is Lorem Ipsum?</h2>
          </header>
          <p className="text-dark-50 font-medium text-xl mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </article>
      </main>
    </>
  )
}

export default App
