import { Content } from "../../features/content/Content"

export const About = () => {

    return <>
        <Content title='About'>
            <div className="w-full p-4">
                <div className="w-full border p-3 mx-auto bg-white rounded-2xl flex flex-col items-center justify-center">
                    <img
                        className="h-48 w-48 rounded-full border shadow p-2 flex-shrink-0 m-2"
                        src={`https://lh3.googleusercontent.com/a-/AOh14GimaaQfo-JH7WMtQ1W_3GlDyjXjBj9u-kDzMVLO=s288-p-rw-no`}
                        alt={'Author Image'}
                    />
                    <div className="font-bold text-5xl my-2">Rian Vincent Meode</div>
                    <div className="font-bold text-3xl italic my-2">Sofware Engineer</div>
                    <div className="text-2xl italic my-2">2015 - Present</div>
                    <div className="flex p-4">
                        {
                            [
                                'ReactJs', 
                                'Typescript', 
                                'Javascript', 
                                'TailwindCss', 
                                'Bootstrap', 
                                'Java', 
                                'Springboot', 
                                'Mysql', 
                                'Git'
                            ].map((skill,index) => 
                                <span key={skill+index} className="inline-block rounded-full text-white bg-blue-500 px-3 py-1 text-xl font-bold mr-3 capitalize">{skill}</span>
                            )
                        }
                        
                    </div>
                
                </div>
            </div>
        </Content>
    </>
}