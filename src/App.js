import "./App.css";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return(
    <>
    {/* nav bar */}
      <Nav className="flex gap-5 justify-around text-white items-center py-[2em] "/>

      {/* Resume */}

      <div className="w-[90%] h-[1px] bg-[#121415] my-[3em] mx-auto"></div>
      <div></div>

      {/* Section blog */}
      <div className="w-[90%] h-[1px] bg-[#121415] my-[3em] mx-auto"></div>
      <div>
        <div className="flex flex-col justify-center items-center gap-5 my-[3em]">
          <h3 className="text-xl text-[#E2024E]">VISIT MY BLOG  AND KEEP  YOUR FEEDBACK</h3>
          <h1 className="text-6xl text-[#c4cfde] font-bold">My Blog</h1>
        </div>
        {/* Blog card */}
        <div className="flex justify-between">
          <div className="h-[500px] w-[400px] rounded-lg flex flex-col px-[2em] blog-card">
            <div className="h-[60%] flex items-center justify-center">
              <div className="h-[80%] w-full bg-white rounded-lg"></div>
            </div>
            <div className="h-[40%]">
              <div className="flex justify-between my-[1em]">
                <p className="text-[#E2024E]">Development</p>
                <div>
                  <p className="text-[#c4cfde]">4 min read</p>
                </div>
              </div>
              <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>

          <div className="h-[500px] w-[400px] rounded-lg flex flex-col px-[2em] blog-card">
            <div className="h-[60%] flex items-center justify-center">
              <div className="h-[80%] w-full bg-white rounded-lg"></div>
            </div>
            <div className="h-[40%]">
              <div className="flex justify-between my-[1em]">
                <p className="text-[#E2024E]">Quote</p>
                <div>
                  <p className="text-[#c4cfde]">4 min read</p>
                </div>
              </div>
              <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>

          <div className="h-[500px] w-[400px] rounded-lg flex flex-col px-[2em] blog-card">
            <div className="h-[60%] flex items-center justify-center">
              <div className="h-[80%] w-full bg-white rounded-lg"></div>
            </div>
            <div className="h-[40%]">
              <div className="flex justify-between my-[1em]">
                <p className="text-[#E2024E]">Development</p>
                <div>
                  <p className="text-[#c4cfde]">4 min read</p>
                </div>
              </div>
              <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="w-[90%] h-[1px] bg-[#121415] my-[3em] mx-auto"></div>
      <div>
        <div className="flex flex-col justify-center items-center my-[3em]">
          <h4 className="text-[#E2024E] text-xl my-[1em]">CONTACT</h4>
          <h1 className="text-6xl text-[#c4cfde] font-bold ">Contact With Me</h1>
        </div>

        <div className="flex justify-between">
          {/* Section left  */}
          <div className="px-[3em] w-[30%] h-[700px] rounded-lg flex flex-col justify-between py-[4em] div-left">
            <div className="w-[100%] h-[200px] mx-auto bg-white rounded-lg">
              <img src="./assets/profile.jpg"/>
            </div>
            <div className=" my-[1em]">
              <h1 className="text-xl text-white my-[1em]">Marly MOUTSINGA</h1>
              <h2 className="my-[1em]">Full Stack Developper</h2>
              <p>Lorem ipsum dolor sit amet consectetur<br/> sed do eiusmod tempor elit</p>
              <p>Phone: 213412434</p>
              <p>Email: manionaquelprobleme@gmail.com</p>
            </div>
            <div>
              <h1 className="text-[#878e99]">FIND WITH ME</h1>
              <div className="flex justify-between"></div>
            </div>
          </div>

          {/* Section right */}
          <div className="w-[60%] rounded-lg p-[2em] div-form">
            <form className="flex flex-col justify-between gap-10">
              <div className="flex justify-between">
                <div className="flex flex-col w-[45%]">
                  <label htmlFor="name" className="">YOUR NAME</label>
                  <Input type = "text" className ="bg-[#191B1E] w-full h-[3em] rounded-lg" required/>
                </div>
                <div className="flex flex-col w-[45%]">
                  <label htmlFor="number">PHONE NUMBER</label>
                  <Input type = "text" className ="bg-[#191B1E] w-full h-[3em] rounded-lg" required/>
                </div>
              </div>
              <div className="flex flex-col">
                <label tmlFor="email">EMAIL</label>
                <Input type="email" name = "email" className="bg-[#191B1E] w-full h-[3em] rounded-lg" required/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject">SUBJECT</label>
                <Input type="text" name = "subject" className="bg-[#191B1E] h-[4em] rounded-lg " required/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject">YOUR MESSAGE</label>
                <textarea name="message" className="h-[6em] bg-[#1F2226] rounded-lg"></textarea>
              </div>
              <button className="bg-[#1F2226] w-full text-white h-[4em] rounded-lg btn-form">SEND A MESSAGE</button>
            </form>
          </div>

        </div>
      </div>


      {/* Footer */}
      <div className="w-[90%] h-[1px] bg-[#121415] my-[3em] mx-auto"></div>
      <div className="flex justify-between">
        <div>
          <div>
            <img src="./assets/profile.jpg" alt="Marly"/>
          </div>
          <div>
            <Button/>
          </div>
        </div>

        <div>
          <h1 className="text-[#FA024E] text-2xl">Quick Link</h1>
          <ul className="text-white gap-10">
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#FA024E]  text-2xl">Ressources</h1>
          <ul className="text-white gap-10">
            <li><a href="#">Authentification</a></li>
            <li><a href="#">System Status</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Over Right</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#FA024E] text-2xl">Developers</h1>
          <ul className="gap-10 text-white">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Authentification</a></li>
            <li><a href="#">API Reference</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Open Source</a></li>
          </ul>
        </div>
        {/* Picture and button */}
        <div></div>
      </div>
    </>
  )
}

