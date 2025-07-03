
function App() {
  
  return (
    <>
    <Header></Header>
    </>
  )
}
const Header = () => {
  return(
    <>
    <header className='text-white'>
      <img src="./riko2.jpg" alt="la vida es deliciosa"
      className="h-[50vh] object-cover mx-auto 
      mask-radial-at-center mask-radial-from-45% mask-radial-to-73% "/>

      <div className="flex flex-col justify-center items-center">
        <span className="text-blue-400 flex items-center text-xl font-serif border rounded-full px-3 py-1 bg-black/65 -mt-4 z-10">
          @La_Rikura
          <svg className='text-blue-400 size-5 inline ml-1'>
            <use href='./sprite.svg#verified' />
          </svg>
        </span>
        <h1 className="text-3xl font-extrabold leading-tight ">El terror de las gordas</h1>
      </div>

      <section className="flex gap-2 justify-center ">
        {/* twitch */}
        <a className='bg-purple-100 flex size-16 p-2 justify-center items-center rounded-full hover:bg-purple-400 hover:scale-125 transition-transform'
          href="https://www.twitch.tv/" 
          target="_blank" 
          title="Mis directos" 
          aria-label="Twitch">
          <svg width='28' height='28'>
            <use href='/sprite.svg#twitch' />
          </svg>
        </a>    
        {/* github */} 
        <a className='bg-black flex size-16 p-2 justify-center items-center rounded-full hover:scale-125 transition-transform'
          href="https://github.com/" 
          target="_blank" 
          title="Mis Repositoros" 
          aria-label="Github">
          <svg width='28' height='28'>
            <use href='/sprite.svg#github' />
          </svg>
        </a>
        {/* youtube */} 
        <a className='bg-white flex size-16 p-2 justify-center items-center rounded-full hover:scale-125 transition-transform'
          href="https://youtube.com/" 
          target="_blank" 
          title="Mis canal de youtube" 
          aria-label="Youtube">
          <svg width='28' height='28'>
            <use href='/sprite.svg#youtube' />
          </svg>
        </a>
        {/* linkdin */} 
        <a className='bg-white flex size-16 p-2 justify-center items-center rounded-full hover:scale-125 transition-transform'
          href="https://linkedin.com/" 
          target="_blank" 
          title="Mis LinkedIn" 
          aria-label="LinkedIn">
          <svg width='28' height='28'>
            <use href='/sprite.svg#linkedin' />
          </svg>
        </a>
        {/* x */} 
        <a className='bg-black flex size-16 p-2 justify-center items-center rounded-full hover:scale-125 transition-transform'
          href="https://x.com/" 
          target="_blank" 
          title="Mi X" 
          aria-label="X">
          <svg width='28' height='28'>
            <use href='/sprite.svg#x' />
          </svg>
        </a>
        {/* instagram */} 
        <a className='bg-gradient-to-tr from-yellow-300 via-pink-600 to-purple-700 flex size-16 p-2 justify-center items-center rounded-full hover:scale-125 transition-transform'
          href="https://instagram.com/" 
          target="_blank" 
          title="Mi instagram" 
          aria-label="Instagram">
          <svg width='28' height='28'>
            <use href='/sprite.svg#instagram' />
          </svg>
        </a>
      </section>
    </header>
    </>
  )
}

export default App