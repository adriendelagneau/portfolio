import * as THREE from 'three'
import Experience from "./Experience";

export default class Renderer{
    constructor() {
        
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera

        this.setRenderer()
    
    }

    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
    /*
        //this.renderer.toneMapping = THREE.CineonToneMapping;
        //this.renderer.toneMappingExposure = 0.5;
        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  */
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))      
    }

    update() {
        this.renderer.render(this.scene, this.camera.orthographicCamera)
    }
}