import React from "react";

function Style(){
    
    return(
        <div>
            <div className="h-screen w-full bg-zinc-100">
            <nav className="flex h-20 w-full justify-between">
                <div className="px-5 py-5 ">
                    logo
                </div>
                <div className="gap-5 flex justify-center align-center py-5 text-lg">
                    <a href="#" className="hover:text-blue-700 hover:font-bold hover:text-xl text-gray-700 font-weight-bold ">Home</a>
                    <a href="#" className="hover:text-blue-700 hover:font-bold hover:text-xl text-gray-700">About</a>
                    <a href="#" className="hover:text-blue-700 hover:font-bold hover:text-xl text-gray-700">Teacher</a>
                    <a href="#" className="hover:text-blue-700 hover:font-bold hover:text-xl text-gray-700">Courses</a>
                    <a href="#" className="hover:text-blue-700 hover:font-bold hover:text-xl text-gray-700">Testimonials</a>
                    <a href="#" className="hover:text-blue-700 hover:font-bold hover:text-xl text-gray-700">Contact</a>
                </div>
                <div className="gap-5 flex justify-center align-center text-lg px-8">
                    <a href="#" className="flex justify-center align-center h-10 w-20 text-blue-700 border-2 border-blue-700 rounded-md my-5 py-1">Login</a>
                    <a href="#" className="flex justify-center align-center h-10 w-20 bg-blue-700 text-white rounded-md my-5 py-1">Signup</a>
                </div>
                 
            </nav>
            <div className="bg-gray-100 h-1.5 w-full"></div>
            <div className="flex justify-center align-center h-screen w-full">
                <div className="h-110 w-200 my-20 mx-left-10 px-25 py-10">
                    <h1 className="text-blue-700 font-bold text-sm">Blending the Best of Online & Offline Learning</h1>
                    <h1 className="text-6xl text-weight-900 font-bold mb-5">Transform Your Learning Journey</h1>
                    <h1 className="text-lg text-gray-500">
Experience the perfect blend of online flexibility and offline
interaction. Join (NAME) to unlock your potential with our
innovative hybrid learning approach completely free for-students</h1>
                    <div className="h-13 w-50 bg-blue-700 flex justify-center align-center py-3 my-5 text-white rounded-md">Start Learning Now</div>
                </div>
                <div className="h-100 w-180 my-20 mx-10 object-cover overflow-hidden">
                    <img src="https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                </div>
            </div>
            <div className="bg-zinc-100 h-screen w-full flex flex-col items-center py-20">
                <h1 className="text-4xl font-bold mb-4">Why Choose Us</h1>
                <p className="text-gray-600 mb-16">Experience the perfect blend of traditional and modern education methods.</p>
                
                <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
                    {/* Certified Teachers Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="text-blue-600 text-3xl mb-4">
                            <i className="fas fa-certificate"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Certified Teachers</h3>
                        <p className="text-gray-600">Learn from experienced and certified educators who are passionate about teaching.</p>
                    </div>

                    {/* Easy Hybrid Learning Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="text-blue-600 text-3xl mb-4">
                            <i className="fas fa-laptop"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Easy Hybrid Learning</h3>
                        <p className="text-gray-600">Flexible learning options that combine online and offline methods for optimal results.</p>
                    </div>

                    {/* Interactive Courses Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="text-blue-600 text-3xl mb-4">
                            <i className="fas fa-comments"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Interactive Courses</h3>
                        <p className="text-gray-600">Engage in dynamic learning experiences with interactive content and live sessions.</p>
                    </div>

                    {/* Career Support Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="text-blue-600 text-3xl mb-4">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Career Support</h3>
                        <p className="text-gray-600">Get guidance and support to achieve your career goals and professional aspirations.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Style;