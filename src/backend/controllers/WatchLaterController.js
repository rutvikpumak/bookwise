import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to User WatchLater are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting videos from user's watchLater.
 * send GET Request at /api/user/watchLater
 * */
export const getWatchLaterVideosHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    return new Response(200, {}, { watchLater: user.watchLater });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding videos to user's watchLater.
 * send POST Request at /api/user/watchLater
 * body contains {video}
 * */

export const addVideoToWatchLaterHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const { video } = JSON.parse(request.requestBody);
    if (user.watchLater.some((item) => item.id === video.id)) {
      return new Response(
        409,
        {},
        {
          errors: ["The video is already in your watchLater"],
        }
      );
    }
    user.watchLater.push(video);
    return new Response(201, {}, { watchLater: user.watchLater });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing videos from user's watchLater.
 * send DELETE Request at /api/user/watchLater/:videoId
 * */

export const removeVideoFromWatchLaterHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const videoId = request.params.videoId;
    const filteredWatchLater = user.watchLater.filter(
      (item) => item._id !== videoId
    );
    this.db.users.update({ watchLater: filteredWatchLater });
    return new Response(200, {}, { watchLater: filteredWatchLater });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing videos from user's watchLater.
 * send DELETE Request at /api/user/watchLater/all
 * */

export const clearWatchLaterHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    this.db.users.update({ watchLater: [] });
    return new Response(200, {}, { watchLater: [] });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
