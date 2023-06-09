/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/models/WawaOffice.glb
*/

import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from 'react';

export const FLOOR_HEIGHT = 1.0;
export const NB_FLOORS = 5;


export function Office(props) {
    const { nodes, materials } = useGLTF('./models/WawaOffice.glb')
    const ref = useRef();
    const tl = useRef();
    const thirdRef = useRef();
    const fourthRef = useRef();
    const secRef = useRef();
    const fifthRef = useRef();
    
    const scroll = useScroll();

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration());
    });

    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        // VERTICAL ANIMATION and ALL GROUPS CAMERA MOVEMENT ANIMATION
        tl.current.to(
            ref.current.position,
            {
                duration: 2,
                y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
            },
            0
        );
        tl.current.to(
            ref.current.position,
            {
                duration: 0.38,
                //DIRECTION
                x: +1,
            },
            0.38
        );
        tl.current.to(
            ref.current.rotation,
            {
                duration: 0.38,
                //DIRECTION
                y: Math.PI / -3,
            },
            1.08
        );
        tl.current.to(
            ref.current.position,
            {
                duration: 0.38,
                //DIRECTION
                x: -2,
            },
            1.26
        );
        tl.current.to(
            ref.current.position,
            {
                duration: 0.38,
                //DIRECTION
                z: 2,
            },
            1.38
        );


        // 2nd FLOOR ITEM
        tl.current.to(
            secRef.current.position,
            {
                duration: 0.38,
                        //DIRECTION
                x: -2.1, 
            },
            0.18
                        //Animation Trigger value (in seconds) above
        );

        // 3rd FLOOR ITEM
        tl.current.to(
            thirdRef.current.position,
            {
                duration: 0.38,
                //DIRECTION
                x: +0.85,
            },
            0.38
        );


        // 4th FLOOR ITEM
        tl.current.to(
            fourthRef.current.position,
            {
                duration: 0.38,
                //DIRECTION
                x: +0.85,
            },
            0.78
        );



        // 5th FLOOR ITEM
        tl.current.to(
            fifthRef.current.position,
            {
                duration: 0.38,
                //DIRECTION
                y: -1,
            },
            0.98
        );
        tl.current.to(
            fifthRef.current.position,
            {
                duration: 0.38,
                //DIRECTION
                z: Math.PI / 2,
            },
            1.2
        );

    }, []);

    // fifth original position: x -2.28 rotation 0, 1.57, 0
    return (
        <group {...props} dispose={null} ref={ref}
            position={[0.0, 0, 0]}
                rotation={[0, Math.PI / 5, 0]}>

              

                    <group position={[-0.1, -0.1, -0.1]}>
                        <mesh geometry={nodes['01_block_1'].geometry} material={materials.paintingDiffA} />
                        <mesh geometry={nodes['01_block_2'].geometry} material={materials.frame} />
                        <mesh geometry={nodes['01_block_3'].geometry} material={materials.mat} />
                        <mesh geometry={nodes['01_block_4'].geometry} material={materials.Books} />
                        <mesh geometry={nodes['01_block_5'].geometry} material={materials.woodFloorDown} />
                        <mesh geometry={nodes['01_block_6'].geometry} material={materials['5Bt']} />
                    </group>
                    <group position={[2.0, 2.04, -2.28]}>
                        <group ref={secRef}>
                        <mesh geometry={nodes['02_block_1'].geometry} material={materials.paintingDiff} />
                        <mesh geometry={nodes['02_block_2'].geometry} material={materials['17 brushed iron']} />
                        <mesh geometry={nodes['02_block_3'].geometry} material={materials.RLogo} />
                        <mesh geometry={nodes['02_block_4'].geometry} material={materials['2Bt']} />
                        </group>
                        </group>
                    <group position={[-3.84, 5.19, -2.28]} rotation={[0, 1.57, 0]}>
                        <group ref={fifthRef}>
                        <mesh geometry={nodes['03_block_1'].geometry} material={materials.matUp} />
                        <mesh geometry={nodes['03_block_2'].geometry} material={materials.woodFloorUp} />
                        <mesh geometry={nodes['03_block_3'].geometry} material={materials.outFrame} />
                        <mesh geometry={nodes['03_block_4'].geometry} material={materials.painting} />
                        <mesh geometry={nodes['03_block_5'].geometry} material={materials['4Bt']} />
                        <mesh geometry={nodes['03_block_6'].geometry} material={materials.paintingDiffB} />
                        <mesh geometry={nodes['03_block_7'].geometry} material={materials.mangas} />
                        </group>
                        </group>
                    <group position={[-2.42, 3.11, -1.09]}>
                        <group ref={thirdRef}>
                    <mesh geometry={nodes['02_block002'].geometry} material={materials['1Bt']}  />
                        </group>
                        </group>
                    <group position={[-2.42, 3.73, -1.09]}>
                        <group ref={fourthRef}>
                    <mesh geometry={nodes['02_block003'].geometry} material={materials['3Bt']} />
                        </group>
                        </group>
            

        </group> 
    )
}

useGLTF.preload('./models/WawaOffice.glb')
