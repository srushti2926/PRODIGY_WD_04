import React,{useState} from "react";
import "./css/home.css";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { motion } from "framer-motion";

import pfpPics from '../images/pfp.jpg';

import {Link} from 'react-router-dom';

import Popup from 'reactjs-popup';

const Home = () => {
    const particlesInit = useCallback(async engine => {      
        await loadFull(engine);
      }, []);
    
    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
  return (
    <>
      <div className="mainHome">
      <Particles
  className="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{ "fullScreen": false, "background":{ "image":" linear-gradient(19deg, #a89332 0%, #ff215c 100%)" }, "particles":{ "number":{ "value":10, "density":{ "enable":true, "value_area":600 } }, "color":{ "value":"#ffffff" }, "shape": { "type": "square", "stroke":{ "width":0, "color":"#000000" }, "polygon":{ "nb_sides":5 } }, "opacity":{ "value":0.25, "random":true, "anim":{ "enable":false, "speed":1, "opacity_min":0.1, "sync":false } }, "size":{ "value":29, "random":true, "anim":{ "enable":false, "speed":2, "size_min":0.1, "sync":false } }, "line_linked":{ "enable":false, "distance":300, "color":"#ffffff", "opacity":0, "width":0 }, "move":{ "enable":true, "speed":0.5, "direction":"top", "straight":true, "out_mode":"out", "bounce":false, "attract":{ "enable":false, "rotateX":600, "rotateY":1200 } } }, "interactivity":{ "detect_on":"canvas", "events":{ "onhover":{ "enable":false, "mode":"repulse" }, "onclick":{ "enable":false, "mode":"push" }, "resize":true }, "modes":{ "grab":{ "distance":800, "line_linked":{ "opacity":1 } }, "bubble":{ "distance":790, "size":79, "duration":2, "opacity":0.8, "speed":3 }, "repulse":{ "distance":400, "duration":0.4 }, "push":{ "particles_nb":4 }, "remove":{ "particles_nb":2 } } }, "retina_detect":true}}
          />
          {/* <div className="snowy"></div> */}
          
    <div class="starry"></div>
        <motion.div
        className="imgMain"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            className="homeImg"
            alt="pfp"
            height="340rem"
            width="350rem"
            src={pfpPics}
          />
        </motion.div>
        <div className="rightHome">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 1 }}
            className="rightContent"
          >
            <h1 className="hello">Hyello</h1>
            <h2 className="abtMe">I Am Srusthi Jagtap</h2>
            <p className="abtPara">
             I'm currently pursuing Engineering in Computer Science.
             You can find me very good at learning things quicker.
             I have work on various projects and had been a good team worker. 
            </p>
          </motion.div>
          <motion.div initial={{y:50,opacity:0}}
            animate={{y:0,opacity:1}}
              transition={{delay:1,duration:1}} className="opt-Main">
                <Link to="/resume" style={{all:'unset'}}>
            <motion.div
              whileHover={{ scale: 1.1, borderRadius: "10%" }}
              whileTap={{ scale: 0.8 }}
              className="circle-1"
            ><h3>Resume</h3></motion.div>
            </Link>
            <div>
            <a href="https://github.com/srushti2926/AudioScan">
            <motion.div
              whileHover={{ scale: 1.1, borderRadius: "10%" }}
              whileTap={{ scale: 0.8 }}
              className="circle-1"
            ><h3>Projects</h3></motion.div>
            </a>
            </div>
            <button type="button" className="button" style={{all:'unset'}} onClick={() => setOpen(o => !o)}>
            <motion.div
              whileHover={{ scale: 1.1, borderRadius: "10%" }}
              whileTap={{ scale: 0.8 }}
              className="circle-1"
            ><h3>About Me</h3></motion.div>
            </button>
          </motion.div>
        </div>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal"  style={{backgroundColor:'white',height:'10rem',width:'40rem',borderRadius:'5px' }}>
          <a className="close" onClick={closeModal} >
            &times;
          </a>
          <p style={{textAlign:'center'}}> Able to effectively 
self-manage during independent projects, as well as collaborate as part of a productive team.
Experienced and skillful Inbound Customer Service Agent providing high quality service to 
callers, working address and meet all needs. Proven track record of serving as an effective 
liaison between companies and their potential and current clients.
          </p>
        </div>
      </Popup>
      </div>
    </>
  );
};

export default Home;
