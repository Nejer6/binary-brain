import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

export class Model {
    initModel = (scene) => {
        const assetsLoader = new GLTFLoader()

        assetsLoader.load("/assets/model3.glb", gltf => {
            this.model = gltf.scene

            this.model.traverse((obj) => {
                obj.castShadow = true
                obj.receiveShadow = true
            })

            this.child = this.model.children[0]

            this.child.material.metalness = 0.92

            this.child.position.y = 0
            this.child.rotation.x = Math.PI
            this.child.rotation.y = - Math.PI

            this.child.isGrow = false

            scene.add(this.model)
        }, undefined, error => {
            console.log(error)
        })
    }

    animate = () => {

        if (this.model) {
            this.child.rotation.x -= 0.002
            this.child.rotation.y += 0.002

            if (this.child.scale.x < 0.017) this.child.isGrow = true
            if (this.child.scale.x >= 0.01812691055238247) this.child.isGrow = false

            const scale = this.child.isGrow ? 1.0002 : 0.9998

            this.child.scale.x *= scale
            this.child.scale.y *= scale
            this.child.scale.z *= scale
        }

    }
}