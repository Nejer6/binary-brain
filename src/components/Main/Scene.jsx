import * as THREE from 'three';
import React, {useEffect, useRef} from 'react';
import {Model} from "@/models/Model";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
// import {WebGLRenderer} from "three";

const Scene = ({...props}) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas
        })

        renderer.shadowMap.enabled = true

        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0xffffff)

        const camera = new THREE.PerspectiveCamera(
            45,
            1,
            0.1,
            1000
        )
        camera.position.set(0, 0, 5.9)
        scene.add(camera)

        const orbit = new OrbitControls(camera, renderer.domElement)
        orbit.target.set(0, 0, 0)
        orbit.rotateSpeed = 0.1
        orbit.enableZoom = false
        orbit.enablePan = false
        orbit.update()

        const sunLight = new THREE.DirectionalLight(0x38BDF8, 3.5)
        sunLight.castShadow = true
        sunLight.position.set(10, 10, 20)
        sunLight.shadow.camera.far = 20
        // sunLight.shadow.mapSize.set(512, 512)
        sunLight.shadow.normalBias = 0.05
        scene.add(sunLight)

        // const sunHelper = new THREE.DirectionalLightHelper(sunLight)
        // scene.add(sunHelper)

        const blueLight = new THREE.DirectionalLight(0xFB923C, 3.5)
        blueLight.castShadow = true
        blueLight.position.set(-10, 10, 0)
        blueLight.shadow.camera.far = 20
        // blueLight.shadow.mapSize.set(512, 512)
        blueLight.shadow.normalBias = 0.05
        scene.add(blueLight)

        const ambientLight = new THREE.AmbientLight(0xffffff, 1)
        scene.add(ambientLight)

        const model = new Model()
        model.initModel(scene)

        const handleResize = () => {
            const parent = canvas.parentElement
            const width = parent.offsetWidth

            camera.updateProjectionMatrix()

            renderer.setSize(width, width)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        const animate = () => {
            model.animate()
            renderer.render(scene, camera)
        }
        renderer.setAnimationLoop(animate)

        return () => {
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
        }
    }, []);


    return (
        <div {...props}>
            <canvas ref={canvasRef} />
        </div>

    );
};

export default Scene;