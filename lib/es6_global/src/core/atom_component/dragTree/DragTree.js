'use strict';

import * as Block                                 from "../../../../../../node_modules/bs-platform/lib/es6/block.js";
import * as Curry                                 from "../../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as React                                 from "react";
import * as ReasonReact                           from "../../../../../../node_modules/reason-react/lib/es6_global/src/reasonReact.js";
import * as Css$WonderEditor                      from "../../external/Css.js";
import * as DomHelper$WonderEditor                from "../../external/DomHelper.js";
import * as DragUtils$WonderEditor                from "./utils/DragUtils.js";
import * as ReactUtils$WonderEditor               from "../utils/ReactUtils.js";
import * as StateEditorService$WonderEditor       from "../../../service/state/editor/StateEditorService.js";
import * as CurrentSignEditorService$WonderEditor from "../../../service/state/editor/CurrentSignEditorService.js";

Css$WonderEditor.importCss("./css/dragTree.css");

function handleDragEnter(handleSign, _) {
  var match = Curry._1(handleSign, CurrentSignEditorService$WonderEditor.getCurrentSign(StateEditorService$WonderEditor.getState(/* () */0)));
  if (match !== 0) {
    return /* DragEnter */1;
  } else {
    return /* Nothing */0;
  }
}

function handleDragLeave(handleSign, $$event) {
  DomHelper$WonderEditor.stopPropagation($$event);
  var match = Curry._1(handleSign, CurrentSignEditorService$WonderEditor.getCurrentSign(StateEditorService$WonderEditor.getState(/* () */0)));
  if (match !== 0) {
    return /* DragLeave */2;
  } else {
    return /* Nothing */0;
  }
}

var handleDragOver = DomHelper$WonderEditor.preventDefault;

function handleDrop(uid, onDrop, $$event) {
  return Curry._1(onDrop, /* tuple */[
              uid,
              DragUtils$WonderEditor.getdragedUid($$event),
              CurrentSignEditorService$WonderEditor.getCurrentSign(StateEditorService$WonderEditor.getState(/* () */0))
            ]);
}

var Method = /* module */[
  /* handleDragEnter */handleDragEnter,
  /* handleDragLeave */handleDragLeave,
  /* handleDragOver */handleDragOver,
  /* handleDrop */handleDrop
];

var component = ReasonReact.reducerComponent("DragTree");

function reducer(action, state) {
  switch (action) {
    case 0 : 
        return /* NoUpdate */0;
    case 1 : 
        return /* Update */Block.__(0, [/* record */[/* style */ReactUtils$WonderEditor.addStyleProp("backgroundColor", "rgba(0,0,1,1.0)", state[/* style */0])]]);
    case 2 : 
        return /* Update */Block.__(0, [/* record */[/* style */ReactUtils$WonderEditor.addStyleProp("backgroundColor", "#c0c0c0", state[/* style */0])]]);
    
  }
}

function render(treeArrayData, rootUid, onDrop, handleSign, param) {
  var reduce = param[/* reduce */3];
  return React.createElement("article", {
              className: "wonder-drag-tree"
            }, treeArrayData, React.createElement("div", {
                  className: "wonder-disable-drag",
                  style: param[/* state */4][/* style */0],
                  onDragEnter: Curry._1(reduce, (function (param) {
                          return handleDragEnter(handleSign, param);
                        })),
                  onDragLeave: Curry._1(reduce, (function (param) {
                          return handleDragLeave(handleSign, param);
                        })),
                  onDragOver: handleDragOver,
                  onDrop: (function (param) {
                      return handleDrop(rootUid, onDrop, param);
                    })
                }));
}

function make(treeArrayData, rootUid, onDrop, handleSign, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (self) {
      return render(treeArrayData, rootUid, onDrop, handleSign, self);
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[/* style */{
                backgroundColor: "#c0c0c0"
              }];
    });
  newrecord[/* reducer */12] = reducer;
  return newrecord;
}

export {
  Method    ,
  component ,
  reducer   ,
  render    ,
  make      ,
  
}
/*  Not a pure module */