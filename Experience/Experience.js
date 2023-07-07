import * as THREE from 'three'
import Camera from './Camera'
import Renderer from './Renderer'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import World from './World/World'

let instance = null

export default class Experience {
    constructor(canvas) {
     
        // Singleton
        if(instance)
        {
            return instance
        }
        instance = this

        this.canvas = canvas
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()


        // Resize event
        this.sizes.on('resize', () => {
            this.resize()
        })
        
        // Time tick event
        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {
        this.camera.resize()
        this.world.resize()
        this.renderer.resize()
    }

    update() {
        this.camera.update()
        this.world.update()
        this.renderer.update()   
    }
}