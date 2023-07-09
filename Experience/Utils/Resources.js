import * as THREE from 'three'
import { EventEmitter } from "events"
import Experience from "../Experience"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


export default class Resources extends EventEmitter {
    constructor(assets) {
        super()

        this.experience = new Experience()
        this.renderer = this.experience.renderer

        this.assets = assets

        this.items = {}
        this.queue = this.assets.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders() {
        this.loaders = {}

        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
    }

    startLoading() {
        for (const asset of this.assets) {
            if (asset.type === "glbModel") {
                this.loaders.gltfLoader.load(asset.path, (file) => {
                    this.singleAssetLoader(asset, file);
                })
            } else if (asset.type === 'texture') {
                this.loaders.textureLoader.load(
                    asset.path,
                    (file) => {
                        this.singleAssetLoader(asset, file)
                    }
                )
            }
        }
    }

    singleAssetLoader(asset, file) {
        this.items[asset.name] = file
        this.loaded++

        if (this.loaded === this.queue) {
            this.emit("ready")
        }
    }
}