import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";
import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import playAudio from "Utils/PlayAudio/playAudio";

import style from "./home.module.scss";

import clickSound from "Assets/Sounds/ui/clickDown.m4a";
import selectSound from "Assets/Sounds/ui/select.m4a";

import lockerModel from "Assets/Models/locker.glb";

import base64ToArrayBuffer from "Utils/Base64ToArrayBuffer/Base64ToArrayBuffer";

import { gameConfigStore } from "State/gameCondigStore";



const MenuRenderer: solid.Component = () => {

    let containerRef: HTMLDivElement | undefined;
    let height = 0;
    let width = 0;

    const AA = gameConfigStore.ready && gameConfigStore.data.graphics.menu.antiAlias;

    let camera: THREE.PerspectiveCamera
    const clock = new THREE.Clock();
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: AA,
    });
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    let renderInterval: NodeJS.Timer;

    function init() {
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.physicallyCorrectLights = true;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.25;
        //renderer.shadowMap.enabled = true;

        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
        camera.position.set(0, 0.4, 0.3);
        camera.lookAt(0, 0, 0)
        scene.add(camera);


        if (containerRef) containerRef.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(0, 5, 10);
        directionalLight.lookAt(0, 0, 0);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        renderer.setSize(width, height);

        const loader = new GLTFLoader();
        loader.parseAsync(base64ToArrayBuffer(lockerModel), "").then((gltf) => {
            const data = gltf as unknown as GLTF;
            const model = data.scene;
            model.name = "Locker";
            model.traverse(obj => {
                obj.castShadow = true;
                obj.receiveShadow = true;
            });
            model.animations = data.animations;
            model
            scene.add(model);
        }).then(() => {
            startRender();
            window.addEventListener('pointermove', RendererpointerUpdate);
        });

    }

    function RendererpointerUpdate(e: PointerEvent) {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = - (e.clientY / window.innerHeight) * 2 + 1;

    }

    function render() {
        raycaster.setFromCamera(pointer, camera);
        renderer.render(scene, camera);

    }

    function startRender() {
        const interval = 1000 || gameConfigStore.ready && 1000 / gameConfigStore.data.graphics.menu.fps
        renderInterval = setInterval(render, interval || 1000 / 60);
    }

    function cleanUpRenderer() {
        clearInterval(renderInterval);
        window.removeEventListener("pointermove", RendererpointerUpdate)
    }


    solid.onMount(() => {
        if (!containerRef) return;
        height = containerRef.clientHeight;
        width = containerRef.clientWidth;
        init();
    })

    solid.onCleanup(cleanUpRenderer);

    return (
        <div class={style.home} ref={containerRef}>

        </div >
    )
}

export default MenuRenderer;