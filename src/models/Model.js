import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

export class Model {
    initModel = (scene) => {
        const TARGET_Y = 0.3040000000000002
        const TARGET_X = 0.5520000000000005

        const group = new THREE.Group()
        group.rotation.y = 0
        scene.add(group)
        this.group = group

        const geometry = new THREE.DodecahedronGeometry(2)
        const material = new THREE.MeshLambertMaterial({
            color: 0x999999,
            side: THREE.DoubleSide
        })
        const dodecahedron = new THREE.Mesh(geometry, material)
        dodecahedron.receiveShadow = true
        dodecahedron.material.metalness = 0.92
        dodecahedron.rotation.x = 0
        dodecahedron.scale.set(0, 0, 0)
        group.add(dodecahedron)
        this.dodecahedron = dodecahedron

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
            this.child.scale.set(0.0155, 0.0155, 0.0155)

            this.child.isGrow = false

            scene.add(this.model)
        }, (event) => {
            console.log(event)
            console.log((event.loaded / 11216220) * 100 + '% loaded')
            const current = event.loaded / 11216220
            dodecahedron.scale.set(current, current, current)
            group.rotation.y = current * TARGET_Y
            dodecahedron.rotation.x = current * TARGET_X
        }, error => {
            console.log(error)
        })
    }

    animate = () => {
        this.dodecahedron.rotation.x -= 0.002
        this.group.rotation.y += 0.002
        // console.log(this.dodecahedron.rotation.x)
        // this.group.rotation.y += 0.002
        // console.log(this.group.rotation.y)
        if (this.model) {
            this.model.rotation.x -= 0.002
            this.model.rotation.y += 0.002
            // console.log(this.model.rotation)



            if (this.child.scale.x < 0.017) this.child.isGrow = true
            if (this.child.scale.x >= 0.01812691055238247) this.child.isGrow = false

            const scale = this.child.isGrow ? 1.0002 : 0.9998

            this.child.scale.x *= scale
            this.child.scale.y *= scale
            this.child.scale.z *= scale
        }

    }
}