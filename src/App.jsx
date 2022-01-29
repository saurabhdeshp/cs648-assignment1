const App = () =>(
    <div className="rootCont">
        <div className="mainCont">
            <div className="textCont">
                <h3>Saurabh Deshpande</h3>
            </div>
            <div className="textCont">
                <img className="image" src="saurabh_seattle.jpeg" width="200" height="200"></img>
            </div>
            <div className="textCont">
                Hello, I am a CS grad student at San Diego State University. 
                My goal is to become a better Software Engineer and a better problem solver. 
                I love reading books, playing basketball, swimming. My favorite place is Pune which is my hometown in India.
                Looking forward to CS648 to gain more knowledge in MERN stack.
            </div>
            <div className="githubButton">
            <a href="https://github.com/saurabhdeshp">
                <button className="btn">go to my Github</button>
            </a>
            </div>
        </div>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))