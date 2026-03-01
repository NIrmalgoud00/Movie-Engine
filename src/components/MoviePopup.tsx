import React from 'react'
import type { Movie } from "../types";
const MoviePopup: React.FC<{ show: boolean; onClose: () => void; movie: Movie; }> = ({ show, movie }) => {
    if (!show || !movie) return null;
    return (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
            {/* <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content rounded-4">
                
                </div>
            </div> */}
        </div>
    )
}

export default MoviePopup
