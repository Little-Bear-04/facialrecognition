import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f2 white">
                { 'The magic bear can detect faces in your pictures! Have a go!' }
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange}/>
                    <button 
                    className="w-30 grow f4 link ph2 pv2 dib white bg-light-purple"
                    onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;