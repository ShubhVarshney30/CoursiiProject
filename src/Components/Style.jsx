import React from "react";

function Style(){
     const teachers=[
        {photo:"https://plus.unsplash.com/premium_photo-1742318713509-d325930b6749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",name:"Ssarah Johnson",designation:"Mathematics Expert",specs:"15+ years of teaching experience in advanced mathematics and statistics"},
        {photo:"https://plus.unsplash.com/premium_photo-1742318713509-d325930b6749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",name:"David Chen",designation:"Computer Sceince professor",specs:"Phd in Computer Science with expertise in AI and machine learning"},
        {photo:"https://plus.unsplash.com/premium_photo-1742318713509-d325930b6749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",name:"Emily White",designation:"English Language Teacher",specs:"MA in English Literature with a focus on literature and creative writing"},
     ]
     const organizations=[
        {photo:"https://plus.unsplash.com/premium_photo-1742318713509-d325930b6749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",name:"Google"},
        {photo:"https://plus.unsplash.com/premium_photo-1742318713509-d325930b6749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",name:"Microsoft"},
        {photo:"https://plus.unsplash.com/premium_photo-1742318713509-d325930b6749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",name:"Apple"},
        {photo:"https://plus.unsplash.com/premium_photo-1742318713509-d325930b6749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",name:"Amazon"},
        {photo:"https://plus.unsplash.com/premium_photo-1742318713509-d325930b6749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",name:"Amazon"},    
        {photo:"https://plus.unsplash.com/premium_photo-1742318713509-d325930b6749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",name:"Amazon"},
     ]
     const hybrid=[
        {icon:"",heading:"Attend Physical Classes",description:"Learn directly from experts through scheduled offline sessions"},
        {icon:"",heading:"Explore PDFs and Notes",description:"Accesss essential notes and PDFs to enhance your learning"},
        {icon:"",heading:"Take Quizzes",description:"Test your knowledge with interactive quizzes after each module"},
        {icon:"",heading:"Get Instant Results",description:"Get quick results and feedback to track your progress"},
     ]
     const testimonials = [
        {
            name: "James Wilson",
            role: "Computer Science Student",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            feedback: "The hybrid learning approach at (NAME) has been transformative. I can balance my work and studies effectively while getting the best of both online and offline education."
        },
        {
            name: "Lisa Chen",
            role: "Data Science Student",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            feedback: "The interactive courses and supportive teachers have made learning complex concepts much easier. The platform's flexibility allows me to learn at my own pace."
        },
        {
            name: "Michael Brown",
            role: "Business Analytics Student",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            feedback: "As a working professional, (NAME) hybrid model has been perfect for my needs. The quality of education and career support is exceptional."
        }
    ]

    return(
        <div>
            {/* first page */}
            <div className="h-screen w-full bg-white">
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
                    <img className="rounded-md" src="" alt="" />
                </div>
                </div>
            </div>
            {/* trusted by leading organizations */}
            <div className="bg-white h-100 w-full flex min-sm:flex-col items-center py-20">
                <h1 className="text-4xl font-bold mb-4">Trusted By Leading Organizations</h1>
                <p className="text-gray-600 text-lg mb-16">Join thousands of satisfied students and organizations</p>
                <div className="flex gap-15 justify-center align-center">
                    {
                        organizations.map((organization,index)=>(
                            <img src={organization.photo} alt={organization.name} className="w-30 h-30 rounded-full transition-transform duration-300 hover:transform hover:scale-105" />
                        ))
                    }

                </div>
             </div>
            {/* why choose us */}
            <div className="bg-zinc-100 h-screen w-full flex flex-col items-center py-20">
                <h1 className="text-5xl font-bold mb-4">Why Choose Us</h1>
                <p className="text-gray-600 text-xl mb-16">Experience the perfect blend of traditional and modern education methods.</p>
                
                <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
                    {/* Certified Teachers Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
                        <div className="text-blue-600 text-3xl mb-4">
                            <i className="fas fa-certificate"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Certified Teachers</h3>
                        <p className="text-gray-600">Learn from experienced and certified educators who are passionate about teaching.</p>
                    </div>

                    {/* Easy Hybrid Learning Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
                        <div className="text-blue-600 text-3xl mb-4">
                            <i className="fas fa-laptop"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Easy Hybrid Learning</h3>
                        <p className="text-gray-600">Flexible learning options that combine online and offline methods for optimal results.</p>
                    </div>

                    {/* Interactive Courses Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
                        <div className="text-blue-600 text-3xl mb-4">
                            <i className="fas fa-comments"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Interactive Courses</h3>
                        <p className="text-gray-600">Engage in dynamic learning experiences with interactive content and live sessions.</p>
                    </div>

                    {/* Career Support Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
                        <div className="text-blue-600 text-3xl mb-4">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Career Support</h3>
                        <p className="text-gray-600">Get guidance and support to achieve your career goals and professional aspirations.</p>
                    </div>
                </div>
            </div>
            {/* meet our teachers */}
            <div className="bg-white h-screen w-full flex min-sm:flex-col items-center py-20">
                <h1 className="text-5xl font-bold mb-4">Meet Our Teachers</h1>
                <p className="text-gray-500 text-xl mb-16">Learn from the best minds in the industry</p>
                <div className="flex items-center mx-30 gap-10">
                    {
                      teachers.map((teacher,index)=>(
                        <div key={index} className="bg-white text-center rounded-lg shadow-md align-center transition-transform duration-300 hover:transform hover:scale-105">
                            <img src={teacher.photo} alt={teacher.name} className="w-40 h-40 justify-self-center align-center rounded-full" />
                            <h3 className="text-xl font-semibold justify-self-center align-center ">{teacher.name}</h3>
                            <p className="text-blue-600 text-lg justify-self-center align-center">{teacher.designation}</p>
                            <p className="text-gray-600 mb-16 text-lg justify-self-center align-center">{teacher.specs}</p>
                        </div>
                      ))
                    }
                </div>
            </div>
            {/* how hybrid leanig works */}
            <div className="bg-zinc-100 h-screen w-full flex min-sm:flex-col items-center py-20">
                <h1 className="text-5xl font-bold mb-4">How Hybrid Learning Works</h1>
                <p className="text-gray-500 text-xl mb-16">Three Simple steps to start your learning journey</p>
                <div className="flex  justify-center align-center px-30 gap-10">
                    {
                        hybrid.map((elem,index)=>(
                            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
                                <i className="fas fa-check-circle text-blue-600 text-3xl mb-4"></i>
                                <h3 className="text-xl font-semibold mb-3">{elem.heading}</h3>
                                <p className="text-gray-600">{elem.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* what our students say */}
            <div className="bg-white min-h-screen w-full py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-4">What Our Students Say</h1>
                        <p className="text-gray-500 text-xl">Real feedback from our amazing students</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
                                <div className="flex items-center mb-6">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                                        <p className="text-blue-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed">"{testimonial.feedback}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="bg-gray-200 text-gray-600  py-20 px-4"></div>
        </div>
    )
}

export default Style;