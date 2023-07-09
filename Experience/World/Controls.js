import Experience from '../Experience'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GSAP from "gsap";

export default class Controls {
    constructor() {

        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.resources = this.experience.resources
        this.camera = this.experience.camera
        this.sizes = this.experience.sizes
        this.camera = this.experience.camera.orthographicCamera
        this.room = this.experience.world.room.actualRoom;

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
                        invalidateOnRefresh: true,
                        //markers: true,
                    }
                })

                this.firstMove
                    .to(this.room.position, {
                        x: () => {
                            return this.sizes.width * 0.0014
                        }
                    }, "firstMove")
                    .to(this.room.scale, {
                        x: 0.4,
                        y: 0.4,
                        z: 0.4
                    }, "firstMove")

                // accueil section
                this.secondMove = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.section-accueil',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        markers: true,
                    }
                })
                this.secondMove

                this.secondMove
                    .to(this.room.rotation, {
                        y: () => {
                            return Math.PI / 8
                        }
                    }, "secondMove")
                    .to(this.room.scale, {
                        x: 0.45,
                        y: 0.45,
                        z: 0.45
                    }, "secondMove")

                // second margin
                this.thirdMove = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.space-between-section2',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        //markers: true,
                    }
                })

                this.thirdMove
                    .to(this.room.rotation, {
                        y: () => {
                            return 0
                        }
                    }, 'thirdMove')
                    .to(this.room.scale, {
                        x: 0.4,
                        y: 0.4,
                        z: 0.4
                    }, 'thirdMove')
                    .to(this.room.position, {
                        x: () => {
                            return this.sizes.width * 0.0005
                        },
                        y: () => {
                            return this.sizes.height * -0.0032
                        }
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