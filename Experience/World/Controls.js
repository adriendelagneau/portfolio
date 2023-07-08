import * as THREE from 'three'
import Experience from '../Experience'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GSAP from "gsap";

export default class Controls{
    constructor() {
        
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.resources = this.experience.resources
        this.camera = this.experience.camera
        this.sizes = this.experience.sizes
        this.camera = this.experience.camera.orthographicCamera
        this.room = this.experience.world.room.actualRoom;
        this.room1 = this.room.children[0]

        GSAP.registerPlugin(ScrollTrigger);

     
        this.setScollTrigger()
    }


    
    setScollTrigger() {
        ScrollTrigger.matchMedia({
           
            "(min-width: 969px": () => {

                // First margin
                this.firstMove = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.space-between-section1',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true
                    }
                })  

                this.firstMove
                    .to(this.room1.scale, {
                        x: 1,
                        y: 1,
                        z: 1
                  })
            },


            "(max-width: 969px": () => {

            },

        }) 
    }
   
    resize() {
     
    }

    update() {
     

    }
}