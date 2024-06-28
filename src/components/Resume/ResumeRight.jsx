
import {Link} from "react-router-dom"
const ResumeRight = () => {
    return (
        <div className="w-[70%] bg-gray-500 px-3"> 
            <div className="grid grid-cols-2 justify-start gap-10 mt-5 py-3 px-3">
                <div className="border-b-2 border-pink-200 flex justify-between items-center gap-1">
                    <p>Location</p>
                    <p>Dhaka</p>
                </div>
                <div className="border-b-2 border-pink-200 flex justify-between items-center gap-1">
                    <p>LinkedIn</p>
                    <p>/username</p>
                </div>
                <div className="border-b-2 border-pink-200 flex justify-between items-center gap-1">
                    <p>Phone</p>
                    <p>/214661464</p>
                </div>
                <div className="border-b-2 border-pink-200 flex justify-between items-center gap-1">
                    <p>Github</p>
                    <p>/username</p>
                </div>
                <div className="border-b-2 border-pink-200 flex justify-between items-center gap-1">
                    <p>Email</p>
                    <p>/sojonchambugong@gmail.com</p>
                </div>
                <div className="border-b-2 border-pink-200 flex justify-between items-center gap-1">
                    <p>Facebook</p>
                    <p>/username</p>
                </div>
            </div>

            <div className="mt-5 py-5">
                <h1 className="text-3xl text-pink-200">Experience</h1>
                <div className="mt-5 border-2 border-pink-200 rounded-md px-2 py-1">
                    <h1>Job title</h1>
                    <h3>Company Name || dd-mm-yy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum deleniti mollitia a ad quibusdam laborum nemo cumque tenetur. Nesciunt!</p>
                </div>
                <div className="mt-5 border-2 border-pink-200 rounded-md px-2 py-1">
                    <h1>Job title</h1>
                    <h3>Company Name || dd-mm-yy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum deleniti mollitia a ad quibusdam laborum nemo cumque tenetur. Nesciunt!</p>
                </div>
            </div>
            <div className="mt-5 py-5">
                <h1 className="text-3xl text-pink-200">Education</h1>
                <div className="mt-5 border-2 border-pink-200 rounded-md px-2 py-1">
                    <h1>Job title</h1>
                    <h3>Company Name || dd-mm-yy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum deleniti mollitia a ad quibusdam laborum nemo cumque tenetur. Nesciunt!</p>
                </div>
                <div className="mt-5 border-2 border-pink-200 rounded-md px-2 py-1">
                    <h1>Job title</h1>
                    <h3>Company Name || dd-mm-yy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum deleniti mollitia a ad quibusdam laborum nemo cumque tenetur. Nesciunt!</p>
                </div>
            </div>
            <div className=" py-5">
                <h1 className="text-3xl text-pink-200 py-5">Projects</h1>
            <div className="grid grid-cols-4 gap-3">
                <Link to={`/project/1`}>
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/2204cc163105087.5b1d5726765d2.jpg" className="w-full" alt="" />
                </Link>
                <Link to={`/project/2`}>
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/2204cc163105087.5b1d5726765d2.jpg" className="w-full" alt="" />
                </Link>
                <Link to={`/project/3`}>
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/2204cc163105087.5b1d5726765d2.jpg" className="w-full" alt="" />
                </Link>
                <Link to={`/project/4`}>
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/2204cc163105087.5b1d5726765d2.jpg" className="w-full" alt="" />
                </Link>
                <Link to={`/project/5`}>
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/2204cc163105087.5b1d5726765d2.jpg" className="w-full" alt="" />
                </Link>
                <Link to={`/project/6`}>
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/2204cc163105087.5b1d5726765d2.jpg" className="w-full" alt="" />
                </Link>
                
            </div>
            </div>
        </div>
    );
};

export default ResumeRight;