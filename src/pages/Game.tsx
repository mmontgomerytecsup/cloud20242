import {Unity, useUnityContext} from "react-unity-webgl";

function Game() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/CloudBuild.loader.js",
        dataUrl: "/CloudBuild.data.unityweb",
        frameworkUrl: "/CloudBuild.framework.js.unityweb",
        codeUrl: "/CloudBuild.wasm.unityweb",
    });

    function handleActivateEnemies() {
        sendMessage("GameManager", "ActivateTestObject");
    }
    function handleDeActivateEnemies() {
        sendMessage("GameManager", "DeActivateTestObject");
    }


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


export default Game