

import * as EventHandler$WonderEditor from "../../../../../../../../../../../ui/eventHandler/EventHandler.js";
import * as EmptyEventHandler$WonderEditor from "../../../../../../../../../../../ui/eventHandler/EmptyEventHandler.js";
import * as StateEngineService$WonderEditor from "../../../../../../../../../../../../service/state/engine/state/StateEngineService.js";
import * as PerspectiveCameraProjectionEngineService$WonderEditor from "../../../../../../../../../../../../service/state/engine/camera/PerspectiveCameraProjectionEngineService.js";

var handleSelfLogic = EmptyEventHandler$WonderEditor.EmptyEventHandler[0];

var setUndoValueToCopiedEngineStateForPromise = EmptyEventHandler$WonderEditor.EmptyEventHandler[2];

function setUndoValueToCopiedEngineState(param, perspectiveComponent, value) {
  return PerspectiveCameraProjectionEngineService$WonderEditor.setPerspectiveCameraFovy(value, perspectiveComponent, StateEngineService$WonderEditor.deepCopyForRestore(StateEngineService$WonderEditor.unsafeGetState(/* () */0)));
}

var CustomEventHandler = /* module */[
  /* handleSelfLogic */handleSelfLogic,
  /* setUndoValueToCopiedEngineStateForPromise */setUndoValueToCopiedEngineStateForPromise,
  /* setUndoValueToCopiedEngineState */setUndoValueToCopiedEngineState
];

var MakeEventHandler = EventHandler$WonderEditor.MakeEventHandler([
      handleSelfLogic,
      setUndoValueToCopiedEngineState,
      setUndoValueToCopiedEngineStateForPromise
    ]);

export {
  CustomEventHandler ,
  MakeEventHandler ,
  
}
/* MakeEventHandler Not a pure module */
