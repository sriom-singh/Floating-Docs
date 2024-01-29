import NavBar from './NavBar'

const Background = () => {
  return (
    <div className='absolute w-full h-screen z-{2}'>
    <NavBar/>
    <h1 className="absolute font-medium text-zinc-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl leading-none tracking-tighter">Docs</h1>
    </div>
  )
}

export default Background