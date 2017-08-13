import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Button from '../button/index';
import Image from '../image/index';
import s from './styles.scss';

const srcLogo = require('../../picture/logo.png');

class Page extends Component {
    render(){
        const { photos, fetching, error, getPhotos, filterPhotos, buttonArr } = this.props;
        let getButton;
        let countPhotos;
        if (!photos.length){
            getButton =
                <div className={s.boxFlex}>
                    <Button
                        className={s.buttonPhoto}
                        title={
                            <div>
                                <h3 className={s.photoText}>
                                    Get Photos
                                </h3>
                                <Image className={s.photo} src={srcLogo}/>
                            </div>}
                            onClick={getPhotos}/>
                </div>;
            countPhotos = '';
        } else {
            getButton = '';
            countPhotos =
                <div className={s.boxCount}>
                    <h1 className={s.countText}>
                        ph
                    </h1>
                    <h3 className={s.count}>
                        {photos.length}
                    </h3>
                    <h1 className={s.countText}>
                        to
                    </h1>
                </div>
        }
        const photoframe =
            <div>
                {countPhotos}
                <div className={s.boxYear}>
                    {buttonArr.map((item, index) =>
                        <Button
                            className={s.yearButton}
                            key={index}
                            title={<span>{item}</span>}
                            onClick={e => {e.preventDefault();filterPhotos(item)}}/>)}
                </div>
                <div className={s.boxPhotos}>
                    {photos.map((entry, index) =>
                            <Image key={index} className={s.photosito} src={entry.source} />)}
                </div>

            </div>;
        return (
            <div className={s.boxMain}>
                {getButton}
                { error ? <p> Oops, download is failed... </p> : '' }
                { fetching ?
                    <div className={s.spinner}>
                        <div className={s.bounce1}></div>
                        <div className={s.bounce2}></div>
                        <div className={s.bounce3}></div>
                    </div>
                    : photoframe }
            </div>
        )
    }
}
export default withStyles(s)(Page)

Page.propTypes = {
    photos: PropTypes.array.isRequired,
    buttonArr: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    filterPhotos: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};