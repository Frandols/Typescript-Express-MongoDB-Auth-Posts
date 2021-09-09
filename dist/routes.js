"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validateSchema_1 = __importDefault(require("./middlewares/validateSchema"));
var validateToken_1 = __importDefault(require("./middlewares/validateToken"));
var post_controller_1 = require("./controllers/post.controller");
var user_controller_1 = require("./controllers/user.controller");
var user_schema_1 = require("./schemas/user.schema");
var post_schema_1 = require("./schemas/post.schema");
function default_1(app) {
    app.get('/api/', validateToken_1.default, user_controller_1.getUserHandler);
    app.post('/api/users', (0, validateSchema_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
    app.post('/api/tokens', (0, validateSchema_1.default)(user_schema_1.createUserTokenSchema), user_controller_1.createUserTokenHandler);
    app.post('/api/posts', [validateToken_1.default, (0, validateSchema_1.default)(post_schema_1.createPostSchema)], post_controller_1.createPostHandler);
    app.get('/api/users', user_controller_1.getUsersHandler);
    app.get('/api/posts', post_controller_1.getPostsHandler);
    app.get('/api/users/:id', user_controller_1.getUserHandler);
    app.get('/api/posts/:id', post_controller_1.getPostHandler);
}
exports.default = default_1;
