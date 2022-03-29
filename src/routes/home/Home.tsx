import { Link } from "react-router-dom";
import { Content } from "../../features/content/Content";

export function Home() {
    return <>
        <Content title=''>
            <div className="w-full h-full flex flex-col items-center justify-center md:h-[18rem] lg:h-[26rem] p-4 bg-cover" 
                style={{backgroundImage: `url('https://st2.depositphotos.com/4534985/6997/v/600/depositphotos_69976391-stock-video-scrolling-film-background.jpg')`}}>
                <div className="font-bold text-2xl md:text-6xl text-white mb-5 md:mb-12 text-center p-2 ">Welcome to RV Movies!</div>
                <Link to="movies" className="bg-green-500 text-white rounded p-4 hover:bg-green-300 shadow ">Let's Get Started</Link>
            </div>
        </Content>
    </>
}