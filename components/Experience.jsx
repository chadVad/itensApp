import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
    return (
        <>
            <ScrollControls pages={5} damping={0.25}>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
               <Overlay />
                <Office />
            
            </ScrollControls>
            
                
            
            
        </>
    ); 
};
/* <ScrollControls pages={5} damping={0.25}>
</ScrollControls> */