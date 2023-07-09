import * as THREE from 'three'
import Experience from '../Experience'


export default class Room {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.time = this.experience.time;
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera
        this.resources = this.experience.resources

        this.room = this.resources.items.room
        this.actualRoom = this.room.scene

        this.baked1 = this.resources.items.roomTexture

        this.setTextures()
        this.setModel()
    }

    setTextures() {
        this.baked1.flipY = false
        this.bakeMaterial = new THREE.MeshBasicMaterial({ map: this.baked1 })

        this.actualRoom.traverse((child) => {
            child.material = this.bakeMaterial
        })

    }

    setModel() {
        this.actualRoom.scale.set(0.5, 0.5, 0.5)
        this.scene.add(this.actualRoom)
    }

    resize() {

    }

    update() {
        // this.mixer.update(this.time.delta * 0.0009);
    }
}