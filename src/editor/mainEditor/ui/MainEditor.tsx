import * as React from "react";
import Transform from "../transform/ui/Transform";
import SceneTree from "../sceneTree/ui/SceneTree";
import { resizeCanvas } from "../utils/canvasUtils";
import { start } from "../logic/view/MainView";
import Asset from "../asset/ui/Asset";

interface IProps {
    getSceneTreeData: Function;
    sceneTreeData: any;

    getImageFile:Function;
    assetFiles:any;
}

export default class MainEditor extends React.Component<IProps, any>{
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
        start();
        this.props.getSceneTreeData();

        resizeCanvas();
    }

    render() {
        /*        var names = ["A","B"];
                names.forEach(item => {
                    switch (item){
                        case getComponentName(A):this._fcks.push(<A></A>);break;
                        case getComponentName(B):this._fcks.push(<B name="wejhfjkwef"></B>);break;
                    }
                });*/
        var { getSceneTreeData, sceneTreeData } = this.props;
        var { getImageFile,assetFiles } = this.props;

        return (
            <div className="main-editor">
                <div className="vertical-direction">
                    <SceneTree getSceneTreeData={getSceneTreeData} sceneTreeData={sceneTreeData} />
                    <div className="canvas-parent">
                        <canvas id="webgl"></canvas>
                    </div>
                    <Transform/>

                </div>
                <div className="horizontal-direction">
                    <Asset getImageFile={getImageFile} assetFiles={assetFiles}/>
                </div>
            </div>
        )
    }
}