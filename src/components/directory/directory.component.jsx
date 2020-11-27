import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.pinimg.com/originals/22/b0/65/22b0653347a96bc4e6b7b50e8480f492.jpg',
                    id: 1,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.pinimg.com/originals/4d/88/85/4d8885f440b275c64305a10db701ec6c.jpg',
                    id: 2,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.pinimg.com/originals/a2/18/c2/a218c2779d582d14b11b3d29ae2360ae.jpg',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://lovelifebefit.com/wp-content/uploads/2020/09/best-down-jackets-for-women-2021-1024x576.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/1584/8213/files/Wuxly_Movement_Social_Sharing_01_7df56edd-f2ec-49d7-b680-b60ec7353856.jpg?v=1605551684',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                },
            ]
        }
    }
    render() {
        return(
    <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps}) => (    //because id !== {id} we don't include id
            <MenuItem key={id} {...otherSectionProps}/>
        ))}
    </div>
        )
    }
}
export default Directory;