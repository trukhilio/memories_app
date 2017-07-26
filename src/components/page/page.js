import React, { PropTypes, Component } from 'react';

import Button from '../button/index';
import Image from '../image/index';

export default class Page extends Component {

    render(){
        const { photos, fetching, error, getPhotos, filterPhotos, buttonArr } = this.props;
        let getButton;
        let countPhotos;
        if (!photos.length){
            getButton = <Button title="Get photo" onClick={getPhotos}/>;
            countPhotos = '';
        } else {
            getButton = '';
            countPhotos = <h3>You have {photos.length} photos </h3>
        }
        const photoframe =
            <div>
                {countPhotos}
                {buttonArr.map((item, index) =>
                    <Button key={index} title={item} onClick={e => {e.preventDefault();filterPhotos(item)}}/>)}
                {photos.map((entry, index) =>
                    <div key={index}>
                        <Image src={entry.source} />
                    </div>)}
            </div>;
        return (
            <div>
                <p>
                    {getButton}
                </p>
                { error ? <p> Oops, download is failed... </p> : '' }
                { fetching ? <p> Downloading...</p> : photoframe }
            </div>
        )
    }
}


Page.propTypes = {
    photos: PropTypes.array.isRequired,
    buttonArr: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    filterPhotos: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};