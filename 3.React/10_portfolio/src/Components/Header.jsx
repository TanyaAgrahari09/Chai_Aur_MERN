
import Photo from '../assets/ProfilePhoto.jpg'

const Header = () => {
  return <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
    
    <div>
        <div className="font-bold text-3xl">Tanya Agrahari</div>
        <div className="font-bold ">Full Stack Developer</div>
        
    </div> 

    <img  className= "rounded-full w-24" src={Photo}alt=""></img>

  </header>
}

export default Header;