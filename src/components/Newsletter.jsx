import banner from '../assets/removed.png'
import Banner from '../shared/Banner'
 
const Newsletter=()=> {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12" id='newsletter'>
        <Banner banner={banner} heading="Develop your skills without diligence" subheading="Lorem, ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit.  fuga? " btn1={"Get Started"} btn2={"Discount"}/>
    
    </div>
  )
}
export default Newsletter;
