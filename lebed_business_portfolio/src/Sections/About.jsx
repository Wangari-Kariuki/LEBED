import '../index.css'
import about_image from '../images/image2 (2).jpeg'
export default function AboutSection() {

    return (
      <div className='about'>
        <img src={about_image} alt = "image 1" class = "w-[200px] h-[340px] p-[10px]"/>
        <div className ='text-container'>
      <h1>About us</h1>;
      <p>
      We specialize in a range of services from skilled rehabilitation 
      services  to companionship and daily living assistance all designs to 
      enhance the quality of life for our clients.
      </p>
      </div>
    </div>
    )
   
    
   
  
  }


  
