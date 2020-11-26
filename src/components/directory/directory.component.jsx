import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'tops',
                    imageUrl: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg',
                    id: 1
                },
                {
                    title: 'hats',
                    imageUrl: 'https://ae01.alicdn.com/kf/HTB1BCVaFv5TBuNjSspmq6yDRVXaV/LDSLYJR-Flower-print-Bucket-Hat-Fisherman-Hat-outdoor-travel-hat-Sun-Cap-Hats-for-Men-and.jpg_Q90.jpg_.webp',
                    id: 2
                },
                {
                    title: 'masks',
                    imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/CJS3YQOBEVANBJVSVPZKSWN5WY.jpeg',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://lovelifebefit.com/wp-content/uploads/2020/09/best-down-jackets-for-women-2021-1024x576.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/1584/8213/files/Wuxly_Movement_Social_Sharing_01_7df56edd-f2ec-49d7-b680-b60ec7353856.jpg?v=1605551684',
                    size: 'large',
                    id: 5
                },
            ]
        }
    }
    render() {
        return(
    <div className='directory-menu'>
            {this.state.sections.map(({title, imageUrl, id, size}) => (
                <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}/>
            ))}
    </div>
        )
    }
}
export default Directory;