import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

export class Model {
    initModel = (scene) => {
        const assetsLoader = new GLTFLoader()

        assetsLoader.load("/assets/model3.glb", gltf => {
            this.model = gltf.scene
            console.log(this.model.children)

            this.model.traverse((obj) => {
                obj.castShadow = true
                obj.receiveShadow = true
            })

            this.model.children[0].material.metalness = 0.92

            // this.model.position.y = 0
            this.model.children[0].position.y = 0
            this.model.children[0].rotation.x = Math.PI
            this.model.children[0].rotation.y = - Math.PI


            scene.add(this.model)
        }, undefined, error => {
            console.log(error)
        })
    }

    animate = () => {

        if (this.model) {
            this.model.children[0].rotation.x -= 0.002
            this.model.children[0].rotation.y += 0.002
        }

    }
}