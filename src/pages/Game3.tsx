//import React, {useCallback, useEffect } from "react";
import {Unity, useUnityContext} from "react-unity-webgl";

function Game3() {
    const { unityProvider, sendMessage} = useUnityContext({
        loaderUrl: "/CloudBuild.loader.js",
        dataUrl: "/CloudBuild.data.unityweb",
        frameworkUrl: "/CloudBuild.framework.js.unityweb",
        codeUrl: "/CloudBuild.wasm.unityweb",
    }); 
    
    
    //const handleGameOver = useCallback((_userName: String, _score: number) => {
        //setIsGameOver(true);
        //setUserName(userName);
        //setScore(score);
     // }, []);


      //useEffect(() => {
        //addEventListener("GameOver", handleGameOver);
       // return () => {
         // removeEventListener("GameOver", handleGameOver);
      //  };
     // }, [addEventListener, removeEventListener, handleGameOver]);


    function handleActivateEnemies() {
        sendMessage("GameManager", "ActivateTestObject");
    }
    function handleDeActivateEnemies() {
        sendMessage("GameManager", "DeActivateTestObject");
    }


  //const [isGameOver, setIsGameOver] = useState(false);
  //const [userName, setUserName] = useState(String);
  //const [score, setScore] = useState(Number);





    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                    

                    <div className="centered-content">
                        <button onClick={handleActivateEnemies}>Activate</button>
                        <button onClick={handleDeActivateEnemies}>DeActivate</button>
                    </div>

                </div>
            </div>

        </>
    );
}
export default Game3