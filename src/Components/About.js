 export default function About(props) {
     return (
       <>
         <div className="container about">
           <div className="accordion " id="accordionExample">
             <div className={`accordion-item border-${props.mode === "dark"? "light" : "dark"} bg-${props.mode}`}>
               <h2 className="accordion-header" id="headingOne">
                 <button
                   className={`accordion-button bg-${props.mode} text-${props.mode==="dark"? "light" : "dark"}`}
                   type="button"
                   data-bs-toggle="collapse"
                   data-bs-target="#collapseOne"
                   aria-expanded="true"
                   aria-controls="collapseOne"
                   
                 >
                   What is Text Utile
                 </button>
               </h2>
               <div
                 id="collapseOne"
                 className="accordion-collapse collapse show"
                 aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample"
               >
                 <div className="accordion-body">
                   <strong>Its an text analyzer</strong> The app helps its user to analyze the text and also help the users to transform the text they want for example, converting the text to upper case, to lower case, removing extra spaces, copy to clipboard adn many more to come.                 </div>
                </div>
             </div>
             <div className={`accordion-item bg-${props.mode} border-${props.mode === "dark" ? "light" : "dark"}`}>
               <h2 className="accordion-header" id="headingTwo">
                 <button
                   className={`accordion-button collapsed bg-${props.mode} text-${props.mode==="dark" ? "light" : "dark"}`}
                   type="button"
                   data-bs-toggle="collapse"
                   data-bs-target="#collapseTwo"
                   aria-expanded="false"
                   aria-controls="collapseTwo"
                 >
                   Is itr free to use..?
                 </button>
               </h2>
               <div
                 id="collapseTwo"
                 className="accordion-collapse collapse"
                 aria-labelledby="headingTwo"
                 data-bs-parent="#accordionExample"
               >
                 <div className="accordion-body">
                   <strong>Yes, its is and always will be</strong>
                 </div>
               </div>
             </div>
             <div className={`accordion-item bg-${props.mode} border-${props.mode === "dark"? "light" : "dark"}`}>
                    <h2 className="accordion-header" id="headingThree">
                        <button
                        className={`accordion-button collapsed bg-${props.mode} text-${props.mode==="dark" ? "light" : "dark"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        >
                        Basics Technologies used..?
                        </button>
                    </h2>
               <div
                 id="collapseThree"
                 className="accordion-collapse collapse"
                 aria-labelledby="headingThree"
                 data-bs-parent="#accordionExample"
               >
                 <div className="accordion-body">
                   <strong>HTM, CSS, JavaScript, REACTJS</strong> Its my first React based app in which I have use t Functions from react like UseState, Bootstrap for style and importing the components, Router dom and many JavaScript functions...! 
                 </div>
               </div>
             </div>
             <div className={`accordion-item bg-${props.mode} border-${props.mode === "dark"? "light" : "dark"}`}>
                    <h2 className="accordion-header" id="headingFour">
                        <button
                        className={`accordion-button collapsed bg-${props.mode} text-${props.mode==="dark" ? "light" : "dark"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                        >
                        Created by..?
                        </button>
                    </h2>
               <div
                 id="collapseFour"
                 className="accordion-collapse collapse"
                 aria-labelledby="headingFour"
                 data-bs-parent="#accordionExample"
               >
                 <div className="accordion-body">
                   <strong>Vikram Jagtap</strong> using the Technologies known and under the guidance of code with harry, SKILL SAFARI, and UDEMY!
                 </div>
               </div>
             </div>
           </div>
         </div>
       </>
     );
 }