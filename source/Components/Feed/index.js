// Core
import React, {Component} from 'react';

// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';

//Instruments
import Styles from './styles.m.css';
import avatar from 'theme/assets/Parrot';

// console.log(Styles);

export default class Feed extends Component{
    render (){
        const {avatar, currentUserFirstName,currentUserLastName} = this.props;
        return (
            <section className = {Styles.feed}>
               <StatusBar {...this.props}/>
               <Composer 
                    avatar = {avatar} 
                    currentUserFirstName = {currentUserFirstName}

                />
               <Post {...this.props}/>
            </section>
        )
    }
}