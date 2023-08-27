import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

export class Model {
    initModel = (scene) => {
        this.scene = scene

        const TARGET_Y = 0.3040000000000002
        const TARGET_X = 0.5520000000000005

        const group2 = new THREE.Group()
        group2.rotation.y = -Math.PI
        scene.add(group2)
        this.group2 = group2

        const group = new THREE.Group()
        group2.add(group)

        const geometry = new THREE.DodecahedronGeometry(1.8)
        const material = new THREE.MeshPhysicalMaterial({
            "color": 15198183,
            "roughness": 0.5,
            "metalness": 0.92,
            side: THREE.DoubleSide,

        })
        const dodecahedron = new THREE.Mesh(geometry, material)
        dodecahedron.receiveShadow = true
        dodecahedron.scale.set(0, 0, 0)
        group.add(dodecahedron)

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
            this.child.rotation.y = - Math.PI
            this.child.scale.set(0.0135, 0.0135, 0.0135)

            this.child.isGrow = false

            scene.add(this.model)
        }, (event) => {
            const current = event.loaded / 11216220
            dodecahedron.scale.set(current, current, current)
            group.rotation.y = current * TARGET_Y
            dodecahedron.rotation.x = current * TARGET_X
        }, error => {
            console.log(error)
        })
    }

    animate = () => {


        if (this.model) {
            if (this.group2) {
                this.group2.rotation.x -= 0.002
                this.group2.rotation.y += 0.002
            }

            this.model.rotation.x -= 0.002
            this.model.rotation.y += 0.002

            if (this.child.scale.x < 0.017) this.child.isGrow = true
            if (this.child.scale.x >= 0.01812691055238247) {
                this.child.isGrow = false
                this.scene.remove(this.group2)
                this.group2 = null
            }

            const scale = this.child.isGrow ? 1.0002 : 0.9998

            this.child.scale.x *= scale
            this.child.scale.y *= scale
            this.child.scale.z *= scale
        }

    }
}