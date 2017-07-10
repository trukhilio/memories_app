import React, { PropTypes, Component } from 'react';

import Button from './button';

export default class Page extends Component {
    onBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }

    buttonYears = () =>  {
        const getAllYears = this.props.photos.map((item) => Number(item.created_time.substring(0,4)));
        let result = Array.from(new Set(getAllYears));
        let buttonElem = result.map((item,index) => <Button key={index} title={item}/>);
        return buttonElem;
    };

    render(){
        const {  photos, fetching, error } = this.props;
        let getButton;
        let allPhotos;
        if (!photos.length){
            getButton = <Button title="Get photo" onClick={::this.onBtnClick}/>;
            allPhotos = '';
        } else {
            getButton = '';
            allPhotos = <h3>You have {photos.length} photos </h3>
        }
        const photoframe =
            <div>
                {allPhotos}
                {::this.buttonYears()}
                {photos.map((entry, index) =>
                <div key={index}>
                    <img src={entry.source}
                         width="300"
                         height="auto"
                    />
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
    getPhotos: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};