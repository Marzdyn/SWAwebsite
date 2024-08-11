import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';


export default function HomePage() {

    const [formData, setFormData] = useState({
        sender: '',
        senderEmail: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_if3k5gc', 'template_nun8n77', e.target, {
                publicKey: 'OWTlJ-vz4J6vhtwLs',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            )

        setFormData({
            sender: '',
            senderEmail: '',
            message: ''
        });
    }

    const slideshowImages = [
        "/IMG_0799.jpg",
        "/IMG_4202.jpg",
        "/IMG_4260.jpg",
        "/IMG_4912.jpg",
        "/IMG_6075.jpg",
        "/IMG_6569.JPG",
        "/IMG_6686.JPG",
        "/IMG_7230.jpg",
        "/IMG_7874.jpg",
        "/IMG_7988.jpg",
        "/IMG_8514.jpg",
        "/IMG_8516.jpg"
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        slideshowImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % slideshowImages.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [slideshowImages]);

    return (
        <div className="homepageContainer">
            <div className="homepageSummary">
                <p>
                    I am a full stack web developer at Spyder Web Applications, specializing in creating
                    business websites that are interactive, aesthetically pleasing, and optimized to generate
                    revenue for companies. With proficiency in various programming languages, libraries, and frameworks,
                    I am capable of independently building and deploying fully functional websites and
                    applications customized to meet business needs.
                </p>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNDcvFZLFdf8sGlSXq1jTbpjZRQQnlnV-2g&s" />

            <div className="mobileSizedContainerDiv">
                <div className="bulletpointsContainer">
                    <h2>Need any of these?</h2>
                    <ul>
                        <li>Small to midsize applications</li>
                        <li>Websites for a multitude of businesses</li>
                        <li>Landing page</li>
                        <li>Portfolio sites</li>
                        <li>Journalistic sites</li>
                        <li>Cooking/Directional sites</li>
                        <li>Data gathering/Form sites</li>
                        <li>Scalable database and middleware</li>
                    </ul>
                </div>

                <div className="formContainer">
                    <p>Any questions or project ideas?</p>
                    <form onSubmit={handleSubmit}>
                        <div className="nameDivContainer">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="sender"
                                value={formData.sender}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="emailDivContainer">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="senderEmail"
                                value={formData.senderEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="messageDivContainer">
                            <label className="messageLabel">Message:</label>
                            <textarea
                                className="formTextarea"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        <div className="tabletSizedDivContainer">
            <div className="aboutmeContainer">
                <h3>About Me</h3>
                <p>I was born and raised in Bradenton, FL, where I enjoyed playing baseball and spending time with family and friends. Growing up in Florida was unique; I lived in a place where many people saved money to vacation.<br></br> I was just 15 minutes from the beach, except during spring break or summer when traffic was 20 times heavier than normal.
                    <br></br><br></br>
                    I joined the Army during my junior year of high school, influenced by the JROTC program and its instructors. About a month after graduating, <br></br>I left for basic training to become an Infantryman. After about a year of rigorous training and selections, I was assigned to the 75th Ranger Regiment, a specialized direct action raid force targeting high-value assets and key terrain seizures in foreign countries.
                    <br></br><br></br>
                    While in the Army, I rekindled a relationship with my now-wife, Rachel. We married and started a family with our two beautiful daughters, Ellie and Kendall. After 4.5 years of service, I was honorably discharged and returned to Florida for a while. I cycled through various jobs, searching for the pride and passion I felt in the Army. It wasn't until Rachel and I decided to move to South Carolina for a fresh start that my father mentioned my grandfather, Len, who had been a firefighter-paramedic in Ohio long before I was born.
                    <br></br><br></br>
                    Intrigued, I researched fire departments in Lexington, South Carolina, and discovered their county fire department. A few short months later, <br></br>I found myself in recruit school. The brotherhood, sense of purpose, impact on others, and the attention to detail in a potentially deadly job are just a few of the reasons I LOVE this career. With that being said, the firehouse has blessed me with a schedule that allows for significant time off, thanks to the full days spent on shift. This flexibility enabled me to utilize my G.I. Bill to pursue a second career.
                    <br></br><br></br>
                    I chose to obtain a full-stack website and web application development certification. This training means I can develop fully customizable and functional websites and applications from start to finish. I decided to channel this newfound passion into a business, I run myself, called SWA!
                    <br></br><br></br>
                    Now that you know a bit about my family and I, submit an inquiry through the form, and I will reply within 24 hours. Let's create something cool together!
                </p>
            </div>
            </div>
            <div className="homepageSlideshow" style={{ backgroundImage: `url(${slideshowImages[currentImageIndex]})`, backgroundSize: "contain" }}>


            </div>
        </div>
    )
}