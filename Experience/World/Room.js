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

        this.setModel()
    }

    setModel() {
     
        this.actualRoom.scale.set(0.5, 0.5, 0.5)
        this.actualRoom.children[0].scale.set(0,0,0)
        this.scene.add(this.actualRoom)

    }

    resize() {
     
    }

    update() {
       // this.mixer.update(this.time.delta * 0.0009);
    }
}