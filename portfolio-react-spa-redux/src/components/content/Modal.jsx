import React from 'react';
import { setLike } from '../../features/likeSlice.js';
import { useDispatch, useSelector } from 'react-redux';

export default function Modal({ project, onClose }) {
    const dispatch = useDispatch();
    const like = useSelector((state) => state.like.value);
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
            >
                <span className="close-btn" onClick={onClose}>✕</span>
                <h2>{project.title}</h2>
                <img src={project.img} alt={project.alt} />
                <p>{project.description}</p>
                <h3>
                    <button className="modal-like-button"
                            onClick={() => {dispatch(setLike())}}>❤쭈아요</button>
                </h3>
            </div>
        </div>
    );
}