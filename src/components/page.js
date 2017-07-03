import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
    onBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }
    render(){
        const {  photos, fetching, error } = this.props;
        return (
            <div>
                <p>
                     <button onClick={::this.onBtnClick}>Get photo</button>
                </p>
                <h3>
                    You have [{photos.length}] photos
                </h3>
                { error ? <p> Oops, download is failed... </p> : '' }
                {
                    fetching ?
                        <p>
                            Downloading...
                        </p>
                        :
                        photos.map((entry, index) =>
                            <div key={index}>
                                <img src={entry.source} width={entry.width} height={entry.height}/>
                            </div>
                        )
                }

            </div>
        )
    }
}


Page.propTypes = {
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};