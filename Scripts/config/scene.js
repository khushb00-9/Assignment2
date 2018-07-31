// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018
var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["INFORMATION"] = 1] = "INFORMATION";
        Scene[Scene["SETTING"] = 2] = "SETTING";
        Scene[Scene["PLAY"] = 3] = "PLAY";
        Scene[Scene["END"] = 4] = "END";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map