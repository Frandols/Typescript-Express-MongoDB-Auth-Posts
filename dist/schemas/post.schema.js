"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostSchema = void 0;
var yup_1 = require("yup");
exports.createPostSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        title: (0, yup_1.string)().required("Title is required"),
        body: (0, yup_1.string)()
            .required("Body is required")
            .min(15, "Body is too short - should be 15 chars minimum."),
    }),
});
