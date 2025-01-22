const response = (res, message = "", data, code, success) => {
    return res.status(code).json({success, message, data});
}

const successResponse = (res, data, message = "") => {
    return response(res, message, data, 200, true);
}

const errorResponse = (res, message = "", code) => {
    return response(res, message, {}, code ?? 500, false);
}

export {successResponse, errorResponse};