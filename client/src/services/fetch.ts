export class ResponseError extends Error {
    constructor(readonly response: Response, message?: string) {
        super(message);
    }
}

/**
 * Checks status and throws error if it is not within <200, 299>.
 *
 * @param {Response} response
 * @throws {ResponseError} if the response status is not between <200, 299>
 */
export const checkStatus = (response: Response): Response => {
    if (response.status >= 200 && response.status < 300 || response.status === 304) {
        return response;
    }
    throw new ResponseError(response, response.statusText);
};

export const isResponseError = (obj: any, status?: number): obj is ResponseError =>
    !!obj.response && (status === undefined || obj.response.status === status);

/**
 * Wrapps the 'isomorphic-fetch' implementation to throw error statuses as a throwable Error.
 *
 * @param {RequestInfo} url
 * @param {RequestInit} [init]
 * @returns {Promise<Response>}
 * @throws {ResponseError} if the response status is not between <200, 299>
 */
export const fetch = (url: any, init?: RequestInit): Promise<Response> => {
    /*let myHeaders = new Headers();
    myHeaders.append('X-Forwarded-User', '999');
    init = { ...init, headers: myHeaders };*/
    return window.fetch(url, { ...init, credentials: 'same-origin' }).then(checkStatus);
};

/**
 * Create post method stub for fetch request.
 *
 * @param {*} body
 * @returns {RequestInit}
 */
export const postMethod = (body: any): RequestInit => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
};

/**
 * Create patch method stub for fetch request.
 *
 * @param {*} body
 * @returns {RequestInit}
 */
export const patchMethod = (body?: any): RequestInit => {
    let requestInit: RequestInit = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    return requestInit;
};

/**
 * Create delete method stub for fetch request.
 *
 * @param {*} body
 * @returns {RequestInit}
 */
export const deleteMethod = (body: any): RequestInit => {
    return {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
};