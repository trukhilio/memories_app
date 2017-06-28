import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }
    render(){
        const { year, photos, fetching } = this.props;
        return (
            <div>
                <button onClick={::this.onYearBtnClick}>2017</button>{' '}
                <button onClick={::this.onYearBtnClick}>2016</button>{' '}
                <button onClick={::this.onYearBtnClick}>2015</button>{' '}
                <button onClick={::this.onYearBtnClick}>2014</button>
                <h3>
                    {year} year
                </h3>
                {
                    fetching ?
                        <p>
                            Downloading...
                        </p>
                        :
                        <p>
                            You have {photos.length} photos
                        </p>
                }

            </div>
        )
    }
}


Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
};