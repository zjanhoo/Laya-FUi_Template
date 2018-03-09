var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.view = fairygui.UIPackage.createObject("common", "GameScene").asCom;
        _this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        _this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
        _this.addChild(_this.view);
        return _this;
    }
    GameScene.getInstance = function () {
        if (this.instance == null)
            this.instance = new GameScene();
        return this.instance;
    };
    return GameScene;
}(fairygui.GComponent));
//# sourceMappingURL=GameScene.js.map