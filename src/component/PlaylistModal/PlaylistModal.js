import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useData } from "../../context/data/videoContext";
import {
  addVideoToPlaylist,
  createNewPlaylist,
  removeVideoFromPlaylist,
} from "../../services";
import { MiniLoader } from "../Loader/MiniLoader";
import "./PlaylistModal.css";

export function PlaylistModal() {
  const { modal, setModal, dispatch, playlist, modalData } = useData();
  const [showInput, setShowInput] = useState(false);
  const { token } = useAuth();
  const [playlistName, setPlaylistName] = useState("");
  const [miniLoader, setMiniLoader] = useState(false);

  const createHandler = (e) => {
    setShowInput(true);
    playlistName &&
      createNewPlaylist(dispatch, playlistName, token, setShowInput);
    setPlaylistName("");
  };
  return (
    <div
      className={`modal-wrapper flex-center ${
        modal ? "display-flex" : "display-none"
      }`}
    >
      <div className="modal">
        <div className="modal-header">
          <h4>Save to</h4>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => setModal(!modal)}
          />
        </div>
        {miniLoader ? (
          <MiniLoader />
        ) : (
          playlist.length > 0 &&
          playlist.map((list) => {
            const isInPlaylist = list.videos?.some(
              (list) => list._id === modalData._id
            );
            return (
              <div className="modal-header" key={list._id}>
                <label className="select-input">
                  <input
                    type="checkbox"
                    name="light"
                    className="checkbox-input"
                    checked={isInPlaylist}
                    onChange={(e) =>
                      e.target.checked
                        ? addVideoToPlaylist(
                            dispatch,
                            list._id,
                            modalData,
                            token,
                            setMiniLoader
                          )
                        : removeVideoFromPlaylist(
                            dispatch,
                            list._id,
                            modalData._id,
                            token,
                            setMiniLoader
                          )
                    }
                  />
                  <span className="select-input-text">{list.title}</span>
                </label>
              </div>
            );
          })
        )}
        <div
          className={`modal-input ${
            showInput ? "display-flex" : "display-none"
          }`}
        >
          <label htmlFor="mail">Name :</label>
          <input
            className="text-input"
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
        </div>
        <div className="modal-footer" onClick={() => createHandler()}>
          <button className="btn secondary">Create New Playlist</button>
        </div>
      </div>
    </div>
  );
}
