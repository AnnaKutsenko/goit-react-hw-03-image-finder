import React, { Component } from 'react';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };
    
    toogleModal = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }))
    };

    render() {
        const { image } = this.props;
        const { showModal } = this.state;
        

        return (
            <>
                <GalleryItem onClick={this.toogleModal}>
                    <GalleryImg src={image.webformatURL} alt={image.tags} />
                </GalleryItem>
                {showModal && <Modal image={image} onClose={this.toogleModal} />}
            </>
        );
    }
}
