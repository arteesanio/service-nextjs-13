"use client"

import { Box, MapControls, OrbitControls, Plane, useGLTF, useTexture } from "@react-three/drei";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
// import { OBJLoader } from 'three-stdlib/loaders/OBJLoader';
// import { MTLLoader } from 'three-stdlib/loaders/MTLLoader';
import * as THREE from 'three';


const CameraSetup = () => {
    const { camera } = useThree()
    useEffect(() => {
        camera.position.set(0, 14, 25)
        camera.lookAt(0, 15, 0)
    }, [camera])
    return null
}

export const Character3DLanding = () => {
    return (
        <Canvas style={{ width: "90vw", left:"4%", height: "100vh" }} shadows 
          camera={{position: [3,6,3]}}
        > 
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate
              autoRotateSpeed={5}
             />
            <ambientLight intensity={0.25} />
            {/* <pointLight intensity={75} position={[1, 17, 5]} distance={100} castShadow /> */}
            <spotLight 
              intensity={75} 
              position={[0, 2, 5]} 
              distance={100} 
              angle={Math.PI / 6} 
              penumbra={0.5} 
              castShadow 
            />

<spotLight 
              intensity={75} 
              position={[0, 2, -5]} 
              distance={100} 
              angle={Math.PI / 6} 
              penumbra={0.5} 
              castShadow 
            />
            <group rotation={[0,0,Math.PI]}>
              <DVRBody />
            </group>
        </Canvas>
    )
}

export function DVRBody({path='./dvr/dvr.glb'}: any) {
  const asdscene:any = useGLTF(path)
  const biglandscape01 = asdscene.scene
  const screentTex = useTexture("/sectionspng/section(1).png")

  
  
  return (<>
  
    <Plane args={[5,4.2]} position={[0,0,-0.025]} rotation={[Math.PI,0,0]} >
      <meshStandardMaterial map={screentTex} />
    </Plane>
    <group scale={[0.1,0.1,0.1]} position={[0,0,0]}>
      <primitive object={biglandscape01} 
      />
    </group>
  </>)
}



// export function DVRBody({path='./dvr/dvr.glb'}: any) {
//   const asdscene:any = useGLTF(path)
//   const biglandscape01 = asdscene.scene
//   return (<>
//     <group scale={[1,1,1]} position={[0,0,0]}>
//       <primitive object={biglandscape01} children-0-material-wireframe={true} 
//         children-0-material-emissive={"#222222"} 
//         children-0-material-color={"#000000"} 
//       />
//     </group>
//   </>)
// }


export const DVR3DLanding = () => {
  return (<>
    <Character3DLanding />
  </>)
}

// export const DVR3DThing = () => {
//   const screentTex = useTexture("/img/0810.gif")

//   // Load the MTL file first, then the OBJ file
//   const materials = useLoader(MTLLoader, "/dvr/10111_DVR TiVo Player_v2_Iteration1-2.mtl")
//   const obj = useLoader(OBJLoader, "/dvr/10111_DVR TiVo Player_v2_Iteration1-2.obj", loader => {
//     materials.preload()
//     loader.setMaterials(materials)
//   })

//   return (
//     <>
//       <primitive object={obj} scale={[0.5, 0.5, 0.5]} />
//       <Plane args={[3,3]} position={[1,0,0]} rotation={[0,Math.PI/2,0]} >
//         <meshStandardMaterial map={screentTex} />
//       </Plane>
//     </>
//   )
// }
