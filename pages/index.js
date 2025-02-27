import Image from "next/image";
import Navbar from '../components/navbar'
import Main from '../components/main';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Footer from '../components/footer';

export default function Home() {
  return (
<div className="container mx-auto max-w-full">
<Navbar />
<div id="home">
<Main />
</div>
<div id="about">
<About />
</div>
<div id="portfolio">
<Portfolio />
</div>
<Footer />
    
    
</div>
  );
}
