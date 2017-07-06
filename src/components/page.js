import React, { PropTypes, Component } from 'react';

import Button from './button';

export default class Page extends Component {
    onBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }

    render(){
        const {  photos, fetching, error } = this.props;
        let getButton;
        if (photos.length === 0){
            getButton = <Button title="Get photo" onClick={::this.onBtnClick}/>;
        } else {
            getButton = '';
        }
        return (
            <div>
                <p>
                    {getButton}
                </p>
                <h3>
                    You have {photos.length} photos
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
                                <img src={entry.source}
                                     width="300"
                                     height="auto"
                                />
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