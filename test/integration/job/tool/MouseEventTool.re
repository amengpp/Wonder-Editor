/* open StateDataMainType;

   let setLastXY = HandleMouseEventMainService.setLastXY;

   let getIsDrag = HandleMouseEventMainService.getIsDrag;

   let setIsDrag = HandleMouseEventMainService.setIsDrag;

    */

let buildMouseEvent =
    (
      ~pageX=10,
      ~pageY=20,
      ~which=1,
      ~movementX=1,
      ~movementY=2,
      ~detail=Js.Nullable.undefined,
      ~wheelDelta=Js.Nullable.undefined,
      ~preventDefaultFunc=() => (),
      ~stopPropagationFunc=() => (),
      ~target={"tagName": "CANVAS"},
      (),
    ) => {
  "pageX": pageX,
  "pageY": pageY,
  "which": which,
  "movementX": movementX,
  "movementY": movementY,
  "detail": detail,
  "wheelDelta": wheelDelta,
  "preventDefault": preventDefaultFunc,
  "stopPropagation": stopPropagationFunc,
  "target": target,
};

let setPointerLocked = [%raw (param) => {|
 document.pointerLockElement = {};
  |}];

let setNotPointerLocked = [%raw
  (param) => {|
 document.pointerLockElement = undefined;
  |}
];

let prepareWithState =
    (
      ~sandbox,
      ~engineState,
      ~canvasWidth=0,
      ~canvasHeight=0,
      ~offsetLeft=1,
      ~offsetTop=2,
      ~offsetParent=Js.Nullable.undefined,
      ~setBrowserFunc=BrowserDetectToolEngine.setChrome,
      (),
    ) => {
  let canvasDom =
    EventTool.buildFakeCanvasWithSize(
      canvasWidth,
      canvasHeight,
      (offsetLeft, offsetTop, offsetParent),
    );

  let engineState =
    ViewToolEngine.setCanvas(
      canvasDom |> Obj.magic,
      StateEngineService.unsafeGetState(),
    )
    |> FakeGlToolEngine.setFakeGl(FakeGlToolEngine.buildFakeGl(~sandbox, ()));

  StateEngineService.setState(engineState) |> ignore;

  setBrowserFunc();
};

let prepareForPointerLock = sandbox => {
  open Sinon;

  let canvas =
    ViewEngineService.unsafeGetCanvas(StateEngineService.unsafeGetState())
    |> Obj.magic;
  let requestPointerLockStub = createEmptyStubWithJsObjSandbox(sandbox);
  canvas##requestPointerLock#=requestPointerLockStub;

  requestPointerLockStub;
};