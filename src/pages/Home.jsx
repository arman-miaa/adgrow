
import AdgrowOffer from "../components/home/AdgrowOffer"
import Banner from "../components/home/Banner"
import PlatformFeature from "../components/home/PlatformFeature"
import PowerfullFeature from "../components/home/PowerfullFeature"
import Pricing from "../components/home/Pricing"
import Video from "../components/home/Video"


function Home() {
  return (
    <div className="">
      <Banner />
      <Video/>
      <PlatformFeature />
      <PowerfullFeature />
      <Pricing />
      <AdgrowOffer />
     
    </div>
  )
}

export default Home